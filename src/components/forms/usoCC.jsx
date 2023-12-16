'use client';
import * as image from '@/components/images';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAbastecimento } from '@/contexts/AbastecimentoContext';
import CardService from './cardService';
import InputMask from 'react-input-mask';
export default function UsoCC() {
    const router = useRouter();

    const goToPagamento = (event) => {
    event.preventDefault();
    router.push('/abastecimento/pagamento');
    }
    const CPF_REGEX = /^\d{11}$/;
    const {CCTotal, setCCTotal, services, loadServices, getCpf} = useAbastecimento(); 
    const [cpf, setCpf] = useState("");
    const [cpfValido, setCpfValido] = useState(false);
    const [clientName, setClientName] = useState("");


    const handleCardClick = (cardValue) => {
        const numericCardValue = parseFloat(cardValue);
        const numericCCTotal = parseFloat(CCTotal);
      
        if (numericCCTotal < Math.abs(numericCardValue)) {
          alert('Saldo insuficiente para realizar esta operação');
          return;
        }
      
        setCCTotal(prevCCTotal => parseFloat(prevCCTotal) + numericCardValue);
    };

    function validateCpf(cpf) {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return cpfRegex.test(cpf);
    }
      
    
    useEffect(() => {
        loadServices();
        getCpf();
    }, []);

    return (
        <>
            <main className='w-[85%] mx-auto h-auto mt-12 mb-[20rem] hidden md:flex md:flex-col'>
                <div className='text-center font-semibold'>
                    <p className='text-3xl m-6'>Utilize seus créditos para resgatar produtos especiais</p>
                    <p className='text-2xl m-6'>resgate itens da nossa conveniência, serviços e facilidades</p>
                </div>
                <div id='dados' className='flex my-[3rem] gap-x-[3rem]'>
                    <label htmlFor="cpf">CPF do cliente:</label>

                    <InputMask mask="999.999.999-99" id='cpf' value={cpf} onChange={async e => {
                        setCpf(e.target.value);
                        setCpfValido(validateCpf(e.target.value));
                        // setClientName(clientName));
                        const clientData = await getCpf(e.target.value);
                        if (clientData) {
                            setClientName(clientData.nome);
                        } else {
                            console.log("Cliente não encontrado");
                        }
                        }} className='max-w-[12rem] border-gray-800 bg-white rounded-lg border-2 border-opacity-10 shadow-xl drop-shadow-xl'>
                        {(inputProps) => <input {...inputProps} type="text" />}
                    </InputMask>
                    {cpf && clientName && (cpfValido ? <p className='text-green-600'>CPF válido</p> : <p className='text-red-600'>CPF inválido</p>)}
                </div>
                <div className='flex justify-between text-xl font-semibold items-center'>
                {cpf === "" ? <p>Cliente não encontrado</p> : <p>{clientName}</p>}
                    <div className='flex justify-between items-center gap-x-4'>
                        <image.GasifyLogo/>
                        <p>Saldo total: {CCTotal}CC</p>
                    </div>
                </div>

                <div id='cardsCC' className='flex justify-around m-[5rem] flex-wrap space-y-10'>
                    {services && services.map(service => <CardService service={service} key={service.id} onCardClick={(cardValue) => handleCardClick(cardValue, service.id)} />)}
                </div>

                <button type="submit" onClick={goToPagamento} className="w-full transition-all bg-[--gasify-verde-claro] mt-8 rounded-lg text-white font-semibold h-16 hover:bg-[--gasify-verde]">Ir ao pagamento</button>
                
            </main>
        </>
    );
}
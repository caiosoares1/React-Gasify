'use client';
import * as image from '@/components/images';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAbastecimento } from '@/contexts/AbastecimentoContext';
import CardService from './cardService';
export default function UsoCC() {
    const router = useRouter();

    const goToPagamento = (event) => {
    event.preventDefault();
    router.push('/abastecimento/pagamento');
    }
    const {CCTotal, setCCTotal, services, loadServices, getCpf} = useAbastecimento(); 
    const [cpf, setCpf] = useState("");
    const [cpfValido, setCpfValido] = useState(false);
    const [clientName, setClientName] = useState("");

    const [cpfExists, setCpfExists] = useState(false);

    function formatCpf(value) {
        return value
          .replace(/\D/g, '') // remove qualquer caracter que não seja número
          .replace(/(\d{3})(\d)/, '$1.$2') // adiciona um ponto depois do terceiro dígito
          .replace(/(\d{3})(\d)/, '$1.$2') // adiciona um ponto depois do sexto dígito
          .replace(/(\d{3})(\d{1,2})/, '$1-$2') // adiciona um traço depois do nono dígito
          .substring(0, 14); // limita o valor a 14 caracteres
      }

    async function handleCpfChange(e) {
        const cpf = formatCpf(e.target.value);
        setCpf(cpf); // Atualize o estado cpf com o valor do input
      
        const cpfRegex = /^(\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2})$/;
      
        if (cpfRegex.test(cpf)) {
          setCpfValido(true);
      
          const clientData = await getCpf(cpf);
          if (clientData) {
            setCpfExists(true);
            setClientName(clientData.nome);
          } else {
            setCpfExists(false);
          }
        } else {
          setCpfValido(false);
        }
      }

    const handleCardClick = (cardValue) => {
        const numericCardValue = parseFloat(cardValue);
        const numericCCTotal = parseFloat(CCTotal);
      
        if (numericCCTotal < Math.abs(numericCardValue)) {
          alert('Saldo insuficiente para realizar esta operação');
          return;
        }
      
        setCCTotal(prevCCTotal => parseFloat((parseFloat(prevCCTotal) + numericCardValue).toFixed(2)));
    };
    
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
                    <label htmlFor="cpf" className='font-semibold'>CPF do cliente:</label>
                    <input type="text" value={cpf} className='max-w-[12rem] border-gray-800 bg-white rounded-lg border-4 border-opacity-10 px-4 shadow-xl drop-shadow-xl' onChange={handleCpfChange} />
                    {cpf && cpfValido && cpfExists ? <p className='text-green-600'>CPF válido</p> : <p className='text-red-600'>CPF inválido</p>}
                </div>
                <div className='flex justify-between text-xl font-semibold items-center'>
                {cpf && clientName ? <p>{clientName}</p> : <p>Cliente não encontrado</p>}
                    <div className='flex justify-between items-center '>
                        <image.GasifyLogo className='mr-4'/>
                        <span>Saldo total: {CCTotal}</span><span className='ml-2'>CC</span>
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
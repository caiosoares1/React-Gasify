'use client';
import * as image from '@/components/images';
import { useEffect, useState } from 'react';
import { useAbastecimento } from '@/contexts/AbastecimentoContext';
import { useRouter } from 'next/navigation';

export default function Pagamento() {
    const [card1Clicked, setCard1Clicked] = useState(false);
    const [card2Clicked, setCard2Clicked] = useState(false);
    const [card3Clicked, setCard3Clicked] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);
    const [cliente, setCliente] = useState(null);
    const [funcionario, setFuncionario] = useState(null);
    const [cpf, setCpf] = useState('');

    const router = useRouter();
    
    const { valorTotal, CCTotal, criarAtendimento, getCpf, getFuncionario, nomeFuncionario, setCCTotal, setValorTotal } = useAbastecimento();
    const NewAtendimento = async (event) => {
        event.preventDefault();
        // const dadosCliente = await getCpf(cpf);
        // const dadosFuncionario = await getFuncionario(funcionario)
        // setCliente(dadosCliente);
        // setFuncionario(dadosFuncionario);
        // criarAtendimento(cliente, funcionario);
        setModalAberto(false);
        setCCTotal(0);
        setValorTotal(0);
        router.push('/abastecimento/escolhaproduto');
    }

    const handleCard1Click = () => {
        setCard1Clicked(!card1Clicked);
    }
    const handleCard2Click = () => {
        setCard2Clicked(!card2Clicked);
    }
    const handleCard3Click = () => {
        setCard3Clicked(!card3Clicked);
    }

    const abrirModal = async () => {
        const dadosCliente = await getCpf(cpf);
        const dadosFuncionario = await getFuncionario(funcionario)
        setCliente(dadosCliente);
        setFuncionario(dadosFuncionario);
        // criarAtendimento(cliente, funcionario);
        setModalAberto(true);
    }
    const fecharModal = () => {
        setModalAberto(false);
    };

    useEffect(() => {
        getFuncionario(funcionario);
    }, [funcionario]);
    return (
        <>
            <main className='w-[85%] mx-auto h-auto mt-12 mb-[20rem] hidden md:flex md:flex-col'>
                <div id="saldo-cards" className="flex justify-around space-x-8 mx-4 mt-8">
                    <div className="shadow-md w-[50%] p-4 space-y-2 rounded-lg flex flex-col justify-around">
                        <p className="text-[--gasify-verde] font-bold text-center text-4xl" id="total">
                            {valorTotal ? "R$ " + valorTotal : "R$ 0,00"}
                        </p>
                        <p className="text-[--gasify-preto-claro] text-center text-xl font-semibold">
                            Valor a pagar
                        </p>
                    </div>

                    <div className="shadow-md w-[50%] p-4 space-y-2 rounded-lg">
                        <p className="flex justify-center items-center text-[--gasify-verde] font-bold text-center text-4xl" id="total-cc">
                            <image.GasifyLogo /><span id="total-cc-text" className="ml-2">{CCTotal ? CCTotal : 0}
                                CC</span>
                        </p>
                        <p className="text-[--gasify-preto-claro] text-center text-xl font-semibold">
                            Saldo total de Carbon Cash
                        </p>
                    </div>
                </div>
                <div className='my-[8rem] text-3xl font-semibold text-center'>Formas de Pagamento</div>
                <div id='cardsPagamento' className='flex justify-around flex-wrap space-y-10 mb-[10rem]'>
                    <div id='cardOpcao' className={`flex flex-col mx-10 mt-10 space-y-4 w-[20rem] h-[320px] rounded-xl border-2 shadow-xl ${card1Clicked ? 'cardClicked bg-green-600' : 'card'}`} onClick={handleCard1Click}>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10 content-center'>
                            <image.Money className='w-auto m-auto max-w-[6rem] mt-4' />
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-xl font-medium text-center'>Dinheiro</p>
                        </div>
                    </div>
                    <div id='cardOpcao' className={`flex flex-col mx-10 mt-10 space-y-4 w-[20rem] h-[320px] rounded-xl border-2 shadow-xl ${card2Clicked ? 'cardClicked bg-green-600' : 'card'}`} onClick={handleCard2Click}>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10 content-center'>
                            <image.Pix className='w-auto m-auto max-w-[6rem] mt-2' />
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-xl font-medium text-center'>Pix</p>
                        </div>
                    </div>
                    <div id='cardOpcao' className={`flex flex-col mx-10 mt-10 space-y-4 w-[20rem] h-[320px] rounded-xl border-2 shadow-xl ${card3Clicked ? 'cardClicked bg-green-600' : 'card'}`} onClick={handleCard3Click}>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10 content-center'>
                            <image.CartaoCredito className='w-auto m-auto max-w-[6rem] mt-2' />
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-xl font-medium text-center'>Débito ou Crédito</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" onClick={abrirModal} className="w-full transition-all bg-[--gasify-verde-claro] mt-8 rounded-lg text-white font-semibold h-16 hover:bg-[--gasify-verde]">Ir ao pagamento</button>

                    {modalAberto &&  (
                        <div className="modal absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 w-[100vw] h-[150rem]">
                            <div className='bg-white rounded-[20px] shadow w-[70rem] h-[45rem]'>
                                <h2 className='text-3xl font-semibold text-center m-10'>Venda Realizada com Sucesso!</h2>
                                <div className='justify text-center'>
                                    <p className='font-semibold text-xl m-8'>Atendimento realizado no dia {new Date().toLocaleDateString()}</p>
                                    <span className='flex justify-center font-semibold text-xl m-8'>Frentista Responsável: {nomeFuncionario? <p className="text-[--gasify-preto-claro] text-center">{nomeFuncionario}</p> : <p className="mx-2 text-[--gasify-preto-claro] font-normal">Funcionário</p>}</span>
                                    <div className='flex justify-center m-8'>
                                        <p className='font-semibold text-xl'>Cliente: </p>
                                        <p className='font-normal text-xl mx-2'>{cliente.nome}</p>
                                    </div>
                                    <div className='flex justify-center m-8'>
                                        <p className='font-semibold text-xl'>Total Pago:</p>
                                        <p className='font-normal text-xl mx-2'>R$ {valorTotal}</p>
                                    </div>
                                    <div className='flex justify-center m-8'>
                                        <p className='font-semibold text-xl'>Carbon Cash Total:</p>
                                        <p className='font-normal text-xl mx-2'>{CCTotal} Carbon Cash</p>
                                    </div>
                                    
                                </div>
                                <div className='flex justify-center items-center'>
                                <button className='w-[30%] content-center m-auto
                                 transition-all bg-[--gasify-verde-claro] mt-8 rounded-lg text-white font-semibold h-16 hover:bg-[--gasify-verde]' onClick={fecharModal}>Fechar</button>
                                 <button className='w-[30%] content-center m-auto
                                 transition-all bg-[--gasify-verde-claro] mt-8 rounded-lg text-white font-semibold h-16 hover:bg-[--gasify-verde]' onClick={NewAtendimento}>Novo Atendimento</button>


                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}
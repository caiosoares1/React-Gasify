'use client';
import * as image from '@/components/images';
import { useAbastecimento } from '@/contexts/AbastecimentoContext';

export default function Pagamento() {
    const {valorTotal, CCTotal} = useAbastecimento();
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
                    <div id='cardOpcao' className='flex flex-col mx-10 mt-10 space-y-4 w-[20rem] h-[320px] rounded-xl border-2 shadow-xl'>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10 content-center'>
                            <image.Money className='w-auto m-auto max-w-[6rem] mt-4' />
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-xl font-medium text-center'>Dinheiro</p>
                        </div>
                    </div>
                    <div id='cardOpcao' className='flex flex-col mx-10 mt-10 space-y-4 w-[20rem] h-[320px] rounded-xl border-2 shadow-xl'>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10 content-center'>
                            <image.Pix className='w-auto m-auto max-w-[6rem] mt-2' />
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-xl font-medium text-center'>Pix</p>
                        </div>
                    </div>
                    <div id='cardOpcao' className='flex flex-col mx-10 mt-10 space-y-4 w-[20rem] h-[320px] rounded-xl border-2 shadow-xl'>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10 content-center'>
                            <image.CartaoCredito className='w-auto m-auto max-w-[6rem] mt-2' />
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-xl font-medium text-center'>Débito ou Crédito</p>
                        </div>
                    </div>
                </div>
                <button type="submit" className="w-full transition-all bg-[--gasify-verde-claro] mt-8 rounded-lg text-white font-semibold h-16 hover:bg-[--gasify-verde]">Ir ao pagamento</button>
            </main>
        </>
    )
}
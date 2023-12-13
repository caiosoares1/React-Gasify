'use client';
import * as image from '@/components/images';
import { useRouter } from 'next/navigation';
import { useAbastecimento } from '@/contexts/AbastecimentoContext';

export default function UsoCC() {
    const router = useRouter();

    const goToPagamento = (event) => {
    event.preventDefault();
    router.push('/abastecimento/pagamento');
  }
    const CPF_REGEX = /^\d{11}$/;
    const {CCTotal} = useAbastecimento();    
    return (
        <>
            <main className='w-[85%] mx-auto h-auto mt-12 mb-[20rem] hidden md:flex md:flex-col'>
                <div className='text-center font-semibold'>
                    <p className='text-3xl m-6'>Utilize seus créditos para resgatar produtos especiais</p>
                    <p className='text-2xl m-6'>resgate itens da nossa conveniência, serviços e facilidades</p>
                </div>
                <div id='dados' className='flex my-[3rem] gap-x-[3rem]'>
                    <label htmlFor="cpf">CPF do cliente:</label>
                    <input type="text" id='cpf' maxLength={11} pattern={CPF_REGEX} className='max-w-[12rem] border-gray-800 bg-white rounded-lg border-2 border-opacity-10 shadow-xl drop-shadow-xl'/>
                </div>
                <div className='flex justify-between text-xl font-semibold items-center'>
                    <p>Lorem Ipsum da Silva</p>
                    <div className='flex justify-between items-center gap-x-4'>
                        <image.GasifyLogo/>
                        <p>Saldo total: {CCTotal}CC</p>
                    </div>
                </div>

                <div id='cardsCC' className='flex justify-around m-[5rem] flex-wrap space-y-10'>
                    <div id='cardConveniencia' className='flex flex-col mx-10 mt-10 space-y-4 w-[20rem] h-[420px] rounded-xl border-2 shadow-xl'>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10 content-center'>
                            <image.Raio className='w-auto m-auto max-w-[6rem] mt-2'/>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-lg font-medium text-center'>Voucher Conta de Energia</p>
                            <div className='flex items-center justify-center gap-x-4 mb-[5rem]'>
                                <image.GasifyLogo className='mb-5'/>
                                <p className='text-lg font-medium mb-5'>CC</p>
                            </div>
                        </div>
                    </div>
                    <div id='cardConveniencia' className='flex flex-col mx-10 space-y-4 w-[20rem] h-[420px] rounded-xl border-2 shadow-xl'>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10 content-center'>
                            <image.Oleo className='w-auto m-auto max-w-[6rem] mt-2 '/>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-lg font-medium text-center'>Troca de Óleo</p>
                            <div className='flex items-center justify-center gap-x-4 mb-[5rem]'>
                                <image.GasifyLogo className='mb-5'/>
                                <p className='text-lg font-medium mb-5'>CC</p>
                            </div>
                        </div>
                    </div>
                    <div id='cardConveniencia' className='flex flex-col mx-10 space-y-4 w-[20rem] h-[420px] rounded-xl border-2 shadow-xl'>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10'>
                            <image.Lavagem className='w-auto m-auto max-w-[6rem] mt-2'/>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-lg font-medium text-center'>Lavagem de Veículo</p>
                            <div className='flex items-center justify-center gap-x-4 mb-[5rem]'>
                                <image.GasifyLogo className='mb-5'/>
                                <p className='text-lg font-medium mb-5'>CC</p>
                            </div>
                        </div>
                    </div>
                    <div id='cardConveniencia' className='flex flex-col mx-10 space-y-4 w-[20rem] h-[420px] rounded-xl border-2 shadow-xl'>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10'>
                            <image.CartaoCredito className='w-auto m-auto max-w-[6rem] mt-2'/>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-lg font-medium text-center'>Crédito em Nossa Conveniência</p>
                            <div className='flex items-center justify-center gap-x-4 mb-[5rem]'>
                                <image.GasifyLogo className='mb-5'/>
                                <p className='text-lg font-medium mb-5'>CC</p>
                            </div>
                        </div>
                    </div>
                    <div id='cardConveniencia' className='flex flex-col mx-10 space-y-4 w-[20rem] h-[420px] rounded-xl border-2 shadow-xl'>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10'>
                            <image.Pneus className='w-auto m-auto max-w-[6rem] mt-2'/>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-lg font-medium text-center'>Calibragem de Pneus</p>
                            <div className='flex items-center justify-center gap-x-4 mb-[5rem]'>
                                <image.GasifyLogo className='mb-5'/>
                                <p className='text-lg font-medium mb-5'>CC</p>
                            </div>
                        </div>
                    </div>
                    <div id='cardConveniencia' className='flex flex-col mx-10 space-y-4 w-[20rem] h-[420px] rounded-xl border-2 shadow-xl'>
                        <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10'>
                            <image.Doacao className='w-auto m-auto max-w-[6rem] mt-2'/>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <p className='text-lg font-medium text-center'>Doações para Instituições de Caridade</p>
                            <div className='flex items-center justify-center gap-x-4 mb-[5rem]'>
                                {/* <image.GasifyLogo className='mb-5'/> */}
                                <p className='text-sm font-medium text-center mb-5 p-6'>Seus crétidos são convertidos para doações às instituições que apoiamos!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" onClick={goToPagamento} className="w-full transition-all bg-[--gasify-verde-claro] mt-8 rounded-lg text-white font-semibold h-16 hover:bg-[--gasify-verde]">Ir ao pagamento</button>
                
            </main>
        </>
    )
}
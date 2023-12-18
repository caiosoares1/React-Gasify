'use client';
import * as image from '@/components/images'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAbastecimento } from '@/contexts/AbastecimentoContext';

export default function LoginComponent() {
    const { login, setNomeFuncionario, updateNomeFuncionario } = useAbastecimento();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = await login(email, password);
        if (user) {
            router.push('/abastecimento/escolhaproduto');
            console.log('Usuário logado com sucesso:', user);
        } else {
            console.log('Erro ao fazer login');
        }
        
    
    }
    return (
        <cfg className="h-[100vh] w-[100vw] bg-[--gasify-fundo] overscroll-none overflow-hidden">
        <header className="h-[10vh] w-[100vw] relative">
            <div className="flex justify-center md:justify-between items-start mx-auto mt-[75px] md:ml-[75px]">
                <div className="w-[250px] lg:w-auto flex justify-around  gap-x-5">
                    <image.GasifyLogo className="w-[5rem] 2xl:w-[9rem]"/>
                    <image.Gasify className="w-[10rem] 2xl:w-[14rem]"/>
                    <link rel="icon" href="./images/logoLS-no-bg.svg" type="image/x-icon" />
                </div>
                <image.FolhasVerdesCantoSuperior/>
            </div>
        </header>
        <div id="compatibility" className="md:hidden flex flex-col justify-center items-center text-center h-[70vh] my-auto">
            <image.Compatibility/>
            <p className="text-[--gasify-preto-claro] ml-2 font-bold font-2xl">
                Seu dispositivo não é compatível com o Gasify
            </p>
            <div className="flex justify-center items-center">
                <p className="text-[--gasify-preto-claro]">
                    Por favor, acesse o Gasify em um dispositivo com tela maior
                </p>
            </div>
        </div>
        <main className="hidden md:flex justify-around h-[90vh] w-[100vw] items-center">
            <div className="flex flex-col justify-center items-center gap-y-[25px] w-auto h-auto self-start mt-10 2xl:mt-28 mb-[50] ">
                <image.GarotoLogin/>
                    <h1 className="text-neutral-900 md:text-2xl 2xl:text-5xl font-semibold font-['Poppins'] gap-y-8 xl:text-4xl">Acesse sua conta!</h1>
                    <form id="form" onSubmit={handleLogin} className="bg-white rounded-[20px] shadow-2xl 2xl:w-auto 2xl:h-auto xl:w-[auto] xl:h-[auto] z-10">
                        <div className="flex flex-col p-10">
                            <div className="flex flex-col justify-center mt-5 gap-y-1">
                                <label htmlFor="email" className="text-gray-800 text-xl font-semibold font-['Poppins']">Email</label>
                                <input placeholder="fulano@email.com" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 border-black rounded-md p-6 xl:w-[500px] 2xl:w-[700px] h-[50px]" />
                            </div>
                            <div className="flex flex-col justify-center mt-5 content-start gap-y-1">
                                <label htmlFor="password" className="text-gray-800 text-xl font-semibold font-['Poppins']">Senha</label>
                                <input placeholder="12345678" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-2 border-black rounded-md p-6 xl:w-[500px] 2xl:w-[700px] h-[50px]" />
                            </div>
                            <div className="flex justify-end">
                                <a className=" text-zinc-700 text-base font-normal font-['Poppins'] p-6 pr-0 transition hover-[text-]" href="">Esqueci a senha</a>
                            </div>
                            <div className="flex flex-col justify-center items-center mt-5 mb-4">
                                <button type="submit" className="w-[251px] h-[52px] rounded-lg bg-[--gasify-verde-claro] text-white text-xl font-semibold font-['Poppins'] transition hover:bg-[--gasify-verde]">Login</button>
                            </div>
                        </div>
                    </form>
            </div>
        </main>
    </cfg>
    )
}
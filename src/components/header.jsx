'use client';
import * as image from '@/components/images';
import { useEffect, useState } from 'react';
import { useAbastecimento } from '@/contexts/AbastecimentoContext';
export default function Header(){

  const { nomeFuncionario } = useAbastecimento();

  useEffect(() => {
    console.log(nomeFuncionario);
    console.log();
  }, [nomeFuncionario]);

  return (
        <header className="bg-white content-center max-w-[100vw] flex rounded-3xl justify-between mx-12 mt-12 mb-6 p-4 shadow-md">
          <div id="gasify-logo" className="flex content-center items-center space-x-2">
            <image.GasifyLogo />
            <image.Gasify />
          </div>
          <div className="flex justify-between items-center">
            <image.LogoPosto />
            <p className="text-[--gasify-preto-claro] ml-8 hidden lg:flex lg:flex-col">
              Rede de Postos de Combustível Canaã
            </p>
          </div>
          <div className="flex justify-between items-center">
            <image.User />
            <div id="username" className="hidden lg:flex lg:flex-col">
              <p className="text-[--gasify-preto-claro] text-center">Bem-vindo</p>
              {nomeFuncionario? <p className="text-[--gasify-preto-claro] text-center">{nomeFuncionario}</p> : <p className="text-[--gasify-preto-claro] text-center">Funcionário</p>}
            </div>
            <image.Arrow />
          </div>
        </header>
  );
};

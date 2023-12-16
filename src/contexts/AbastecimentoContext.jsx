'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import Storage from '@/services/supabase'

export const AbastecimentoContext = createContext({});

export function AbastecimentoProvider({ children }) {
    const [valorTotal, setValorTotal] = useState(0);
    const [CCTotal, setCCTotal] = useState(0);
    const [products, setProducts] = useState(null);
    const [services, setServices] = useState(null);

    const onChangeCard = (oldValorCard, oldCCCard, newValorCard = 0, newCCCard = 0) => {
        const newValorTotal = (valorTotal - Number(oldValorCard) + Number(newValorCard)).toFixed(2);
        const newCCTotal = (CCTotal - Number(oldCCCard) + Number(newCCCard)).toFixed(2);
        setValorTotal(newValorTotal);
        setCCTotal(newCCTotal);
    }

    const loadServices = async () => {
        const services = await Storage.read('servicos');
        console.log(services);
        setServices(services);
    }

    const loadProducts = async () => {
        const products = await Storage.read('combustivel');
        console.log(products);
        setProducts(products);
    }

    const getCpf = async (id) => {
        const user = await Storage.read('cliente', id);
        
        if (Array.isArray(user) && user.length > 0) {
          const { cpf, nome } = user[0];
          console.log(user);
          return { cpf, nome };
        } else {
          console.log('Nenhum dado do cliente encontrado para o CPF:', id);
          return null;
        }
      }

    return (
        <AbastecimentoContext.Provider value={{ valorTotal, CCTotal, products, onChangeCard, loadProducts, services, loadServices, setCCTotal, getCpf }}>
            {children}
        </AbastecimentoContext.Provider>
    );
}

export function useAbastecimento() {
    return useContext(AbastecimentoContext);
}
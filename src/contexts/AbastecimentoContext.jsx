'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import Storage from '@/services/supabase'

export const AbastecimentoContext = createContext({});

export function AbastecimentoProvider({ children }) {
    const [valorTotal, setValorTotal] = useState(0);
    const [CCTotal, setCCTotal] = useState(0);
    const [products, setProducts] = useState(null);
    const [services, setServices] = useState(null);
    const [atendimento, setAtendimento] = useState(null);
    const [nomeFuncionario, setNomeFuncionario] = useState('');


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

    const getFuncionario = async (id) => {
        const user = await Storage.read('funcionario', id);
        
        if (Array.isArray(user) && user.length > 0) {
          const { matricula, nome } = user[0];
          setNomeFuncionario(nome);
          console.log(nomeFuncionario);
          console.log(user);
          return { matricula, nome };
        } else {
          console.log('Nenhum dado do funcionário encontrado para a matricula:', id);
          return null;
        }
    }

    const updateNomeFuncionario = async (name) => {
        setNomeFuncionario(name);
    }
    
    const login = async (email, password) => {
        const users = await Storage.readFuncionario('funcionario', { email, password });
        console.log(users);
        if (users && users.length > 0) {
            const {name} = users[0];
            updateNomeFuncionario(name);
            return name;
        }
        if (nomeFuncionario && nomeFuncionario.length > 0) {
            console.log(nomeFuncionario);
            return nomeFuncionario;
        }
        return null;
    }

    const criarAtendimento = async (fk_cpf_cli, fk_funcionario_reg, cliente, funcionario) => {
        const novoAtendimento = await Storage.create('atendimento', {
            fk_cpf_cli,
            fk_funcionario_reg,
            data: new Date(),
            value: valorTotal,
            total_cc: CCTotal,
            cliente,
            funcionario
        });
        setAtendimento(novoAtendimento);
    }


    return (
        <AbastecimentoContext.Provider value={{ valorTotal, CCTotal, products, onChangeCard, loadProducts, services, loadServices, setCCTotal, getCpf, criarAtendimento, getFuncionario, login, nomeFuncionario, setNomeFuncionario, updateNomeFuncionario, setValorTotal}}>
            {children}
        </AbastecimentoContext.Provider>
    );
}

export function useAbastecimento() {
    return useContext(AbastecimentoContext);
}
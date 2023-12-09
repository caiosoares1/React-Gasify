'use client';
import { useState, useEffect } from 'react'
import * as image from '@/components/images'
import CardProduto from '@/components/cardProduto'
import { useRouter } from 'next/router';
// import { products } from '@/data/products'
// import { supabase } from '@/services/supabase'
import Storage from '@/services/supabase'

async function getProducts() {
  return await Storage.read('combustivel');
}

export default function Abastecimento() {
  const [valorTotal, setValorTotal] = useState(0);
  const [CCTotal, setCCTotal] = useState(0);
  const [products, setProducts] = useState([]);

  const onChangeCard = (oldValorCard, oldCCCard, newValorCard = 0, newCCCard = 0) => {
    const newValorTotal = (valorTotal - Number(oldValorCard) + Number(newValorCard)).toFixed(2);
    const newCCTotal = (CCTotal - Number(oldCCCard) + Number(newCCCard)).toFixed(2);
    setValorTotal(newValorTotal);
    setCCTotal(newCCTotal);
  }

  const loadProducts = async () => {
    const products = await getProducts();
    console.log(products);
    setProducts(products);
  }

  // const handleClick = (event) => {
  //   event.preventDefault();

  //   // Falta validar se pode prosseguir

  //   // Falta passar os dados para a próxima página

  //   router.push('/abastecimento/usocc');
  // };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <div className="bg-[--gasify-branco] min-h-[100vh]">
        <main className="w-[85%] mx-auto mt-12 hidden md:flex md:flex-col">
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
                Carbon Cash a receber
              </p>
            </div>
          </div>
          <form>
            <div id="card-combustiveis" className="flex flex-wrap justify-between mx-auto my-12 gap-y-12 gap-x-12">
              {products.map(product => <CardProduto product={product} onChangeCard={onChangeCard} key={product.id} />)}
            </div>

            <button type="submit"
              className="w-full transition-all bg-[--gasify-verde-claro] mt-8 rounded-lg text-white font-semibold h-16 hover:bg-[--gasify-verde]">
              Ir ao pagamento
            </button>
          </form>
        </main>

      </div>
    </>
  )
}

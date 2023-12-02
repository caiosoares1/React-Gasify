import { useState } from 'react'

import * as image from '@/components/images'
import CardProduto from '@/components/cardProduto'
import { products } from '@/data/products'

export default function Abastecimento() {
    const [valorTotal, setValorTotal] = useState(0);
    const [CCTotal, setCCTotal] = useState(0);

    const onChangeCard = (oldValorCard, oldCCCard, newValorCard=0, newCCCard=0) => {
      const newValorTotal = (valorTotal - Number(oldValorCard) + Number(newValorCard)).toFixed(2);
      const newCCTotal = (CCTotal - Number(oldCCCard) + Number(newCCCard)).toFixed(2);
      setValorTotal(newValorTotal);
      setCCTotal(newCCTotal);
    }

    return (
        <>
      <div className="bg-[--gasify-branco] min-h-[100vh]">
        {/* Transformar em componente */}
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
              <span className="font-semibold">Luiz Carlos!</span>
            </div>
            <image.Arrow />
          </div>
        </header>

        {/* Transformar em componente */}
        <div id="compatibility" className="md:hidden flex flex-col justify-center items-center text-center h-[70vh] my-auto">
          <image.Compatibility />
          <p className="text-[--gasify-preto-claro] ml-2 font-bold font-2xl">
            Seu dispositivo não é compatível com o Gasify
          </p>
          <div className="flex justify-center items-center">
            <p className="text-[--gasify-preto-claro]">
              Por favor, acesse o Gasify em um dispositivo com tela maior
            </p>
          </div>
        </div>

        <nav className="justify-around space-x-8 mx-4 my-14 text-center hidden md:flex">
          <p className="w-[100%] font-medium border-[--gasify-preto] border-b-2 cursor-pointer text-[--gasify-preto] transition-all hover:border-b-[--gasifty-cinza] hover:text-[--gasify-cinza]"
            id="nav-escolha-produto">
            Abastecimento
          </p>
          <p className="w-[100%] font-medium border-[--gasify-preto-claro] border-b-2 cursor-pointer text-[--gasify-cinza-claro] transition-all hover:border-b-[--gasifty-cinza] hover:text-[--gasify-cinza]"
            id="nav-uso-cc">
            Use seu Carbon Cash para resgatar!
          </p>
          <p className="w-[100%] font-medium border-[--gasify-preto-claro] border-b-2 cursor-pointer text-[--gasify-cinza-claro] transition-all hover:border-b-[--gasifty-cinza] hover:text-[--gasify-cinza]"
            id="nav-pagamento">
            Pagamento
          </p>
        </nav>

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
              {products.map(product => <CardProduto product={product} onChangeCard={onChangeCard} key={product.id}/>)}
            </div>

            <button type="submit"
              className="w-full transition-all bg-[--gasify-verde-claro] mt-8 rounded-lg text-white font-semibold h-16 hover:bg-[--gasify-verde]">
              Ir ao pagamento
            </button>
          </form>
        </main>
        <footer className="">
          <image.Footer />
        </footer>
      </div>
    </>
    )
}
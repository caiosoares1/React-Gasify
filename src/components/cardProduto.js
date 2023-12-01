import { formatNumberPer100 } from "../utils"; 
import { useState } from "react";


export default function CardProduto({product, onChangeCard}) {
    const {id, name, price, cc_for_unit} = product

    const [litro, setLitro] = useState("");
    const [valor, setValor] = useState("");
    const [cc, setCc] = useState("");

    const limparCard = () => {
      setLitro("");
      setValor("");
      setCc("");
      onChangeCard(valor, cc);
    }

    const onChangeInputLitro = (event) => {
        const newLitro = Number(event.target.value);
        
        // Tratar com alert div 
        if (newLitro < 0) return;

        if (!newLitro) {
            limparCard();
            return;
        }

        setLitro(newLitro);
        const newValor = (newLitro * formatNumberPer100(price)).toFixed(2);
        const newCC = Number(newLitro) * cc_for_unit;
        onChangeCard(valor, cc, newValor, newCC);
        setValor(newValor);
        atualizarCC(newCC);
    }

    const onChangeInputValor = (event) => {
      const newValor = Number(event.target.value);

      // Tratar com alert div 
      if (newValor < 0) return;

      if (!newValor) {
        limparCard();
        return;
    }

      const newLitro = (newValor / formatNumberPer100(price)).toFixed(2);
      const newCC = Number(newLitro) * cc_for_unit;
      onChangeCard(valor, cc, newValor, newCC);
      setValor(newValor);
      setLitro(newLitro);
      atualizarCC(newCC);
      // onChangeCard(id, value, value * price);
    }

    const atualizarCC = (newCC) => {
      setCc(newCC.toFixed(2));
    }

   return (
     <div
       id="card"
       data-product_id={id}
       class="shadow-inner rounded-lg space-y-8 mx-auto mb-4"
       key={id}
     >
       <div id="tipo-preco" class="flex m-4 justify-between">
         <p class="font-semibold text-2xl">{name}</p>
         <p>R$ {formatNumberPer100(price)}/Litro</p>
       </div>
       <div class="flex space-x-8 mx-4 justify-between flex-wrap">
         <div class="space-y-2">
           <p class="text-md">Litros (L)</p>
           <input
             type="number"
             step="0.01"
             min="0"
             onChange={onChangeInputLitro}
             class="border-[--gasify-cinza] border-2 rounded-md p-2 "
             id="quantidade"
             placeholder="0"
             value={litro}
           />
           <div
             id="alertDiv-litro"
             class="alertDiv text-red-500 self-center mb-2 hidden"
           ></div>
         </div>
         <div class="space-y-2">
           <p class="text-md">Valor (R$)</p>
           <input
             type="number"
             step="0.01"
             min="0"
             onChange={onChangeInputValor}
             class="border-[--gasify-cinza] border-2 rounded-md p-2"
             id="valor"
             placeholder="0,00"
             value={valor}
           />
           <div
             id="alertDiv-valor"
             class="alertDiv text-red-500 self-center mb-2 hidden"
           ></div>
         </div>
       </div>
       <div
         id="cc-value"
         data-cc_for_unit="${
           cc_for_unit
         }"
         class={`transition ${cc ? "bg-[--gasify-verde]" : "bg-[--gasify-cinza]"} w-[100%] mt-2 text-white text-center font-medium p-1 rounded-bl-md rounded-br-md`}
       >
         + {cc ?  cc + " CC": cc_for_unit + " CC por litro!"}
       </div>
     </div>
   );
}

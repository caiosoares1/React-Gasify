import { formatNumberPer100 } from "../utils"; 

export default function CardProduto({product}) {
    const {id, name, price, cc_for_unit} = product

   return (
     <div
       id="card"
       data-product_id={id}
       class="shadow-inner rounded-lg space-y-8 mx-auto mb-4"
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
             oninput="onChangeInputLitro(event, ${formatNumberPer100(
                   price
                 )})"
             class="border-[--gasify-cinza] border-2 rounded-md p-2 "
             id="quantidade"
             placeholder="0"
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
             oninput="onChangeInputValor(event, ${formatNumberPer100(
                   price
                 )})"
             class="border-[--gasify-cinza] border-2 rounded-md p-2"
             id="valor"
             placeholder="0,00"
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
         class="transition bg-[--gasify-cinza] w-[100%] mt-2 text-white text-center font-medium p-1 rounded-bl-md rounded-br-md"
       >
         + {cc_for_unit} CC por litro!
       </div>
     </div>
   );
}

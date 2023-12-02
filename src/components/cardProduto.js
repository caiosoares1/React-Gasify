import { formatNumberPer100 } from "../utils"; 
import { useState } from "react";


export default function CardProduto({product, onChangeCard}) {
    const {id, name, price, cc_for_unit} = product

    const [litro, setLitro] = useState("");
    const [valor, setValor] = useState("");
    const [cc, setCc] = useState("");
    const [alertDivLitro, setAlertDivLitro] = useState("");
    const [alertDivValor, setAlertDivValor] = useState("");

    const limparCard = () => {
      setLitro("");
      setValor("");
      setCc("");
      limparAlertsDiv();
      onChangeCard(valor, cc);
    }

    const limparAlertsDiv = () => {
      setAlertDivLitro("");
      setAlertDivValor("");
    }

    const onChangeInputLitro = (event) => {
        const newLitro = Number(event.target.value);
        
        if (newLitro < 0 || newLitro === NaN) {
          setAlertDivLitro("Valor inválido! Digite um valor maior que 0.");
          return;
        }

        if (!newLitro) {
            limparCard();
            return;
        }

        limparAlertsDiv();
        const newValor = (newLitro * formatNumberPer100(price)).toFixed(2);
        const newCC = Number(newLitro) * cc_for_unit;
        onChangeCard(valor, cc, newValor, newCC);
        setLitro(newLitro);
        setValor(newValor);
        setCc(newCC);
    }

    const onChangeInputValor = (event) => {
      const newValor = Number(event.target.value);

      if (newValor < 0 || newValor === NaN) {
        setAlertDivValor("Valor inválido! Digite um valor maior que 0.");
        return;
      }

      if (!newValor) {
        limparCard();
        return;
      }

      limparAlertsDiv();
      const newLitro = (newValor / formatNumberPer100(price)).toFixed(2);
      const newCC = Number(newLitro) * cc_for_unit;
      onChangeCard(valor, cc, newValor, newCC);
      setValor(newValor);
      setLitro(newLitro);
      setCc(newCC);
    }

   return (
     <div
       id="card"
       data-product_id={id}
       className="shadow-inner rounded-lg space-y-8 mx-auto mb-4"
     >
       <div id="tipo-preco" className="flex m-4 justify-between">
         <p className="font-semibold text-2xl">{name}</p>
         <p>R$ {formatNumberPer100(price)}/Litro</p>
       </div>
       <div className="flex space-x-8 mx-4 justify-between flex-wrap">
         <div className="space-y-2">
           <p className="text-md">Litros (L)</p>
           <input
             type="number"
             step="0.01"
             min="0"
             onChange={onChangeInputLitro}
             className="border-[--gasify-cinza] border-2 rounded-md p-2 "
             id="quantidade"
             placeholder="0"
             value={litro}
           />
           <div
             id="alertDiv-litro"
             className={`alertDiv text-red-400 text-xs self-lef mb-2 ${alertDivLitro ? "block" : "hidden"}`}
           >{alertDivLitro}</div>
         </div>
         <div className="space-y-2">
           <p className="text-md">Valor (R$)</p>
           <input
             type="number"
             step="0.01"
             min="0"
             onChange={onChangeInputValor}
             className="border-[--gasify-cinza] border-2 rounded-md p-2"
             id="valor"
             placeholder="0,00"
             value={valor}
           />
           <div
             id="alertDiv-valor"
             className={`alertDiv text-red-400 text-xs self-lef mb-2 ${alertDivValor ? "block" : "hidden"}`}
           >{alertDivValor}</div>
         </div>
       </div>
       <div
         id="cc-value"
         data-cc_for_unit="${
           cc_for_unit
         }"
         className={`transition ${cc ? "bg-[--gasify-verde]" : "bg-[--gasify-cinza]"} w-[100%] mt-2 text-white text-center font-medium p-1 rounded-bl-md rounded-br-md`}
       >
         + {cc ?  cc.toFixed(2) + " CC": cc_for_unit + " CC por litro!"}
       </div>
     </div>
   );
}

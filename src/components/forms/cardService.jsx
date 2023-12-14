import { useState } from 'react';
import * as img from '@/components/images';
export default function CardService({service, onCardClick, CCTotal}) {
    const {id, name, price, image} = service
    const [isMarked, setIsMarked] = useState(false);

    const handleClick = () => {
        const newIsMarked = !isMarked;
        const numericCCTotal = Number(CCTotal);
        const numericPrice = Number(price);
      
        if (newIsMarked && numericCCTotal < numericPrice) {
          alert('Você não possui saldo suficiente para resgatar este item');
          return;
        }
      
        setIsMarked(newIsMarked);
        onCardClick(newIsMarked ? -numericPrice : numericPrice);
      };
    return (
        <div id={id} onClick={handleClick} className={`flex flex-col mx-10 mt-10 space-y-4 w-[20rem] h-[420px] rounded-xl border-2 shadow-xl ${isMarked ? 'bg-green-500' : ''}`}>
            <div className=' m-auto rounded-full bg-green-600 w-[8rem] h-[8rem] my-10 content-center'>
                <img src={image} className='w-auto m-auto max-w-[6rem] mt-2' />
            </div>
            <div className='flex flex-col space-y-4'>
                <p className='text-lg font-medium text-center'>{name}</p>
                <div className='flex items-center justify-center gap-x-4 mb-[5rem]'>
                    <img.GasifyLogo className='mb-5' />
                    <p className='text-lg font-medium mb-5'>{price}CC</p>
                </div>
            </div>
        </div>
    )
}
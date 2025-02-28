import React from "react";

const HistoryOrder = () => {
  return (
    <div>
      <div className='flex gap-x-2.5'>
        {/* <Image src={} alt='' loading='lazy' aria-hidden='true' /> */}
        <span className='text-xs font-normal'>Выполненный заказ </span>
        <span className='text-xs opacity-30'>28.10.2024</span>
      </div>
      <p className='mt-1 text-sm text-lightGray'>Общая сумма заказа: 32.000р</p>

      <ul className='mt-5 flex flex-col gap-y-5'>
        <li className='flex gap-x-20 border-b border-black/20 pb-5 last:border-none'>
          <p className='font-normal'>Christenson Surfboards</p>
          <div>
            <span className='block text-sm font-normal'>Тираж: 1000</span>
            <span className='mt-1.5 block text-sm font-normal'>Стоимость: 3.000р</span>
          </div>
        </li>
        <li className='flex gap-x-20 border-b border-black/20 pb-5 last:border-none'>
          <p className='font-normal'>Christenson Surfboards</p>
          <div>
            <span className='block text-sm font-normal'>Тираж: 1000</span>
            <span className='mt-1.5 block text-sm font-normal'>Стоимость: 3.000р</span>
          </div>
        </li>
        <li className='flex gap-x-20 border-b border-black/20 pb-5 last:border-none'>
          <p className='font-normal'>Christenson Surfboards</p>
          <div>
            <span className='block text-sm font-normal'>Тираж: 1000</span>
            <span className='mt-1.5 block text-sm font-normal'>Стоимость: 3.000р</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HistoryOrder;

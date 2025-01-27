import Image from "next/image";

import bob from "./bob.png";

const OrderStatus = () => {
  return (
    <div>
      <div className='flex gap-x-2.5'>
        <span className='text-xs font-normal'>Актуальный заказ</span>{" "}
        <span className='text-xs font-normal opacity-30'>28.10.2024</span>
      </div>
      <p className='mt-2.5 text-xl text-lightGray'>
        Проверка состояния материалов перед отправкой по адресу г. Санкт-Петербург, Красногвардейская площадь 6
      </p>
      <span>svg картинка с отображением в каком сейчас сотоянии заказ</span>
      <div className='mt-8'>
        <p className='text-sm font-normal text-lightGray'>Содержания заказа</p>
        <ul className='mt-5 flex flex-col gap-y-5'>
          <li className='flex items-center gap-x-5 border-b border-black/20 pb-5 last:border-none'>
            <div>
              <Image src={bob} alt='' className='max-w-24 rounded-lg' loading='lazy' aria-hidden='true' />
            </div>
            <div>
              <p className='text-2xl font-normal'>Christenson Surfboards</p>
              <div className='flex gap-x-12'>
                <span className='font-normal'>Quantity: 1</span>
                <span className='font-normal'>€1,045</span>
              </div>
            </div>
          </li>{" "}
          <li className='flex items-center gap-x-5 border-b border-black/20 pb-5 last:border-none'>
            <div>
              <Image src={bob} alt='' className='max-w-24 rounded-lg' loading='lazy' aria-hidden='true' />
            </div>
            <div>
              <p className='text-2xl'>Christenson Surfboards</p>
              <div className='flex gap-x-12'>
                <span>Quantity: 1</span>
                <span>€1,045</span>
              </div>
            </div>
          </li>
        </ul>

        <button className='mt-7 rounded-2xl bg-lightGray px-5 py-1.5 text-white'>
          Связаться с технической поддержкой
        </button>
      </div>
    </div>
  );
};

export default OrderStatus;

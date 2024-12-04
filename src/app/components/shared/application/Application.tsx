import Image from "next/image";

import ArrowDown from "@/app/assets/ArrowDown.svg";
import telephone from "@/app/assets/telephone.webp";
const Application = () => {
  return (
    <section className='relative mt-28'>
      <div className='absolute left-16 top-16 max-w-[334px]'>
        <h2 className='text-4xl text-white'>Приложение</h2>
        <p className='mt-2.5 text-sm text-white'>
          Оптовые закупки, отслеживание заказа, техническая поддержка — всегда под рукой.
        </p>
        <div className='mt-5 flex gap-x-5'>
          <a href='' className='flex items-center gap-x-2.5 rounded-md bg-black px-8 py-2.5 text-white'>
            <span className='text-sm'>App Store</span>
            <Image className='' src={ArrowDown} loading='lazy' alt='' aria-hidden='true' />
          </a>
          <a href='' className='flex items-center gap-x-2.5 rounded-md bg-black px-8 py-2.5 text-white'>
            <span className='text-sm'>Google Play</span>
            <Image className='' src={ArrowDown} loading='lazy' alt='' aria-hidden='true' />
          </a>
        </div>
      </div>
      <Image className='w-full' src={telephone} loading='lazy' alt='' aria-hidden='true' />
    </section>
  );
};

export default Application;

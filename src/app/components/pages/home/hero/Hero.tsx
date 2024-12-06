import Image from "next/image";

import ArrowDown from "@/app/assets/ArrowDown.svg";
const Hero = () => {
  return (
    <section className='mt-28'>
      <h1 className='m-auto max-w-2xl text-center text-6xl'>
        У меня есть дизайн <span className='text-[#67698D]'>хочу заказать печать</span>
      </h1>
      <form className='mt-10 flex items-center justify-center gap-x-2.5'>
        <input
          type='text'
          placeholder='Имя'
          className='w-full max-w-96 rounded-md border border-[#cacaca80] bg-[#ebebeb80] px-5 py-[19px] text-sm'
        />
        <input
          type='text'
          className='w-full max-w-96 rounded-md border border-[#cacaca80] bg-[#ebebeb80] px-5 py-[19px] text-sm'
          placeholder='Телефон'
        />
        <button className='flex items-center gap-x-2.5 rounded-md bg-black px-8 py-5 text-white'>
          <span className='text-sm'>Свяжитесь со мной</span>
          <Image className='' src={ArrowDown} loading='eager' alt='' aria-hidden='true' />
        </button>
      </form>
    </section>
  );
};

export default Hero;

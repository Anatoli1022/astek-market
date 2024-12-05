import Image from "next/image";

import cdek from "@/app/assets/company/cdek.png";
import rusSeti from "@/app/assets/company/rusSeti.png";
import slavNeft from "@/app/assets/company/slavNeft.png";

const Hero = () => {
  return (
    <section className='mt-72'>
      <span className='m-auto block max-w-52 text-[#1E1E1E] opacity-30'> Рекламный холдинг Astek</span>
      <h2 className='m-auto max-w-[670px] text-center text-6xl'>
        Производство рекламы <span className='text-[#67698D]'>от идеи до реализации</span> для бизнеса
      </h2>
      <p className='m-auto mt-4 max-w-md text-center'>
        Мы создаем рекламные инструменты с оформлением заказа за несколько минут
      </p>
      <ul className='mt-64 flex items-center justify-center gap-x-5'>
        <li>
          <Image src={rusSeti} alt='Россети Сибирь' loading='eager' />
        </li>
        <li>
          <Image src={slavNeft} alt='Славнефть' loading='eager' />
        </li>
        <li>
          <Image src={cdek} alt='CDEK' loading='eager' />
        </li>
      </ul>
    </section>
  );
};

export default Hero;

import Image from "next/image";

import box from "@/app/assets/box.svg";

import { data } from "./data";
const HowWeWork = () => {
  return (
    <section>
      <div className='flex max-w-[1240px] items-center justify-between'>
        <h2 className='text-6xl'>Как мы работаем</h2>
        <p className='max-w-[320px] text-sm text-[#1E1E1E] opacity-30'>
          Онлайн АСТЕК – это отличная альтернатива существующим рекламным агентствам.{" "}
        </p>
      </div>
      <ul className='mt-24 flex flex-wrap justify-center gap-2.5'>
        {data.map((item, index) => (
          <div key={index} className='w-full max-w-[620px] rounded-[10px] bg-[#A6B8FF] p-7'>
            <div className='flex items-center gap-x-2.5'>
              <div className='h-2.5 w-2.5 rounded-full bg-white'></div>
              <span className='text-sm text-white'>{item.tag}</span>
            </div>
            <div className='m-auto mt-16 max-w-[200px]'>
              <Image src={box} alt='' loading='lazy' aria-hidden='true' />
            </div>
            <h3 className='mt-12 text-4xl text-white'>{item.title}</h3>
            <p className='mt-2.5 max-w-[340px] text-sm text-white'>{item.text}</p>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default HowWeWork;

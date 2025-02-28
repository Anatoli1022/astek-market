"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import arrow from "@/app/assets/arrow-green.svg";
import line from "@/app/assets/lineDark.svg";

import { data } from "./data";
interface HeroProductProps {
  documentProduct: Content.ProductDocument;
}

const HeroProduct = ({ documentProduct }: HeroProductProps) => {
  const { title, text, minimal, medium, high, imageproduct } = documentProduct.data;
  const [product, setProduct] = useState(0);
  const productData = [minimal, medium, high];

  return (
    <section className='flex justify-center gap-x-28'>
      <div>
        <h1 className='text-4xl'>{title}</h1>
        <p className='mt-2.5 max-w-[400px]'>{text}</p>
        <div className='mt-8'>
          <PrismicNextImage
            field={imageproduct}
            sizes='100vw'
            className='max-h-[800px] w-full rounded-2xl object-cover'
            fallbackAlt=''
            loading='eager'
            priority
          />
        </div>

        <div className='relative mt-12 flex flex-wrap gap-x-2.5 pt-8'>
          <Image src={line} alt='' className='absolute top-0 w-full' loading='eager' aria-hidden='true' />
          <p>Если у вас есть вопросы, можете обратиться к нашему менеджеру</p>
          <Link href='/contact' className='border-b-2 border-black opacity-65'>
            Оставить заявку на звонок
          </Link>
        </div>
      </div>
      <div className='flex max-h-[900px] w-full max-w-[600px] flex-col justify-between rounded-2xl bg-[#212121] p-10 xl:p-5'>
        <div>
          <div className='flex justify-between'>
            <h2 className='text-2xl text-white'>Расчет стоимости</h2>

            <button className='flex items-center gap-x-3'>
              <span className='text-[#515151]'>Технические требования</span>
              <span className='rounded-full border border-[#515151] bg-[#393939] px-3.5 py-1 text-white'>i</span>
            </button>
          </div>
          <div className='mt-5'>
            <div className='flex max-h-10 items-center gap-x-5 overflow-hidden rounded-3xl border-2 border-[#515151]'>
              {data.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setProduct(i)}
                  className={`rounded-3xl px-10 py-2.5 font-medium ${product == i ? "bg-white" : "bg-transparent text-white"}`}
                >
                  {item.button}
                </button>
              ))}
            </div>
            <ul className='mt-5 grid grid-cols-2 gap-x-10 gap-y-5'>
              {productData[product].map((item, i) => (
                <li key={i} className='flex items-center gap-x-2.5 text-white'>
                  <Image src={arrow} alt='' loading='lazy' aria-hidden='true' />
                  <span>{item.service}</span>
                </li>
              ))}
            </ul>
          </div>

          <form action='' className='mt-5 flex flex-col gap-y-5'>
            <input name='volume' type='number' placeholder='Объем тиража' required className='rounded-md px-5 py-2.5' />
            <input
              name='square'
              type='number'
              placeholder='Площадь наклейки в м2'
              required
              className='rounded-md px-5 py-2.5'
            />
            <input name='file' type='text' placeholder='Прикрепить файл' required className='rounded-md px-5 py-2.5' />

            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='some_id'
                className='disabled:border-steel-400 disabled:bg-steel-400 peer relative mt-1 h-4 w-4 shrink-0 appearance-none rounded-sm border-2 border-white bg-transparent checked:border-0 checked:bg-white focus:outline-none focus:ring-offset-0'
              />
              <label htmlFor='some_id' className='font-medium text-white'>
                Не ровный борт
              </label>
              <svg
                className='pointer-events-none absolute mt-1 hidden h-4 w-4 peer-checked:block'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='20 6 9 17 4 12'></polyline>
              </svg>
            </div>
          </form>
          <span className='mt-5 block text-center text-6xl font-bold text-white'>0 ₽</span>
          <span className='block text-center text-[#515151]'>Стоимость реализации вашего заказа</span>
        </div>
        <button className='block w-full rounded-md bg-standartGreen px-10 py-5 text-2xl font-normal text-white xl:mt-12 xl:py-2.5 xl:text-lg'>
          Добавить в корзину
        </button>
      </div>
    </section>
  );
};

export default HeroProduct;

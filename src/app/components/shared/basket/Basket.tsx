"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link"; // Импортируем Link из next/link
import { useState } from "react";

import plus from "@/app/assets/plus.svg";
import shopping from "@/app/assets/shopping.svg";

interface BasketProps {
  typesofwork: Content.TypesofworkDocument;
}

const Basket = ({ typesofwork }: BasketProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dataBasket = [];
  const { data } = typesofwork;
  const { list, arrow } = data;
  const toggle = () => setOpenModal((prevState) => !prevState);

  return (
    <div
      className={`flex max-w-[820px] flex-col rounded-md bg-white p-2.5 shadow-md ${openModal && "absolute right-0 top-0 w-full p-5"} `}
    >
      <div className='flex w-full justify-between'>
        {openModal && <Image src={shopping} alt='' loading='eager' aria-hidden='true' />}
        <button type='button' onClick={toggle}>
          {!openModal ? (
            <Image src={shopping} alt='' loading='eager' aria-hidden='true' />
          ) : (
            <Image src={plus} className='rotate-45' alt='' loading='eager' aria-hidden='true' />
          )}
        </button>
      </div>

      {openModal && (
        <div className='mt-8'>
          {dataBasket.length > 0 ? (
            <div>true</div>
          ) : (
            <div>
              <h2 className='text-xl text-[#1E1E1E]'>Ваша корзина пустая, выберете подходящий тип продукции</h2>
              <ul className='mt-5 grid grid-cols-3 gap-2.5'>
                {list.map((item, i) => (
                  <li key={i} className='rounded-xl'>
                    <Link
                      href={`/?filter=${item.text}`}
                      onClick={toggle}
                      className='group relative flex items-center justify-center'
                    >
                      <div className='absolute right-6 top-6 rounded-full bg-white p-2.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        <PrismicNextImage className='invert' field={arrow} alt='' loading='lazy' aria-hidden='true' />
                      </div>
                      <PrismicNextImage
                        field={item.image}
                        className='rounded-xl'
                        alt=''
                        loading='lazy'
                        aria-hidden='true'
                      />
                      <span className='absolute rounded-xl bg-white px-2.5 py-1 text-sm'>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='mt-5 flex items-center justify-between rounded-lg bg-[#2F8A46] p-6'>
                <p className='text-lg font-bold text-white'>Вы пока ничего не выбрали</p>
                <Link href={`/`} onClick={toggle} className='rounded-lg bg-white px-3 py-2 text-lg'>
                  Перейти на главную
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Basket;

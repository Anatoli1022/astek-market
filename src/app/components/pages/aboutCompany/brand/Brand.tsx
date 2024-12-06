"use client";

import "swiper/css";
import "./brand.css";

import Image from "next/image";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import brand from "@/app/assets/brand.webp";

import { data } from "./data";

const Brand = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='relative mt-16'>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className='w-full'
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // обновляем текущий индекс
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='relative'>
              <div className='absolute left-16 top-16 max-w-[534px] bg-white p-4'>
                <h2 className='text-4xl'>{item.title}</h2>
                <p className='mt-24 text-sm'>{item.text}</p>
                <div className='mt-2.5 flex gap-x-2.5'>
                  {data.map((_, indexProgress) => (
                    <div
                      key={indexProgress}
                      className={`h-0.5 w-full ${activeIndex > indexProgress ? "bg-black/50" : "bg-black/30"}`}
                    >
                      <div className={`h-0.5 w-full ${activeIndex === indexProgress ? "progress" : ""}`}></div>
                    </div>
                  ))}
                </div>
              </div>
              <Image className='w-full' src={brand} loading='lazy' alt='Brand background' aria-hidden='true' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brand;

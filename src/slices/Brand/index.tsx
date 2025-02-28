"use client";
import "swiper/css";
import "./brand.css";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
/**
 * Props for `Brand`.
 */
export type BrandProps = SliceComponentProps<Content.BrandSlice>;

/**
 * Component for "Brand" Slices.
 */

const Brand = ({ slice }: BrandProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className='relative mt-16'>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className='w-full'
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // обновляем текущий индекс
      >
        {slice.primary.list.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='relative'>
                <div className='absolute left-16 top-16 max-w-[534px] rounded-xl bg-white p-4 md:left-5 md:top-5'>
                  <h2 className='text-4xl md:text-2xl'>
                    <PrismicText field={item.title} />
                  </h2>
                  <p className='mt-24 text-sm md:mt-6'>
                    <PrismicText field={item.text} />
                  </p>

                  <div className='mt-2.5 flex gap-x-2.5'>
                    {slice.primary.list.map((_, indexProgress) => (
                      <div
                        // onClick={setActiveIndex} добавить изменения индекса по клику
                        key={indexProgress}
                        className={`h-0.5 w-full md:max-w-14 ${activeIndex > indexProgress ? "bg-black/50" : "bg-black/30"}`}
                      >
                        <div
                          className={`h-0.5 w-full md:max-w-14 ${activeIndex === indexProgress ? "progress" : ""}`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
                <PrismicNextImage className='w-full' field={item.image} alt='' loading='lazy' aria-hidden='true' />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Brand;

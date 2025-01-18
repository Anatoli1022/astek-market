"use client";
import "swiper/css";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
import Image from "next/image";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import arrow from "@/app/assets/ArrowRightWhite.svg";

/**
 * Props for `Reviews`.
 */
export type ReviewsProps = SliceComponentProps<Content.ReviewsSlice>;

/**
 * Component for "Reviews" Slices.
 */
const Reviews = ({ slice }: ReviewsProps): JSX.Element => {
  const { list_reviews, title } = slice.primary;
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className='mt-20'>
      <div className='flex items-center justify-between'>
        <h2 className='text-6xl'>
          <PrismicText field={title} />
        </h2>
        <div className='flex gap-x-3'>
          <button
            onClick={handlePrevSlide}
            className='rounded-lg border border-black bg-black px-5 py-3 transition-all hover:border-white hover:bg-inherit hover:invert'
          >
            <Image src={arrow} alt='' loading='lazy' aria-hidden='true' />
          </button>
          <button
            onClick={handleNextSlide}
            className='rounded-lg border border-black bg-black px-5 py-3 transition-all hover:border-white hover:bg-inherit hover:invert'
          >
            <Image src={arrow} className='rotate-180' alt='' loading='lazy' aria-hidden='true' />
          </button>
        </div>
      </div>
      <div className='mt-10 rounded-xl bg-white px-5 py-7'>
        <Swiper
          ref={swiperRef}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          modules={[Autoplay]}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {list_reviews.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='flex justify-between'>
                  <ul className='flex flex-col gap-y-5'>
                    <li>
                      <h4 className='text-xl font-medium opacity-30'>Клиент</h4>
                      <p className='text-xl font-medium'>
                        <PrismicText field={item.client_text} />
                      </p>
                    </li>
                    <li>
                      <h4 className='text-xl font-medium opacity-30'>Услуга</h4>
                      <p className='text-xl font-medium'>
                        <PrismicText field={item.service_name} />
                      </p>
                    </li>
                    <li>
                      <h4 className='text-xl font-medium opacity-30'>Что сделали</h4>
                      <p className='text-xl font-medium'>
                        <PrismicText field={item.what_make_text} />
                      </p>
                    </li>
                    <li>
                      <h4 className='text-xl font-medium opacity-30'>Ниша</h4>
                      <p className='text-xl font-medium'>
                        <PrismicText field={item.direction_text} />
                      </p>
                    </li>
                  </ul>
                  <div className='flex gap-x-5'>
                    <div className='max-w-[614px]'>
                      <h4 className='text-xl font-medium opacity-30'>Отзыв</h4>
                      <p className='text-3xl'>
                        <PrismicText field={item.feedback_text} />
                      </p>
                    </div>
                    <PrismicNextImage field={item.image} alt='' />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;

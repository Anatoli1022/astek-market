"use client";
import "swiper/css";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
import Link from "next/link";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

/**
 * Props for `Reviews`.
 */
export type ReviewsProps = SliceComponentProps<Content.ReviewsSlice>;

/**
 * Component for "Reviews" Slices.
 */
const Reviews = ({ slice }: ReviewsProps): JSX.Element => {
  const { list_reviews, title, arrow_link, arrow_top } = slice.primary;
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
        <h2 className='text-6xl md:text-3xl'>
          <PrismicText field={title} />
        </h2>
        <div className='flex gap-x-3 md:hidden'>
          <button
            onClick={handlePrevSlide}
            className='rounded-lg border border-black bg-black px-5 py-3 transition-all hover:border-white hover:bg-inherit hover:invert'
          >
            <PrismicNextImage
              field={arrow_link}
              alt=''
              loading='lazy'
              aria-hidden='true'
              className='rotate-180 invert'
            />
          </button>
          <button
            onClick={handleNextSlide}
            className='rounded-lg border border-black bg-black px-5 py-3 transition-all hover:border-white hover:bg-inherit hover:invert'
          >
            <PrismicNextImage field={arrow_link} className='invert' alt='' loading='lazy' aria-hidden='true' />
          </button>
        </div>
      </div>
      <div className='mt-10 rounded-xl bg-white px-5 py-7 md:p-0'>
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
                <div className='flex justify-between gap-x-5 gap-y-5 lg:flex-col-reverse'>
                  <div className='flex flex-col justify-between gap-y-7'>
                    <ul className='flex flex-col gap-y-5'>
                      <li>
                        <h4 className='text-xl opacity-30'>Клиент</h4>
                        <p className='text-xl'>
                          <PrismicText field={item.client_text} />
                        </p>
                      </li>
                      <li>
                        <h4 className='text-xl opacity-30'>Услуга</h4>
                        <p className='text-xl'>
                          <PrismicText field={item.service_name} />
                        </p>
                      </li>
                      <li>
                        <h4 className='text-xl opacity-30'>Что сделали</h4>
                        <p className='text-xl'>
                          <PrismicText field={item.what_make_text} />
                        </p>
                      </li>
                      <li>
                        <h4 className='text-xl opacity-30'>Ниша</h4>
                        <p className='text-xl'>
                          <PrismicText field={item.direction_text} />
                        </p>
                      </li>
                    </ul>

                    <PrismicNextLink field={item.link_case} className='flex items-center gap-x-2.5'>
                      <div className='flex items-end justify-center rounded-full bg-black p-2.5'>
                        <PrismicNextImage
                          field={arrow_top}
                          className='max-w-5'
                          alt=''
                          loading='lazy'
                          aria-hidden='true'
                        />
                      </div>
                      <span className='text-sm font-medium'>Посмотреть кейс</span>
                    </PrismicNextLink>
                  </div>
                  <div className='max-w-[614px]'>
                    <h4 className='text-xl opacity-30'>Отзыв</h4>
                    <p className='text-3xl xl:text-xl'>
                      <PrismicText field={item.feedback_text} />
                    </p>
                  </div>
                  <PrismicNextImage field={item.image} alt='' loading='lazy' className='w-full max-w-xl' />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className='hidden justify-center gap-x-3 md:mt-11 md:flex'>
          <button
            onClick={handlePrevSlide}
            className='rounded-lg border border-black bg-black px-10 py-3 transition-all hover:border-white hover:bg-inherit hover:invert'
          >
            <PrismicNextImage
              field={arrow_link}
              alt=''
              loading='lazy'
              aria-hidden='true'
              className='rotate-180 invert'
            />
          </button>
          <button
            onClick={handleNextSlide}
            className='rounded-lg border border-black bg-black px-10 py-3 transition-all hover:border-white hover:bg-inherit hover:invert'
          >
            <PrismicNextImage field={arrow_link} className='invert' alt='' loading='lazy' aria-hidden='true' />
          </button>
        </div>
        <div className='mt-7 flex items-center justify-center gap-x-2 underline md:hidden'>
          <Link href='/portfolio' className='flex items-center justify-center gap-x-2'>
            <span className='font-medium'>Посмотреть все портфолио</span>

            <PrismicNextImage field={arrow_link} className='max-w-5' alt='' loading='lazy' aria-hidden='true' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

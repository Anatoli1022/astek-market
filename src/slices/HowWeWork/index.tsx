import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
/**
 * Props for `HowWeWork`.
 */
export type HowWeWorkProps = SliceComponentProps<Content.HowWeWorkSlice>;

/**
 * Component for "HowWeWork" Slices.
 */
const HowWeWork = ({ slice }: HowWeWorkProps): JSX.Element => {
  const { title, text_center, list } = slice.primary;

  return (
    <section className='mt-36 lg:mt-20' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className='flex max-w-[1240px] items-end justify-between lg:flex-col lg:items-center'>
        <h2 className='text-6xl font-medium lg:text-4xl'>
          <PrismicText field={title} />
        </h2>
        <p className='max-w-[320px] text-sm text-[#1E1E1E] lg:mt-5 lg:text-center lg:text-base lg:font-medium'>
          <PrismicText field={text_center} />
        </p>
      </div>
      <ul className='mt-5 flex flex-wrap justify-center gap-2.5 lg:mt-10 lg:gap-5'>
        {list.map((item, index) => (
          <li key={index} className='w-full max-w-[620px] rounded-[10px] bg-standartGreen p-7'>
            <div className='flex items-center gap-x-2.5'>
              <div className='h-2.5 w-2.5 rounded-full bg-white'></div>
              <span className='text-base text-white'>{item.text_teg}</span>
            </div>
            <div className='m-auto mt-16 max-w-[200px] sm:max-w-24 lg:max-w-36'>
              <PrismicNextImage field={item.image} loading='lazy' alt='' aria-hidden='true' />
            </div>
            <h3 className='mt-12 text-4xl text-white lg:text-2xl'>
              <PrismicText field={item.title_box} />
            </h3>

            <p className='mt-2.5 max-w-[340px] text-white'>
              <PrismicText field={item.text_box} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowWeWork;

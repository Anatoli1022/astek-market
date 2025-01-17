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
  const { title, text_center, list, image_box } = slice.primary;

  return (
    <section className='mt-36' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className='flex max-w-[1240px] items-center justify-between'>
        <h2 className='text-6xl'>
          {" "}
          <PrismicText field={title} />
        </h2>
        <p className='max-w-[320px] text-sm text-[#1E1E1E] opacity-30'>
          <PrismicText field={text_center} />
        </p>
      </div>
      <ul className='mt-24 flex flex-wrap justify-center gap-2.5'>
        {list.map((item, index) => (
          <div key={index} className='w-full max-w-[620px] rounded-[10px] bg-[#A6B8FF] p-7'>
            <div className='flex items-center gap-x-2.5'>
              <div className='h-2.5 w-2.5 rounded-full bg-white'></div>
              <span className='text-sm text-white'>{item.text_teg}</span>
            </div>
            <div className='m-auto mt-16 max-w-[200px]'>
              <PrismicNextImage field={image_box} loading='lazy' alt='' aria-hidden='true' />
            </div>
            <h3 className='mt-12 text-4xl text-white'>
              <PrismicText field={item.title_box} />
            </h3>

            <p className='mt-2.5 max-w-[340px] text-sm text-white'>
              {" "}
              <PrismicText field={item.text_box} />
            </p>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default HowWeWork;

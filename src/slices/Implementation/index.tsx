import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
/**
 * Props for `Implementation`.
 */
export type ImplementationProps = SliceComponentProps<Content.ImplementationSlice>;

/**
 * Component for "Implementation" Slices.
 */
const Implementation = ({ slice }: ImplementationProps): JSX.Element => {
  const { subtext, text, list, title } = slice.primary;
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className='mt-72 md:mt-40'>
      <span className='m-auto block max-w-52 text-[#1E1E1E] opacity-30'>
        <PrismicText field={text} />
      </span>
      <h2 className='m-auto max-w-[750px] text-center text-6xl md:text-3xl'>
        <PrismicText field={title} />
      </h2>
      <p className='m-auto mt-4 max-w-md text-center md:mt-2.5'>
        <PrismicText field={subtext} />
      </p>
      <div className='mt-64 md:mt-20'>
        <span className='block text-center'>Нам доверяют</span>
        <ul className='mt-5 flex items-center justify-center gap-x-5'>
          {list.map((item) => {
            const { image } = item;
            return (
              <li key={image.id}>
                <PrismicNextImage field={image} loading='eager' className='rounded-3xl' />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Implementation;

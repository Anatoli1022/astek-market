import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
/**
 * Props for `GetPrint`.
 */
export type GetPrintProps = SliceComponentProps<Content.GetPrintSlice>;

/**
 * Component for "GetPrint" Slices.
 */
const GetPrint = ({ slice }: GetPrintProps): JSX.Element => {
  return (
    <section className='mt-28' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
 
      <h1 className='m-auto max-w-2xl text-center text-6xl'>
     <PrismicText field={slice.primary.title}/>
      <span className='text-[#67698D]'>{slice.primary.title_text}</span>
      </h1>
      <form className='mt-10 flex items-center justify-center gap-x-2.5'>
        <input
          type='text'
          placeholder='Имя'
          className='w-full max-w-96 rounded-md border border-[#cacaca80] bg-[#ebebeb80] px-5 py-[19px] text-sm'
        />
        <input
          type='text'
          className='w-full max-w-96 rounded-md border border-[#cacaca80] bg-[#ebebeb80] px-5 py-[19px] text-sm'
          placeholder='Телефон'
        />
        <button className='flex items-center gap-x-2.5 rounded-md bg-black px-8 py-5 text-white'>
          <span className='text-sm'>{slice.primary.buttontext}</span>
          <PrismicNextImage field={slice.primary.arrow}  loading='eager' alt='' aria-hidden='true' />
        </button>
      </form>
    </section>
  );
};

export default GetPrint;

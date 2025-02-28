import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
/**
 * Props for `GetPrint`.
 */
export type GetPrintProps = SliceComponentProps<Content.GetPrintSlice>;

/**
 * Component for "GetPrint" Slices.
 */
const GetPrint = ({ slice }: GetPrintProps): JSX.Element => {
  const { title, buttontext, arrow, subtext } = slice.primary;

  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <h1 className='m-auto max-w-2xl text-center text-6xl md:text-3xl'>
        <PrismicText field={title} />
      </h1>

      <form className='mt-10 flex items-center justify-center gap-x-2.5 gap-y-2.5 sm:m-5 sm:flex-col'>
        <input
          type='text'
          placeholder='Имя'
          required
          className='w-full max-w-96 rounded-md border border-[#cacaca80] bg-[#ebebeb80] px-5 py-[19px] text-sm'
        />
        <input
          type='text'
          required
          className='w-full max-w-96 rounded-md border border-[#cacaca80] bg-[#ebebeb80] px-5 py-[19px] text-sm'
          placeholder='Телефон'
        />
        <button className='flex max-w-96 items-center justify-center gap-x-2.5 rounded-md bg-black px-8 py-5 text-white sm:w-full'>
          <span className='text-sm'>{buttontext}</span>
          <PrismicNextImage field={arrow} loading='eager' alt='' aria-hidden='true' />
        </button>
      </form>
      <p className='mt-5 text-center text-[#67698D] sm:hidden'>{subtext}</p>
    </section>
  );
};

export default GetPrint;

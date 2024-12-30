import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
/**
 * Props for `Application`.
 */
export type ApplicationProps = SliceComponentProps<Content.ApplicationSlice>;

/**
 * Component for "Application" Slices.
 */
const Application = ({ slice }: ApplicationProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className='relative mt-28'>
      <div className='absolute left-16 top-16 max-w-[334px]'>
        <h2 className='text-4xl text-white'>
          <PrismicText field={slice.primary.title} />
        </h2>
        <p className='mt-2.5 text-sm text-white'>
          <PrismicText field={slice.primary.text} />
        </p>
        <div className='mt-5 flex gap-x-5'>
          <a href='' className='flex items-center gap-x-2.5 rounded-md bg-black px-8 py-2.5 text-white'>
            <span className='text-sm'>App Store</span>
            <PrismicNextImage field={slice.primary.image_arrow} loading='lazy' alt='' aria-hidden='true' />
          </a>
          <a href='' className='flex items-center gap-x-2.5 rounded-md bg-black px-8 py-2.5 text-white'>
            <span className='text-sm'>Google Play</span>
            <PrismicNextImage field={slice.primary.image_arrow} loading='lazy' alt='' aria-hidden='true' />
          </a>
        </div>
      </div>

      <PrismicNextImage
        className='w-full rounded-2xl'
        field={slice.primary.image}
        loading='lazy'
        alt=''
        aria-hidden='true'
      />
    </section>
  );
};

export default Application;

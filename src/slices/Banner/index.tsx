import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice }: BannerProps): JSX.Element => {
  const { image, text_link, arrow, link } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='relative mt-5 rounded-xl'
    >
      <PrismicNextImage
        field={image}
        sizes='100vw'
        className='w-full rounded-xl'
        fallbackAlt=''
        loading='eager'
        priority
      />
      <PrismicNextLink
        field={link}
        className='absolute left-[46%] top-[64%] flex items-center gap-x-2.5 rounded-md bg-white px-8 py-5'
      >
        <span className='text-sm'>{text_link}</span>
        <PrismicNextImage className='invert' field={arrow} loading='eager' fallbackAlt='' aria-hidden='true' />
      </PrismicNextLink>
    </section>
  );
};

export default Banner;

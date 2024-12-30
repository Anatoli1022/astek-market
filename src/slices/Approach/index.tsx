import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Approach`.
 */
export type ApproachProps = SliceComponentProps<Content.ApproachSlice>;

/**
 * Component for "Approach" Slices.
 */
const Approach = ({ slice }: ApproachProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className='mt-96'>
      <span className='m-auto block max-w-14 text-[#1E1E1E] opacity-30'>
        <PrismicText field={slice.primary.text} />
      </span>

      <h2 className='m-auto max-w-[970px] text-center text-6xl'>
        <PrismicText field={slice.primary.title} />
      </h2>
    </section>
  );
};

export default Approach;

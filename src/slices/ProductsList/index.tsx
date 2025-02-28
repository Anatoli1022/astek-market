import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Category from "@/app/components/pages/home/Caregory";

/**
 * Props for `ProductsList`.
 */
export type ProductsListProps = SliceComponentProps<Content.ProductsListSlice>;

/**
 * Component for "ProductsList" Slices.
 */
const ProductsList = ({ slice }: ProductsListProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className='mt-32 md:mt-20'>
      <Category />
    </section>
  );
};

export default ProductsList;

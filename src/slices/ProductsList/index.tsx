import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Products from "@/app/components/pages/home/Products";

/**
 * Props for `ProductsList`.
 */
export type ProductsListProps = SliceComponentProps<Content.ProductsListSlice>;

/**
 * Component for "ProductsList" Slices.
 */
const ProductsList = ({ slice }: ProductsListProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} className='mt-32'>
      <Products />
    </section>
  );
};

export default ProductsList;

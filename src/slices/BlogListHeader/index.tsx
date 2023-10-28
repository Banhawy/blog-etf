import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `BlogListHeader`.
 */
export type BlogListHeaderProps =
  SliceComponentProps<Content.BlogListHeaderSlice>;

/**
 * Component for "BlogListHeader" Slices.
 */
const BlogListHeader = ({ slice }: BlogListHeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pl-[9rem] pt-8"
    >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{
        slice.primary.title
      }</h2>
      <span className="mt-2 text-lg leading-8 text-gray-600">
        <PrismicRichText field={slice.primary.description} />
      </span>
    </section>
  );
};

export default BlogListHeader;

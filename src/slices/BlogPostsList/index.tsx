import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

interface BlogPage {
  id: string;
  uid: string;
  url: string;
  type: string;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: any[];
  lang: string;
  alternate_languages: any[];
  data: {
    title: {
      type: string;
      text: string;
      spans: any[];
    }[];
    slices: {
      variation: string;
      version: string;
      items: any[];
      primary: {
        content: {
          type: string;
          text: string;
          spans: any[];
        }[];
      };
      id: string;
      slice_type: string;
      slice_label: any;
    }[];
    meta_description: string;
    meta_image: {
      dimensions: {
        width: number;
        height: number;
      };
      alt: string;
      url: string;
    };
    meta_title: string;
  };
}

/**
 * Props for `BlogPostsList`.
 */
export type BlogPostsListProps =
  SliceComponentProps<Content.BlogPostsListSlice>;

/**
 * Component for "BlogPostsList" Slices.
 */
interface BlogPostsListContext {
  blogs: BlogPage[];
}

const BlogPostsList = ({ slice, context }: BlogPostsListProps): JSX.Element => {
  const blogs: BlogPage[] = (context as BlogPostsListContext).blogs;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="center pb-8 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Placeholder component for blog_posts_list (variation: {slice.variation})
      Slices
      {JSON.stringify(context)} */}
      <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
        {blogs.map((post) => (
          <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              {post.data.meta_image.url ? (
                <Image
                  src={post.data.meta_image.url}
                  alt=""
                  // layout="fill"
                  width={post.data.meta_image.dimensions.width}
                  height={post.data.meta_image.dimensions.height}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
              ) : (
                <Image
                  src={"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"}
                  alt=""
                  layout="fill"
                  // width={200}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
              )}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.first_publication_date} className="text-gray-500">
                {new Date(post.first_publication_date).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </time>
              {post.tags.map((tag) => (
                <span key={tag} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {tag}
                </span>
              ))}
              {/* <span className="text-gray-500">{post.tags.join(", ")}</span> */}
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <Link
                  href={post.url}
                >
                  <span className="absolute inset-0" />
                  {post.data.title[0].text}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.data.meta_description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const BlogPostsList2 = ({ slice, context }: BlogPostsListProps): JSX.Element => {
  const blogs: BlogPage[] = (context as BlogPostsListContext).blogs;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pl-[9rem]"
    >
      <div className="bg-white">
        <div>
          <div className="mx-auto">
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {blogs.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 h-[15rem]">
                    {post.data.meta_image.url ? (
                      <Image
                        src={post.data.meta_image.url}
                        alt=""
                        // layout="fill"
                        width={post.data.meta_image.dimensions.width}
                        height={post.data.meta_image.dimensions.height}
                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                      />
                    ) : (
                      <Image
                        src={"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"}
                        alt=""
                        layout="fill"
                        // width={200}
                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                      />
                    )}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.first_publication_date} className="text-gray-500">
                        {new Date(post.first_publication_date).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </time>
                      {post.tags.map((tag) => (
                        <span key={tag} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link
                          href={post.url}
                        >
                          <span className="absolute inset-0" />
                          {post.data.title[0].text}
                        </Link>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">{post.data.meta_description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostsList2;

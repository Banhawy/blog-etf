// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogPageDocumentDataSlicesSlice = RichTextSlice;

/**
 * Item in *Blog Page → Tags*
 */
export interface BlogPageDocumentDataTagsItem {
  /**
   * Tag Name field in *Blog Page → Tags*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_page.tags[].tag_name
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  tag_name: prismic.SelectField<
    "News" | "Marketing" | "Emerging Markets" | "FinTech"
  >;
}

/**
 * Content for Blog Page documents
 */
interface BlogPageDocumentData {
  /**
   * Title field in *Blog Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Slice Zone field in *Blog Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Blog Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
  /**
   * Tags field in *Blog Page*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_page.tags[]
   * - **Tab**: Tags
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  tags: prismic.GroupField<Simplify<BlogPageDocumentDataTagsItem>>;
}

/**
 * Blog Page document from Prismic
 *
 * - **API ID**: `blog_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPageDocumentData>,
    "blog_page",
    Lang
  >;

type BlogPostDocumentDataSlicesSlice = RichTextSlice;

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice>;
}

/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | BlogListHeaderSlice
  | BlogPostsListSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes =
  | BlogPageDocument
  | BlogPostDocument
  | PageDocument;

/**
 * Primary content in *BlogListHeader → Primary*
 */
export interface BlogListHeaderSliceDefaultPrimary {
  /**
   * title field in *BlogListHeader → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_list_header.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *BlogListHeader → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_list_header.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for BlogListHeader Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogListHeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogListHeaderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BlogListHeader*
 */
type BlogListHeaderSliceVariation = BlogListHeaderSliceDefault;

/**
 * BlogListHeader Shared Slice
 *
 * - **API ID**: `blog_list_header`
 * - **Description**: BlogListHeader
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogListHeaderSlice = prismic.SharedSlice<
  "blog_list_header",
  BlogListHeaderSliceVariation
>;

/**
 * Primary content in *BlogPostsList → Primary*
 */
export interface BlogPostsListSliceDefaultPrimary {
  /**
   * Featured Post field in *BlogPostsList → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_posts_list.primary.featured_post
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  featured_post: prismic.ContentRelationshipField;
}

/**
 * Default variation for BlogPostsList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogPostsListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BlogPostsListSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BlogPostsList*
 */
type BlogPostsListSliceVariation = BlogPostsListSliceDefault;

/**
 * BlogPostsList Shared Slice
 *
 * - **API ID**: `blog_posts_list`
 * - **Description**: BlogPostsList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogPostsListSlice = prismic.SharedSlice<
  "blog_posts_list",
  BlogPostsListSliceVariation
>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Primary content in *RichText → Items*
 */
export interface RichTextSliceDefaultItem {
  /**
   * image field in *RichText → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: rich_text.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  Simplify<RichTextSliceDefaultItem>
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogPageDocument,
      BlogPageDocumentData,
      BlogPageDocumentDataSlicesSlice,
      BlogPageDocumentDataTagsItem,
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BlogListHeaderSlice,
      BlogListHeaderSliceDefaultPrimary,
      BlogListHeaderSliceVariation,
      BlogListHeaderSliceDefault,
      BlogPostsListSlice,
      BlogPostsListSliceDefaultPrimary,
      BlogPostsListSliceVariation,
      BlogPostsListSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceDefaultItem,
      RichTextSliceVariation,
      RichTextSliceDefault,
    };
  }
}
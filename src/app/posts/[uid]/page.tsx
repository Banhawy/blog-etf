import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import SocialSharingButtons from "@/components/SocialMediaIcons";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  console.log("params", params);
  const page = await client
    .getByUID("blog_page", params.uid)
    .catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_page", params.uid)
    .catch(() => notFound());

  return (<>
    <div className="w-full" >
      {/* <h1>{prismic.asText(page.data.title)}</h1> */}
      <div className="bg-white px-6 pt-24 sm:pt-22 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{prismic.asText(page.data.title)}</h2>
        </div>
        {/* <SocialSharingButtons url="" all /> */}
        <div className="mt-10 border-t border-gray-200 sm:mt-8 sm:pt-8">
          <SocialSharingButtons url="elbanhawy.com" socials={[
            "facebook",
            "twitter",
            "linkedin",
            "reddit",
            "whatsapp",
            "telegram",
            "email",
          ]} />
        </div>
      </div>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  </>);
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("blog_page", {
    predicates: [prismic.filter.not("my.page.uid", "home")],
  });

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}

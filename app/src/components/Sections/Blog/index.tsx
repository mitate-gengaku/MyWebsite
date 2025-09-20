import type { AnyEntryMap, CollectionEntry } from "astro:content";

import { BlogLinkButton } from "@/components/Common/blog-link-button";
import { Section } from "@/components/Common/section";
import { Title } from "@/components/Common/title";
import { Cards } from "@/components/Sections/Blog/cards";

type Props = {
  articles: CollectionEntry<keyof AnyEntryMap>[];
};

export const Blog = ({ articles }: Props) => (
  <Section id="blog">
    <div className="mx-auto gap-y-8 max-w-5xl flex flex-col">
      <Title title="Blog" className="text-center lg:text-left" />
      <Cards articles={articles} />
      <BlogLinkButton className="mx-auto">Read more</BlogLinkButton>
    </div>
  </Section>
);

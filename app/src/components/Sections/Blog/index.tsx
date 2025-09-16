import { ExternalLinkIcon } from "lucide-react";

import type { AnyEntryMap, CollectionEntry } from "astro:content";

import { ViewCard } from "@/components/Common/card";
import { Title } from "@/components/Common/title";
import { ZennIcon } from "@/components/Icons/zenn";
import { Button } from "@/components/ui/button";
import { convertToYYYYMMDD } from "@/utils/convert-to-yyyymmdd";

type Props = {
  articles: CollectionEntry<keyof AnyEntryMap>[];
};

export const Blog = ({ articles }: Props) => (
  <section id="blog" className="px-4 py-24 lg:px-8">
    <div className="mx-auto gap-y-8 max-w-5xl flex flex-col">
      <Title title="Blog" className="text-center lg:text-left" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map(({ data: { id, title, url, authors, published } }) => (
          <ViewCard
            title={
              <>
                <ZennIcon fill="#3EA8FF" className="size-4" />
                Zenn
              </>
            }
            content={
              <div className="space-y-8">
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {title}
                </h3>
                <Button variant={"outline"} size={"sm"} asChild>
                  <a
                    href={url ?? "https://zenn.dev/mitate_gengaku"}
                    className="flex items-center gap-2"
                  >
                    <ExternalLinkIcon />
                    View Articles
                  </a>
                </Button>
              </div>
            }
            footer={
              <div className="w-full flex items-center justify-between text-gray-500">
                <p>{authors[0].name}</p>
                <p className=" text-sm">{convertToYYYYMMDD(published)}</p>
              </div>
            }
            key={id}
          />
        ))}
      </div>
      <Button
        variant={"outline"}
        className="mx-auto border border-neutral-300"
        asChild
      >
        <a href="https://zenn.dev/mitate_gengaku">記事一覧ページ</a>
      </Button>
    </div>
  </section>
);

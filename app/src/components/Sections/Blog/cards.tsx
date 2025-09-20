import { ExternalLinkIcon } from "lucide-react";

import type { AnyEntryMap } from "astro:content";
import type { CollectionEntry } from "astro:content";

import { ViewCard } from "@/components/Common/card";
import { ZennIcon } from "@/components/Icons/zenn";
import { Button } from "@/components/ui/button";
import { convertToYYYYMMDD } from "@/utils/convert-to-yyyymmdd";

type Props = {
  articles: CollectionEntry<keyof AnyEntryMap>[];
};

export const Cards = ({ articles }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {articles.map(({ data: { id, title, url, published } }) => (
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
            <p>Mitate Gengaku</p>
            <p className=" text-sm">{convertToYYYYMMDD(published)}</p>
          </div>
        }
        key={id}
      />
    ))}
  </div>
);

import { feedLoader } from "@ascorbic/feed-loader";
import { defineCollection } from "astro:content";

const zenn = defineCollection({
  loader: feedLoader({
    url: "https://zenn.dev/mitate_gengaku/feed",
  }),
});

export const collections = {
  zenn,
};

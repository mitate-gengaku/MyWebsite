import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

import type { Project } from "@/types/schema";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: import.meta.env.MICROCMS_API_KEY || "",
});

export const getProjects = async (queries?: MicroCMSQueries) => {
  const posts = await client.getList<Project>({
    endpoint: "projects",
    queries,
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return posts;
};

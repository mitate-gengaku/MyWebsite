import { ExternalLinkIcon } from "lucide-react";

import type { Project } from "@/types/schema";

import { ViewCard } from "@/components/Common/card";
import { Button } from "@/components/ui/button";

type Props = {
  projects: Project[];
};
export const Cards = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.length ? (
        projects.map(({ id, name, description, features, image, url }) => (
          <ViewCard
            title={name}
            description={description}
            content={
              <>
                <div className="space-y-8">
                  <ul className="text-sm text-gray-500 space-y-1 [&>li]:ml-4 [&>li]:list-disc">
                    {features.map(({ feature }, i) => (
                      <li key={`${feature}-${i}`}>{feature}</li>
                    ))}
                  </ul>
                  <Button variant={"outline"} size={"sm"} asChild>
                    <a href={url} className="flex items-center gap-2">
                      <ExternalLinkIcon />
                      View Project
                    </a>
                  </Button>
                </div>
                <img
                  src={image.url}
                  alt={name}
                  width={image.width}
                  height={image.height}
                  className="aspect-4/3 object-cover object-left"
                />
              </>
            }
            contentClass="grid grid-cols-2 gap-4"
            key={id}
          />
        ))
      ) : (
        <p className="text-center lg:text-left">No projects</p>
      )}
    </div>
  );
};

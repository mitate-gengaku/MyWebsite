import { ExternalLinkIcon } from "lucide-react";

import type { Project } from "@/types/schema";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  projects: Project[];
};
export const Cards = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map(({ id, name, description, features, image, url }) => (
        <Card className="hover:shadow-lg transition-all rounded-sm" key={id}>
          <CardHeader className="border-b border-gray-200">
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

import type React from "react";

import { cn } from "@/utils/cn";

type Props = { title: string } & React.ComponentProps<"h2">;

export const Title = ({ title, className, ...props }: Props) => (
  <h2
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight",
      className,
    )}
    {...props}
  >
    {title}
  </h2>
);

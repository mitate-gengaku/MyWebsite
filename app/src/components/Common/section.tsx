import type React from "react";

import { cn } from "@/utils/cn";

export const Section = ({
  className,
  ...props
}: React.ComponentProps<"section">) => (
  <section className={cn("px-4 py-24 lg:px-8", className)} {...props} />
);

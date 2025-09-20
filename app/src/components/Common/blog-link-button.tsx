import type React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

type Props = React.ComponentProps<typeof Button>;

export const BlogLinkButton = ({ className, children, ...props }: Props) => (
  <Button
    className={cn(
      "border border-neutral-300 bg-[#3EA8FF] hover:bg-[#3EA8FF]/85",
      className,
    )}
    {...props}
    asChild
  >
    <a href="https://zenn.dev/mitate_gengaku">{children}</a>
  </Button>
);

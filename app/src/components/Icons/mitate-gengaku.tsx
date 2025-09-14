import type React from "react";

import { TITLE } from "@/config/title";
import { cn } from "@/utils/cn";

type IconProps = {
  charClassName?: string | undefined;
} & React.ComponentProps<"div">;

export const MitateGengakuAscii = ({ charClassName, ...props }: IconProps) => (
  <div {...props}>
    {TITLE.map((chars, i) => (
      <div
        className="flex items-center justify-center gap-0 lg:justify-start"
        key={i}
      >
        {chars
          .replaceAll("¥", "&#xA5;")
          .split("")
          .map((char, i) => (
            <span
              className={cn("block h-4 w-2 [zoom:0.2]", charClassName)}
              key={`${char}-${i}`}
            >
              {char ? char : " "}
            </span>
          ))}
      </div>
    ))}
  </div>
);

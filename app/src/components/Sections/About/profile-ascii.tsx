import { PROFILE_ASCII } from "@/config/profile-ascii";
import { cn } from "@/lib/utils";

export const ProfileAscii = () => (
  <div className="hidden lg:block">
    {PROFILE_ASCII.map((chars, i) => (
      <div
        className="flex items-center justify-center gap-0 lg:justify-start"
        key={i}
      >
        {chars
          .replaceAll("¥", "&#xA5;")
          .split("")
          .map((char, i) => (
            <span
              className={cn("block h-4 w-2 [zoom:0.4]")}
              key={`${char}-${i}`}
            >
              {char ? char : " "}
            </span>
          ))}
      </div>
    ))}
  </div>
);

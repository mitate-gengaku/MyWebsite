import { GithubIcon } from "@/components/Icons/github";
import { XIcon } from "@/components/Icons/x";
import { ZennIcon } from "@/components/Icons/zenn";
import { Button } from "@/components/ui/button";

export const SNS = () => (
  <div className="space-y-2">
    <h4 className="font-semibold text-sm lg:text-base">Follow</h4>
    <ul className="flex items-center gap-1">
      <li>
        <Button variant={"outline"} size={"icon"} asChild>
          <a href="https://github.com/mitate-gengaku">
            <GithubIcon fill="#181717" className="size-4" />
          </a>
        </Button>
      </li>
      <li>
        <Button variant={"outline"} size={"icon"} asChild>
          <a href="https://x.com/mitate_gengaku">
            <XIcon fill="#000" className="size-4" />
          </a>
        </Button>
      </li>
      <li>
        <Button variant={"outline"} size={"icon"} asChild>
          <a href="https://zenn.dev/mitate_gengaku">
            <ZennIcon fill="#3EA8FF" className="size-4" />
          </a>
        </Button>
      </li>
    </ul>
  </div>
);

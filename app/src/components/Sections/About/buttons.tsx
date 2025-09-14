import { Button } from "@/components/ui/button";

export const Buttons = () => (
  <div className="flex items-center justify-center lg:justify-start gap-4">
    <Button
      size={"sm"}
      className="px-4 rounded-sm hover:bg-neutral-700 bg-neutral-800 cursor-pointer"
      asChild
    >
      <a href="https://zenn.dev/mitate_gengaku">Read blog</a>
    </Button>
    <Button
      size={"sm"}
      variant={"outline"}
      className="px-4 rounded-sm cursor-pointer"
    >
      <a href="#projects">View Projects</a>
    </Button>
  </div>
);

import { BlogLinkButton } from "@/components/Common/blog-link-button";
import { Button } from "@/components/ui/button";

export const Buttons = () => (
  <div className="flex items-center justify-center lg:justify-start gap-4">
    <BlogLinkButton className="px-4">Read Blog</BlogLinkButton>
    <Button size={"sm"} variant={"outline"} className="px-4 cursor-pointer">
      <a href="#projects">View Projects</a>
    </Button>
  </div>
);

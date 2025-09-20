import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils/cn";

type Props = {
  title: React.ReactNode;
  description?: React.ReactNode | undefined;
  content?: React.ReactNode | undefined;
  contentClass?: string | undefined;
  footer?: React.ReactNode | undefined;
};

export const ViewCard = ({
  title,
  description,
  content,
  contentClass,
  footer,
}: Props) => (
  <Card className="hover:shadow-lg transition-all rounded-sm">
    <CardHeader
      className={cn("border-b border-gray-200", !description && "gap-0")}
    >
      <CardTitle className={"flex items-center gap-2"}>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
    <CardContent className={contentClass}>{content}</CardContent>
    {footer && <CardFooter className="pt-4">{footer}</CardFooter>}
  </Card>
);

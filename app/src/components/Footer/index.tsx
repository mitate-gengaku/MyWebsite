import { Small } from "@/components/Footer/small";
import { SNS } from "@/components/Footer/sns";
import { Title } from "@/components/Footer/title";

export const Footer = () => (
  <footer className="px-4 py-8 lg:px-8 border-t border-gray-200 bg-gray-50">
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-col gap-4">
        <Title />
        <SNS />
      </div>
      <Small />
    </div>
  </footer>
);

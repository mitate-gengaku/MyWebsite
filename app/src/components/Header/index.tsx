import { NavMenu } from "@/components/Header/nav";
import { Title } from "@/components/Header/title";

export const Header = () => (
  <header className="px-4 py-8 lg:px-8 border-b border-gray-200">
    <div className="mx-auto max-w-5xl flex justify-between items-center">
      <Title />
      <NavMenu />
    </div>
  </header>
);

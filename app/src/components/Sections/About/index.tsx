import { Title } from "@/components/Common/title";
import { Buttons } from "@/components/Sections/About/buttons";
import { Description } from "@/components/Sections/About/description";
import { ProfileAscii } from "@/components/Sections/About/profile-ascii";

export const About = () => (
  <section id="about" className="px-4 py-24 lg:px-8">
    <div className="mx-auto flex flex-col lg:flex-row lg:items-center gap-6 max-w-5xl">
      <div className="space-y-6 text-center lg:text-left">
        <Title title="Hello. I am 御楯玄嶽" />
        <Description />
        <Buttons />
      </div>
      <ProfileAscii />
    </div>
  </section>
);

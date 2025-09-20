import { Section } from "@/components/Common/section";
import { Title } from "@/components/Common/title";
import { Buttons } from "@/components/Sections/About/buttons";
import { Description } from "@/components/Sections/About/description";
import { ProfileAscii } from "@/components/Sections/About/profile-ascii";

export const About = () => (
  <Section id="about">
    <div className="mx-auto flex flex-col lg:flex-row lg:items-center gap-6 max-w-5xl">
      <div className="space-y-6 text-center lg:text-left">
        <Title title="Hello. I am 御楯玄嶽" />
        <Description />
        <Buttons />
      </div>
      <ProfileAscii />
    </div>
  </Section>
);

import { Title } from "@/components/Common/title";
import { Cards } from "@/components/Sections/Projects/cards";
import { getProjects } from "@/utils/microcms";

const { contents: projects = [] } = await getProjects({
  orders: "createdAt",
});

export const Projects = () => (
  <section id="projects" className="px-4 py-24 lg:px-8">
    <div className="mx-auto space-y-8 max-w-5xl">
      <Title title="My Projects" className="text-center lg:text-left" />
      <Cards projects={projects} />
    </div>
  </section>
);

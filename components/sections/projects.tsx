import SectionTitle from "@/components/section-title";
import { featuredProjects } from "@/constants";
import FeaturedCard from "@/components/cards/featured-card";
import Archieve from "@/components/archieve";

const Projects = () => {
  return (
    <section id="projects" className="py-10 mdl:py-28 w-full">
      <SectionTitle title="Some Things I have Built" titleNo="02" />
      <div className="flex flex-col gap-6 md:gap-10 xl:gap-12 mt-20 md:mt-24">
        {featuredProjects.map((project, i) => (
          <FeaturedCard project={project} key={i} showReversed={i % 2 !== 0} />
        ))}
      </div>
      <Archieve />
    </section>
  );
};

export default Projects;

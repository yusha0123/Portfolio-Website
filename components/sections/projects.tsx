import SectionTitle from "@/components/section-title";
import { featuredProjects } from "@/constants";
import FeaturedCard from "@/components/cards/featured-card";

const Projects = () => {
  return (
    <section id="projects" className="py-16 lgl:py:24 w-full">
      <SectionTitle title="Some Things I have Built" titleNo="02" />

      <div className="flex flex-col gap-8 md:gap-12 xl:gap-16 mt-6 md:mt-12">
        {featuredProjects.map((project) => (
          <FeaturedCard project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

import ProjectModal from "@/components/project-modal";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ProjectModal />
    </>
  );
};

export default HomePage;

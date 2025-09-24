import SectionTitle from "@/components/section-title";
import AnimatedElement from "@/components/animated-element";
import { experiences } from "@/constants";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience" className="py-10 lgl:py-28">
      <SectionTitle title="Where I've Worked" titleNo={"02"} />

      <div className="w-full mt-6 md:mt-10">
        {experiences.map((experience, index) => (
          <AnimatedElement
            key={index}
            elementType="div"
            className="mb-8 lg:mb-12 border-l-2 border-textGreen/20 pl-6 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            motionProps={{
              transition: { duration: 0.6, delay: index * 0.2 },
            }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-3 top-3 w-6 h-6 bg-textGreen rounded-full border-4 border-bodyColor shadow-lg">
              <div className="absolute inset-0 bg-textGreen/20 rounded-full animate-pulse" />
            </div>

            {/* Experience content */}
            <div className="bg-[#112240] p-6 rounded-lg border border-textGreen/10 hover:border-textGreen/30 transition-colors duration-300">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-titleFont text-textLight font-semibold">
                    {experience.title}
                  </h3>
                  <h4 className="text-textGreen font-medium text-sm md:text-base">
                    {experience.company}
                  </h4>
                </div>
                <span className="text-textDark font-mono text-sm mt-2 sm:mt-0">
                  {experience.duration}
                </span>
              </div>

              {/* Description */}
              <ul className="text-textDark font-medium space-y-3 mb-6">
                {experience.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex items-start gap-3">
                    <span className="text-textGreen mt-1 flex-shrink-0">
                      <AiFillThunderbolt className="text-sm" />
                    </span>
                    <span className="text-sm md:text-base leading-relaxed">
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-mono text-textGreen bg-textGreen/10 rounded-full border border-textGreen/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import ArchiveCard from "./cards/archieve-card";
import { archievedProjects } from "@/constants";

const Archieve = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <h2 className="text-3xl font-titleFont font-semibold text-center">
        Other Noteworthy Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {archievedProjects.map((project, i) => (
          <ArchiveCard
            index={i}
            title={project.title}
            description={project.description}
            key={project.title}
            stack={project.stack}
            live={project.live}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Archieve;

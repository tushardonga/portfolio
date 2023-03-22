import React from "react";
import { projectsData } from "../../data";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <>
      {projectsData.length > 0 && (
        <div className="bg-secondary flex items-center flex-col min-h-screen overflow-x-hidden p-8">
          <div className="flex justify-center items-center w-full m-4">
            <h2 className="text-primary font-bold text-[3.5rem] text-center mb-8">
              Projects
            </h2>
          </div>
          <div className="w-full flex items-center justify-center flex-col">
            <div className="gap-[4.5rem] w-full flex items-center justify-center">
              {projectsData.map((project) => (
                <SingleProject
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

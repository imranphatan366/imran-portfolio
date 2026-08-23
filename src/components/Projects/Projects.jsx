import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="projects-container">

        {/* Section Heading */}
        <div className="projects-heading">
          <span>My</span> Projects
        </div>

        {/* Featured Project */}
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <div className="featured-wrapper" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}

        {/* Other Projects */}
        <div className="projects-grid">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
        </div>

      </div>

    </section>
  );
}

export default Projects;
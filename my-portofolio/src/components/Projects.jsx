import React from "react";
import SectionHeader from "./sections/SectionHeader";
import ProjectCard from "./sections/ProjectCard";
import apelmusicImage from "../assets/images/apelmusic.png";

function Projects() {
  const projects = [
    {
      title: "Apelmusic",
      description:
        "ApelMusic is a web application for booking music lessons. This project was originally developed as my final project during a fullstack engineering bootcamp.\n Although the app wasn’t fully completed by the end of the bootcamp, I’ve been actively working on it adding new features, fixing bugs, and improving the overall user experience.",
      image: apelmusicImage,
      tags: ["React JS", ".NET"],
      demoLink: "https://apelmusic-project.vercel.app/",
      githubLink: "https://github.com/FirTA/apelmusic-project",
    },
  ];
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <SectionHeader title={"Projects"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

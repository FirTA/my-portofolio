import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <img src={project.image} alt="not found" className="border-b-2" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-justify">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            target="_blank"
            href={project.demoLink}
            className="hover:bg-purple-600 hover:text-white transition duration-300 rounded-xl p-3 text-blue-600 hover:text-blue-800 flex items-center"
          >
            <i className="fas fa-external-link-alt mr-1"></i> Live Demo
          </a>
          <a
            target="_blank"
            href={project.githubLink}
            className="hover:bg-purple-600 hover:text-white transition duration-300 rounded-xl p-3 text-blue-600 hover:text-blue-800 flex items-center"
          >
            <i className="fab fa-github mr-1"></i> GitHub
          </a>
          {/* <a
            href={project.videoDemo}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <i className="fa-solid fa-video mr-1"></i> Demo
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

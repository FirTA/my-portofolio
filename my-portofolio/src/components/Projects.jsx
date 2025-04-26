import React from "react";
import SectionHeader from "./sections/SectionHeader";
import ProjectCard from "./sections/ProjectCard";
import apelmusicImage from "../assets/images/apelmusic.png";
import devboardImage from "../assets/images/DevBoardgithub.png";

function Projects() {
  const projects = [
    {
      title: "Apelmusic",
      description:
        "ApelMusic is a full-stack web application for booking music lessons. This project was originally developed as my final project during a fullstack engineering bootcamp. It features a React frontend with Material UI and a .NET Core backend with PostgreSQL(original in bootcamp is SQL Server, and i update it).  In it implements Email Confirmation, JWT Authentication, Cryptographic password, Context API for state management, and RESTful API with proper authorization roles. ",
      image: apelmusicImage,
      tags: [
        "React JS",
        "ESLint",
        ".NET",
        "ADO.NET",
        "React Router DOM",
        "Material UI",
        "axios",
      ],
      demoLink: "https://apelmusic-project.vercel.app/",
      githubLink: "https://github.com/FirTA/apelmusic-project",
    },
    {
      title: "DevBoard - Github",
      description:
        "This Web App is my personal project. Built with React.js and Tailwind CSS, it functions as a GitHub Dashboard that displays detailed information about GitHub users, including programming languages used, latest repositories, repository statistics, technical skill analysis based on programming languages used, and user activity such as recently updated repos and repository creation history by year. The application uses the GitHub API to fetch public user data.",
      image: devboardImage,
      tags: [
        "React JS",
        "React Router DOM",
        "ESLint",
        "Tailwind CSS",
        "GitHub API",
      ],
      demoLink: "https://github-board-eight.vercel.app/",
      githubLink: "https://github.com/FirTA/Github-DevBoard",
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

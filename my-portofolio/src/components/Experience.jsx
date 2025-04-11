import React from "react";
import SectionHeader from "./sections/SectionHeader";
import ExperienceItem from "./sections/ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Nawadata Solutions",
      period: "March 2023 - March 2025",
      description:
        "Developing and maintaining data pipelines, ETL processes, and data warehousing solutions.",
    },
  ];
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <SectionHeader title={"Work Experience"} />
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

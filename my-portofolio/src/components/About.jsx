import React from "react";
import SectionHeader from "./sections/SectionHeader";
import ServiceCard from "./sections/ServiceCard";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <SectionHeader title={"About Me"} />
        <div className="md-2/3 text-lg text-gray-600 leading-relaxed">
          <p className="mb-4">
            I'm a Software Engineer with background Electrical Engineering who
            enjoys learning and adapting to new technologies, especially those
            that can make a meaningful impact on people’s lives. My interest in
            tech started from a deep curiosity and a desire to create solutions
            that truly help others.
          </p>
          <p className="mb-4">
            I believe technology is a powerful tool to improve the way we live
            and work. That’s why I’m always open to new challenges and
            continuously growing—whether it’s through building applications,
            managing data, or exploring emerging technologies like machine
            learning.
          </p>
          <p>
            For me, being an engineer is not just about writing code or building
            systems, but also about understanding the people behind the problems
            and crafting the right solutions for them.
          </p>
        </div>
      </div>
      {/* <div className="mt-12 flex flex-wrap justify-center gap-6">
        <ServiceCard
          title={"Web Development"}
          icon={"laptop-code"}
          description={"Creating responsive and intuitive web applications"}
        />
      </div> */}
    </section>
  );
};

export default About;

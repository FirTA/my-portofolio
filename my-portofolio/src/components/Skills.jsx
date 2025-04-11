import React, { useState } from "react";
import {
  ProgrammingLanguages,
  Frontend,
  Backend,
  Database,
} from "./sections/ListSkills";
import SectionHeader from "./sections/SectionHeader";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages");

  const tabs = [
    { name: "Programming Languages", id: "languages" },
    { name: "Frontend", id: "frontend" },
    { name: "Backend", id: "backend" },
    { name: "Database", id: "database" },
  ];
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <SectionHeader title={"Skills & Expertise"} />

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My technical skillset spans multiple languages, frameworks, and
            tools, with varying levels of expertise and experience in each area.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 mx-2 text-sm fomt-medium transition duration-300 font-semibold rounded-lg ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === "languages" && <ProgrammingLanguages />}
          {activeTab === "frontend" && <Frontend />}
          {activeTab === "backend" && <Backend />}
          {activeTab === "database" && <Database />}
        </div>{" "}
      </div>
    </section>
  );
};

export default Skills;

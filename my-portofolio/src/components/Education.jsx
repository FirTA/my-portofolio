import React from "react";
import SectionHeader from "./sections/SectionHeader";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader title="Education" />

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Bachelor of Engineering in Electrical Engineering
                </h3>
                <p className="text-blue-600 font-medium">
                  Universitas Jenderal Soedirman
                </p>
              </div>
              <p className="text-gray-500 italic">2017 - 2022</p>
            </div>
            <p className="text-gray-600 mb-4">
              Graduated with a Bachelor's degree in Electrical Engineering,
              specializing in instrumentation and control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from "react";

const ExperienceItem = ({ title, company, period, description, isLast }) => {
  return (
    <div className={`relative pl-8 ${isLast ? "" : "mb-12"}`}>
      <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
      <div className="absolute top-0 left-0 w-8 h-8 bg-white rounded-full border-4 border-blue-600 -ml-3"></div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-blue-600 font-medium mb-1">{company}</p>
        <p className="text-gray-500 italic mb-4">{period}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;

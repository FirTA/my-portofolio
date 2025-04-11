import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
    </div>
  );
};

export default SectionHeader;

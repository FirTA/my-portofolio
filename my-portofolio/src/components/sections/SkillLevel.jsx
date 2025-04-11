import React from "react";

const SkillLevel = ({ level }) => {
  const levels = [
    { value: "beginner", color: "bg-blue-200" },
    { value: "intermediate", color: "bg-blue-400" },
    { value: "advanced", color: "bg-blue-600" },
  ];

  return (
    <div className="flex items-center space-x-1 mt-1">
      {levels.map((item, index) => (
        <div
          key={index}
          className={`h-2 w-6 rounded-sm ${
            index < levels.findIndex((l) => l.value === level) + 1
              ? item.color
              : "bg-gray-200"
          }`}
        ></div>
      ))}
      <span className="ml-2 text-xs text-gray-500 capitalize">{level}</span>
    </div>
  );
};

export default SkillLevel;

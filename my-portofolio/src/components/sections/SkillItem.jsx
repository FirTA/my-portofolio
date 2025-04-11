import React, { useState } from "react";
import SkillLevel from "./SkillLevel";
const SkillItem = ({ name, level, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-4 last:border-0">
      <div
        className="flex justify-between items-start cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <SkillLevel level={level} />
        </div>
        <button className="text-blue-600 p-1 mt-1">
          <svg
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 text-sm text-gray-600 pl-2 border-l-2 border-blue-200">
          {description}
        </div>
      )}
    </div>
  );
};

export default SkillItem;

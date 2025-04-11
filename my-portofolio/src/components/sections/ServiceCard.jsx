import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-64">
      <span className="text-blue-600 text-4xl mb-4">
        <i className={`fas fa-${icon}`}></i>
      </span>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;

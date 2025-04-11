import React from "react";

const ContactInfo = ({ icon, title, value }) => {
  return (
    <div className="flex items-start">
      <div className="text-blue-600 text-xl mr-4">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div>
        <h4 className="text-gray-700 font-medium">{title}</h4>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
};

export default ContactInfo;

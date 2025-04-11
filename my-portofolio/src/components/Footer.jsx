import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/FirTA"
            target="_blank"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/firdauztrianggoro/"
            target="_blank"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>
        <p>&copy; 2025 Firdauz Tri Anggoro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Hero = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-24 pb-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, My Name Firdauz Tri Anggoro
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A passionate Software Engineer & Developer
          </p>
          <p className="text-lg md:text-xl mb-6">
            I love to learn new technology and build amazing things.
          </p>
          <p className="text-lg md:text-xl mb-6">Look at my works</p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-white border-white
              border-2 text-blue-600
              hover:text-white hover:bg-blue-600
              hover:shadow-white
            px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg shadow-purple-800"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600
              hover:shadow-purple-800 px-6 py-3 rounded-lg font-medium transition duration-300 shadow-lg shadow-white"
            >
              See My Work
            </a>
          </div>
        </div>
        <div className="md-1/2 flex justify-center"></div>
      </div>
    </header>
  );
};

export default Hero;

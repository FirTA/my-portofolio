import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpned, setIsOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className={`text-xl font-bold ${
            scrolled ? "text-blue-600" : "text-white"
          }`}
        >
          Firdauz
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className={`${
              scrolled ? "text-gray-600" : "text-white"
            }  transition hover:text-blue-600 duration-300`}
          >
            About
          </a>
          <a
            href="#skills"
            className={`${
              scrolled ? "text-gray-600" : "text-white"
            }  transition hover:text-blue-600 duration-300`}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`${
              scrolled ? "text-gray-600" : "text-white"
            }  transition hover:text-blue-600 duration-300`}
          >
            Projects
          </a>
          <a
            href="#experience"
            className={`${
              scrolled ? "text-gray-600" : "text-white"
            }  transition hover:text-blue-600 duration-300`}
          >
            Experience
          </a>
          <a
            href="#education"
            className={`${
              scrolled ? "text-gray-600" : "text-white"
            }  transition hover:text-blue-600 duration-300`}
          >
            Education
          </a>
          <a
            href="#contact"
            className={`${
              scrolled ? "text-gray-600" : "text-white"
            }  transition hover:text-blue-600 duration-300`}
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpened(!isOpned)}
        >
          <svg
            className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden bg-white shadow-md ${
          isOpned ? "block" : "hidden"
        }`}
      >
        <a
          href="#about"
          className="block py-2 px-6 text-gray-600 hover:bg-gray-100"
          onClick={() => setIsOpened(false)}
        >
          About
        </a>
        <a
          href="#skills"
          className="block py-2 px-6 text-gray-600 hover:bg-gray-100"
          onClick={() => setIsOpened(false)}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="block py-2 px-6 text-gray-600 hover:bg-gray-100"
          onClick={() => setIsOpened(false)}
        >
          Projects
        </a>
        <a
          href="#experience"
          className="block py-2 px-6 text-gray-600 hover:bg-gray-100"
          onClick={() => setIsOpened(false)}
        >
          Experience
        </a>
        <a
          href="#education"
          className="block py-2 px-6 text-gray-600 hover:bg-gray-100"
          onClick={() => setIsOpened(false)}
        >
          Education
        </a>
        <a
          href="#contact"
          className="block py-2 px-6 text-gray-600 hover:bg-gray-100"
          onClick={() => setIsOpened(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

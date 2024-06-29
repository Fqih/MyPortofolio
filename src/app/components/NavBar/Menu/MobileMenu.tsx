import React, { useState } from 'react';

interface MobileMenuProps {}

const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="md:hidden flex items-center z-10">
      <button
        onClick={toggleMenu}
        className="text-gray-400 focus:outline-none relative w-6 h-6"
        aria-label="Toggle Menu"
      >
        <svg
          className={`absolute top-0 left-0 w-6 h-6 transition-transform transform ${menuOpen ? 'rotate-45 opacity-0 duration-500' : 'rotate-0 opacity-100 duration-500'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg
          className={`absolute top-0 left-0 w-6 h-6 transition-transform transform ${menuOpen ? 'rotate-0 opacity-100 duration-500' : 'rotate-45 opacity-0 duration-500'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {menuOpen && (
        <div className="absolute top-16 right-0 mt-2 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg py-2 px-4 shadow-lg">
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#aboutme"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white py-1 px-2 rounded relative transition duration-300 group inline-block"
              >
                <span className="relative">
                  About Me
                  <span className="absolute left-0 right-0 bottom-[-5px] h-0.5 bg-white origin-bottom transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#certif"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white py-1 px-2 rounded relative transition duration-300 group inline-block"
              >
                <span className="relative">
                  Certificate
                  <span className="absolute left-0 right-0 bottom-[-5px] h-0.5 bg-white origin-bottom transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white py-1 px-2 rounded relative transition duration-300 group inline-block"
              >
                <span className="relative">
                  Contact
                  <span className="absolute left-0 right-0 bottom-[-5px] h-0.5 bg-white origin-bottom transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white py-1 px-2 rounded relative transition duration-300 group inline-block"
              >
                <span className="relative">
                  Project
                  <span className="absolute left-0 right-0 bottom-[-5px] h-0.5 bg-white origin-bottom transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

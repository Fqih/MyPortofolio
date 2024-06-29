import React from 'react';
import { useTheme } from 'next-themes';

interface DesktopMenuProps {}

const DesktopMenu: React.FC<DesktopMenuProps> = () => {
  const { theme } = useTheme();

  return (
    <div className={`hidden ml-auto md:block md:w-auto relative ${theme === 'dark' ? 'text-white' : 'text-black'}`} id="navbar">
      <ul className="flex space-x-4">
        <li>
          <a href="#aboutme" className={`text-gray-900 hover:text-gray-400 py-3 px-4 rounded relative transition duration-300 group inline-block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <span className="relative">
              About Me
              <span className={`absolute left-0 right-0 bottom-[-5px] h-0.5 bg-${theme === 'dark' ? 'white' : 'gray-900'} origin-bottom transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
            </span>
          </a>
        </li>
        <li>
          <a href="#certif" className={`text-gray-900 hover:text-gray-400 py-3 px-4 rounded relative transition duration-300 group inline-block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <span className="relative">
              Certificate
              <span className={`absolute left-0 right-0 bottom-[-5px] h-0.5 bg-${theme === 'dark' ? 'white' : 'gray-900'} origin-bottom transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
            </span>
          </a>
        </li>
        <li>
          <a href="#contact" className={`text-gray-900 hover:text-gray-400 py-3 px-4 rounded relative transition duration-300 group inline-block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <span className="relative">
              Contact
              <span className={`absolute left-0 right-0 bottom-[-5px] h-0.5 bg-${theme === 'dark' ? 'white' : 'gray-900'} origin-bottom transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
            </span>
          </a>
        </li>
        <li>
          <a href="#projects" className={`text-gray-900 hover:text-gray-400 py-3 px-4 rounded relative transition duration-300 group inline-block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <span className="relative">
              Project
              <span className={`absolute left-0 right-0 bottom-[-5px] h-0.5 bg-${theme === 'dark' ? 'white' : 'gray-900'} origin-bottom transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;

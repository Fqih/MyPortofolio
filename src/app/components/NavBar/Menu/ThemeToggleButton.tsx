import React, { useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggleButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <div className={`relative ml-auto mr-5 inline-block w-14 h-7 bg-gray-300 rounded-full p-1 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-900'}`}>
      <button
        className={`absolute inset-y-0 left-0 w-7 h-7 bg-white rounded-full shadow-md transform transition-transform ${theme === 'dark' ? 'translate-x-full bg-blue-700' : 'translate-x-0 bg-gray-200'} border-2 border-transparent hover:border-blue-400 focus:outline-none focus:border-blue-400`}
        onClick={toggleTheme}
      >
      </button>
    </div>
  );
};

export default ThemeToggleButton;

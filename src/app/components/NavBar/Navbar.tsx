import React from 'react';
import MobileMenu from './Menu/MobileMenu';
import DesktopMenu from './Menu/DekstopMenu';
import ThemeToggleButton from './Menu/ThemeToggleButton';
import { ThemeProvider, useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider attribute="class">
      <header className="p-4 relative z-50">
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`fixed top-0 left-0 right-0 ${
            theme === 'dark' ? 'bg-dark bg-opacity-80' : 'bg-white bg-opacity-50'
          } backdrop-blur-lg rounded-xl shadow-xl transition-shadow duration-300 sm:mx-4 sm:mt-4`}
          style={{ height: '70px' }}
        >
          <div className="flex items-center justify-between mx-auto h-full px-6 sm:px-8">
            <a
              href="/"
              className={`text-xl md:text-2xl font-light ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
            >
              Faqih Hakim
            </a>
            <DesktopMenu />
            <ThemeToggleButton />
            <MobileMenu />
          </div>
        </motion.nav>
      </header>
    </ThemeProvider>
  );
};

export default Navbar;

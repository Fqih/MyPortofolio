"use client";
import Navbar from './components/NavBar/Navbar';
import { useState, useEffect } from 'react';
import HeroSection from './components/Main/HeroSection';
import Footer from './components/Footer/Footer';
import Projects from './components/Main/Projects';
import AboutMe from './components/Main/AboutMe';
import { useTheme } from 'next-themes';
import ContactMe from './components/Main/ContactMe';
import Certificates from './components/Main/Certificates';
import Skills from './components/Main/Skill';

export default function Home() {
  const { theme } = useTheme();
  const [backgroundImage, setBackgroundImage] = useState('/Images/bg-light.jpg');

  useEffect(() => {
    if (theme === 'dark') {
      setBackgroundImage('/Images/bg-dark.jpg');
    } else {
      setBackgroundImage('/Images/bg-light.jpg');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-[#110B11] via-[#08101b] to-[#000000]' : 'bg-gradient-to-br from-[#ffffff] via-[#f8f9f9] to-[#ffffff]'}`}>
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className={`fixed inset-0 opacity-95 bg-gradient-to-br ${theme === 'dark' ? 'from-[#000000] via-[#08101b] to-[#110B11]' : 'bg-white hiden'}`}></div>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
      </main>
      <div className="relative z-10">
        <AboutMe />
        <Projects />
        <Certificates />
        <Skills />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

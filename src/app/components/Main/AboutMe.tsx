import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from 'next-themes';
import CustomButton from "./atom/CostumButton"; 
import Image from 'next/image';

const AboutMe = () => {
    const { theme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1 
            }
        );

        const sectionNode = sectionRef.current;
        if (sectionNode) {
            observer.observe(sectionNode);
        }

        return () => {
            if (sectionNode) {
                observer.unobserve(sectionNode);
            }
        };
    }, []);

    return (
        <ThemeProvider defaultTheme="dark" attribute="class">
            <section ref={sectionRef} className="about-section py-16" id="aboutme">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                        style={{ overflow: 'hidden' }}
                    >
                        <h2 className="text-3xl font-bold mb-10">About Me</h2>
                        <div className="relative mx-auto " style={{ width: '250px', height: '250px' }}>
                            <Image src="/Images/saya.jpg" alt="Foto Saya" layout="fill" objectFit="cover" className="rounded-full" />
                        </div>
                        <p className="text-lg sm:pl-20 sm:pr-20 p-10">
                        Hello everyone! As a second-year informatics student, I have a strong passion for artificial intelligence and data science. I`ve developed a strong grasp of the principles of computer science during my studies, and I`m constantly curious to learn more about these exciting areas.

                        I maintain my activity level outside of school by becoming involved in a number of groups. In addition to honing my technical talents, these experiences have improved my leadership, cooperation, and communication qualities.
                        </p>
                        <CustomButton 
                            text="Let's Connect"
                            href="#footer"
                        />
                    </motion.div>
                </div>
            </section>
        </ThemeProvider>
    );
};

export default AboutMe;

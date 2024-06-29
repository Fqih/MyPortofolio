import React from "react";
import Text from "./atom/Text";
import CustomButton from "./atom/CostumButton";
import { ThemeProvider, useTheme } from 'next-themes';

const HeroSection = () => {
    const { theme, setTheme } = useTheme();


    return (
        <ThemeProvider defaultTheme="dark" attribute="class">
            <section className="relative overflow-hidden min-h-screen flex items-center justify-center sm:py-20">
                <div className={`relative z-10 container mx-auto px-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    <div className="flex flex-col items-center justify-center text-center h-full">
                        <Text />
                        <CustomButton
                            text="See My CV"
                            href="https://docs.google.com/document/d/1Ld33b2C-uIOscTFHzqtCaB_WsK1wlotg2dTaSt1t2uw/edit"
                        />
                    </div>
                </div>
            </section>
        </ThemeProvider>
    );
};

export default HeroSection;

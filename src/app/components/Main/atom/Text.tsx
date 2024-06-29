import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Text = () => {
    return (
        <div className="mb-5 col-span-7 sm:col-span-6 flex flex-col justify-center items-center sm:items-start">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4">
                    Hello, I`M
                </h1>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4">
                    <TypeAnimation
                        sequence={[
                            'Faqih Hakim',
                            1000,
                            'Data Enthusiast',
                            1000,
                            'From Indonesia',
                            1000,  
                            'Ai/ML Dev',
                            1000,  
                            'FrontEnd Dev',
                            1000
                        ]}
                        wrapper="h1"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                <p className="text-sm lg:text-xl text-center">
                    Welcome! Dive deeper to discover my passion and expertise in Data. Let`s create something great!
                </p>
            </div>
        </div>
    );
};

export default Text;

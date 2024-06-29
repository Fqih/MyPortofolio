import React from 'react';
import { motion } from 'framer-motion';

interface CustomButtonProps {
    text: string;
    onClick?: () => void;
    href?: string;
    isExternal?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, href, isExternal = false }) => {
    const ButtonComponent = isExternal ? (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-[#4F46E5] via-[#D32B7B] to-[#FF8A00] hover:from-[#4336F0] hover:via-[#CC2472] hover:to-[#FF5C00] text-white py-3 px-6 rounded-full shadow-md transition duration-300"
        >
            {text}
        </motion.a>
    ) : (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-transparent bg-gradient-to-br from-[#4F46E5] via-[#D32B7B] to-[#FF8A00] hover:from-[#4336F0] hover:via-[#CC2472] hover:to-[#FF5C00] px-6 py-3 rounded-full transition duration-300 shadow-lg group hover:scale-105"
        >
            <span className="z-10 relative">{text}</span>
            <span className="absolute inset-0 flex items-center justify-center z-0 text-transparent">{text}</span>
        </motion.button>
    );

    return (
        <>
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {ButtonComponent}
                </a>
            ) : (
                <>{ButtonComponent}</>
            )}
        </>
    );
};

export default CustomButton;

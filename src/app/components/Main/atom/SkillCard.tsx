import React from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FaDatabase, FaCode, FaCogs } from 'react-icons/fa';

interface SkillCardProps {
    title: string;
    percentage: number;
    icon: React.ReactNode;
    experienceYears: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, percentage, icon, experienceYears }) => {
    const { theme } = useTheme();

    return (
        <div className={`p-4 rounded-lg shadow-md m-2 w-72 ${theme === 'dark' ? 'dark:text-white bg-gray-700' : 'text-gray-900 bg-white'}`}>
            <div className="flex items-center mb-2">
                {icon}
                <h3 className={`text-lg font-semibold ml-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                </h3>
            </div>
            <div className={`w-full bg-gray-200 rounded-full h-4 ${theme === 'dark' ? 'dark:bg-gray-700' : 'bg-gray-200'}`}>
                <motion.div
                    className={`h-4 rounded-full ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'}`}
                    style={{ width: `${percentage}%` }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, type: 'spring', stiffness: 80 }}
                ></motion.div>
            </div>
            <motion.p
                className="text-right mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{ color: theme === 'dark' ? '#fff' : '#000' }}
            >
                {percentage}% ({experienceYears} yrs)
            </motion.p>
        </div>
    );
};

export default SkillCard;

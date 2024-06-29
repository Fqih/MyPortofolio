import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryButton from './atom/CategoryButton';
import SkillCard from './atom/SkillCard';
import { FaDatabase, FaCode, FaCogs } from 'react-icons/fa';

interface Skill {
    title: string;
    percentage: number;
    icon: React.ReactNode;
    experienceYears: number;
}

interface SkillsData {
    dataScience: Skill[];
    webDevelopment: Skill[];
    tools: Skill[];
    [key: string]: Skill[];
}

const skillsData: SkillsData = {
    dataScience: [
        { title: 'Python', percentage: 85, icon: <FaDatabase />, experienceYears: 3 },
        { title: 'Pandas', percentage: 80, icon: <FaDatabase />, experienceYears: 2 },
        { title: 'TensorFlow', percentage: 70, icon: <FaDatabase />, experienceYears: 1 },
    ],
    webDevelopment: [
        { title: 'JavaScript', percentage: 90, icon: <FaCode />, experienceYears: 4 },
        { title: 'React', percentage: 85, icon: <FaCode />, experienceYears: 3 },
        { title: 'Next.js', percentage: 75, icon: <FaCode />, experienceYears: 2 },
    ],
    tools: [
        { title: 'Git', percentage: 80, icon: <FaCogs />, experienceYears: 3 },
        { title: 'Docker', percentage: 70, icon: <FaCogs />, experienceYears: 2 },
        { title: 'Jenkins', percentage: 60, icon: <FaCogs />, experienceYears: 1 },
    ],
};

const Skills: React.FC = () => {
    const { theme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState<string>('dataScience');

    const handleCategoryChange = (category: string) => {
        if (category in skillsData) {
            setSelectedCategory(category);
        }
    };

    return (
        <section className={`py-16`} id="skills">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-400">Skills and Tools</h2>
                <div className="mb-8">
                    <motion.div className="flex justify-center mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <CategoryButton
                            icon={<FaDatabase />}
                            text="Data"
                            active={selectedCategory === 'dataScience'}
                            onClick={() => handleCategoryChange('dataScience')}
                        />
                        <CategoryButton
                            icon={<FaCode />}
                            text="Web"
                            active={selectedCategory === 'webDevelopment'}
                            onClick={() => handleCategoryChange('webDevelopment')}
                        />
                        <CategoryButton
                            icon={<FaCogs />}
                            text="Tools"
                            active={selectedCategory === 'tools'}
                            onClick={() => handleCategoryChange('tools')}
                        />
                    </motion.div>
                    <AnimatePresence mode="wait">
                        <motion.div className="justify-center flex flex-wrap"
                            key={`${selectedCategory}-${skillsData[selectedCategory].length}`}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            {skillsData[selectedCategory].map((skill, index) => (
                                <SkillCard
                                    key={index}
                                    title={skill.title}
                                    percentage={skill.percentage}
                                    icon={skill.icon}
                                    experienceYears={skill.experienceYears} // Tambah properti experienceYears
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skills;

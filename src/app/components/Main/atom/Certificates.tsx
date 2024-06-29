import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import CategoryButton from './CategoryButton';
import { FaDatabase, FaCode, FaFile } from 'react-icons/fa';

export interface Certificate {
    image: string;
    name: string;
    description: string;
    credentialLink: string;
}

export interface CertificatesData {
    dataScience: Certificate[];
    webDevelopment: Certificate[];
    participation: Certificate[];
    [key: string]: Certificate[];
}

interface Props {
    certificates: CertificatesData;
}

const Certificates: React.FC<Props> = ({ certificates }) => {
    const { theme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState<string>('dataScience');

    // Handle category change function
    const handleCategoryChange = (category: string) => {
        if (category in certificates) {
            setSelectedCategory(category);
        }
    };

    return (
        <section className={`py-16`} id="certificates">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-400">Certificates</h2>
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
                                icon={<FaFile />}
                                text="Present"
                                active={selectedCategory === 'participation'}
                                onClick={() => handleCategoryChange('participation')}
                            />
                    </motion.div>
                    <AnimatePresence>
                        <motion.div className="justify-center flex flex-wrap"
                            key={`${selectedCategory}-${certificates[selectedCategory].length}`} 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {certificates[selectedCategory].map((certificate, index) => (
                                <Card
                                    key={index}
                                    title={certificate.name}
                                    description={certificate.description}
                                    imgUrl={certificate.image}
                                    projectUrl={certificate.credentialLink}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Certificates;

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useInView } from 'react-intersection-observer';

type CardProps = {
  title: string;
  description: string;
  imgUrl: string;
  projectUrl: string;
};

const Card: React.FC<CardProps> = ({ title, description, imgUrl, projectUrl }) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const handleButtonClick = () => {
    window.open(projectUrl, '_blank');
  };

  return (
    <motion.div
      ref={ref}
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${theme === 'dark' ? 'dark:bg-gray-800' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      style={{ width: '100%', maxWidth: '400px', margin: '0 auto', marginBottom: '2rem' }} 
    >
      <div className="relative h-64">
        <Image src={imgUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className={`text-gray-900 font-semibold text-lg mb-2 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
          {title}
        </h3>
        <p className={`text-gray-600 ${theme === 'dark' ? 'dark:text-gray-300' : ''}`}>{description}</p>
        <div className="mt-2">
          <button
            className={`text-blue-500 ${theme === 'dark' ? 'dark:text-blue-300' : ''}`}
            onClick={handleButtonClick}
          >
            View
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

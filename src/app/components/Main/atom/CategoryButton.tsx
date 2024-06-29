import React from 'react';

interface CategoryButtonProps {
    text: string;
    icon: React.ReactNode;
    active: boolean;
    onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ text, icon, active, onClick }) => {
    return (
        <button
            className={`flex items-center px-4 py-2 mx-2 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none ${active ? 'bg-gray-300' : ''}`}
            onClick={onClick}
        >
            <span className="mr-2">{icon}</span>
            <span>{text}</span>
        </button>
    );
};

export default CategoryButton;

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useTheme } from 'next-themes';
import CustomButton from './atom/CostumButton';
import { motion } from 'framer-motion';

const ContactMe: React.FC = () => {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
            const response = await fetch('../../api/send-mail.tsx', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                alert('Email has been sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Failed to send email. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        }
    };
    

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.section 
            className="relative py-16" 
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className={theme === 'dark' ? 'text-white text-center font-bold text-3xl mb-4' : 'text-gray-900 text-center font-bold text-3xl mb-4'}>Contact Me</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className={`py-2 px-3 rounded-md focus:outline-none ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-200 border-gray-300 text-gray-900'}`}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className={`py-2 px-3 rounded-md focus:outline-none ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-200 border-gray-300 text-gray-900'}`}
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className={`py-2 px-3 rounded-lg focus:outline-none h-32 resize-none ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-200 border-gray-300 text-gray-900'}`}
                            required
                        ></textarea>
                        <div className="self-center">
                            <CustomButton text="Send Me" />
                        </div>
                    </form>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactMe;

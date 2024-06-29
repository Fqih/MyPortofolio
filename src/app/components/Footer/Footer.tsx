import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4" id='footer'>
                <div className="flex justify-center space-x-4">
                    <a href="#!" className="text-gray-300 hover:text-white">
                        <FaFacebookF className="text-2xl" />
                    </a>
                    <a href="#!" className="text-gray-300 hover:text-white">
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="https://www.instagram.com/fqihhkim21_/?hl=id" className="text-gray-300 hover:text-white">
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/faqih-hakim/" className="text-gray-300 hover:text-white">
                        <FaLinkedinIn className="text-2xl" />
                    </a>
                    <a href="https://github.com/Fqih" className="text-gray-300 hover:text-white">
                        <FaGithub className="text-2xl" />
                    </a>
                </div>
                <div className="text-center mt-4">
                    © {new Date().getFullYear()} Faqihhakim. All Rights Reserved.
                    <br />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

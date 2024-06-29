import React from 'react';
import Certificates, { CertificatesData } from './atom/Certificates';

// Contoh data sertifikat
const certificatesData: CertificatesData = {
    dataScience: [
        {
            image: '/Images/s1.png',
            name: 'Machine Learning For Beginner',
            description: 'Dicoding Indonesia',
            credentialLink: 'https://www.dicoding.com/certificates/1OP8WN28VXQK',
        },
        {
            image: '/Images/s2.png',
            name: 'Basic AI',
            description: 'Dicoding Indonesia',
            credentialLink: 'https://www.dicoding.com/certificates/ERZR1YWDNZYV',
        },
        {
            image: '/Images/s3.png',
            name: 'Data Visualization',
            description: 'Dicoding Indonesia',
            credentialLink: 'https://www.dicoding.com/certificates/N9ZOOD348ZG5',
        },
        {
            image: '/Images/4.png',
            name: 'Analytics Data With Python',
            description: 'Dicoding Indonesia',
            credentialLink: 'https://www.dicoding.com/certificates/JLX17522JX72',
        },
        {
            image: '/Images/s5.png',
            name: 'Classify Images With TensorFlow',
            description: 'Google Cloud Skill Boost',
            credentialLink: 'https://www.cloudskillsboost.google/public_profiles/b79023b6-fbcf-4e48-92d3-01dea1ae20ec/badges/9272929',
        },
    ],
    webDevelopment: [
        {
            image: '/path/to/image2.jpg',
            name: 'Certificate 2',
            description: 'Description of Certificate 2',
            credentialLink: 'https://example.com/certificate2',
        },
        {
            image: '/path/to/image3.jpg',
            name: 'Certificate 3',
            description: 'Description of Certificate 3',
            credentialLink: 'https://example.com/certificate3',
        },
        {
            image: '/path/to/image3.jpg',
            name: 'Certificate 3',
            description: 'Description of Certificate 3',
            credentialLink: 'https://example.com/certificate3',
        },
        {
            image: '/path/to/image3.jpg',
            name: 'Certificate 3',
            description: 'Description of Certificate 3',
            credentialLink: 'https://example.com/certificate3',
        },
        
    ],
    participation: [
        {
            image: '/path/to/image3.jpg',
            name: 'Certificate 3',
            description: 'Description of Certificate 3',
            credentialLink: 'https://example.com/certificate3',
        },
        {
            image: '/path/to/image3.jpg',
            name: 'Certificate 3',
            description: 'Description of Certificate 3',
            credentialLink: 'https://example.com/certificate3',
        },
        {
            image: '/path/to/image3.jpg',
            name: 'Certificate 3',
            description: 'Description of Certificate 3',
            credentialLink: 'https://example.com/certificate3',
        },
    ],
};

const Page = () => {
    return (
        <div id='certif'>
            <Certificates certificates={certificatesData} />
        </div>
    );
};

export default Page;

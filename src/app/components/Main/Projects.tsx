import React from 'react';
import Card from './atom/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTheme } from 'next-themes';

interface Project {
  title: string;
  description: string;
  imgUrl: string;
  projectUrl: string;
}

const Projects = () => {
  const { theme } = useTheme();
  
  const projects: Project[] = [
    {
      title: 'Model Image Clasification',
      description: 'Classifications Rock Paper Scissors',
      imgUrl: '/Images/Tensor.jpg',
      projectUrl: 'https://github.com/Fqih/ImageClasificationModel',
    },
    {
      title: 'Air Quality in Guangyuan',
      description: 'Analisys data And Create Dahsboard',
      imgUrl: '/Images/streamlit.png',
      projectUrl: 'https://github.com/Fqih/AnalisisData',
    },
    {
      title: 'Model NLP',
      description: 'Natural Language Processing',
      imgUrl: '/Images/Tensor.jpg',
      projectUrl: 'https://github.com/Fqih/Model-NLP',
    },
    {
      title: 'Time Series Model',
      description: 'Using Tensorflow',
      imgUrl: '/Images/Tensor.jpg',
      projectUrl: 'https://github.com/Fqih/TimeSeriesModel',
    },
    {
      title: 'Coming Soon',
      description: 'Deploy Model',
      imgUrl: '/Images/Tensor.jpg',
      projectUrl: 'https://example.com/project5',
    },
    {
      title: 'Website Ecommerce',
      description: 'Using React-Bootstrap',
      imgUrl: '/Images/React.png',
      projectUrl: 'https://example.com/project6',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      autoPlay: true,
      autoPlaySpeed: 2000,
      showDots: false,
    },
  };

  return (
    <section className="project mb-10 mt-10" id="projects">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Projects</h2>
        <p className={`text-center mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Innovative projects tackling diverse challenges.</p>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          containerClass="carousel-container"
          itemClass="carousel-item p-2"
          keyBoardControl
          centerMode={false}
          draggable
          focusOnSelect={false}
          transitionDuration={500}
          customTransition="transform 500ms ease-in-out"
        >
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;

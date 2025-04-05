import React from "react";
import { motion } from "framer-motion";
import p1 from "../assets/p1.png"
const ProjectCard = ({ title, description, image, technologies, demoLink, codeLink }) => {
  return (
    <motion.div
      className="bg-black border border-green-500 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img src={image} alt={title} className="w-full h-52 object-cover border-b border-green-500" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-green-400 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-600 text-white text-xs rounded-md shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-500 transition-all duration-300"
            >
              Live Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-green-500 text-white rounded-md text-sm font-medium hover:bg-green-500 transition-all"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform with authentication, payments, and product listings.",
      image: "https://res.cloudinary.com/dnxvyozo1/image/upload/v1743841891/Screenshot_2025-03-17_115750_lovrn6.png",
      technologies: ["React", "Node.js", "MongoDB", "RazorPay","Express","Tailwind","JavaScript"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/project",
    },
    {
      title: "Learning Management System",
      description: "A Learning Management System (LMS) built using React and Tailwind CSS provides an interactive and responsive platform for managing online courses, students, and instructors.",
      image: "https://res.cloudinary.com/dnxvyozo1/image/upload/v1743841899/edemy_image_2_niut2o.png",
      technologies: ["React", "Redux", "cloundinary", "Tailwind CSS","clerk"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/techy05-v/LMS.git",
    },
    {
      title: "Crypto Tracker",
      description: "A Crypto Tracker built with React and Tailwind CSS allows users to monitor real-time cryptocurrency prices, trends, and market data..",
      image: "https://res.cloudinary.com/dnxvyozo1/image/upload/v1743841909/Screenshot_2025-03-14_203156_vv1rtt.png",
      technologies: ["JavaScript", "OpenCrypto API", "Chart.js", "CSS Grid"],
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/project",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-green-400 mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Projects
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 al ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
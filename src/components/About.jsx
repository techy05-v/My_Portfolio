import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-[#0F3D3E] to-[#051F20] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          
          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg" 
              alt="About Me" 
              className="rounded-3xl shadow-xl max-w-md lg:max-w-lg w-[600px] border-4 border-green-500"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 lg:pl-12 text-center lg:text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-wide">
              About <span className="text-green-400">Me</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hi there! I'm <span className="text-green-400 font-semibold">Vishnu P R</span>, a passionate web developer focused on creating sleek, functional, and user-friendly applications.
              With <span className="text-green-300 font-semibold">1</span> years of experience, I've worked on various projects, honing my skills in frontend development using React and backend technologies.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I love solving complex problems and bringing ideas to life through code. When I'm not coding, you can find me <span className="text-green-300 font-semibold">in Football</span>
            </p>

            {/* Stats Cards */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              {[
                { value: "1+", label: "Years Experience" },
                { value: "10+", label: "Projects Completed" },
                { value: "2+", label: "Happy Clients" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 border border-green-500 px-6 py-4 rounded-lg text-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-3xl font-bold text-green-400">{item.value}</h3>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button */}
            <motion.div
              className="mt-10 flex justify-center lg:justify-start"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/path-to-your-resume.pdf', '_blank');
                }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

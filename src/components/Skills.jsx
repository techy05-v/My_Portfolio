import React from "react";
import { motion } from "framer-motion";

const SkillCategory = ({ title, skills }) => {
  return (
    <motion.div
      className="bg-black text-white p-6 rounded-xl shadow-lg border border-green-400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-green-400 mb-4 text-center tracking-wide">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg shadow-md bg-gray-900 border border-green-500 transition-all"
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0px 4px 15px rgba(0, 255, 0, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {skill.icon && (
              <span className="text-green-400 text-lg">{skill.icon}</span>
            )}
            <span className="text-white font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "📝" },
        { name: "React", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "Redux", icon: "🔄" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚂" },
        { name: "MongoDB", icon: "🍃" },
        { name: "SQL", icon: "🗄️" },
        { name: "REST API", icon: "🔌" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "📊" },
        { name: "Webpack", icon: "📦" },
        { name: "Figma", icon: "🎨" },
        { name: "VS Code", icon: "💻" },
        { name: "Responsive Design", icon: "📱" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-r from-green-900 via-black to-green-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-green-400 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I've worked with a variety of technologies and tools throughout my
            journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

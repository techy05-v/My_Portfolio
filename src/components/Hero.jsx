import React from "react";
import { motion } from "framer-motion";
import vishnu from "../assets/vishnu.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-black via-green-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          
          {/* Text Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                VISHNU P R
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              <span className="relative inline-block">
                <motion.span
                  className="absolute inset-0 bg-green-500 blur-xl opacity-50 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                Web Developer & Designer
              </span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-green-500 text-white rounded-md font-medium shadow-md hover:bg-green-600 transition-all relative overflow-hidden border-2 border-green-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="absolute inset-0 bg-green-600 opacity-20 transform scale-150 rounded-full"></span>
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 py-3 border-2 border-green-400 rounded-md font-medium shadow-md hover:bg-green-500 hover:text-white transition-all relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="absolute inset-0 bg-green-600 opacity-20 transform scale-150 rounded-full"></span>
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image with Floating Animation */}
          <div className="hidden md:block md:w-1/2">
            <motion.div
              className="w-64 h-64 mx-auto bg-black rounded-full overflow-hidden border-4 border-green-500 shadow-lg shadow-green-500"
              animate={{
                y: [0, -10, 0], // Floating effect
                boxShadow: [
                  "0px 0px 20px rgba(34, 197, 94, 0.5)",
                  "0px 0px 40px rgba(34, 197, 94, 0.8)",
                  "0px 0px 20px rgba(34, 197, 94, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <img
                src={vishnu}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

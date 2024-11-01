import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaCode, FaShieldAlt, FaLaptopCode } from "react-icons/fa";

const IntroCard = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <Tilt className="w-full md:w-[600px]">
        <motion.div
          className="bg-gradient-to-r from-pink-500 to-purple-600 p-1 rounded-2xl shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          {/* Replace 'bg-tertiary' with your desired background color */}
          <div className="bg-gray-900 rounded-2xl py-10 px-8 flex flex-col items-center shadow-xl"> {/* Adjusted color */}
            <h2 className="text-white text-4xl font-extrabold text-center mb-3">
              Introduction
            </h2>
            <p className="text-gray-300 text-center mb-6 text-lg">
              I'm a passionate Software Developer focused on creating innovative solutions in cybersecurity and technology. 
              I believe in the power of code to transform ideas into reality.
            </p>
            <div className="flex space-x-8 mb-6">
              <div className="flex flex-col items-center">
                <FaCode className="text-purple-400 text-5xl mb-1 transition-transform duration-300 transform hover:scale-110" />
                <span className="text-gray-300 font-medium">Coding Enthusiast</span>
              </div>
              <div className="flex flex-col items-center">
                <FaShieldAlt className="text-purple-400 text-5xl mb-1 transition-transform duration-300 transform hover:scale-110" />
                <span className="text-gray-300 font-medium">Cybersecurity Advocate</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLaptopCode className="text-purple-400 text-5xl mb-1 transition-transform duration-300 transform hover:scale-110" />
                <span className="text-gray-300 font-medium">Tech Innovator</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default IntroCard;

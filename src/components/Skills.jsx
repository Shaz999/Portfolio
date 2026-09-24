import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaCode, FaShieldAlt, FaDatabase, FaPython, FaReact, FaBrain, FaRobot, FaMicrochip, FaProjectDiagram } from 'react-icons/fa';

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// SkillCard component
const SkillCard = ({ index, skill, proficiency, icon }) => (
  <Tilt className="w-full">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card transition-transform duration-300 hover:scale-105"
    >
      <div className="bg-tertiary rounded-[10px] h-[150px] w-[150px] flex justify-center items-center flex-col">
        <div className="text-white text-3xl mb-1">{icon}</div> {/* Icon displayed here */}
        <h3 className="text-white text-[18px] font-bold text-center">{skill}</h3>
        <p className="text-secondary text-[12px] text-center mt-1">
          Proficiency: <span className="font-semibold">{proficiency}</span>
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const SkillsSection = () => {
  // Skills data with icons
  const skills = [
    { skill: "Machine Learning", proficiency: "Advanced", icon: <FaBrain /> },
    { skill: "Artificial Intelligence", proficiency: "Advanced", icon: <FaRobot /> },
    { skill: "Python", proficiency: "Advanced", icon: <FaPython /> },
    { skill: "Deep Learning", proficiency: "Intermediate", icon: <FaMicrochip /> },
    { skill: "Computer Vision", proficiency: "Intermediate", icon: <FaProjectDiagram /> },
    { skill: "SQL & Data Science", proficiency: "Advanced", icon: <FaDatabase /> },
    { skill: "C++ & Java", proficiency: "Advanced", icon: <FaCode /> },
    { skill: "React JS", proficiency: "Intermediate", icon: <FaReact /> },
    { skill: "AI for Cyber Security", proficiency: "Intermediate", icon: <FaShieldAlt /> },
  ];

  return (
    <div className="px-4 sm:px-10 lg:px-20">
      <motion.div
        variants={textVariant()}
        className="mt-10 text-center"
      >
        <h2 className={`${styles.sectionHeadText} text-white text-[36px] font-extrabold mb-4`}>
          Skills
        </h2>
        <div className="h-[4px] w-[80px] bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 mx-auto mb-6" />
        <p className="text-secondary text-[14px] max-w-3xl mx-auto leading-[24px]">
          A comprehensive set of skills acquired through experience and learning.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
        {skills.map((skill, index) => (
          <SkillCard key={skill.skill} index={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(SkillsSection, "skills");

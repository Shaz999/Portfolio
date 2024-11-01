import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// EducationCard component
const EducationCard = ({ index, degree, institution, year, percentage }) => (
  <Tilt className="w-full max-w-[250px]"> {/* Set max width for square cards */}
    <motion.div
      variants={fadeIn("left", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[12px] shadow-xl transition-transform duration-300 hover:scale-105"
    >
      <div
        className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-[12px] h-[250px] w-[250px] flex flex-col justify-center items-center shadow-lg border-4 border-[#4B0082] transition-transform duration-300 transform hover:shadow-2xl"
      >
        <h3 className="text-white text-[20px] font-bold text-center">
          {degree}
        </h3>
        <p className="text-white text-[16px] text-center mt-1">
          {institution}
        </p>
        <p className="text-white text-[14px] text-center mt-1">{year}</p>
        {percentage && (
          <p className="text-white text-[16px] font-semibold text-center mt-2">
            Percentage: {percentage}%
          </p>
        )}
      </div>
    </motion.div>
  </Tilt>
);

const EducationSection = () => {
  // Education data with percentages
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering with Cyber Security & Digital Forensics",
      institution: "VIT Bhopal",
      year: "2021 - Ongoing",
      percentage: null, // No percentage since it's ongoing
    },
    {
      degree: "Class XII",
      institution: "D.A.V Public School, Jehanabad",
      year: "2021",
      percentage: 76.4,
    },
    {
      degree: "Class X",
      institution: "D.A.V Public School, Jehanabad",
      year: "2019",
      percentage: 80.8,
    },
  ];

  return (
    <>
      <motion.div 
        variants={textVariant()} 
        className="mt-20 text-center"
      >
        <h2 className={`${styles.sectionHeadText} text-white text-[36px] font-extrabold mb-4`}>
          Education
        </h2>
        <div className="h-[4px] w-[80px] bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 mx-auto mb-6" />
        <p className="text-secondary text-[14px] max-w-3xl mx-auto leading-[24px]">
          A journey of constant learning and excellence in education.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {education.map((edu, index) => (
          <EducationCard key={edu.degree} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default EducationSection;

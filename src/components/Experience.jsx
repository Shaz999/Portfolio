import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "-webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%)", // Green-pink gradient
        color: "#f8f8f8", // Light text color for readability
        borderRadius: "10px", // Rounded corners for a modern look
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
      }}
      contentArrowStyle={{ borderRight: "7px solid #bf61ff" }} // Arrow with pink tone
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        borderRadius: "50%", // Circular icon background for a clean look
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Shadow for icon depth
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain" // Slightly larger icon for emphasis
          />
        </div>
      }
      className="transition-transform duration-300 hover:scale-105 hover:bg-opacity-90" // Smooth hover effect
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-pink-200 text-[16px] font-semibold" // Light pink accent for company name
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-100 text-[14px] pl-1 tracking-wider" // Adjusted text color for readability
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-gray-300`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-5 flex flex-col items-center">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Wrapping the Experience component with SectionWrapper for alignment
export default SectionWrapper(Experience, "work");

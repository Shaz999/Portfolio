import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certification } from "../constants";

const FeedbackCard = ({
  index,
  certification,
  provider,
  date,
  logo, // Added logo prop
  description,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="relative bg-gradient-to-r from-purple-700 to-pink-500 p-6 rounded-xl shadow-lg xs:w-[320px] w-full hover:shadow-2xl transition-shadow duration-300 ease-in-out"
  >
    <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 hover:border-blue-400 hover:scale-105" />
    
    <div className="mt-1">
      <p className="text-white tracking-wider text-[22px] font-bold">{certification}</p>
      <p className="text-gray-200 mt-1 text-[14px]">{description}</p>

      <div className="mt-4 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white text-[16px] font-semibold">{provider}</p>
          <p className="mt-1 text-gray-300 text-[14px]">{date}</p>
        </div>

        {logo && (
          <img
            src={logo}
            alt={provider}
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />
        )}
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] shadow-xl`}>
      <div className={`bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-white`}>Certifications</h2>
        </motion.div>
      </div>
      
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-10`}>
        {certification.map((certification, index) => (
          <FeedbackCard key={certification.provider} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

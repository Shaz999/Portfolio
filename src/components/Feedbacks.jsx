import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certification } from "../constants";

const FeedbackCard = ({
  index,
  certification,
  provider,
  date,
  description,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="relative bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-900 p-6 rounded-xl shadow-xl xs:w-[320px] w-full hover:shadow-2xl transition-all duration-300 border border-purple-500/30"
  >
    <div className="flex items-start justify-between">
      <div className="p-3 bg-purple-600/40 rounded-lg border border-purple-400/40">
        <FaAward className="text-purple-300 text-3xl" />
      </div>
      <span className="text-xs font-semibold px-3 py-1 bg-purple-950/80 text-purple-300 rounded-full border border-purple-500/40">
        {date}
      </span>
    </div>

    <div className="mt-4">
      <p className="text-white tracking-wide text-[20px] font-extrabold leading-snug">{certification}</p>
      {description && <p className="text-gray-300 mt-2 text-[14px] leading-relaxed">{description}</p>}

      <div className="mt-5 pt-3 border-t border-purple-500/20 flex justify-between items-center">
        <p className="text-purple-300 text-[15px] font-semibold">{provider}</p>
        <span className="text-xs text-gray-400">Verified</span>
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

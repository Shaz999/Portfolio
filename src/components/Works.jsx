import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex-shrink-0 w-[300px] h-[auto] mx-4 mb-4" // Height auto to accommodate content
    >
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl shadow-lg border-2 border-transparent transition-all duration-300 hover:border-blue-400 h-full flex flex-col"
      >
        <div className="relative w-full h-[200px] rounded-2xl overflow-hidden border-2 border-transparent hover:border-purple-500 transition-all duration-300">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 transform hover:scale-110"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gradient-to-r from-purple-500 to-blue-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-3 flex-grow">
          <h3 className="text-white font-bold text-[20px] hover:text-blue-400 transition duration-300">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p> {/* No height restriction, allowing full description */}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} hover:underline`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described, with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

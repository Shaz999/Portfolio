import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import profileImage from "../assets/profile.jpg"; // Path to your image file

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Profile Image Section */}
        <div className="flex flex-col items-center mt-5">
          <img
            src={profileImage}
            alt="Shaz Alam"
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-purple-500" // Adjust size and border
          />
          <div className="w-5 h-5 rounded-full bg-[#915EFF] mt-3" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text Section */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
            Hi, I'm{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 
              font-extrabold tracking-wide"
              style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.05em" }}
            >
              Shaz Alam
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-4 text-gray-200`}
            style={{ fontFamily: "Montserrat, sans-serif", lineHeight: "1.75", maxWidth: "600px" }}
          >
            Passionate about crafting{" "}
            <span className="text-purple-400 font-bold">
              innovative solutions
            </span>{" "}
            as a Software Developer | Fueling the future of{" "}
            <span className="text-blue-400 font-bold">cybersecurity</span> with creativity and determination!
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

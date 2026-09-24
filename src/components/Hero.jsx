import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center md:items-start gap-8`}
      >
        {/* Profile Image Section */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Shaz Alam"
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-2xl border-4 border-gray-900"
            />
          </div>
          <span className="mt-3 px-4 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/60 rounded-full border border-purple-500/40 shadow-inner">
            AI / ML Engineer
          </span>
          <div className="w-5 h-5 rounded-full bg-[#915EFF] mt-3 hidden md:block" />
          <div className="w-1 sm:h-64 h-32 violet-gradient hidden md:block" />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
            Hi, I'm{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 
              font-extrabold tracking-wide"
              style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.05em" }}
            >
              Shaz Alam
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-4 text-gray-200`}
            style={{ fontFamily: "Montserrat, sans-serif", lineHeight: "1.75", maxWidth: "650px" }}
          >
            Passionate about building{" "}
            <span className="text-purple-400 font-bold">
              intelligent systems
            </span>{" "}
            as an <span className="text-blue-400 font-bold">AI Engineer & AI/ML Developer</span> | Driving innovation in Machine Learning, Deep Learning & LLMs with creativity and determination!
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#work"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-purple-400 text-purple-300 font-bold hover:bg-purple-950/40 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React from "react";
import { motion } from "framer-motion";
import resume from "../assets/resume/resume.pdf"; // Update the path if needed
import { fadeIn } from "../utils/motion";

const ResumeButton = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.3, 0.75)}
      className="mt-8 flex justify-start"
    >
      <a
        href={resume}
        download
        className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] transition-all duration-300 hover:scale-105"
      >
        {/* Gradient Border */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915EFF] to-[#6E47E5] animate-pulse-slow" />

        {/* Inner Background */}
        <span className="relative rounded-full bg-tertiary px-6 py-2 text-sm font-semibold text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-[#915EFF]/90 hover:to-[#6E47E5]/90">
           Resume
        </span>
      </a>
    </motion.div>
  );
};

export default ResumeButton;

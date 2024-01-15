"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const LeftSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="w-32 h-full flex-col items-center justify-end gap-4 text-textLight hidden xl:inline-flex fixed left-0 bottom-0"
    >
      <div className="flex flex-col gap-4">
        <a href="">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen hover:-translate-y-1 transition-all duration-300">
            <FaGithub />
          </span>
        </a>
        <a href="">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen hover:-translate-y-1 transition-all duration-300">
            <FaLinkedin />
          </span>
        </a>
        <a href="">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen hover:-translate-y-1 transition-all duration-300">
            <FaInstagram />
          </span>
        </a>
        <a href="">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen hover:-translate-y-1 transition-all duration-300">
            <IoMdMail />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-28 bg-textDark"></div>
    </motion.div>
  );
};

export default LeftSide;

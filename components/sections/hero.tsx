"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col min-h-screen lgl:h-auto gap-4 lgl:gap-8 mx-auto w-full py-10 mdl:py-24"
    >
      <motion.h3
        initial={{
          y: 10,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{
          y: 10,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.7,
        }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Yusha Tahlil.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the web.
        </span>
      </motion.h1>
      <motion.p
        initial={{
          y: 10,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.8,
        }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am Full Stack Developer with a passion for coding & problem solving
        and am skilled in creating user-friendly and responsive web applications
        using React and its ecosystem.
      </motion.p>
      <a href="https://github.com/yusha0123" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my projects!
        </motion.button>
      </a>
    </section>
  );
};

export default Hero;

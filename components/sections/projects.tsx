"use client";

import SectionTitle from "@/components/section-title";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-16 lgl:py:24 w-full">
      <SectionTitle title="Some Things I have Built" titleNo="02" />
    </section>
  );
};

export default Projects;

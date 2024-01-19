"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

type Props = {
  project: {
    title: string;
    description: string;
    live?: string;
    github: string;
    image: string;
  };
  showReversed?: boolean;
};

const FeaturedCard = ({ project, showReversed }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
      className={cn(
        "flex flex-col bg-secondaryColor md:items-center p-4 rounded-lg md:p-5 md:flex-row md:gap-12",
        showReversed && "md:flex-row-reverse"
      )}
    >
      <div className="relative md:w-1/2">
        <Link href={project.github}>
          <Image
            src={project.image}
            alt=""
            width={1000}
            height={1000}
            className="rounded-xl"
          />
          <div className="absolute top-0 left-0 bg-yellow-500 text-white font-bold px-3 py-1 rounded-tl-md rounded-br-md">
            Featured
          </div>
        </Link>
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-titleFont font-bold mb-3 text-textLight mt-5 md:pt-0">
            {project.title}
          </h2>
          <span className="flex gap-x-3">
            <a href={project.github} target="_blank">
              <FiGithub className="hover:-translate-y-1 w-6 h-6  hover:text-textGreen transition-transform cursor-pointer" />
            </a>
            {project.live && (
              <a href={project.live} target="_blank">
                <FiExternalLink className="hover:-translate-y-1 hover:text-textGreen duration-300 transition-transform cursor-pointer w-6 h-6 " />
              </a>
            )}
          </span>
        </div>
        <p className="text-md leading-7 mb-2 text-textDark font-bodyFont">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;
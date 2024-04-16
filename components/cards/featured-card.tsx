"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import useModalStore from "@/hooks/use-modal-store";

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
  const { onOpen } = useModalStore();

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
          <div className="absolute top-0 left-0 bg-yellow-500 text-white font-semibold px-2 text-sm py-1 rounded-tl-md rounded-br-md">
            Featured
          </div>
        </Link>
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center justify-center md:justify-between">
          <h2 className="md:text-2xl text-xl font-titleFont font-bold mb-3 text-textLight mt-5 md:pt-0">
            {project.title}
          </h2>
          <span className="md:flex gap-x-3 hidden">
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
        <p className="text-md leading-7 mb-2 text-textDark font-bodyFont hidden md:block">
          {project.description}
        </p>
      </div>
      <div className="flex justify-center my-1 md:hidden">
        <button
          className="featured-card-button"
          onClick={() => onOpen(project)}
        >
          Learn more
        </button>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useIsScrolled } from "@/hooks/use-is-Scrolled";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const scrolled = useIsScrolled();

  return (
    <nav
      className={cn(
        "w-full  sticky top-0 z-20 bg-bodyColor px-5 lg:px-8",
        scrolled && "shadow-navbarBoxShadow"
      )}
    >
      <div className="max-w-container h-full mx-auto py-5 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Link
            href={"/"}
            className="text-xl font-bold tracking-widest text-textGreen"
          >
            {"<Yusha/>"}
          </Link>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-sm gap-7">
            <Link
              href={"#about"}
              className="font-medium text-textDark duration-300 nav-link hover:text-textGreen"
            >
              <motion.li
                initial={{
                  y: -10,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.1,
                  delay: 0.1,
                }}
                className="flex items-center gap-1"
              >
                <span className="text-textGreen">01.</span>
                About
              </motion.li>
            </Link>
            <Link
              href={"#projects"}
              className="font-medium text-textDark duration-300 nav-link hover:text-textGreen"
            >
              <motion.li
                initial={{
                  y: -10,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.1,
                  delay: 0.2,
                }}
                className="flex items-center gap-1"
              >
                <span className="text-textGreen">02.</span>
                Projects
              </motion.li>
            </Link>
            <Link
              href={"#contact"}
              className="font-medium text-textDark duration-300 nav-link hover:text-textGreen"
            >
              <motion.li
                initial={{
                  y: -10,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.1,
                  delay: 0.3,
                }}
                className="flex items-center gap-1"
              >
                <span className="text-textGreen">03.</span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/resume.pdf" download>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textGreen border border-textGreen text-sm hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Menu Icon */}
        <div
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
          role="button"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300" />
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300" />
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

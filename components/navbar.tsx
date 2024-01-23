"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useIsScrolled } from "@/hooks/use-is-Scrolled";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { socialLinks } from "@/constants";

const Navbar = () => {
  const scrolled = useIsScrolled();
  const [isOpen, setisOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setisOpen(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

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
              onClick={handleScroll}
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
              onClick={handleScroll}
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
              onClick={handleScroll}
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
        {/*Mobile Menu */}
        <div
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
          onClick={() => setisOpen((prev) => !prev)}
          role="button"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300" />
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300" />
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300" />
        </div>
        {isOpen &&
          createPortal(
            <div
              className="fixed inset-x-0 inset-y-0 backdrop-blur-sm flex flex-col items-end z-50"
              onClick={() => setisOpen(false)}
            >
              <AnimatePresence>
                <motion.aside
                  initial={{ width: 0 }}
                  animate={{
                    width: "75vw",
                  }}
                  exit={{
                    width: 0,
                    transition: { delay: 0.7, duration: 0.3 },
                  }}
                  className="bg-secondaryColor h-full z-[99] relative px-4 py-16 overflow-y-auto"
                >
                  <MdOutlineClose
                    onClick={() => setisOpen(false)}
                    className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
                  />
                  <div className="flex flex-col items-center gap-7">
                    <ul className="flex flex-col text-base gap-7">
                      <Link
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        href="#about"
                        onClick={handleScroll}
                      >
                        <motion.li
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.2,
                            ease: "easeIn",
                          }}
                        >
                          <span className="text-textGreen">01.</span>
                          About
                        </motion.li>
                      </Link>
                      <Link
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        href="#projects"
                        onClick={handleScroll}
                      >
                        <motion.li
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.4,
                            ease: "easeIn",
                          }}
                        >
                          <span className="text-textGreen">02.</span>
                          Projects
                        </motion.li>
                      </Link>
                      <Link
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        href="#contact"
                        onClick={handleScroll}
                      >
                        <motion.li
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.5,
                            ease: "easeIn",
                          }}
                        >
                          <span className="text-textGreen">03.</span>
                          Contact
                        </motion.li>
                      </Link>
                    </ul>
                    <a href="/resume.pdf" target="_blank">
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, ease: "easeIn" }}
                        className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                      >
                        Resume
                      </motion.button>
                    </a>
                    <div className="flex gap-4">
                      {socialLinks.map((item) => (
                        <motion.a
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8, ease: "easeIn" }}
                          href={item.href}
                          target="_blank"
                          key={item.href}
                        >
                          <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                            {item.icon}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                    <motion.a
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, ease: "easeIn" }}
                      className="text-sm w-full tracking-widest text-textGreen text-center"
                      href="ymmttmy5@gmail.com"
                    >
                      <p>ymmttmy5@gmail.com</p>
                    </motion.a>
                  </div>
                </motion.aside>
              </AnimatePresence>
            </div>,
            document.body
          )}
      </div>
    </nav>
  );
};

export default Navbar;

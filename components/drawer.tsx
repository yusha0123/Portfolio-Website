"use client";

import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import { socialLinks } from "@/constants";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const Drawer = ({ isOpen, onClose, handleScroll }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-[75vw]">
                  <div className="flex h-full flex-col overflow-y-auto bg-secondaryColor py-6 rounded-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-end">
                        <div className="ml-3 flex h-7 items-center">
                          <MdOutlineClose
                            onClick={onClose}
                            className="text-3xl text-textGreen cursor-pointer transition duration-300 hover:text-red-500 absolute top-4 right-4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-7 mt-6 ">
                      <ul className="flex flex-col text-base gap-7">
                        <Link
                          className="nav-link"
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
                            <span className="drawer-span">01. </span> About
                          </motion.li>
                        </Link>
                        <Link
                          className="nav-link"
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
                            <span className="drawer-span">02.</span>
                            Projects
                          </motion.li>
                        </Link>
                        <Link
                          className="nav-link"
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
                            <span className="drawer-span">03.</span>
                            Contact
                          </motion.li>
                        </Link>
                      </ul>
                      <Link href="/resume.pdf" target="_blank">
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6, ease: "easeIn" }}
                          className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                        >
                          Resume
                        </motion.button>
                      </Link>
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
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Drawer;

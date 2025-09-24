"use client";

import { useIsScrolled } from "@/hooks/use-is-Scrolled";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useState } from "react";
import Drawer from "./drawer";
import { resumeLink } from "@/constants";

const navItems = [
  { id: "about", label: "About", index: "01." },
  { id: "experience", label: "Experience", index: "02." },
  { id: "projects", label: "Projects", index: "03." },
  { id: "contact", label: "Contact", index: "04." },
];

const MotionListItem = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.li
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.1, delay }}
    className="flex items-center gap-1"
  >
    {children}
  </motion.li>
);

const Navbar = () => {
  const scrolled = useIsScrolled();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveLink(id);

    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav
      className={cn(
        "w-full sticky top-0 z-20 bg-bodyColor px-5 lg:px-8",
        scrolled && "shadow-navbarBoxShadow"
      )}
    >
      <div className="max-w-container h-full mx-auto py-4 font-titleFont flex items-center justify-between">
        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="text-xl font-bold tracking-widest text-textGreen">
            {"<Yusha/>"}
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden mdl:flex items-center gap-7">
          <ul className="flex text-sm gap-7">
            {navItems.map((item, idx) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn("nav-link", activeLink === item.id && "active")}
                onClick={(e) => handleScroll(e, item.id)}
              >
                <MotionListItem delay={0.1 * (idx + 1)}>
                  <span className="text-textGreen">{item.index}</span>
                  {item.label}
                </MotionListItem>
              </Link>
            ))}
          </ul>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="px-4 py-2 rounded-md text-textGreen border border-textGreen text-sm hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-textGreen cursor-pointer overflow-hidden group"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <span className="w-full h-[2px] bg-textGreen transform group-hover:translate-x-2 transition-all duration-300" />
          <span className="w-full h-[2px] bg-textGreen transform translate-x-3 group-hover:translate-x-0 transition-all duration-300" />
          <span className="w-full h-[2px] bg-textGreen transform translate-x-1 group-hover:translate-x-3 transition-all duration-300" />
        </button>

        {/* Drawer */}
        <Drawer onClose={onClose} isOpen={isOpen} handleScroll={handleScroll} />
      </div>
    </nav>
  );
};

export default Navbar;

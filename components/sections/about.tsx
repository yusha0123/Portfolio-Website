import React from "react";
import SectionTitle from "@/components/section-title";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  const technologies: string[] = [
    "JavaScript (ES6+)",
    "Next.js",
    "React",
    "Typescript",
    "MySQL",
    "MongoDB",
    "TailwindCss",
    "Express JS",
  ];

  return (
    <section id="about" className="py-10 lgl:py-28 flex flex-col gap-8">
      <SectionTitle title="About Me" titleNo={"01"} />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Yusha Tahlil in my college second year, I felt the
            itch to dive into the vast world of the web. So, what did I do? I
            decided to spice things up and embarked on a journey to unravel the
            mysteries of web development. Fast forward to today, and here I am,
            a <span className="text-textGreen">Full-Stack developer</span>{" "}
            crafting digital wonders that come to life on the internet.
          </p>
          <p>
            So, whether it's unleashing the power of{" "}
            <span className="text-textGreen">
              JavaScript thunderbolts or sculpting pixels into breathtaking
              interfaces
            </span>
            , I thrive on the ever-evolving challenge of creating immersive
            online experiences.
          </p>
          <p>
            Here are a few technologies I&rsquo;ve been working with recently:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {technologies.map((technology) => (
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group mx-auto">
          <div className="absolute w-full h-80 lgl:-left-6 lgl:-top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex">
              <Image
                className="rounded-lg object-cover"
                src={"/profile.webp"}
                fill
                priority
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

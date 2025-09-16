import SectionTitle from "@/components/section-title";
import { recentTechnologies } from "@/constants";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";
import AnimatedElement from "@/components/animated-element";

const About = () => {
  return (
    <section id="about" className="py-10 lgl:py-28">
      <SectionTitle title="About Me" titleNo={"01"} />

      <div className="flex flex-col-reverse md:flex-row mt-6 md:mt-10 gap-8 lg:gap-10">
        {/* Left Side: Text */}
        <AnimatedElement
          elementType="div"
          className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -50 },
          }}
          motionProps={{
            transition: { duration: 0.6 },
          }}
        >
          <p>
            Hello! My name is{" "}
            <span className="text-textGreen">Yusha Tahlil</span>, and during my
            second year of college, I felt the itch to dive into the vast world
            of the web. So, what did I do? I decided to spice things up and
            embarked on a journey to unravel the mysteries of web development.
            Fast forward to today, and here I am, a{" "}
            <span className="text-textGreen">Full-Stack developer</span>{" "}
            crafting digital wonders that come to life on the internet.
          </p>
          <p>
            So, whether it&apos;s unleashing the power of{" "}
            <span className="text-textGreen">JavaScript thunderbolts</span> or
            sculpting pixels into{" "}
            <span className="text-textGreen">breathtaking interfaces</span>, I
            thrive on the ever-evolving challenge of creating immersive online
            experiences.
          </p>
          <p>
            Here are a few technologies I&rsquo;ve been working with recently:
          </p>
          <ul className="max-w-md text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {recentTechnologies.map((technology, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {technology}
              </li>
            ))}
          </ul>
        </AnimatedElement>

        {/* Right Side: Image */}
        <AnimatedElement
          elementType="div"
          className="w-full lg:w-1/3 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 50 },
          }}
          motionProps={{
            transition: { duration: 0.6 },
          }}
        >
          <div className="relative h-60 w-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:h-80 xl:w-80 mx-auto">
            <Image
              className="rounded-lg object-cover"
              src={"/profile.webp"}
              fill
              priority
              alt="profileImg"
            />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default About;

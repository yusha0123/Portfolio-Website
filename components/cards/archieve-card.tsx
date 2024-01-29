import { FaCode } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";
import AnimatedElement from "@/components/animated-element";

type Props = {
  live?: string;
  github?: string;
  title: string;
  description: string;
  stack: string[];
  index: number;
};

const ArchiveCard = ({
  live,
  github,
  title,
  description,
  stack,
  index,
}: Props) => {
  return (
    <AnimatedElement
      elementType="div"
      animationProps={{
        initial: { opacity: 0 },
        transition: { delay: 0.1 * index },
      }}
      motionProps={{
        whileInView: { opacity: 1 },
        viewport: { once: true },
      }}
      className="w-full rounded-lg bg-[#112240] p-7 flex flex-col justify-between gap-6 hover:-translate-y-2 transition-transform duration-300 group"
    >
      <div className="flex items-center justify-between">
        <FaCode className="text-3xl md:text-4xl text-textGreen" />
        <div className="flex gap-x-3">
          <a href={github} target="_blank">
            <FiGithub className="text-2xl hover:text-textGreen" />
          </a>
          {live && (
            <a href={live} target="_blank">
              <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />
            </a>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
          {title}
        </h2>
        <p className="text-sm mt-3">{description}</p>
      </div>
      <ul className="text-xs text-textDark flex items-center gap-3 flex-wrap">
        {stack.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </AnimatedElement>
  );
};

export default ArchiveCard;

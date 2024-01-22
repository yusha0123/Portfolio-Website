import { FaRegFolder } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";

type Props = {
  live?: string;
  github?: string;
  title: string;
  description: string;
  stack: string[];
};

const ArchiveCard = ({ live, github, title, description, stack }: Props) => {
  return (
    <div className="w-full rounded-lg bg-[#112240] p-7 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex items-center justify-between">
        <FaRegFolder className="text-3xl md:text-5xl text-textGreen" />
        <div className="flex gap-x-3">
          <a href={github}>
            <FiGithub className="text-2xl hover:text-textGreen" />
          </a>
          {live && (
            <a href={live}>
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
      <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
        {stack.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArchiveCard;

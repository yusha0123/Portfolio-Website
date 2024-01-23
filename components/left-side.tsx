import { socialLinks } from "@/constants";
import AnimatedElement from "./animated-element";

const LeftSide = () => {
  return (
    <AnimatedElement
      animationProps={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.5 },
      }}
      elementType="div"
      className="w-32 h-full flex-col items-center justify-end gap-4 text-textLight hidden xl:inline-flex fixed left-0 bottom-0"
    >
      <div className="flex flex-col gap-4">
        {socialLinks.map((link, i) => (
          <a href={link.href} target="_blank" key={i}>
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen hover:-translate-y-1 transition-all duration-300">
              {link.icon}
            </span>
          </a>
        ))}
      </div>
      <div className="w-[2px] h-28 bg-textDark"></div>
    </AnimatedElement>
  );
};

export default LeftSide;

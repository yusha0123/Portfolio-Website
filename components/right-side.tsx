import AnimatedElement from "./animated-element";

const RightSide = () => {
  return (
    <AnimatedElement
      animationProps={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.5 },
      }}
      elementType="div"
      className="h-full flex-col items-center justify-end w-32 gap-6 text-textLight hidden xl:inline-flex fixed right-0 bottom-0"
    >
      <a href="mailto:ymmttmy5@gmail.com">
        <p className="text-sm rotate-90 w-64 tracking-wide text-textLight">
          ymmttmy5@gmail.com
        </p>
      </a>
      <div className="w-[2px] h-28 bg-textDark"></div>
    </AnimatedElement>
  );
};

export default RightSide;

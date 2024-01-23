import AnimatedElement from "@/components/animated-element";

const Hero = () => {
  return (
    <section className="flex flex-col min-h-screen lgl:h-auto gap-4 lgl:gap-8 mx-auto w-full py-10 mdl:py-16">
      <AnimatedElement
        elementType="h3"
        animationProps={{
          initial: {
            y: 10,
            opacity: 0,
          },
          animate: { y: 0, opacity: 1 },
          transition: {
            duration: 0.5,
            delay: 0.6,
          },
        }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </AnimatedElement>
      <AnimatedElement
        elementType="h1"
        animationProps={{
          initial: {
            y: 10,
            opacity: 0,
          },
          animate: { y: 0, opacity: 1 },
          transition: {
            duration: 0.5,
            delay: 0.7,
          },
        }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Yusha Tahlil.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the web.
        </span>
      </AnimatedElement>
      <AnimatedElement
        elementType="p"
        animationProps={{
          initial: {
            y: 10,
            opacity: 0,
          },
          animate: { y: 0, opacity: 1 },
          transition: {
            duration: 0.5,
            delay: 0.8,
          },
        }}
        className="text-base md:max-w-[500px] text-textDark font-medium"
      >
        As a Full Stack Developer, I&rsquo;m passionate about coding and
        problem-solving. Proficient in React and frontend technologies, I excel
        in backend development, crafting robust server-side solutions that
        enhance the seamless functionality of web applications.
      </AnimatedElement>
      <a href="https://github.com/yusha0123" target="_blank">
        <AnimatedElement
          elementType="button"
          animationProps={{
            initial: {
              y: 10,
              opacity: 0,
            },
            animate: { y: 0, opacity: 1 },
            transition: {
              duration: 0.5,
              delay: 0.9,
            },
          }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my projects!
        </AnimatedElement>
      </a>
    </section>
  );
};

export default Hero;

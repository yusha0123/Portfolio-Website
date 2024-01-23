const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        03. What&rsquo;s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I am currently open to new opportunities. If you&rsquo;re looking to
        hire me or have any questions, feel free to reach out. My inbox is
        always open!
      </p>

      <a href="mailto:ymmttmy5@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;

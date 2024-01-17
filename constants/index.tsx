import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const recentTechnologies: string[] = [
  "JavaScript (ES6+)",
  "Next.js",
  "React",
  "Typescript",
  "MySQL",
  "MongoDB",
  "Tailwindcss",
  "Express JS",
];

const socialLinks = [
  {
    href: "https://github.com/yusha0123",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/yusha-tahlil",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.instagram.com/yushatahlil",
    icon: <FaInstagram />,
  },
  {
    href: "https://api.whatsapp.com/send/?phone=919330264849",
    icon: <FaWhatsapp />,
  },
];

const featuredProjects = [
  {
    title: "Expense Tracker",
    description:
      "Expensify is a MERN Stack project enabling user to track and visualize their expenses seamlessly. Razorpay enables easy upgrades, Chart JS 2 enhances report interactivity, and Chakra UI ensures a responsive UI. Nodemailer-enabled password reset ensures security. The pro version introduces a leaderboard, and an efficient tracking.",
    image: "/expensify.webp",
    github: "https://github.com/yusha0123/Expense-Tracker",
    live: "https://expensify-yusha.netlify.app",
  },
];

export { recentTechnologies, socialLinks, featuredProjects };

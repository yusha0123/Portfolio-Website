import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const recentTechnologies: string[] = [
  "JavaScript (ES6+)",
  "Next.js",
  "React",
  "Typescript",
  "MySQL",
  "MongoDB",
  "TailwindCss",
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

export { recentTechnologies, socialLinks };

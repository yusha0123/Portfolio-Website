import { ArchiveProjects, FeaturedProjects } from "@/lib/types";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

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

const featuredProjects: FeaturedProjects = [
  {
    title: "Discord Clone",
    description:
      "Discord Clone, developed on Next.js 13 framework, closely mimics Discord's core features. Users can create channels, invite others, and exchange messages in channels and 1:1 conversations. Powered by Socket.io, it supports real-time audio/video calls. Private conversations with all channel members are facilitated through Livekit WebRTC.",
    image: "/discord.webp",
    github: "https://github.com/yusha0123/Discord-Clone",
  },
  {
    title: "Notion Clone",
    description:
      "Notion Clone is a comprehensive project developed on the Next.js 14 framework, emulating the functionality of Notion. Clerk Authentication ensures secure user access. Tailwind CSS and Shadcn/UI contribute to a responsive and visually appealing UI. Real-time updates are facilitated through Convex Real-time Database, ensuring dynamic content changes.",
    image: "/notion.webp",
    github: "https://github.com/yusha0123/Notion-Clone",
    live: "https://notes-yusha.vercel.app",
  },
  {
    title: "Expense Tracker",
    description:
      "Expensify is a MERN Stack project enabling user to track and visualize their expenses seamlessly. Razorpay enables easy upgrades, Chart JS 2 enhances report interactivity, and Chakra UI ensures a responsive UI. Nodemailer-enabled password reset ensures security. The pro version introduces a leaderboard, and an efficient tracking.",
    image: "/expensify.webp",
    github: "https://github.com/yusha0123/Expense-Tracker",
    live: "https://expensify-yusha.netlify.app",
  },
  {
    title: "Social Media Website",
    description:
      "TextBook is a social media website built using the MERN stack, featuring authentication using NextAuth, a PostgreSQL database managed by Prisma, and the PrimeReact library for UI. It enables users to share their thoughts with others, like, and comment on other users' posts.",
    image: "/textbook.webp",
    github: "https://github.com/yusha0123/TextBook",
    live: "https://textbook-yusha.vercel.app/",
  },
];

const archievedProjects: ArchiveProjects = [
  {
    title: "Url Shortener",
    description:
      "MERN Stack URL Shortener with CRUD functionality, click tracking, and update/delete options.",
    github: "https://github.com/yusha0123/Url-Shortener",
    live: "https://tiny-link.fly.dev",
    stack: ["MongoDb", "Express.Js", "React.Js", "Node.Js"],
  },
  {
    title: "Mail Dash",
    description:
      "A mailbox client application that allows users to send and receive emails in real-time.",
    github: "https://github.com/yusha0123/Mail-Dash",
    live: "https://mail-dash-yusha.netlify.app",
    stack: ["React.js", "TypeScript", "Firebase", "Zustand"],
  },
  {
    title: "Chat App",
    description:
      "A real time chat application built using Cloud firestore database allowing users to chat in a group.",
    github: "https://github.com/yusha0123/firebase-chat-app",
    live: "https://chat-yusha.netlify.app",
    stack: ["React.js", "Chakra UI", "Firebase"],
  },
  {
    title: "Alpha Stock",
    description:
      "An application where users can search for US stocks, add it to Portfolio and keep a track of its Price!",
    live: "https://alpha-stock-yusha.netlify.app/",
    github: "https://github.com/yusha0123/Alpha-Stock",
    stack: ["React.Js", "Firebase", "Material UI", "Charts.Js 2"],
  },
  {
    title: "Quiz App",
    description:
      "A quiz application built using Next.js where users can play quizzes with different question categories.",
    live: "https://quizy-yusha.vercel.app/",
    github: "https://github.com/yusha0123/Quiz-App",
    stack: ["Next.Js", "Prime React", "Tailwindcss", "The Trivia API"],
  },
  {
    title: "Text Utilities",
    description:
      "A text manipulation application with Google Translation API, enabling users to translate to any language.",
    live: "https://text-util-yusha.netlify.app",
    github: "https://github.com/yusha0123/text-utilities",
    stack: ["React.Js", "Material UI", "Google Translate API"],
  },
  {
    title: "Tic tac toe",
    description: "Tic tac toe game built using React.JS",
    live: "https://tic-tac-toe-yusha.netlify.app/",
    github: "https://github.com/yusha0123/tic-tac-toe",
    stack: ["React.JS"],
  },
  {
    title: "Weather App",
    description:
      "A Weather app built using React.JS which uses Open weather Map API for fetching weather data.",
    github: "https://github.com/yusha0123/weather-app",
    live: "https://weather-yusha.netlify.app",
    stack: ["React.JS", "Material UI", "Open Weather Map API"],
  },
  {
    title: "CATOG",
    description:
      "CATOG was my first project where I integrated an API. The APIs used were the Cat API and Dog API.",
    github: "https://github.com/yusha0123/CATOG",
    live: "https://catog-by-yusha.netlify.app",
    stack: ["React.JS", "Material UI"],
  },
  {
    title: "Tesla Clone",
    description:
      "A clone of the tesla website's landing page which looks exactly similar as of 15th December 2022.",
    live: "https://tesla-yusha.netlify.app",
    github: "https://github.com/yusha0123/Tesla-Landing-Page-Clone",
    stack: ["Html", "Bootstrap", "Javascript"],
  },
  {
    title: "iNotes",
    description:
      "iNotes is an application where users can write notes, and it can perform CRUD operations in local storage.",
    github: "https://github.com/yusha0123/notes-web-app",
    live: "https://inotes-yusha.netlify.app",
    stack: ["Html", "Bootstrap", "Javascript"],
  },
  {
    title: "Battery Percentage Checker",
    description:
      "My First Web Development project which shows the percentage of battery of any device.",
    github: "https://github.com/yusha0123/Battery-Percentage-Checker",
    live: "https://battery-check-yusha.netlify.app",
    stack: ["Html", "Bootstrap", "Javascript"],
  },
];

export { featuredProjects, recentTechnologies, socialLinks, archievedProjects };

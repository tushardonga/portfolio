import { FiAtSign, FiPhone } from "react-icons/fi";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaBloggerB,
  FaStackOverflow,
  FaInstagram,
  FaFacebook,
  FaUser,
} from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import { IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { MdPhone } from "react-icons/md";

export const headerData = {
  name: "Tushar Donga",
  title: "Frontend Developer",
  desciption:
    "There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared. ",
};

export const aboutData = {
  title: "Who I am",
  description1:
    "My name's Jane. I'm a web designer and developer based in Southampton, UK.",
  description2:
    "During the day I work as a lead developer at a local agency and in the evening I  work on freelance projects and utilize the time to built my own products. I spent my leisure hours writing articles and poetry. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.",
  image: 2,
};

export const educationData = [
  {
    id: 1,
    institution: "Gyabharti Sankul Junagadh",
    course: "Higher Secondary Education",
    startYear: "2013",
    endYear: "2015",
  },
  {
    id: 2,
    institution: "Goverment Engineering College Rajkot",
    course: "Bachelor of Computer Engineering",
    startYear: "2015",
    endYear: "2019",
  },
];

export const skillsData = [
  "HTML",
  "Javascript",
  "CSS",
  "React",
  "Next JS",
  "Redux",
  "Angular",
  "Bootstrap",
  "Git",
  "Tailwind",
  "Typescript",
  "Trello",
];

export const experienceData = [
  {
    id: 1,
    company: "The One Technologies",
    jobtitle: "React Developer",
    startYear: "2019",
    endYear: "2021",
  },
  {
    id: 2,
    company: "GTCSYS",
    jobtitle: "Senior Frontend Developer",
    startYear: "2021",
    endYear: "2023",
  },
  // {
  //   id: 3,
  //   company: "Asctics",
  //   jobtitle: "Senior Frontend Developer",
  //   startYear: "2023",
  //   endYear: "Present",
  // },
];

export const projectsData = [
  {
    id: 1,
    projectName: "Pro Todo App",
    projectDesc:
      "This project provides a user-friendly interface for creating, managing and completing tasks. User can delete tasks, as well as mark them as completed.",
    tags: ["React", "CSS"],
    code: "https://github.com/tushardonga/pro-todo",
    demo: "https://github.com/tushardonga/pro-todo",
    image:
      "https://drive.google.com/uc?export=view&id=1SHtwtyaj2oe1TDvrmgMzvz-oRgfBIzHj",
  },
  {
    id: 2,
    projectName: "Basic-eCommerce",
    projectDesc:
      "You can add, filter, sort, search the product and after that you also export the data of product as csv.",
    tags: ["React", "tailwind"],
    code: "https://github.com/tushardonga/Demo_eCommerce",
    demo: "https://github.com/tushardonga/Demo_eCommerce",
    image:
      "https://drive.google.com/uc?export=view&id=1WZq5XxT1qT1DBCa26Zh_zk0pdRIukkzg",
  },
];

export const contactsData = [
  { label: "email", value: "tushar.donga.0786@gmail.com", icon: <FiAtSign /> },
  { label: "phone", value: "+919727808083", icon: <FiPhone /> },
];

export const socialsData = [
  {
    label: "GitHub",
    url: "https://github.com/tushardonga",
    icon: <FaGithub aria-label="GitHub" />,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/tushar.donga.98",
    icon: <FaFacebook aria-label="Facebook" />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/tushar-donga-1091b416a/",
    icon: <FaLinkedinIn aria-label="LinkedIn" />,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/tushar_m_donga/",
    icon: <FaInstagram aria-label="Instagram" />,
  },
  {
    label: "Twitter",
    url: "https://twitter.com/0786tushar",
    icon: <FaTwitter aria-label="Twitter" />,
  },
  {
    label: "Blogger",
    url: "https://www.blogger.com/profile/01638296940151288925",
    icon: <FaBloggerB aria-label="Blogger" />,
  },
  {
    label: "Stack Overflow",
    url: "https://stackoverflow.com/users/10147342/tushar",
    icon: <FaStackOverflow aria-label="Stack Overflow" />,
  },
];

export const sideBarData = [
  { label: "Home", icon: <IoHomeSharp className="text-xl lg:text-2xl" /> },
  { label: "About", icon: <FaUser className="text-xl lg:text-2xl" /> },
  {
    label: "Education",
    icon: <HiDocumentText className="text-xl lg:text-2xl" />,
  },
  { label: "Skills", icon: <BsCodeSquare className="text-xl lg:text-2xl" /> },
  { label: "Contact", icon: <MdPhone className="text-xl lg:text-2xl" /> },
];

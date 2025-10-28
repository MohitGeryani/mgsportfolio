import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
} from "../assets";


import proj1 from '../assets/images/project1.jpg'
import proj2 from '../assets/images/project2.jpg'
import proj3 from '../assets/images/project3.jpg'
import proj4 from '../assets/images/project4.webp'

import celebal from '../assets/images/logo2.png'
import cprime from '../assets/images/logo1.png'
import inry from '../assets/images/inry.webp'

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Celebal Technologies",
    icon: celebal,
    iconBg: "#383E56",
    date: "May 2024 - Jul 2024",
    points: [
    "Developing and sustaining web applications equipped with APIs and dashboards, leveraging React.js and associated technologies.",
    "Working alongside diverse teams, including designers and product managers, to deliver exceptional UI/UX and high-quality products.",
    "Adopting responsive design principles to guarantee seamless performance across various devices and ensuring compatibility across browsers.",
    "Employing Git for version control while fostering collaboration through code reviews and providing insightful feedback to fellow developers."
],
  },
  // {
  //   title: "React Native Developer",
  //   companyName: "Tesla",
  //   icon: inry,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Software Developer",
    companyName: "INRY",
    icon: inry,
    iconBg: "#383E56",
    date: "Sep 2024 - Feb 2025",
    points:[
    "Engineered and sustained dynamic user interfaces with React.js for multiple client projects, significantly enhancing user engagement and satisfaction.",
    "Leveraged the Redux toolkit for efficient state management, leading to the development of versatile applications and interactive dashboards that meet client needs.",
    "Designed reusable components that streamline development processes, ensuring consistency and efficiency across diverse projects.",
    "Implemented robust version control using Git, facilitating seamless collaboration and maintaining code integrity across teams.",
    "Integrated Cloudinary and Firebase for efficient media uploads and reliable cloud storage, enhancing functionality and performance in React-based projects."
],



  },
  {
    title: "Full stack Developer",
    companyName: "Cprime",
    icon: cprime,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Oct 2025",
    points:[
    "Spearheaded the development of a Personal Expense Management App, delivering an intuitive user experience and robust features.",
    "Crafted and integrated client-side and server-side scripts using JavaScript to automate workflows and enhance backend logic, significantly improving efficiency.",
    "Collaborated on the Provider Onboarding Service Project for Community Health Network (CHN), showcasing the ability to manage complex project requirements and timelines.",
    "Executed multiple development projects for clients like SABIC, adeptly handling both frontend and backend development to meet diverse client needs.",
    "Developed and implemented scripts to streamline and automate the Provider Onboarding Workflow, driving operational efficiency and enhancing functionality that appeals to stakeholders."
],

  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Mohit demonstrates a remarkable balance between technical expertise and creative problem-solving. His attention to user experience and precision in implementation make him a standout developer who consistently delivers beyond expectations",
    name: "Vijayalaxmi Varala",
    designation: "Director",
    company: "Cprime",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Collaborating with Mohit was effortless. His clean coding style, deep understanding of React and backend logic, and his willingness to help others made every sprint smoother and more productive.",
    name: "Sumit Bhatt",
    designation: "Software Developer",
    company: "Celebal Technologies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects: TProject[] = [
  {
    name: "AI Slides Chat: AI PPTx Generator & Editor",
    description:
      "An advanced AI-powered web app that creates, edits, and personalizes PowerPoint presentations from a simple text prompt.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "apis",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: proj4,
    sourceCodeLink: "https://aislides-mu.vercel.app/",
  },
  {
    name: "MG's Cart: A Fullstack Ecommerce WebApp",
    description:
      "A Fullstack Ecommerce WebApp, Implemented a shopping cart system to allow users to manage products in their cart, Role Based Auth System & more ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: proj1,
    sourceCodeLink: "https://mgscartapp.onrender.com/",
  },
  {
    name: "SocioBook: A Fullstack Social Media Application",
    description:
      "A full stack Social Media WebApp,Enabled users to create posts, upload images, like posts, and comment inlcluding following each other",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: proj2,
    sourceCodeLink: "https://sociobook-app.onrender.com/",
  },
  {
    name: "Full Stack Learning Management System",
    description:
      "Integrated RTK Query for efficient data fetching and caching, & Redux Toolkit for global state management, Utilized Cloudinary for image/video uploads and Stripe for handling course purchases and secure payments.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: proj3,
    sourceCodeLink: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };

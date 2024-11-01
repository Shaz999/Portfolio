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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  emotion,
  healthassistant,
  datadetection,
  smartinternz,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
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

const technologies = [
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Externship Project Title: Malware Detection and Classification",
    company_name: "SmartInternz",
    icon: smartinternz,
    iconBg: "#383E56",
    date: "August 2023 - November 2023",
    points: [
      "Performed OWASP security assessments, and mitigated 20+ high-risk vulnerabilities, leading to a 50% reduction in security incidents and improved overall platform integrity.",
      "Elevated workflows using OWASP tools, streamlining vulnerability scanning processes and saving an average of 15 monthly hours in manual review efforts across the security team.",
      "Excelled at IBM Qradar and OWASP tools by leading 20+ cyber security drills, reducing breach incidents by 40% and enhancing threat detection capabilities for the team by 50%.",
    ],
  },
];

const certification = [
  {
    certification: "AI for Cyber Security with IBM Qradar",
    provider: "Smartinternz",
    date: "January 2024",
    image: "https://via.placeholder.com/150?text=IBM+Qradar+Certificate", // Placeholder image
  },
  {
    certification: "The Bits & Bytes of Computer Networking",
    provider: "Coursera",
    date: "January 2023",
    image: "https://via.placeholder.com/150?text=Networking+Certificate", // Placeholder image
  },
  {
    certification: "Data Privacy Fundamentals",
    provider: "Fireside Analytics Inc.",
    date: "September 2022",
    image: "https://via.placeholder.com/150?text=Privacy+Certificate", // Placeholder image
  },
];

const projects = [
  {
    name: "AJAX: A Health Assistant",
    description:
      "Developed a predictive model using machine learning techniques such as Random Forest and Logistic Regression, with a 90% accuracy rate in forecasting disease outcomes for improved patient care strategies. Launched an analytics dashboard that refined user engagement and personalized health recommendations reducing chronic disease risk by 30-50% and cutting unnecessary hospital visits by 20%.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "yellow-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "R",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "white-text-gradient",
      },
    ],
    image: healthassistant,
    source_code_link: "https://github.com/",
  },
  {
    name: "Data Leakage Detection & Prevention System",
    description:
      "Developed a predictive model using machine learning techniques like Random Forest and Logistic Regression, achieving 90% accuracy in forecasting disease outcomes. Launched an analytics dashboard that personalized health recommendations, reducing chronic disease risk by 30-50% and hospital visits by 20%.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "yellow-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "R",
        color: "blue-text-gradient",
      },
    ],
    image: datadetection,
    source_code_link: "https://github.com/",
  },
  {
    name: "Emotion Detection System",
    description:
      "An Emotion Detection System uses AI to identify human emotions from facial expressions, voice tone, text, and physiological signals. It enhances user experience and empathy in various fields, including healthcare, customer service, marketing, and gaming, by understanding emotional states.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "white-text-gradient",
      },
      {
        name: "Open CV",
        color: "orange-text-gradient",
      },
      {
        name: "MATLAB",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: emotion,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, certification, projects };

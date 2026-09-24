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
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "Machine Learning Developer",
    icon: mobile,
  },
  {
    title: "Deep Learning & NLP Dev",
    icon: backend,
  },
  {
    title: "Computer Vision Specialist",
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
    title: "AI Engineer — Code Generation & Optimization Platform",
    company_name: "Glorious Insight",
    icon: backend,
    iconBg: "#1E293B",
    date: "2025 - 2026",
    points: [
      "Developed AI-powered APIs for code generation, code conversion, code review, and automated code optimization using Python & FastAPI.",
      "Integrated local LLMs through Ollama (including Llama-based models), leveraging LangChain, RAG, custom prompt engineering, and LLM orchestration workflows.",
      "Implemented SQL Server-based audit logging for user/API activities, optimized context & token limits, and reduced LLM response latency.",
      "Containerized backend services and supporting infrastructure with Docker, integrating AI services directly with frontend interactive workflows.",
    ],
  },
  {
    title: "AI Engineer — Offline Enterprise AI & Q&A Assistant",
    company_name: "Glorious Insight",
    icon: web,
    iconBg: "#0F172A",
    date: "2025 - 2026",
    points: [
      "Engineered an offline AI assistant for high-security enterprise environments, ensuring 100% data residency within organization infrastructure.",
      "Integrated locally hosted LLMs via Ollama and implemented document-based Q&A with RAG workflows and LangChain orchestration.",
      "Utilized Azure AI Document Intelligence for automated document parsing and text extraction into FastAPI processing pipelines.",
      "Implemented database-backed activity logging in SQL Server and containerized deployments using Docker while optimizing local model memory and inference speed.",
    ],
  },
  {
    title: "Computer Vision Engineer — TMT Goel (AI Wall & Paint Area Detection)",
    company_name: "Glorious Insight",
    icon: mobile,
    iconBg: "#334155",
    date: "2025 - 2026",
    points: [
      "Developed a custom computer-vision solution for automated wall detection, precise measurement, and painted-area estimation.",
      "Trained YOLOv8 segmentation models using custom dataset annotations created via Label Studio for A4 reference sheet and painted wall detection.",
      "Engineered real-world pixel-to-feet scaling algorithms using reference objects, calculating total wall dimensions and painted area in sq. ft.",
      "Built FastAPI endpoints for automated and manual measurement using OpenCV image processing and geometric computations, fully containerized in Docker.",
    ],
  },
  {
    title: "AI & OCR Specialist — Suzuki (Document Processing Workflow)",
    company_name: "Glorious Insight",
    icon: creator,
    iconBg: "#1E1B4B",
    date: "2025 - 2026",
    points: [
      "Architected an AI-driven document processing and OCR extraction pipeline for structured data extraction from enterprise documents.",
      "Implemented image preprocessing algorithms in OpenCV to enhance text recognition clarity and evaluated multiple OCR engine frameworks.",
      "Developed high-performance REST APIs with FastAPI for scalable document processing, optimizing text extraction accuracy through model tuning.",
    ],
  },
  {
    title: "AI Externship — AI Malware Detection & ML Classification",
    company_name: "SmartInternz",
    icon: smartinternz,
    iconBg: "#383E56",
    date: "August 2023 - November 2023",
    points: [
      "Built machine learning malware detection pipelines and OWASP security assessments, mitigating 20+ high-risk vulnerabilities and achieving a 50% reduction in security incidents.",
      "Elevated AI-driven workflows using IBM Qradar and security analytics tools, streamlining threat classification and saving 15+ monthly hours in manual review efforts.",
      "Led 20+ cybersecurity & AI threat detection drills, reducing breach incidents by 40% and enhancing threat detection capabilities by 50%.",
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
    name: "AI Code Gen & Optimization Platform",
    description:
      "An AI-powered platform for automated code generation, review, conversion, and optimization. Built with Python, FastAPI, Ollama (Llama models), LangChain, and RAG workflows with SQL Server audit logging and Docker containerization.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "orange-text-gradient",
      },
      {
        name: "Ollama",
        color: "pink-text-gradient",
      },
      {
        name: "RAG",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "white-text-gradient",
      },
    ],
    image: healthassistant,
    source_code_link: "https://github.com/Shaz999",
  },
  {
    name: "Offline Enterprise AI Assistant",
    description:
      "Secure, on-premise AI assistant for enterprise document Q&A and knowledge management. Features offline LLMs (Ollama), RAG orchestration via LangChain, Azure AI Document Intelligence, SQL Server logging, and optimized local model inference.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "LangChain",
        color: "orange-text-gradient",
      },
      {
        name: "Azure AI",
        color: "yellow-text-gradient",
      },
      {
        name: "RAG",
        color: "purple-text-gradient",
      },
      {
        name: "SQL Server",
        color: "pink-text-gradient",
      },
    ],
    image: datadetection,
    source_code_link: "https://github.com/Shaz999",
  },
  {
    name: "TMT Goel — AI Wall & Paint Detection",
    description:
      "Computer vision system for automated wall detection, pixel-to-feet scaling, and paint area calculation. Powered by YOLOv8 segmentation models trained on custom datasets, Label Studio, OpenCV geometric algorithms, and FastAPI endpoints.",
    tags: [
      {
        name: "YOLOv8",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "orange-text-gradient",
      },
      {
        name: "Label Studio",
        color: "yellow-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "white-text-gradient",
      },
    ],
    image: emotion,
    source_code_link: "https://github.com/Shaz999",
  },
  {
    name: "Suzuki — AI / OCR Document Processing",
    description:
      "Enterprise document processing workflow combining advanced image preprocessing with OpenCV, OCR text extraction frameworks, and FastAPI microservices for automated document parsing and structured data extraction.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "OCR",
        color: "orange-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
      {
        name: "Preprocessing",
        color: "purple-text-gradient",
      },
    ],
    image: healthassistant,
    source_code_link: "https://github.com/Shaz999",
  },
];

export { services, technologies, experiences, certification, projects };

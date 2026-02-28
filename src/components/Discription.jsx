import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { FaLessThan } from "react-icons/fa";
import { Link, useParams, useOutletContext } from "react-router-dom";
import style from "./style.module.scss";
const projects = [
  {
    title: "AI Resume Analyzer",
    stack: "Full-Stack Development",
    src: "https://res.cloudinary.com/dkps2avgd/image/upload/v1772284904/resume-cover_dsnjox.png",
    color: "#2dd4bf",
    description: "AI-powered resume analysis and job matching platform",
    learned: "AI integration, PDF parsing, and scalable backend design",
    video:
      "https://res.cloudinary.com/dkps2avgd/video/upload/v1772284203/ResumeAnalysis_-_RESIZE_-_Videobolt.net_il6qda.mp4",
    LiveLink: "https://resume-analyzer-client-lyart.vercel.app/",

    para1:
      "This project involves building a full-stack resume analyzer where users can securely log in, upload PDF resumes, and compare them against specific job descriptions. The system extracts resume content, analyzes skills, keywords, and role relevance using AI-driven logic, and generates a structured evaluation including match score, strengths, and improvement areas. A key challenge was handling file uploads, text extraction, and asynchronous AI responses while keeping the UI responsive and intuitive.",

    para2:
      "Through this project, I gained hands-on experience in designing REST APIs with Node.js and Express, managing authentication and protected routes, and integrating AI services into real-world applications. On the frontend, I focused on clean UX, loaders, and result visualization using React, ensuring the platform feels production-ready, scalable, and suitable for real users and recruiters.",
  },
  {
    title: "StudyAI",
    stack: "Full-Stack MERN + AI",
    src: "https://res.cloudinary.com/dkps2avgd/image/upload/v1772284944/StudyAi_eh6x7e.png",
    color: "#6366f1",
    description:
      "AI-powered document intelligence platform for smart learning and revision",
    learned:
      "Vector embeddings, semantic search, AI orchestration, and scalable full-stack architecture",
    video:
      "https://res.cloudinary.com/dkps2avgd/video/upload/v1772284490/studyAi_kccqlt.mp4",
    github: "https://github.com/sayajishubham/StudyAi",

    para1:
      "StudyAI is a full-stack AI-powered document intelligence platform that transforms static PDFs into an interactive learning experience. Users can securely upload documents, which are then parsed, structured, and processed through a semantic chunking pipeline. Each chunk is converted into vector embeddings and stored in a vector database to enable context-aware retrieval. Instead of basic keyword search, StudyAI uses similarity search to retrieve the most relevant document segments before generating AI-powered responses. The platform supports full-document summaries, section-wise notes, smart revision plans, and dynamic quiz generation — all grounded strictly in the uploaded content. A key technical challenge was designing an efficient chunking and embedding pipeline that balances context preservation, retrieval accuracy, and response latency for large documents.",

    para2:
      "Building StudyAI significantly strengthened my understanding of AI system design beyond simple API integration. I implemented a retrieval-augmented generation (RAG) architecture, handled asynchronous AI workflows, optimized backend performance for multi-document support, and ensured secure user-based document isolation. On the frontend, I developed a ChatGPT-inspired interface using React, focusing on smooth UX, loading states, and real-time feedback. I also integrated role-based access, structured API layers, and middleware-based authentication to make the system production-ready. This project demonstrates my ability to architect scalable AI applications that combine intelligent retrieval, clean UI design, and robust backend engineering into a cohesive real-world product.",
  },
  {
    title: "FitLab",
    stack: "Full-Stack MERN + AI",
    src: "https://res.cloudinary.com/dkps2avgd/image/upload/v1772284687/fitlab_lbnsd9.png",
    color: "#fbbf24",
    description: "AI-powered personalized fitness and nutrition platform",
    learned: "AI personalization, user profiling, and MERN stack scalability",
    video:
      "https://res.cloudinary.com/dkps2avgd/video/upload/v1772284519/fitLab_-_RESIZE_-_Videobolt.net_d4icvu.mp4",
    github: "https://github.com/sayajishubham/FitLab",
    para1:
      "Fit Lab is a full-stack fitness platform that personalizes workout routines and diet plans based on individual user profiles, goals, and preferences. Users provide inputs such as age, weight, fitness level, dietary choices, and goals, which are processed using AI-driven logic to generate customized plans. A key challenge was designing a flexible data model and AI flow that could adapt recommendations dynamically while maintaining a smooth and intuitive user experience.",

    para2:
      "Through this project, I strengthened my skills in building end-to-end MERN applications, implementing secure authentication, and integrating AI-based recommendation systems. I also gained experience in handling dynamic user data, optimizing API performance, and presenting complex fitness and nutrition insights in a clean, user-friendly interface suitable for real-world use.",
  },
  {
    title: "Montera",
    stack: "Full-Stack MERN",
    src: "https://res.cloudinary.com/dkps2avgd/image/upload/v1772284830/montera_ousjrm.png",
    color: "#9147ff",
    description: "Industry-ready online learning platform inspired by Udemy",
    learned:
      "Secure authentication, email workflows, and scalable backend architecture",
    video:
      "https://res.cloudinary.com/dkps2avgd/video/upload/v1772282324/Montera_iqdtyb.mp4",
    github: "https://github.com/sayajishubham/Montera-learning-platform",
    para1:
      "Montera is a full-stack online learning platform designed to simulate real-world e-learning systems like Udemy. The application includes role-based authentication for students and instructors, secure OTP-based email verification using Nodemailer, and server-side rendering with EJS for key authentication and transactional flows. A major challenge was designing reliable email workflows and session handling while maintaining security and performance across the application.",

    para2:
      "While building this project, I gained hands-on experience with production-grade backend practices such as OTP validation, secure password handling, session and token management, and dynamic server-rendered views using EJS. I also worked on structuring scalable APIs with Node.js and Express, managing MongoDB relationships, and implementing features that closely resemble real industry-level learning platforms.",
  },
];
export default function Discription() {
  const sectionRef = useRef(null);
  const { id } = useParams();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const { navigateWithTransition } = useOutletContext();
  const height = useTransform(scrollYProgress, [0.3, 0.8], [50, 0]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="bg-white pt-50"
    >
      <div className="bg-white pt-50">
        <div>
          <div
            onClick={() => navigateWithTransition("/", "Home")}
            className="h-15 w-15 top-16 left-5 lg:top-10 lg:left-10 lg:h-25 lg:w-25 bg-blue-600 rounded-full grid place-items-center fixed z-40"
          >
            <FaLessThan />
          </div>
        </div>
        <div className="w-[90%] h-auto  lg:w-[65%] mx-auto lg:h-[450px]  relative">
          <div className="absolute text-white rounded-full bg-blue-600 right-1/10 h-16 w-16 lg:h-50 lg:w-50 bottom-0 lg:right-0 translate-x-1/2 translate-y-1/2 grid place-items-center">
            <a
              href={
                projects[id].LiveLink
                  ? projects[id].LiveLink
                  : projects[id].github
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold"
              alt=""
            >
              {projects[id].LiveLink ? "Link" : "GitHub"}
            </a>
          </div>
          <div className="text-8xl lg:text-9xl mb-30">{projects[id].title}</div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full pb-6 lg:pb-0 lg:w-1/3">
              <h1 className="pb-4 border-b-1 w-4/5 text-md text-gray-500">
                TechStack
              </h1>
              <div className="p-4 text-lg">{projects[id].stack}</div>
            </div>
            <div className="w-full pb-6 lg:pb-0 lg:w-1/3">
              <h1 className="pb-4 border-b-1 w-4/5 text-md text-gray-500">
                Small Description
              </h1>
              <div className="p-4 text-lg">{projects[id].description}</div>
            </div>
            <div className="w-full pb-6 lg:pb-0 lg:w-1/3">
              <h1 className="pb-4 border-b-1 w-4/5 text-md text-gray-500">
                What I Learned
              </h1>
              <div className="p-4 text-lg">{projects[id].learned}</div>
            </div>
          </div>
        </div>

        <div
          className="h-[450px] lg:h-screen grid place-items-center"
          style={{ backgroundColor: projects[id].color }}
        >
          <img
            src={projects[id].src}
            alt=""
            className="w-9/10 h-4/5 mx-auto lg:w-4/5 lg:min-h-4/5"
          />
        </div>

        <div className="h-[350px] lg:h-screen bg-[#1c1d20] grid place-items-center backdrop-blur-md">
          <div className="relative grid place-items-center md:w-[70%] lg:w-[80%]">
            <div className="absolute w-[75%] h-[98%] overflow-hidden rounded-md">
              <video
                src={projects[id].video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover lg:rounded-3xl"
              />
            </div>
            {/* Laptop image */}
            <img src="/Laptopback.png" alt="Laptop" className="relative z-10" />
          </div>
        </div>

        <div
          className="h-auto lg:h-screen w-full  z-10 relative lg:flex lg:items-center"
          style={{ backgroundColor: projects[id].color }}
          ref={sectionRef}
        >
          <div className="h-auto lg:w-[40%] lg:mx-auto p-15 flex flex-col">
            <h1 className="pb-4 border-b mb-2">OverView</h1>
            <p className="text-justify  text-lg font-medium">
              {projects[id].para1}
            </p>
            <p className="text-justify  text-lg font-medium  ">
              {projects[id].para2}
            </p>
          </div>
          <motion.div style={{ height }} className={style.circleContainer}>
            <div className={style.circle}></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

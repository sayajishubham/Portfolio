import React, { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import style from "./style.module.scss";
import Projects from "./Projects";
import Model from "./model";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
const projects = [
  {
    title: "AI Resume Analyzer",
    stack: "MERN & AI",
    src: "https://res.cloudinary.com/dkps2avgd/image/upload/v1772284904/resume-cover_dsnjox.png",
    color: "bg-gradient-to-r from-teal-400 to-teal-500",
  },
  {
    title: "StudyAI",
    stack: "MERN & AI",
    src: "https://res.cloudinary.com/dkps2avgd/image/upload/v1772284944/StudyAi_eh6x7e.png",
    color: "bg-[#6366f1]",
  },
  {
    title: "AI FitLab",
    stack: "MERN & AI",
    src: "https://res.cloudinary.com/dkps2avgd/image/upload/v1772284687/fitlab_lbnsd9.png",
    color: "bg-[#fbbf24]",
  },

  {
    title: "Mentora",
    stack: "MERN",
    src: "https://res.cloudinary.com/dkps2avgd/image/upload/v1772284830/montera_ousjrm.png",
    color: "bg-[#9147ff]",
  },
];

export default function RecentWork() {
  const [model, setModel] = useState({ active: false, index: 0 });
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { navigateWithTransition } = useOutletContext();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const handleClick = (idx) => {
    setSelectedIndex(idx);

    navigateWithTransition(`/des/${idx}`, projects[idx].title);
  };
  const height = useTransform(scrollYProgress, [0.3, 0.8], [50, 0]);

  return (
    <motion.div
      ref={sectionRef}
      className={style.Recentwork}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div ref={sectionRef} className={style.Recentwork}>
        <div className="w-[90%] lg:w-[85%] mx-auto ">
          <p className="text-xs tracking-wide text-gray-500 mt-5 px-25 py-3">
            PROJECTS
          </p>

          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(idx)}
              className="cursor-pointer"
            >
              <Projects
                index={idx}
                title={proj.title}
                setModel={setModel}
                stack={proj.stack}
              />
            </div>
          ))}
          <Model projects={projects} model={model} />
        </div>
        <motion.div style={{ height }} className={style.circleContainer}>
          <div className={style.circle}></div>
        </motion.div>
      </div>
    </motion.div>
  );
}

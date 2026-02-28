import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

export default function TechStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["#000000", "#ffffff"],
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["#ffffff", "#000000"],
  );

  return (
    <motion.div style={{ backgroundColor, color: textColor }} ref={container}>
      <div className=" w-full h-auto lg:h-screen pb-10">
        <div className="w-[90%] md:w-[80%] mx-auto h-auto lg:h-full pt-[6%] pb-[10%]">
          <h1 className="text-6xl mb-30">My Skills ...</h1>
          <div className=" flex flex-col md:flex-row lg:flex-row justify-between mt-10 gap-6">
            <div className="w-[100%] md:w-full lg:w-[30%]">
              <span className="block border-b pb-10">01</span>
              <h1 className="text-5xl mt-6 ">Frontend Engineering</h1>
              <p className="mt-10 text-lg reveal-para ">
                I build high-performance, responsive interfaces using React and
                Tailwind CSS. Focused on component architecture, state
                management, clean UI patterns, and performance optimization for
                production-scale applications.
              </p>
            </div>
            <div className="w-[100%] md:w-full lg:w-[30%]">
              <span className="block border-b pb-10">02</span>
              <h1 className="text-5xl mt-6">Backend & API Architecture</h1>
              <p className="mt-10 text-lg reveal-para">
                I design secure REST APIs using Node.js and Express with
                MongoDB. Experienced in authentication, role-based access
                control, middleware architecture, and scalable data modeling.
              </p>
            </div>
            <div className="w-[100%] md:w-full lg:w-[30%]">
              <span className="block border-b pb-10">03</span>
              <h1 className="text-5xl mt-6">AI Systems & Integrations</h1>
              <p className="mt-10 text-lg reveal-para">
                Building intelligent features using embeddings, vector search,
                and RAG-based workflows for production-ready applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

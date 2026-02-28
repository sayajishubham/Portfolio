import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import { useScroll, useTransform } from "framer-motion";
// import {} from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function About() {
  const image = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(image.current, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 5,
      transformOrigin: "center center",
    });
    const paragraphs = document.querySelectorAll(".reveal-para");

    paragraphs.forEach((p) => {
      // Split paragraph into words first
      const words = p.innerText.split(" ");
      p.innerHTML = words
        .map((w) => `<span class="word inline-block">${w}&nbsp;</span>`)
        .join("");

      const wordEls = Array.from(p.querySelectorAll(".word"));
      let lines = [];
      let currentLine = [];
      let lastTop = null;

      // Group words by lines
      wordEls.forEach((word, i) => {
        const top = Math.round(word.offsetTop);
        if (lastTop === null || Math.abs(top - lastTop) < 5) {
          currentLine.push(word);
        } else {
          lines.push(currentLine);
          currentLine = [word];
        }
        lastTop = top;
        if (i === wordEls.length - 1) lines.push(currentLine);
      });

      lines.forEach((line) => {
        const wrapper = document.createElement("span");
        wrapper.className = "line-container block overflow-hidden";
        line[0].parentNode.insertBefore(wrapper, line[0]);
        line.forEach((w) => wrapper.appendChild(w));
      });

      const lineEls = p.querySelectorAll(".line-container");
      gsap.fromTo(
        lineEls,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: p,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    });
  }, []);

  return (
    <div className=" w-full min-h-screen bg-black text-white" ref={container}>
      <div
        className="header-about
    h-[20rem]
    pt-8
    border-b-2
    scroll-pb-2
    border-white
    w-[90%]
    lg:w-[80%]
    mx-auto
    relative
    [@media(max-height:600px)]:h-[10rem]
    [@media(max-height:700px)]:h-[16rem]
    [@media(max-height:800px)]:h-[18rem]
    "
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
          Transforming ideas into seamless digital experiences
        </h1>
        <div
          className="
    w-20 h-20
    md:w-35 md:h-35
    lg:w-40 lg:h-40
    bg-white
    rounded-full
    absolute
    left-4/5
    top-full
    -translate-x-1/2
    -translate-y-1/2
    grid place-items-center
  "
        >
          <img
            src="https://cdn.prod.website-files.com/6568e5c693ac2a6aade3ad99/657dd848704ec3bbd15fea71_dao.svg"
            alt=""
            className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
            ref={image}
          />
        </div>
      </div>

      <div
        className=" body-about
  min-h-[calc(100vh-20rem)]
  sm:min-h-[calc(100vh-24rem)]
  h-auto
  flex flex-col md:flex-row
  justify-between
  w-full md:w-[80%] mx-auto
  pb-10
"
      >
        <div className="w-[100%] lg:w-[50%] p-5 pt-9">
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            I’m a passionate AI systems-focused Full-Stack Developer with strong
            expertise in React, Node.js, Express, and MongoDB. I specialize in
            building intelligent, scalable applications that combine modern web
            technologies with AI-driven capabilities. Beyond traditional
            full-stack development, I design and integrate AI-powered features
            such as document-based chat systems, embeddings, vector search, and
            retrieval-augmented workflows. I enjoy architecting end-to-end
            systems — from responsive, user-centric interfaces built with
            Tailwind CSS to secure, high-performance backend APIs and data
            pipelines. With a solid foundation in machine learning fundamentals
            and real-world experience integrating LLM-based systems, I focus on
            building reliable, scalable solutions that solve meaningful
            problems. I’m driven by continuous learning, clean architecture, and
            turning complex ideas into production-ready applications.
          </p>
        </div>
        <div className="w-[90%] lg:w-[50%]  mx-auto grid place-items-center">
          <img
            src="src/profile.JPG"
            alt=""
            className=" md:h-[400px] lg:h-[450px] rounded-tr-4xl rounded-bl-4xl"
          />
        </div>
      </div>
    </div>
  );
}

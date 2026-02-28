import React, { useEffect, useRef } from "react";
import style from "./model.module.scss";
import { color, motion } from "framer-motion";
import gsap from "gsap";
const styleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 1] },
  },
};
export default function Model({ model, projects }) {
  const container = useRef(null);
  const { active, index } = model;

  return (
    <>
      <motion.div
        variants={styleAnimation}
        initial={"initial"}
        animate={active ? "open" : "close"}
        className={style.modalContainer}
        ref={container}
      >
        <div style={{ top: index * -100 + "%" }} className={style.modalSlider}>
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                key={`modal_${index}`}
                // style={{ backgroundColor: color }}
                className={`${style.model} ${color} `}
              >
                <img
                  src={src}
                  width={300}
                  height={200}
                  alt="image"
                  className="drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

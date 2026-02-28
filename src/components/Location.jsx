import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../App.css";
export default function Location() {
  const image = useRef(null);
  const boxRef = useRef(null);
  useEffect(() => {
    (gsap.to(image.current, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 5,
      transformOrigin: "center center",
    }),
      gsap.fromTo(
        boxRef.current,
        { x: -200, opacity: 0 },
        { x: 0, delay: 4.4, opacity: 1, duration: 1.5, ease: "power3.out" },
      ));
  }, []);
  return (
    <div ref={boxRef}>
      <div className="bg-[#1C1D20] h-20 w-60 md:h-25 md:w-70 lg:h-30 lg:w-80 rounded-br-[4rem] rounded-tr-[4rem] relative">
        <div className="w-50 h-full text-xl md:text-2xl lg:text-2xl font-semibold text-white  flex justify-center items-center">
          <span>Located in Surat </span>
        </div>
        <div className="h-10 w-10 md:h-12 md:w-12  lg:h-16 lg:w-16  absolute right-5 top-1/2  -translate-y-1/2 rounded-[3rem] flex items-center justify-center">
          <img
            className="w-8 h-8 md:h-10 md:w-10 lg:h-16   lg:w-16"
            src="https://cdn.prod.website-files.com/6568e5c693ac2a6aade3ad99/657dd848704ec3bbd15fea71_dao.svg"
            alt=""
            ref={image}
          />
        </div>
      </div>
    </div>
  );
}

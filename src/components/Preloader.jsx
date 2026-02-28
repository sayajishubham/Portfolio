import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { GoDotFill } from "react-icons/go";
export default function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray(".preloader-word");

      gsap.set(words, {
        opacity: 0,
        position: "absolute",
        left: "50%",
        xPercent: -50,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      words.forEach((el) => {
        tl.set(el, { opacity: 1 }).set(el, { opacity: 0 }, "+=0.5");
      });

      tl.to(
        preloaderRef.current,
        {
          y: "-100%",
          duration: 1.3,
          ease: "power4.inOut",
          borderBottomLeftRadius: "100% 20%",
          borderBottomRightRadius: "100% 20%",
        },
        "+=0.1",
      );
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1D20] text-white overflow-hidden"
    >
      <div className="relative text-5xl font-bold">
        <span className="preloader-word flex items-center">
          <GoDotFill className="text-3xl" />
          Hello
        </span>
        <span className="preloader-word flex items-center">
          <GoDotFill className="text-3xl" />
          नमस्ते
        </span>
        <span className="preloader-word flex items-center">
          <GoDotFill className="text-3xl" />
          Namaskar
        </span>
        <span className="preloader-word flex items-center">
          <GoDotFill className="text-3xl" />
          KemChho
        </span>
        <span className="preloader-word flex items-center">
          <GoDotFill className="text-3xl" />
          Vanakkam
        </span>
        <span className="preloader-word flex items-center">
          <GoDotFill className="text-3xl" />
          Nomoshkaar
        </span>
      </div>
    </div>
  );
}

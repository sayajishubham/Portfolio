import React, { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import "../App.css";

export default function Navbar() {
  const NavRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      NavRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const downloadResume = async () => {
    const response = await fetch("/Shubham_Sayaji.pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Shubham_Sayaji_Resume.pdf";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div
      ref={NavRef}
      className={`
        flex h-20 absolute w-full top-0 left-0 z-50 bg-transparent
        ${scrolled ? "hidden" : "visible"}
        px-2 sm:px-0
      `}
    >
      {/* LEFT */}
      <div className="w-1/2 flex justify-center sm:justify-center">
        <div className="flex items-center h-20">
          <div className="flex items-center gap-2 rounded-2xl p-2 tabs">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>

            <span className="text-xs sm:text-sm text-black font-bold">
              Ai/Ml fullStack
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2">
        <span className="w-full  flex justify-center h-full     items-center">
          <button
            onClick={downloadResume}
            className="flex w-60 justify-between border-3 h-auto border-black rounded-2xl pe-4 ps-4 pt-0.5 pb-0.5 text-white bg-black"
          >
            <span>Get in Touch</span>
            <span>
              <MdArrowOutward className="text-2xl align-middle" />
            </span>
          </button>
        </span>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router";
export default function SideBar() {
  const [open, setOpen] = useState(false);
  const [Scrolled, setScrolled] = useState(false);
  const boxRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScrollTo = (id) => {
    if (window.location.pathname !== "/") {
      setOpen(false);
      navigate("/", { state: { scrollTo: id } });
    } else {
      setOpen(false);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className={`text-center fixed  right-10 top-10 z-50  ${
          Scrolled ? "visible" : "hidden"
        } transition ease-in-out `}
        ref={boxRef}
      >
        <button
          onClick={() => setOpen(!open)}
          className={`text-white border-1 border-gray-500 transition ease-in-out hover:bg-blue-800  w-25 h-25 rounded-full grid place-items-center z-50 ${
            open ? "bg-blue-800" : "bg-[#1C1D20]"
          }`}
        >
          <Hamburger direction="left" toggled={open} toggle={setOpen} />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 z-40 h-full
bg-[#1C1D20] text-white
lg:w-[30%] p-20
transition-transform duration-500 ease-in-out
${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mt-35 mb-4 pb-3 border-b-1">
          <h5 className="text-base font-semibold dark:text-gray-400 ">
            Navigation
          </h5>
        </div>

        {/* Content */}
        <ul className="grid gap-4 text-7xl">
          <li className="group">
            <button
              className="block transform transition duration-300 ease-in-out 
      group-hover:scale-125 group-hover:text-blue-500"
              onClick={() => handleScrollTo("hero")}
            >
              Home
            </button>
          </li>
          <li className="group">
            <button
              className="block transform transition duration-300 ease-in-out 
      group-hover:scale-125 group-hover:text-blue-500"
              onClick={() => handleScrollTo("about")}
            >
              About
            </button>
          </li>
          <li className="group">
            <button
              className="block transform transition duration-300 ease-in-out 
      group-hover:scale-125 group-hover:text-blue-500"
              onClick={() => handleScrollTo("work")}
            >
              Work
            </button>
          </li>
          <li className="group">
            <button
              className="block transform transition duration-300 ease-in-out 
      group-hover:scale-125 group-hover:text-blue-500"
              onClick={() => handleScrollTo("contact")}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Buttons */}
        <div className="  flex flex-col mt-30">
          <p>SOCIALS</p>
          <div className="flex gap-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/shubham-sayaji"
              className="block transform transition duration-300 ease-in-out 
      group-hover:scale-125 group-hover:text-blue-500"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sayajishubham"
              className="block transform transition duration-300 ease-in-out 
      group-hover:scale-125 group-hover:text-blue-500"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

import HeroVideo from "../assets/hero.mp4";
import Location from "./Location";
import "../App.css";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Hero() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 300]);
  return (
    <div className="w-full h-screen relative isolate overflow-hidden">
      <video
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className=" absolute inset-0 w-full h-full object-cover -z-10"
      ></video>
      <div>
        <motion.div
          style={{ x }}
          className="absolute bottom-18 md:bottom-10 left-4 md:left-8"
        >
          {/* NON-motion blend layer */}
          <div className="flex gap-4 font-bold leading-none whitespace-nowrap">
            <span
              className="
        text-[3rem]
         min-[400px]:text-[3.3rem]
        sm:text-[6rem]
        min-[500px]:text-[4rem]
        md:text-[8rem]
        lg:text-[12rem]
        text-[#1C1D20]
      "
            >
              Sayaji
            </span>

            <span
              className="
        text-[3rem]
        min-[400px]:text-[3.3rem]
        sm:text-[6rem]
        min-[500px]:text-[4rem]
        md:text-[8rem]
        lg:text-[12rem]
        text-black
      "
            >
              Shubham
            </span>
          </div>
        </motion.div>
      </div>{" "}
      <div className="max-w-md ml-auto mr-8 md:mr-16 absolute top-2/3 left-1/5 md:left-1/2 lg:left-2/3 -translate-y-2/3 ">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-6 h-6 bg-black/20 rounded-full flex-shrink-0 mt-1"></div>
          <div>
            <p className="text-lg sm:text-[1rem] md:text-xl text-black leading-relaxed ">
              <span className="font-bold">
                AI systems-focused full-stack engineer
              </span>
              <span className="ms-1">
                building scalable intelligent systems with strong ML foundations
                and intuitive applications
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-80">
        <Location />
      </div>
    </div>
  );
}

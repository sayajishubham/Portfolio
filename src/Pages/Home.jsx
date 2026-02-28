import { useState, useEffect } from "react";
import Hero from "@/components/hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Preloader from "@/components/Preloader";
import RecentWork from "@/components/RecentProject";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [showPreloader, setShowPreloader] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowPreloader(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay ensures DOM is ready
      }
    }
  }, [location]);
  return (
    <>
      <section id="hero">
        {showPreloader && (
          <Preloader onComplete={() => setShowPreloader(false)} />
        )}
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="techstack">
        <TechStack />
      </section>

      <section id="work">
        <RecentWork />
      </section>
    </>
  );
}

export default Home;

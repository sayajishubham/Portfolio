import { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import Lenis from "@studio-freight/lenis";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

function AppLayout() {
  const lenisRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [overlayTitle, setOverlayTitle] = useState("");
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  const navigateWithTransition = (path, title) => {
    const tl = gsap.timeline();
    setOverlayTitle(title);
    tl.set(overlayRef.current, { y: "100%" })
      .to(overlayRef.current, {
        y: "0%",
        duration: 0.8,
        ease: "power4.out",
      })
      .fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4",
      )
      .add(() => {
        navigate(path);
      })
      .to(overlayRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      });
  };
  useEffect(() => {
    if (!lenisRef.current) return;

    lenisRef.current.scrollTo(0, { immediate: true });
  }, [location.pathname]);

  /* ---------------- PAGE TRANSITION ---------------- */
  // useLayoutEffect(() => {
  //   if (!location.state?.title) return;

  //   const tl = gsap.timeline();

  //   tl.set(overlayRef.current, { y: "100%" })
  //     .to(overlayRef.current, {
  //       y: "0%",
  //       duration: 0.8,
  //       ease: "power4.out",
  //     })
  //     .fromTo(
  //       textRef.current,
  //       { opacity: 0, y: 40 },
  //       { opacity: 1, y: 0, duration: 0.5 },
  //       "-=0.4",
  //     )
  //     .to(overlayRef.current, {
  //       y: "-100%",
  //       duration: 1,
  //       ease: "power4.inOut",
  //     });
  // }, [location.pathname]);

  return (
    <>
      <Navbar />
      <SideBar lenis={lenisRef.current} />

      <div id="page">
        <Outlet context={{ navigateWithTransition }} />
      </div>

      <div id="contact">
        <Footer />
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 w-screen h-screen z-[9999] bg-[#1C1D20] text-white flex items-center justify-center pointer-events-none"
        style={{ transform: "translateY(100%)" }}
      >
        <h1
          ref={textRef}
          className="text-5xl lg:text-8xl font-bold flex items-center gap-3"
        >
          <GoDotFill className="text-3xl lg:text-5xl" />
          {overlayTitle}
        </h1>
      </div>
    </>
  );
}

export default AppLayout;

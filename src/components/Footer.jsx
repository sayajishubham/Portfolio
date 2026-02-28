import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./contact.module.scss";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

export default function Footer() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const yCircle = "-50%";
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  const maxX =
    typeof window !== "undefined" && window.innerWidth < 640 ? 60 : 100;

  const y = isDesktop ? useTransform(scrollYProgress, [0, 1], [-500, 0]) : 0;

  const x = isDesktop ? useTransform(scrollYProgress, [0, 1], [0, maxX]) : 0;

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
    <div>
      <motion.div ref={container} style={{ y }} className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <h1>
              <img
                src="https://cdn.prod.website-files.com/6568e5c693ac2a6aade3ad99/657dd848704ec3bbd15fea71_dao.svg"
                alt=""
              />
              Let’s build something together
            </h1>

            <p>
              Full-stack developer focused on AI-powered and LLM-driven systems,
              actively pursuing internships, entry-level roles, and hands-on
              project experience.
            </p>
          </div>

          <div className={styles.bottom}>
            <motion.div
              style={{ x, y: yCircle }}
              className={styles.contactCircle}
            >
              <button onClick={downloadResume}>Contact Me</button>
            </motion.div>

            <div className={styles.spacer} />

            <div className={styles.contactRow}>
              <div className={styles.pill}>shubhamsayaji52@gmail.com</div>
              <div className={styles.pill}>+91 97257 47888</div>
              <div className={styles.footerBar}>
                <div className="flex items-center">
                  <HiOutlineChevronDoubleRight className="mx-1" />
                  Built by Shubham Sayaji
                </div>

                <div className={styles.handles}>
                  <a
                    href="https://github.com/sayajishubham"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shubham-sayaji"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://x.com/Sayaji_Shubham"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

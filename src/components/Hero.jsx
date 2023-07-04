import { motion } from "framer-motion";
import Typed from "typed.js";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " a <i>MERN Stack Developer</i>.",
        "a <i>Frontend Developer</i>.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const handleResumeClick = () => {
    // Replace the URL below with the actual path to your resume PDF file
    const resumeUrl = "https://drive.google.com/file/d/1SoooD6EZQ5RGzpfVr7eyhZaGhZtsBdwk/view?usp=sharing";
    window.open(resumeUrl);
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span ref={el} className="text-[#915EFF]"></span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
          <p className="mt-5 flex gap-5">
            <a
              href="https://github.com/Mainul7669"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-mainul-islam-naym-1325591a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
            >
              <FaLinkedin size={40} />
            </a>

            <button
              className="text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={handleResumeClick}
            >
              Resume
            </button>
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";

import { config } from "../../constants/config";
import Me from "../canvas/Me";

const TypingText: React.FC<{ text: string; speed?: number }> = ({
  text = "",
  speed = 100,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="text-white-100 relative">
      {displayedText}
      <span
        className="ml-1 inline-block align-middle w-[1px] bg-white animate-blink"
        style={{ height: "1em", marginTop: '-3px' }}
      />
    </span>
  );
};

const Hero = () => {
  const [line2Visible, setLine2Visible] = useState(false);

  useEffect(() => {
    const firstLineLength = config.hero.p?.[0]?.length || 0;
    const totalDelay = firstLineLength * 100 + 300;
    const timer = setTimeout(() => setLine2Visible(true), totalDelay);
    return () => clearTimeout(timer);
  }, []);

  const line1 = config.hero.p?.[0] || "";
  // const line2 = config.hero.p?.[1] || "";

  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            <TypingText text={line1} />
            <br className="hidden sm:block" />
            {line2Visible && ''}
          </p>

        
          <Me />
        </div>
      </div>

      <div className="md:hidden hidden xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Stripes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
  }, []);

  return (
    <div className="box" ref={containerRef}>
      <div className="box-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path fill="var(--color-yellow)" d="M0 0h100v100H0z" />
          <motion.path
            className="square-stroke"
            d="M21.25 0v50c0 15.88 12.87 28.75 28.75 28.75S78.75 65.88 78.75 50"
            fill="none"
            stroke="var(--color-blue)"
            strokeMiterlimit="10"
            strokeWidth="10"
            initial={{ strokeDasharray: "0 150" }}
            animate={{ strokeDasharray: "150 150" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.1,
            }}
          />
          <motion.path
            className="square-stroke-right"
            d="M78.75 100V50c0-15.88-12.87-28.75-28.75-28.75s-28.75 12.87-28.75 28.75"
            fill="none"
            stroke="var(--color-blue)"
            strokeMiterlimit="10"
            strokeWidth="10"
            initial={{ strokeDasharray: "0 150" }}
            animate={{ strokeDasharray: "150 0" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.1,
            }}
          />
          <motion.path
            className="square-stroke"
            d="M28.88 0v50c0 11.66 9.46 21.12 21.12 21.12S71.12 61.66 71.12 50"
            fill="none"
            stroke="var(--color-white)"
            strokeMiterlimit="10"
            strokeWidth="10"
            initial={{ strokeDasharray: "0 150" }}
            animate={{ strokeDasharray: "150 150" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.1,
            }}
          />
          <motion.path
            className="square-stroke-right"
            d="M71.12 100V50c0-11.66 -9.46-21.12 -21.12-21.12 s-21.12 9.46 -21.12 21.12"
            fill="none"
            stroke="var(--color-white)"
            strokeMiterlimit="10"
            strokeWidth="10"
            initial={{ strokeDasharray: "0 150" }}
            animate={{ strokeDasharray: "150 0" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.1,
            }}
          />
          <motion.path
            className="square-stroke"
            d="M36.51 0v50c0 7.45 6.04 13.49 13.49 13.49S63.49 57.45 63.49 50"
            fill="none"
            stroke="var(--color-red)"
            strokeMiterlimit="10"
            strokeWidth="10"
            initial={{ strokeDasharray: "0 150" }}
            animate={{ strokeDasharray: "150 150" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.1,
            }}
          />
          <motion.path
            className="square-stroke-right"
            d="M63.49 100V49.92c0-7.45 -6.04-13.49 -13.49-13.49s-13.49 6.04 -13.49 13.49"
            fill="none"
            stroke="var(--color-red)"
            strokeMiterlimit="10"
            strokeWidth="10"
            initial={{ strokeDasharray: "0 150" }}
            animate={{ strokeDasharray: "150 0" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.1,
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Stripes;

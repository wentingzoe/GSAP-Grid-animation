import React from "react";
import { motion } from "framer-motion";

const StackEllipses: React.FC = () => {
  const numOfEllipses = 10;
  const ellipses = Array.from({ length: numOfEllipses });

  return (
    <div className="box">
      <div className="box-content">
        <svg
          id="ellipse"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path fill="var(--color-yellow)" d="M0 0h100v100H0z" />
          {ellipses.map((_, i) => (
            <motion.ellipse
              key={i}
              className="ellipse"
              cx="50"
              cy="25"
              fill="var(--color-white)"
              rx="50"
              ry="25"
              initial={{ y: 0, fill: "var(--color-white)" }}
              animate={{ y: 50, fill: "var(--color-red)" }}
              transition={{
                ease: "easeInOut",
                duration: 1.8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default StackEllipses;

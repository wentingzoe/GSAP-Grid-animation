import React from "react";
import { motion } from "framer-motion";

const RotatingDisk: React.FC = () => {
  return (
    <div className="box">
      <div className="box-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path fill="var(--color-white)" d="M0 0h100v100H0z" />
          <motion.g
            id="disk"
            animate={{ rotate: 360 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ transformOrigin: "50% 50%" }}
          >
            <path fill="none" d="M0 0h100v100H0z" />
            <path
              fill="var(--color-blue)"
              d="M100 50c0 27.61-22.39 50-50 50S0 77.61 0 50h100Z"
            />
          </motion.g>
          <circle cx="50" cy="50" r="25" fill="var(--color-black)" />
        </svg>
      </div>
    </div>
  );
};

export default RotatingDisk;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const RotatingCircles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to("#circles", {
      y: -200,
      duration: 1.5,
      ease: "none",
      repeat: -1,
    });

    gsap.to(".circle", {
      rotate: 360,
      transformOrigin: "50% 50%",
      duration: 3,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className="box" ref={containerRef}>
      <div className="box-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200">
          <defs>
            <clipPath id="a">
              <path fill="none" d="M0 0h100v100H0z" />
            </clipPath>
          </defs>
          <path fill="var(--color-blue)" d="M0 0h100v100H0z" />
          <g clipPath="url(#a)">
            <g id="circles">
              <g className="circle">
                <circle cx="50" cy="50" r="50" fill="var(--color-white)" />
                <path
                  d="M100 50c0 27.61-22.39 50-50 50V0c27.61 0 50 22.39 50 50Z"
                  fill="var(--color-black)"
                />
              </g>
              <g className="circle">
                <circle cx="50" cy="250" r="50" fill="var(--color-white)" />
                <path
                  d="M100 250c0 27.61-22.39 50-50 50V200c27.61 0 50 22.39 50 50Z"
                  fill="var(--color-black)"
                />
              </g>
              <g className="circle">
                <circle cx="50" cy="150" r="50" fill="var(--color-white)" />
                <path
                  d="M0 150c0-27.61 22.39-50 50-50v100c-27.61 0-50-22.39-50-50Z"
                  fill="var(--color-black)"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default RotatingCircles;

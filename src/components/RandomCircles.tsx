import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const RandomCircles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const randomCircleTl = gsap.timeline({ repeat: -1, repeatRefresh: true });

    randomCircleTl
      .to(".random-circle", {
        x: () => gsap.utils.random(-40, 40, 5),
        y: () => gsap.utils.random(-40, 40, 5),
        scale: 0,
        transformOrigin: "center",
      })
      .to(".random-circle", {
        scale: () => gsap.utils.random(0.7, 1, 0.1),
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.2,
      });
  }, []);

  return (
    <div className="box" ref={containerRef}>
      <div className="box-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path d="M0 0h100v100H0z" fill="var(--color-yellow)" />
          <circle
            className="random-circle"
            cx="50"
            cy="50"
            r="50"
            fill="var(--color-white)"
          />
          <circle
            className="random-circle"
            cx="50"
            cy="50"
            r="40"
            fill="var(--color-blue)"
          />
          <circle
            className="random-circle"
            cx="50"
            cy="50"
            r="30"
            fill="var(--color-red)"
          />
        </svg>
      </div>
    </div>
  );
};

export default RandomCircles;

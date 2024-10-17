import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const RotatingStars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const starTL = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    starTL
      .to(".star", {
        rotate: 360,
        transformOrigin: "50% 50%",
        duration: 1,
        stagger: 0.5,
      })
      .to(".star", {
        scale: 1.5,
        transformOrigin: "50% 50%",
        duration: 0.2,
        ease: "power1.out",
        repeat: 1,
        yoyo: true,
      });
  }, []);

  return (
    <div className="box" ref={containerRef}>
      <div className="box-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path fill="var(--color-blue)" d="M0 0h100v100H0z" />
          <path
            className="star"
            d="M42.74 25.48c-10.29 0-18.64-8.34-18.64-18.64 0 10.29-8.34 18.64-18.64 18.64 10.29 0 18.64 8.34 18.64 18.64 0-10.29 8.34-18.64 18.64-18.64Z"
            fill="var(--color-white)"
          />
          <path
            className="star"
            d="M94.54 25.48c-10.29 0-18.64-8.34-18.64-18.64 0 10.29-8.34 18.64-18.64 18.64 10.29 0 18.64 8.34 18.64 18.64 0-10.29 8.34-18.64 18.64-18.64Z"
            fill="var(--color-white)"
          />
          <path
            className="star"
            d="M42.74 74.52c-10.29 0-18.64-8.34-18.64-18.64 0 10.29-8.34 18.64-18.64 18.64 10.29 0 18.64 8.34 18.64 18.64 0-10.29 8.34-18.64 18.64-18.64Z"
            fill="var(--color-white)"
          />
          <path
            className="star"
            d="M94.54 74.52c-10.29 0-18.64-8.34-18.64-18.64 0 10.29-8.34 18.64-18.64 18.64 10.29 0 18.64 8.34 18.64 18.64 0-10.29 8.34-18.64 18.64-18.64Z"
            fill="var(--color-white)"
          />
        </svg>
      </div>
    </div>
  );
};

export default RotatingStars;

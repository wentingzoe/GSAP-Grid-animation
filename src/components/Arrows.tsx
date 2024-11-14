import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Arrows: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const arrowTL = gsap.timeline({ repeat: -1 });
    arrowTL
      .to("#arrow-1", {
        scale: 0,
        transformOrigin: "top center",
        duration: 1,
        ease: "power3.inOut",
      })
      .to(
        "#arrow-2",
        {
          y: -50,
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to("#arrow-3", {
        y: -50,
        duration: 1,
        ease: "power3.inOut",
      })
      .to("#arrow-2", {
        scale: 0,
        transformOrigin: "top center",
        duration: 1,
        ease: "power3.inOut",
      })
      .to(
        "#arrow-3",
        {
          y: -100,
          duration: 1,
          ease: "power3.inOut",
        },
        "<"
      )
      .to("#arrow-4", {
        y: -100,
        duration: 1,
        ease: "power3.inOut",
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
          <path fill="var(--color-white)" d="M0 0h100v100H0z" />
          <g clipPath="url(#a)">
            <path
              id="arrow-1"
              d="M50 0 0 50h100L50 0z"
              fill="var(--color-red)"
            />
            <path
              id="arrow-2"
              d="M50 50 0 100h100L50 50z"
              fill="var(--color-black)"
            />
            <path
              id="arrow-3"
              d="M50 100 0 150h100l-50-50z"
              fill="var(--color-red)"
            />
            <path
              id="arrow-4"
              d="M50 150 0 200h100l-50-50z"
              fill="var(--color-black)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Arrows;

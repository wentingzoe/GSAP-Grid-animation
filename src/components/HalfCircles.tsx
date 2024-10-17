import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HalfCircles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const halfCircleTl = gsap.timeline({ repeat: -1 }).timeScale(0.5);
    const halfCircleEase = "power2.inOut";
    const halfCirclesScale = {
      scale: 0,
      transformOrigin: "0% 50%",
      ease: halfCircleEase,
    };

    halfCircleTl
      .to("#half-circle-1", {
        ...halfCirclesScale,
      })
      .to(
        "#half-circle-2",
        {
          x: -50,
          ease: halfCircleEase,
        },
        "<"
      )
      .to(
        "#half-circle-3",
        {
          x: -50,
          transformOrigin: "0% 50%",
          ease: halfCircleEase,
        },
        "<"
      )
      .to(
        "#half-circle-4",
        {
          x: -50,
          ease: halfCircleEase,
        },
        "<"
      )
      .to("#half-circle-2", {
        ...halfCirclesScale,
      })
      .to(
        "#half-circle-3",
        {
          x: -100,
          ease: halfCircleEase,
        },
        "<"
      )
      .to(
        "#half-circle-4",
        {
          x: -100,
          ease: halfCircleEase,
        },
        "<"
      );
  }, []);

  return (
    <div className="box" ref={containerRef}>
      <div className="box-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <clipPath id="half-circle-clip-path">
              <path fill="none" d="M0 0h100v100H0z" />
            </clipPath>
          </defs>
          <path fill="var(--color-yellow)" d="M0 0h100v100H0z" />
          <g clipPath="url(#half-circle-clip-path)">
            <g id="half-circles">
              <path
                id="half-circle-1"
                className="half-circle"
                d="M0 50C0 22.39 22.39 0 50 0v100C22.39 100 0 77.61 0 50Z"
                fill="var(--color-blue)"
              />
              <path
                id="half-circle-2"
                className="half-circle"
                d="M50 50c0-27.61 22.39-50 50-50v100c-27.61 0-50-22.39-50-50Z"
                fill="var(--color-blue)"
              />
              <path
                id="half-circle-3"
                className="half-circle"
                d="M100 50c0-27.61 22.39-50 50-50v100c-27.61 0-50-22.39-50-50Z"
                fill="var(--color-blue)"
              />
              <path
                id="half-circle-4"
                className="half-circle"
                d="M150 50c0-27.61 22.39-50 50-50v100c-27.61 0-50-22.39-50-50Z"
                fill="var(--color-blue)"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default HalfCircles;

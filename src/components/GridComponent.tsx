"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  MorphSVGPlugin,
  DrawSVGPlugin,
  SplitText,
  Draggable,
  InertiaPlugin,
} from "gsap/all";

// Import styles
import "../app/globals.css";
import { followEyeAnimation } from "../utils/followEyeAnimation";

gsap.registerPlugin(
  MorphSVGPlugin,
  DrawSVGPlugin,
  SplitText,
  Draggable,
  InertiaPlugin
);

const GridComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const boxes = gsap.utils.toArray<HTMLElement>(".box");

    gsap.to(boxes, {
      autoAlpha: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power1.inOut",
    });

    // Handle mouse move animation for eyes within the container
    const handleMouseMove = (e: MouseEvent) => {
      followEyeAnimation(container, e.clientX, e.clientY);
    };
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="print_container">
      <div id="grid_container" ref={containerRef}>
        {/* -- Following Eye -- */}
        <div className="box">
          <div className="box-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <defs>
                <clipPath id="clip-mask">
                  <path
                    fill="none"
                    d="M95.86 50S75.33 79.47 50 79.47 4.14 50 4.14 50 24.67 20.53 50 20.53 95.86 50 95.86 50Z"
                  />
                </clipPath>
              </defs>
              <path fill="var(--color-blue)" d="M0 0h100v100H0z" />
              <g className="eye">
                <path
                  fill="var(--color-white)"
                  d="M95.86 50S75.33 79.47 50 79.47 4.14 50 4.14 50 24.67 20.53 50 20.53 95.86 50 95.86 50Z"
                />
                <g clip-path="url(#clip-mask)">
                  <circle
                    className="eye-pupil"
                    cx="50"
                    cy="50"
                    r="20.91"
                    fill="var(--color-black)"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        {/* -- Following Eye  Red-- */}
        <div className="box">
          <div className="box-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <defs>
                <clipPath id="clip-mask">
                  <path
                    fill="none"
                    d="M95.86 50S75.33 79.47 50 79.47 4.14 50 4.14 50 24.67 20.53 50 20.53 95.86 50 95.86 50Z"
                  />
                </clipPath>
              </defs>
              <path fill="var(--color-red)" d="M0 0h100v100H0z" />
              <g className="eye">
                <path
                  fill="var(--color-white)"
                  d="M95.86 50S75.33 79.47 50 79.47 4.14 50 4.14 50 24.67 20.53 50 20.53 95.86 50 95.86 50Z"
                />
                <g clip-path="url(#clip-mask)">
                  <circle
                    className="eye-pupil"
                    cx="50"
                    cy="50"
                    r="20.91"
                    fill="var(--color-black)"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div className="title_container">
          <p className="title">GSAP GRID</p>
          <div className="color_pallet">
            <div className="blue"></div>
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;

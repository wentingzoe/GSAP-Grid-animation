// src/components/MorphingBoxes.tsx

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/all";

gsap.registerPlugin(MorphSVGPlugin);

const MorphingBoxes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!containerRef.current) return;

    const morphBoxes = gsap.utils.toArray<HTMLElement>(".morph-box");
    const morphDuration = 1;
    morphBoxes.forEach((box, i) => {
      gsap.to(box, {
        morphSVG: `#morph-shape-${i + 1}`,
        duration: morphDuration,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.1,
      });

      gsap.to(`#box-top-${i + 1}`, {
        y: 19,
        x: 19,
        duration: morphDuration,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <div className="box" ref={containerRef}>
      <div className="box-content">
        <svg
          id="morph-boxes"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path fill="var(--color-blue)" d="M0 0h100v100H0z" />
          <path
            id="morph-box-1"
            className="morph-box"
            d="M28.88 8.4H9.87v19.01l19.01 19.01h19.01V27.41L28.88 8.4z"
            fill="var(--color-black)"
          />
          <path
            id="box-top-1"
            d="M9.87 8.4h19.01v19.01H9.87z"
            fill="var(--color-white)"
          />
          <path
            id="morph-box-2"
            className="morph-box"
            d="M73.18 8.4H54.17v19.01l19.01 19.01h19.01V27.41L73.18 8.4z"
            fill="var(--color-black)"
          />
          <path
            id="box-top-2"
            d="M54.17 8.4h19.01v19.01H54.17z"
            fill="var(--color-white)"
          />
          <path
            id="morph-box-3"
            className="morph-box"
            d="M28.88 53.58H9.87v19.01L28.88 91.6h19.01V72.59L28.88 53.58z"
            fill="var(--color-black)"
          />
          <path
            id="box-top-3"
            d="M9.87 53.58h19.01v19.01H9.87z"
            fill="var(--color-white)"
          />
          <path
            id="morph-box-4"
            className="morph-box"
            d="M73.18 53.58H54.17v19.01L73.18 91.6h19.01V72.59L73.18 53.58z"
            fill="var(--color-black)"
          />
          <path
            id="box-top-4"
            d="M54.17 53.58h19.01v19.01H54.17z"
            fill="var(--color-white)"
          />
          <g className="morph-shapes">
            <polygon
              id="morph-shape-4"
              points="92.19 72.59 73.18 72.59 73.18 91.6 73.18 91.6 92.19 91.6 92.19 72.59 92.19 72.59"
              fill="none"
            />
            <polygon
              id="morph-shape-2"
              points="92.19 27.41 73.18 27.41 73.18 46.42 73.18 46.42 92.19 46.42 92.19 27.41 92.19 27.41"
              fill="none"
            />
            <polygon
              id="morph-shape-1"
              points="47.89 27.41 28.88 27.41 28.88 46.42 28.88 46.42 47.89 46.42 47.89 27.41 47.89 27.41"
              fill="none"
            />
            <polygon
              id="morph-shape-3"
              points="47.89 72.59 28.88 72.59 28.88 91.6 28.88 91.6 47.89 91.6 47.89 72.59 47.89 72.59"
              fill="none"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default MorphingBoxes;

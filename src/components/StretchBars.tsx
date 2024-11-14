import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { interpolate } from "flubber";

const StretchBars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Bar 1 Morphing Animation
    const fromPath1 =
      "M71.97 6.27c-6.07 0-10.98 4.92-10.98 10.98v52.27c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98V17.25c0-6.07-4.92-10.98-10.98-10.98Z";
    const toPath1 =
      "M71.97 48.56c-6.07 0-10.98 4.92-10.98 10.98v9.98c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98v-9.98c0-6.07-4.92-10.98-10.98-10.98Z";
    const interpolator1 = interpolate(fromPath1, toPath1, {
      maxSegmentLength: 0.5,
    });

    gsap.to(".bar", {
      y: -5,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 1,
    });

    gsap.to("#bar-1", {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power3.inOut",
      onUpdate: function () {
        const progress = this.progress();
        const newPath = interpolator1(progress);
        document.querySelector("#bar-1")?.setAttribute("d", newPath);
      },
    });

    gsap.to("#bar-1-circle-1", {
      y: 30,
      duration: 2,
      ease: "power3.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Bar 2 Morphing Animation
    const fromPath2 =
      "M50 22.42c-6.07 0-10.98 4.92-10.98 10.98v52.27c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98V33.4c0-6.07-4.92-10.98-10.98-10.98Z";
    const toPath2 =
      "M50.06 22.42c-6.07 0-10.98 4.92-10.98 10.98v9.98c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98V33.4c0-6.07-4.92-10.98-10.98-10.98Z";
    const interpolator2 = interpolate(fromPath2, toPath2, {
      maxSegmentLength: 0.5,
    });

    gsap.to("#bar-2", {
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      onUpdate: function () {
        const progress = this.progress();
        const newPath = interpolator2(progress);
        document.querySelector("#bar-2")?.setAttribute("d", newPath);
      },
    });

    gsap.to("#bar-2-circle-2", {
      y: -40,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Bar 3 Morphing Animation
    const fromPath3 =
      "M28.15 7.27c-6.07 0-10.98 4.92-10.98 10.98v52.27c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98V18.26c0-6.07-4.92-10.98-10.98-10.98Z";
    const toPath3 =
      "M27.86 37.18c-6.06.09-10.81 5.31-10.81 11.38v22.01c0 6.07 4.74 11.28 10.81 11.38 6.15.1 11.16-4.86 11.16-10.98v-22.8c0-6.12-5.01-11.08-11.16-10.98Z";
    const interpolator3 = interpolate(fromPath3, toPath3, {
      maxSegmentLength: 0.5,
    });

    gsap.to("#bar-3", {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "circ",
      onUpdate: function () {
        const progress = this.progress();
        const newPath = interpolator3(progress);
        document.querySelector("#bar-3")?.setAttribute("d", newPath);
      },
    });

    gsap.to("#bar-3-circle-1", {
      y: 30,
      duration: 2,
      ease: "circ",
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <div className="box" ref={containerRef}>
      <div className="box-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path fill="var(--color-white)" d="M0 0h100v100H0z" />
          <g className="bar">
            <path
              id="bar-1"
              d="M71.97 6.27c-6.07 0-10.98 4.92-10.98 10.98v52.27c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98V17.25c0-6.07-4.92-10.98-10.98-10.98Z"
              fill="var(--color-red)"
            />
            <circle
              id="bar-1-circle-1"
              cx="71.97"
              cy="17.25"
              r="10.98"
              fill="var(--color-blue)"
            />
            <circle
              cx="71.97"
              cy="69.52"
              r="10.98"
              fill="var(--color-yellow)"
            />
          </g>
          <g className="bar">
            <path
              id="bar-2"
              d="M50 22.42c-6.07 0-10.98 4.92-10.98 10.98v52.27c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98V33.4c0-6.07-4.92-10.98-10.98-10.98Z"
              fill="var(--color-blue)"
            />
            <circle cx="50" cy="33.41" r="10.98" fill="var(--color-yellow)" />
            <circle
              id="bar-2-circle-2"
              cx="50"
              cy="85.68"
              r="10.98"
              fill="var(--color-black)"
            />
          </g>
          <g className="bar">
            <path
              id="bar-3"
              d="M28.15 7.27c-6.07 0-10.98 4.92-10.98 10.98v52.27c0 6.07 4.92 10.98 10.98 10.98s10.98-4.92 10.98-10.98V18.26c0-6.07-4.92-10.98-10.98-10.98Z"
              fill="var(--color-red)"
            />
            <circle
              id="bar-3-circle-1"
              cx="28.15"
              cy="17"
              r="10.98"
              fill="var(--color-black)"
            />
            <circle cx="28.15" cy="70.53" r="10.98" fill="var(--color-blue)" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default StretchBars;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { interpolate } from "flubber";

const MorphingBoxes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const morphBoxes = gsap.utils.toArray<SVGPathElement>(".morph-box");
    const morphDuration = 1;

    morphBoxes.forEach((box, i) => {
      const fromShape = box.getAttribute("d");
      const toShape = document
        .querySelector<SVGPathElement>(`#morph-shape-${i + 1}`)
        ?.getAttribute("d");

      if (fromShape && toShape) {
        const morphInterpolator = interpolate(fromShape, toShape, {
          maxSegmentLength: 0.2, // Adjust for smoother animation
        });

        // Animate the morph-box path using GSAP
        gsap.to(box, {
          duration: morphDuration,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.1, // Stagger the start of each animation slightly
          onUpdate: function () {
            // On each animation frame, update the path based on progress
            const progress = this.progress();
            const newPath = morphInterpolator(progress);
            box.setAttribute("d", newPath);
          },
        });
      }

      // Morph the box-top paths to align perfectly with the morph-boxes
      const boxTop = document.querySelector<SVGPathElement>(
        `#box-top-${i + 1}`
      );
      const boxTopFromShape = boxTop?.getAttribute("d");
      const boxTopToShape = document
        .querySelector<SVGPathElement>(`#morph-shape-${i + 1}`)
        ?.getAttribute("d");

      if (boxTop && boxTopFromShape && boxTopToShape) {
        const boxTopMorphInterpolator = interpolate(
          boxTopFromShape,
          boxTopToShape,
          {
            maxSegmentLength: 0.2, // Adjust for smoother animation of box-top
          }
        );

        // Animate the box-top path using GSAP
        gsap.to(boxTop, {
          duration: morphDuration,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.1, // Stagger the start of each animation slightly
          onUpdate: function () {
            const progress = this.progress();
            const newPath = boxTopMorphInterpolator(progress);
            boxTop.setAttribute("d", newPath);
          },
          onComplete: function () {
            // Ensure boxTop is perfectly aligned with morph-box at the end of each cycle
            boxTop.setAttribute("d", box.getAttribute("d") || "");
          },
        });
      }
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

          {/* Existing morph-box paths */}
          <path
            id="morph-box-1"
            className="morph-box"
            d="M28.88 8.4 H9.87 V27.41 L28.88 46.42 H47.89 V27.41 L28.88 8.4 Z"
            fill="var(--color-black)"
          />
          <path
            id="morph-box-2"
            className="morph-box"
            d="M73.18 8.4 H54.17 V27.41 L73.18 46.42 H92.19 V27.41 L73.18 8.4 Z"
            fill="var(--color-black)"
          />
          <path
            id="morph-box-3"
            className="morph-box"
            d="M28.88 53.58 H9.87 V72.59 L28.88 91.6 H47.89 V72.59 L28.88 53.58 Z"
            fill="var(--color-black)"
          />
          <path
            id="morph-box-4"
            className="morph-box"
            d="M73.18 53.58 H54.17 V72.59 L73.18 91.6 H92.19 V72.59 L73.18 53.58 Z"
            fill="var(--color-black)"
          />

          {/* Move the box-top paths after the morph-box paths */}
          <path
            id="box-top-1"
            d="M9.87 8.4 L28.88 8.4 L28.88 27.41 L9.87 27.41 Z"
            fill="var(--color-white)"
          />
          <path
            id="box-top-2"
            d="M54.17 8.4 L73.18 8.4 L73.18 27.41 L54.17 27.41 Z"
            fill="var(--color-white)"
          />
          <path
            id="box-top-3"
            d="M9.87 53.58 L28.88 53.58 L28.88 72.59 L9.87 72.59 Z"
            fill="var(--color-white)"
          />
          <path
            id="box-top-4"
            d="M54.17 53.58 L73.18 53.58 L73.18 72.59 L54.17 72.59 Z"
            fill="var(--color-white)"
          />

          {/* Morph shapes for both morph-box and box-top elements */}
          <g className="morph-shapes" style={{ display: "none" }}>
            <path
              id="morph-shape-1"
              d="M28.88 27.41 L47.89 27.41 L47.89 46.42 L28.88 46.42 Z"
              fill="none"
            />
            <path
              id="morph-shape-2"
              d="M73.18 27.41 L92.19 27.41 L92.19 46.42 L73.18 46.42 Z"
              fill="none"
            />
            <path
              id="morph-shape-3"
              d="M28.88 72.59 L47.89 72.59 L47.89 91.6 L28.88 91.6 Z"
              fill="none"
            />
            <path
              id="morph-shape-4"
              d="M73.18 72.59 L92.19 72.59 L92.19 91.6 L73.18 91.6 Z"
              fill="none"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default MorphingBoxes;

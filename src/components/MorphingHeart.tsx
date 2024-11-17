import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { interpolate } from "flubber";

const MorphingHeart: React.FC = () => {
  const containerRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const heartPath = containerRef.current.querySelector("#morph-heart");
    const lipPath = containerRef.current.querySelector("#morph-lip");

    if (!heartPath || !lipPath) return;

    const fromPath = heartPath.getAttribute("d");
    const toPath = lipPath.getAttribute("d");

    if (!fromPath || !toPath) return;

    const interpolator = interpolate(fromPath, toPath, {
      maxSegmentLength: 0.2,
    });

    gsap.to(
      {},
      {
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        onUpdate: function () {
          const newPath = interpolator(this.progress());
          heartPath.setAttribute("d", newPath);
        },
      }
    );
  }, []);

  return (
    <div className="box">
      <div className="box-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          ref={containerRef}
        >
          <path fill="var(--color-red)" d="M0 0h100v100H0z" />
          <path
            id="morph-heart"
            fill="var(--color-white)"
            d="M50 15.05c-10.76-10.76-28.22-10.76-38.98 0C.25 25.82.25 43.27 11.02 54.04L50 93.02l38.98-38.98c10.76-10.76 10.76-28.22 0-38.98C78.22 4.3 60.76 4.3 50 15.06Z"
          />
          <path
            id="morph-lip"
            fill="none"
            d="M89.74 42.61c-7-7.47-15.48-21.85-28.55-21.85-7.61 0-8.85 6.26-11.18 6.26s-3.58-6.26-11.18-6.26c-13.07 0-21.55 14.38-28.55 21.85-2.98 3.18-7.67 6.22-7.67 6.22s3.22 2.02 5.78 4.61c6.88 6.98 21.46 25.41 41.62 25.8 20.16-.39 34.75-18.82 41.62-25.8 2.56-2.6 5.78-4.61 5.78-4.61s-4.69-3.04-7.67-6.22Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default MorphingHeart;

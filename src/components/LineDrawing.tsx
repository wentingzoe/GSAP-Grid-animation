import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LineDrawing: React.FC = () => {
  const containerRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lineOrigin = containerRef.current.querySelector("#lines path");
    if (!lineOrigin) return;

    const numOfLines = 15;
    for (let i = 0; i < numOfLines; i++) {
      const clonedPath = lineOrigin.cloneNode(true) as SVGPathElement;
      clonedPath.setAttribute("class", "line");
      containerRef.current.appendChild(clonedPath);
    }

    const lines = gsap.utils.toArray<SVGPathElement>(".line");

    lines.forEach((line, i) => {
      gsap.set(line, {
        drawSVG: "100% 0%",
        rotate: (i * 180) / numOfLines,
        transformOrigin: "center",
      });
    });

    gsap.to(lines, {
      rotate: "+=360",
      ease: "power3.inOut",
      repeat: -1,
      stagger: 0.1,
      duration: 4,
    });

    gsap.to("#lines path", {
      drawSVG: "100% 50%",
      duration: 2,
      ease: "power3.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="box">
      <div className="box-content">
        <svg
          ref={containerRef}
          id="lines"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <rect fill="var(--color-white)" width="100" height="100" />
          <path
            className="line"
            fill="none"
            stroke="var(--color-blue)"
            strokeMiterlimit="10"
            strokeWidth="1"
            strokeLinecap="round"
            d="M50 9.95v80.32"
          />
        </svg>
      </div>
    </div>
  );
};

export default LineDrawing;

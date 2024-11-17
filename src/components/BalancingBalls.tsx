import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface BalancingBallsProps {
  mousePosition: { x: number; y: number } | null;
}

const BalancingBalls: React.FC<BalancingBallsProps> = ({ mousePosition }) => {
  const containerRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ballContainer = containerRef.current;

    // Reset balls to center when no mouse movement or mouse leaves the container
    const resetBalls = () => {
      gsap.to("#balance-ball-1", {
        duration: 0.5,
        x: 0,
        ease: "power4.out",
      });
      gsap.to("#balance-ball-2", {
        duration: 0.5,
        x: 0,
        ease: "power4.out",
        delay: 0.02,
      });
      gsap.to("#balance-ball-3", {
        duration: 0.5,
        x: 0,
        ease: "power4.out",
        delay: 0.045,
      });
    };

    if (!mousePosition) {
      resetBalls();
      return;
    }

    const { x } = mousePosition;
    const containerRect = ballContainer.getBoundingClientRect();
    if (x < containerRect.left || x > containerRect.right) {
      resetBalls();
      return;
    }

    const centerX = containerRect.left + containerRect.width / 2;
    const adjustedX = x - centerX;

    gsap.to("#balance-ball-1", {
      duration: 0.5,
      overwrite: "auto",
      x: adjustedX,
      ease: "power4.out",
    });
    gsap.to("#balance-ball-2", {
      duration: 0.5,
      overwrite: "auto",
      x: adjustedX,
      ease: "power4.out",
      delay: 0.02,
    });
    gsap.to("#balance-ball-3", {
      duration: 0.5,
      overwrite: "auto",
      x: adjustedX,
      ease: "power4.out",
      delay: 0.045,
    });
  }, [mousePosition]);

  return (
    <div className="box">
      <div className="box-content">
        <svg
          ref={containerRef}
          id="balancing-balls"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          onMouseLeave={() => gsap.to(".ball", { x: 0, ease: "sine.inOut" })}
        >
          <defs>
            <clipPath id="ball-mask">
              <path fill="none" d="M0 0h100v100H0z" />
            </clipPath>
          </defs>
          <path fill="var(--color-red)" d="M0 0h100v100H0z" />
          <g clipPath="url(#ball-mask)">
            <circle
              className="ball"
              id="balance-ball-1"
              cx="50"
              cy="87"
              r="13"
              fill="var(--color-white)"
            />
            <circle
              className="ball"
              id="balance-ball-2"
              cx="50"
              cy="54"
              r="19"
              fill="var(--color-black)"
            />
            <circle
              className="ball"
              id="balance-ball-3"
              cx="50"
              cy="0"
              r="35"
              fill="var(--color-yellow)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BalancingBalls;

// src/components/FollowStars.tsx

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FollowStars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const starContainer = containerRef.current;

    // Set the initial properties for the stars
    gsap.set(".following-star", {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      transformOrigin: "center",
      scale: 0,
    });

    let initialMouseMove = true;
    let timer: number;

    // Handle mouse movement within the container
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      const containerRect = starContainer.getBoundingClientRect();
      const offsetX = clientX - containerRect.left;
      const offsetY = clientY - containerRect.top;

      // If it's the first mouse movement, animate the stars appearing
      if (initialMouseMove) {
        initialMouseMove = false;

        gsap.to(".following-star", {
          scale: 0.4,
          stagger: 0.02,
          ease: "sine.out",
        });
      }

      // Clear the timer every time the mouse moves
      clearTimeout(timer);
      // Set a timer for 0.2 seconds to handle when the mouse stops
      timer = window.setTimeout(() => {
        initialMouseMove = true;

        gsap.to(".following-star", {
          scale: 0,
          stagger: 0.02,
          ease: "sine.inOut",
        });
      }, 200);

      // Animate the stars to follow the mouse
      gsap.to(".following-star", {
        duration: 0.5,
        overwrite: "auto",
        x: offsetX,
        y: offsetY,
        stagger: 0.1,
        ease: "none",
      });
    };

    starContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      starContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="box" ref={containerRef}>
      <div className="box-content">
        <svg
          id="follow-stars"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path fill="var(--color-red)" d="M0 0h100v100H0z" />
          <path
            className="rotating-star"
            fill="var(--color-white)"
            d="M100 50C72.39 50 50 27.61 50 0c0 27.61-22.39 50-50 50 27.61 0 50 22.39 50 50 0-27.61 22.39-50 50-50Z"
          />
          <path
            className="following-star"
            fill="var(--color-yellow)"
            d="M100 50C72.39 50 50 27.61 50 0c0 27.61-22.39 50-50 50 27.61 0 50 22.39 50 50 0-27.61 22.39-50 50-50Z"
          />
          <path
            className="following-star"
            fill="var(--color-yellow)"
            d="M100 50C72.39 50 50 27.61 50 0c0 27.61-22.39 50-50 50 27.61 0 50 22.39 50 50 0-27.61 22.39-50 50-50Z"
          />
          <path
            className="following-star"
            fill="var(--color-yellow)"
            d="M100 50C72.39 50 50 27.61 50 0c0 27.61-22.39 50-50 50 27.61 0 50 22.39 50 50 0-27.61 22.39-50 50-50Z"
          />
          <path
            className="following-star"
            fill="var(--color-yellow)"
            d="M100 50C72.39 50 50 27.61 50 0c0 27.61-22.39 50-50 50 27.61 0 50 22.39 50 50 0-27.61 22.39-50 50-50Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default FollowStars;

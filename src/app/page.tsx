"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import { followEyeAnimation } from "@/utils/animations";
import styles from "./page.module.css";
import FollowEye from "@/components/FollowEye";
import RotatingStars from "@/components/RotaingStars";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const color_pallet = ["blue", "red", "yellow", "black"];

  useEffect(() => {
    if (!containerRef.current) return;

    // const container = containerRef.current;
    const boxes = gsap.utils.toArray<HTMLElement>(".box");

    gsap.to(boxes, {
      autoAlpha: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power1.inOut",
    });
  }, []); // Close the first useEffect

  // Following Eye Animation + Mousemove Event
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id={styles.print_container}>
      <div id={styles.grid_container} ref={containerRef}>
        {/* -- Following Eye -- */}
        <FollowEye
          backgroundColor="var(--color-blue)"
          mousePosition={mousePosition}
        />
        <FollowEye
          backgroundColor="var(--color-red)"
          mousePosition={mousePosition}
        />
        {/* -- Rotatting Stars -- */}
        <RotatingStars />
      </div>
      <div>
        <div className={styles.title_container}>
          <p className={styles.title}>GSAP GRID</p>
          <div className={styles.color_pallet}>
            {color_pallet.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: `var(--color-${color})` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

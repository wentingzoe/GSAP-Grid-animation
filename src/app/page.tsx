"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./page.module.css";
import FollowEye from "@/components/FollowEye";
import RotatingStars from "@/components/RotatingStars";
import RotatingCircles from "@/components/RotatingCircles";
import MorphingBoxes from "@/components/MorphingBoxes";
import HalfCircles from "@/components/HalfCircles";
import FollowStars from "@/components/FollowStars";
import Stripes from "@/components/Stripes";
import RandomCircles from "@/components/RandomCircles";
import StretchBars from "@/components/StretchBars";
import RotatingDisk from "@/components/RotatingDisk";
import Arrows from "@/components/Arrows";
import LineDrawing from "@/components/LineDrawing";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const color_pallet = ["blue", "red", "yellow", "black"];
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const boxes = gsap.utils.toArray<HTMLElement>(".box");

    gsap.to(boxes, {
      autoAlpha: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power1.inOut",
    });

    // Mouse Movement => Follow Eyes
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
        <FollowEye
          backgroundColor="var(--color-blue)"
          mousePosition={mousePosition}
        />
        <FollowEye
          backgroundColor="var(--color-red)"
          mousePosition={mousePosition}
        />
        <RotatingStars />
        <RotatingCircles />
        <MorphingBoxes />
        <HalfCircles />
        <FollowStars />
        <Stripes />
        <RandomCircles />
        <StretchBars />
        <RotatingDisk />
        <Arrows />
        <LineDrawing />
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

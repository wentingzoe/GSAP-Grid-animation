"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import FollowEye from "../components/FollowEye";
import { followEyeAnimation } from "../utils/animations";
import styles from "./page.module.css";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const color_pallet = ["blue", "red", "yellow", "black"];

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

    const handleMouseMove = (e: MouseEvent) => {
      followEyeAnimation(container, e.clientX, e.clientY);
    };
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id={styles.print_container}>
      <div id={styles.grid_container} ref={containerRef}>
        {/* -- Following Eye -- */}
        <FollowEye backgroundColor="var(--color-blue)" />
        <FollowEye backgroundColor="var(--color-red)" />
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

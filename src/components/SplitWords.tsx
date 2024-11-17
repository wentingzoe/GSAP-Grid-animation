import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./SplitWords.module.scss";

const SplitWords: React.FC = () => {
  const titleRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const titleElement = titleRef.current;
    const chars = titleElement.innerText.split("");
    titleElement.innerHTML = "";
    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      titleElement.appendChild(span);
    });

    const charElements = titleElement.querySelectorAll("span");

    const titleSpinTL = gsap.timeline({ paused: true });
    titleSpinTL.to(charElements, {
      duration: 0.5,
      rotateY: 360,
      stagger: 0.1,
      repeat: 1,
      yoyo: true,
    });

    const handleMouseEnter = () => {
      titleSpinTL.restart();
    };

    titleElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      titleElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <p ref={titleRef} className={styles.title}>
      GSAP GRID
    </p>
  );
};

export default SplitWords;

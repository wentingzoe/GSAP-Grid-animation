import React, { useRef } from "react";
// import gsap from "gsap";

const FollowEye: React.FC<{ backgroundColor: string }> = ({
  backgroundColor,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="box" ref={containerRef}>
      <div className="box-content">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <clipPath id="clip-mask">
              <path
                fill="none"
                d="M95.86 50S75.33 79.47 50 79.47 4.14 50 4.14 50 24.67 20.53 50 20.53 95.86 50 95.86 50Z"
              />
            </clipPath>
          </defs>
          <path fill={backgroundColor} d="M0 0h100v100H0z" />
          <g className="eye">
            <path
              fill="var(--color-white)"
              d="M95.86 50S75.33 79.47 50 79.47 4.14 50 4.14 50 24.67 20.53 50 20.53 95.86 50 95.86 50Z"
            />
            <g clipPath="url(#clip-mask)">
              <circle
                className="eye-pupil"
                cx="50"
                cy="50"
                r="20.91"
                fill="var(--color-black)"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default FollowEye;

import gsap from 'gsap';

// Following Eye
    // ref: https://gsap.com/community/forums/topic/17962-cursor-follows-the-eyes/
export const followEyeAnimation = (container: HTMLDivElement, clientX: number, clientY: number) => {
  const maxTrans = 20;
  const maxX = container.clientWidth / 2;
  const maxY = container.clientHeight / 2;

  const eyes = container.querySelectorAll<HTMLElement>('.eye');
  const pupils = container.querySelectorAll<HTMLElement>('.eye-pupil');

  eyes.forEach((eye, i) => {
    const pupil = pupils[i];
    const eyeRect = eye.getBoundingClientRect();
    const r = eyeRect.width / 2;
    const centerX = eyeRect.left + r;
    const centerY = eyeRect.top + r;

    const x = clientX - centerX;
    const y = clientY - centerY;

    const xPercent = x / maxX;
    const yPercent = y / maxY;

    const scaledXPercent = xPercent * maxTrans;
    const scaledYPercent = yPercent * maxTrans;

    gsap.to(pupil, {
      xPercent: scaledXPercent,
      yPercent: scaledYPercent,
      duration: 0.2,
      overwrite: 'auto',
    });

    gsap.to(eye, {
      xPercent: scaledXPercent * 0.4,
      yPercent: scaledYPercent * 0.4,
      duration: 0.2,
      overwrite: 'auto',
    });
  });
};

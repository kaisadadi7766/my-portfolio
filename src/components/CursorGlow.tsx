import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.5;
      cursorY += (mouseY - cursorY) * 0.5;
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
      follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className="pointer-events-none fixed top-0 left-0 z-50"
      >
        <div
          className="w-10 h-10 rounded-full border border-orange-400/30 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-50"
      >
        <div
          className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </>
  );
}

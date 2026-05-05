// components/CustomCursor.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - cursor.clientWidth / 2}px`;
      cursor.style.top = `${e.clientY - cursor.clientHeight / 2}px`;
    };

    const onMouseEnterLink = () => {
      cursor.classList.remove('scale-0');
      cursor.classList.add('scale-100');
    };

    const onMouseLeaveLink = () => {
      cursor.classList.add('scale-0');
      cursor.classList.remove('scale-100');
    };

    document.addEventListener('mousemove', onMouseMove);
    
    const interactiveElements = document.querySelectorAll('a, button, .cursor-interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-[100] pointer-events-none hidden lg:flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-mint text-grey-900 text-2xl lg:text-4xl transition-all duration-75 scale-0"
    >
      <i className="fa-regular fa-arrow-up-right"></i>
    </div>
  );
}
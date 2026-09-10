import React, { useEffect, useRef, useState } from 'react';
import './DotCursor.css';

const DotCursor = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use raw mousemove — NO gsap, NO RAF delay
    const onMove = (e) => {
      if (!isVisible) setIsVisible(true);
      // translate(-50%, -50%) centers the cursor on the exact pointer tip
      cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    };

    const onEnterClickable = () => cursor.classList.add('cursor--hover');
    const onLeaveClickable = () => cursor.classList.remove('cursor--hover');
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const clickables = document.querySelectorAll('a, button, [role="button"]');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', onEnterClickable);
      el.addEventListener('mouseleave', onLeaveClickable);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', onEnterClickable);
        el.removeEventListener('mouseleave', onLeaveClickable);
      });
    };
  }, [isVisible]);

  return (
    <div 
      ref={cursorRef} 
      className={`dot-cursor ${isVisible ? 'visible' : ''}`}
      aria-hidden="true"
    />
  );
};

export default DotCursor;

import React, { useState, useEffect } from 'react';
import './Preloader.css';

const letters = [
  '/assets/letterz.png',
  '/assets/lettero.png',
  '/assets/letterr.png',
  '/assets/letterx.png',
];

/**
 * Full-Screen Cinematic ZORX Preloader (Z -> O -> R -> X).
 * Uses uploaded letter PNG assets cleanly centered with CSS transitions.
 */
export function Preloader({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0); // 0: Z, 1: O, 2: R, 3: X
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Preload image assets to ensure instant rendering without delay
    letters.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Loading sequence timings: Z -> O -> R -> X
    const timer1 = setTimeout(() => setCurrentIndex(1), 450);  // 25%: Z -> O
    const timer2 = setTimeout(() => setCurrentIndex(2), 900);  // 50%: O -> R
    const timer3 = setTimeout(() => setCurrentIndex(3), 1350); // 75%: R -> X

    // 100%: Hold X briefly, then fade out preloader overlay
    const timer4 = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    }, 1850);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className={`zorx-brand-preloader ${isComplete ? 'preloader-fade-out' : ''}`}>
      <div className="preloader-letter-container">
        {letters.map((src, index) => {
          let statusClass = 'upcoming';
          if (index === currentIndex) {
            statusClass = 'active';
          } else if (index < currentIndex) {
            statusClass = 'past';
          }

          return (
            <img
              key={src}
              src={src}
              alt={`ZORX Letter ${index}`}
              className={`preloader-letter-img ${statusClass}`}
            />
          );
        })}
      </div>
    </div>
  );
}


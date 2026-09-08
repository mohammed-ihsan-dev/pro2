import React, { useState, useEffect } from 'react';
import './Preloader.css';

const darkLetters = [
  '/assets/letterz.png',
  '/assets/lettero.png',
  '/assets/letterr.png',
  '/assets/letterx.png',
];

const lightLetters = [
  '/assets/letterz-green.png',
  '/assets/lettero-green.png',
  '/assets/letterr-green.png',
  '/assets/letterx-green.png',
];

/**
 * Full-Screen Cinematic ZORX Preloader (Z -> O -> R -> X).
 * Uses uploaded green letter PNG assets in Light Mode and white assets in Dark Mode.
 */
export function Preloader({ theme = 'light', onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0); // 0: Z, 1: O, 2: R, 3: X
  const [isExiting, setIsExiting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const letters = theme === 'dark' ? darkLetters : lightLetters;

  useEffect(() => {
    // 1. Eagerly preload and decode all letter images on GPU before animating
    letters.forEach((src) => {
      const img = new Image();
      img.src = src;
      if (img.decode) {
        img.decode().catch(() => {});
      }
    });

    // 2. High-performance, uninterrupted sequence timing: Z -> O -> R -> X
    const timer1 = setTimeout(() => setCurrentIndex(1), 420);  // Z -> O
    const timer2 = setTimeout(() => setCurrentIndex(2), 840);  // O -> R
    const timer3 = setTimeout(() => setCurrentIndex(3), 1260); // R -> X

    // 3. Hold X briefly (300ms), then trigger subtle exit animation (scale 1.04 + fade out)
    const timer4 = setTimeout(() => {
      setIsExiting(true);
    }, 1560);

    // 4. Complete preloader after exit animation completes (500ms exit)
    const timer5 = setTimeout(() => {
      setIsComplete(true);
      if (onComplete) onComplete();
    }, 2060);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete, letters]);

  if (isComplete) return null;

  return (
    <div 
      className={`zorx-brand-preloader ${theme === 'dark' ? 'dark-theme' : 'light-theme'} ${isExiting ? 'preloader-exit' : ''}`}
    >
      <div className="preloader-letter-container">
        {letters.map((src, index) => {
          let statusClass = 'upcoming';
          if (index === currentIndex) {
            statusClass = 'active';
          } else if (index < currentIndex) {
            statusClass = 'past';
          }

          return (
            <div key={src} className={`preloader-letter-wrapper ${statusClass}`}>
              <img
                src={src}
                alt={`ZORX Letter ${index}`}
                decoding="async"
                loading="eager"
                className="preloader-letter-img"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}


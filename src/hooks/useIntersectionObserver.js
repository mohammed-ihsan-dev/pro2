import { useEffect } from 'react';

/**
 * Custom hook to attach IntersectionObserver to elements matching selector or refs.
 * Adds 'is-visible' CSS class when element intersects with viewport threshold.
 */
export function useIntersectionObserver(options = {}) {
  const {
    selector = '.reveal-up, .reveal-fade, .reveal-scale, .img-reveal-wrapper',
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    once = true
  } = options;

  useEffect(() => {
    // Graceful fallback for environments without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          entry.target.classList.remove('is-visible');
        }
      });
    }, {
      threshold,
      rootMargin
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selector, threshold, rootMargin, once]);
}

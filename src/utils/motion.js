import { useEffect, useRef, useState } from 'react';

// Motion is deliberately small: a single fade-and-rise as a section enters view,
// nothing that loops or parallaxes. Timings are short and are neutralised entirely
// by the prefers-reduced-motion block in index.css.

export const timing = {
  revealMs: 200,
  ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
  staggerMs: 60
};

// Class string for a reveal target. `base` stays applied; the transform/opacity
// only differ while hidden. Pure and DOM-free so it can be unit tested.
export function revealClass(visible) {
  return visible ? 'reveal is-visible' : 'reveal';
}

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

// Adds `is-visible` once the element scrolls into view. Returns { ref, visible }.
// Safe on the server and when IntersectionObserver is missing (starts visible).
export function useReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = options;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}

import { useEffect, useRef } from "react";

/**
 * Translates an element vertically as the page scrolls, matching the
 * [data-parallax] behaviour in main.js. `speed` mirrors data-parallax.
 */
export function useParallax(speed = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight * 1.2) {
        el.style.transform = `translateY(${y * speed}px)`;
      }
    };

    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}

import { useEffect, useState, useRef } from "react";

/**
 * Tracks whether the page has been scrolled past a threshold, and the
 * overall scroll progress (0–100) down the document. Mirrors the
 * navbar "is-scrolled" toggle and .scroll-progress bar from main.js.
 */
export function useScrollState(threshold = 40) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > threshold);

      if (currentScrollY > lastScrollY.current && currentScrollY > threshold + 50) {
        // Scrolling down, hide it only after scrolling a bit past the threshold
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsScrollingDown(false);
      }
      lastScrollY.current = currentScrollY;

      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };

    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { isScrolled, progress, isScrollingDown };
}

import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past a threshold, and the
 * overall scroll progress (0–100) down the document. Mirrors the
 * navbar "is-scrolled" toggle and .scroll-progress bar from main.js.
 */
export function useScrollState(threshold = 40) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > threshold);

      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };

    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { isScrolled, progress };
}

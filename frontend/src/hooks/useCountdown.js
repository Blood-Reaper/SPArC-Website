import { useEffect, useState } from "react";

const pad = (n) => String(n).padStart(2, "0");

/**
 * Ticking countdown to `targetDate`, matching the [data-countdown]
 * behaviour in main.js.
 */
export function useCountdown(targetDate) {
  const [remaining, setRemaining] = useState({ d: "00", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const update = () => {
      const diff = Math.max(target - Date.now(), 0);
      setRemaining({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff / 3600000) % 24)),
        m: pad(Math.floor((diff / 60000) % 60)),
        s: pad(Math.floor((diff / 1000) % 60)),
      });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return remaining;
}

import { useCountdown } from "../../hooks/useCountdown";

export default function Countdown({ target }) {
  const { d, h, m, s } = useCountdown(target);
  
  const pad = (num) => String(num).padStart(2, "0");

  const units = [
    { value: pad(d), label: "Days" },
    { value: pad(h), label: "Hours" },
    { value: pad(m), label: "Minutes" },
    { value: pad(s), label: "Seconds" },
  ];

  return (
    <div className="hero-countdown">
      {units.map((unit, index) => (
        <div key={unit.label} className="countdown-item">
          <span className="countdown-num">{unit.value}</span>
          <span className="countdown-label">{unit.label}</span>
          {index < units.length - 1 && <div className="countdown-divider" />}
        </div>
      ))}
    </div>
  );
}


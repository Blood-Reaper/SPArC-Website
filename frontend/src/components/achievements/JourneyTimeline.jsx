import Reveal from "../common/Reveal";
import Pill from "../common/Pill";

export default function JourneyTimeline({ items }) {
  return (
    <div className="journey-timeline">
      {items.map((item, i) => (
        <Reveal
          as="div"
          className={`journey-item journey-item--${i % 2 === 0 ? "right" : "left"}`}
          key={item.year}
        >
          <div className="journey-dot" />
          <div className="journey-year">{item.year}</div>
          <div className="card journey-card">
            <Pill>{item.tag}</Pill>
            <h3 style={{ marginTop: 14, fontSize: 20 }}>{item.title}</h3>
            <p style={{ color: "var(--text-soft)", marginTop: 10, fontSize: 15 }}>{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

import Counter from "../common/Counter";

const STATS = [
  { target: 20, suffix: "+", label: "Years of Legacy" },
  { target: 500, suffix: "+", label: "Events Organized" },
  { target: 7000, suffix: "+", label: "Participants" },
  { target: 5, suffix: "", label: "Clubs" },
  { target: 4, suffix: "", label: "Functional Bodies" },
  { target: 100, suffix: "+", label: "Awards" },
];

export default function StatsStrip() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {STATS.map((stat) => (
          <div className="stat" key={stat.label}>
            <Counter target={stat.target} suffix={stat.suffix} />
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

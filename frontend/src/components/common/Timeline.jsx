import Reveal from "./Reveal";

export default function Timeline({ items }) {
  return (
    <Reveal as="div" className="timeline">
      {items.map((item) => (
        <div className="timeline-item" key={item.year}>
          <b>{item.year}</b>
          <span>{item.label}</span>
        </div>
      ))}
    </Reveal>
  );
}

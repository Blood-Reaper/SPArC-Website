import Reveal from "./Reveal";

/**
 * Filter chip row. The original site rendered these chips as static
 * markup with only the first one ever marked "active" — here they
 * actually drive filtering via `value` / `onChange`, which is a small,
 * genuine behavioural upgrade the React state model makes easy.
 */
export default function FilterBar({ options, value, onChange }) {
  return (
    <Reveal as="div" className="filter-bar">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={["filter-chip", option === value ? "active" : ""].filter(Boolean).join(" ")}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </Reveal>
  );
}

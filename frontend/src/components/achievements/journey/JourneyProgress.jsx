import React from "react";

export default function JourneyProgress({ current, total, milestones, activeIndex, onSelectStep }) {
  const currentFormatted = String(current + 1).padStart(2, "0");
  const totalFormatted = String(total).padStart(2, "0");

  return (
    <div className="journey-progress-bar">
      <div className="journey-progress-counter">
        <span className="journey-progress-current">{currentFormatted}</span>
        <span className="journey-progress-divider">/</span>
        <span className="journey-progress-total">{totalFormatted}</span>
      </div>

      <div className="journey-progress-nodes">
        {milestones.map((item, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = idx < activeIndex;
          return (
            <button
              key={item.year}
              type="button"
              className={`journey-node-dot ${isActive ? "is-active" : ""} ${isPassed ? "is-passed" : ""}`}
              onClick={() => onSelectStep && onSelectStep(idx)}
              title={`${item.year}: ${item.title}`}
              aria-label={`Jump to milestone ${item.year} - ${item.title}`}
            >
              <span className="journey-node-dot-inner" />
              <span className="journey-node-year">{item.year}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

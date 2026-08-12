import React from "react";

export default function DisciplineSelector({ disciplines, activeId, onSelect }) {
  return (
    <div className="discipline-selector-bar" role="tablist" aria-label="Creative Disciplines">
      {disciplines.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`discipline-panel-${item.id}`}
            id={`discipline-tab-${item.id}`}
            className={`discipline-tab-btn ${isActive ? "is-active" : ""}`}
            onClick={() => onSelect(item.id)}
          >
            <span className="discipline-tab-label">{item.domain}</span>
            {isActive && <span className="discipline-tab-indicator" />}
          </button>
        );
      })}
    </div>
  );
}

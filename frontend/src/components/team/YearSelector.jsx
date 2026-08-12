/**
 * YearSelector component to toggle between academic years for the Student Organising Committee.
 */
export default function YearSelector({ years = ["2026–27"], selectedYear = "2026–27", onSelectYear }) {
  return (
    <div className="year-selector-wrap">
      <span className="year-selector-label">Academic Tenure:</span>
      <div className="year-chips">
        {years.map((year) => (
          <button
            key={year}
            type="button"
            className={`year-chip ${selectedYear === year ? "is-active" : ""}`}
            onClick={() => onSelectYear && onSelectYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function RoleCard({ role, isSelected, onClick }) {
  return (
    <button
      type="button"
      className={["portal-role-card", isSelected ? "portal-role-card--selected" : ""].filter(Boolean).join(" ")}
      onClick={onClick}
    >
      <span className="portal-role-icon">{role.icon}</span>
      <span className="eyebrow" style={{ color: "var(--accent)" }}>
        {role.eyebrow}
      </span>
      <h3 className="portal-role-title">{role.title}</h3>
      <p className="portal-role-desc">{role.description}</p>
      <span className="portal-role-arrow">→</span>
    </button>
  );
}

/**
 * PersonProfile component displaying person identity along with all organizational assignments.
 */
export default function PersonProfile({ person, compact = false }) {
  if (!person) return null;

  const initials = person.name
    .replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s+/, "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={`person-profile-block ${compact ? "is-compact" : ""}`}>
      <div className="person-profile-header">
        <div className="person-profile-avatar">{initials}</div>
        <div>
          <h4 className="person-profile-name">{person.name}</h4>
          {person.title && <p className="person-profile-sub">{person.title}</p>}
        </div>
      </div>

      {person.assignments && person.assignments.length > 0 && (
        <div className="person-profile-roles">
          <span className="roles-label">Roles &amp; Positions:</span>
          <div className="roles-chips">
            {person.assignments.map((asgn, i) => (
              <span key={i} className="role-badge">
                {asgn.role || `${asgn.type} (${asgn.area || asgn.club || asgn.body})`}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

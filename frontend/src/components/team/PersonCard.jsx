import Media from "../common/Media";

/**
 * Flexible PersonCard component for team members across all sections.
 * Displays photo if available, or a styled image placeholder badge/avatar frame.
 */
export default function PersonCard({
  person,
  name,
  role,
  image,
  variant = "standard",
  dark = false,
  showAssignments = false,
  className = ""
}) {
  const personName = person?.name || name || "Member";
  const personRole = role || person?.role;
  const personImage = person?.image || image;

  // Generate initials for avatar fallback
  const initials = personName
    .replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s+/, "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (variant === "leadership") {
    return (
      <div className={`leadership-card ${dark ? "is-dark" : ""} ${className}`}>
        <div className="leadership-avatar-wrap">
          {personImage ? (
            <img src={personImage} alt={personName} className="leadership-avatar-img" />
          ) : (
            <div className="leadership-avatar-placeholder">
              <span className="avatar-initials">{initials}</span>
              <span className="avatar-photo-tag">PHOTO</span>
            </div>
          )}
          <div className="leadership-avatar-badge">{personRole}</div>
        </div>
        <div className="leadership-info">
          <h3 className="leadership-name">{personName}</h3>
          <p className="leadership-title">{person?.title || personRole}</p>
          {person?.quote && <blockquote className="leadership-quote">“{person.quote}”</blockquote>}
        </div>
      </div>
    );
  }

  if (variant === "advisory") {
    return (
      <div className={`advisory-card ${dark ? "is-dark" : ""} ${className}`}>
        <div className="advisory-avatar-wrap">
          {personImage ? (
            <img src={personImage} alt={personName} className="advisory-avatar-img" />
          ) : (
            <div className="advisory-avatar-placeholder">{initials}</div>
          )}
        </div>
        <div className="advisory-details">
          <h4 className="advisory-name">{personName}</h4>
          <span className="advisory-role">{personRole}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`person-card card ${dark ? "card-dark" : ""} ${className}`}>
      <div className="person-media-wrap">
        {personImage ? (
          <img src={personImage} alt={personName} className="person-media-img" />
        ) : (
          <div className="person-image-placeholder">
            <Media label={initials} variant="square" rounded />
          </div>
        )}
      </div>

      <div className="person-content">
        <h3 className={`person-name ${dark ? "text-light" : ""}`}>{personName}</h3>
        {personRole && <span className="person-role-tag">{personRole}</span>}

        {showAssignments && person?.assignments && person.assignments.length > 1 && (
          <div className="person-assignments">
            {person.assignments.map((asgn, idx) => (
              <span key={idx} className="assignment-chip">
                {asgn.role || asgn.area || asgn.type}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


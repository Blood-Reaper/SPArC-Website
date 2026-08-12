/**
 * Reusable CommitteeGroup component for Clubs and SPArC Functional Bodies.
 * Displays the moderator and list of team members with clean image/avatar placeholders.
 */
export default function CommitteeGroup({ name, description, moderator, members = [], type = "club" }) {
  const getInitials = (personName) => {
    if (!personName) return "?";
    return personName
      .replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s+/, "")
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className={`committee-group-card ${type === "body" ? "is-body" : "is-club"}`}>
      <div className="group-header">
        <div className="group-title-tag">
          <span className="group-type-badge">{type === "club" ? "Club" : "Functional Body"}</span>
          <h3 className="group-name">{name}</h3>
        </div>
        {description && <p className="group-desc">{description}</p>}
      </div>

      <div className="group-content">
        {moderator && (
          <div className="moderator-block">
            <span className="block-label">Moderator</span>
            <div className="moderator-chip">
              <div className="moderator-photo-placeholder">
                {moderator.image ? (
                  <img src={moderator.image} alt={moderator.name} className="moderator-photo-img" />
                ) : (
                  <span className="moderator-avatar">{getInitials(moderator.name)}</span>
                )}
              </div>
              <span className="moderator-name">{moderator.name}</span>
            </div>
          </div>
        )}

        {members.length > 0 && (
          <div className="members-block">
            <span className="block-label">Members ({members.length})</span>
            <div className="members-grid">
              {members.map((member) => {
                const memberInitials = getInitials(member.name);
                return (
                  <div key={member.id || member.name} className="member-item">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="member-photo-img" />
                    ) : (
                      <div className="member-avatar-placeholder" title={member.name}>
                        {memberInitials}
                      </div>
                    )}
                    <span className="member-name">{member.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


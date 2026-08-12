import React from "react";
import { Link } from "react-router-dom";
import Media from "../../common/Media";

export default function DisciplinePanel({ data }) {
  if (!data) return null;

  const { domain, tagline, description, imageLabel, mentors, club } = data;

  return (
    <div
      className="discipline-panel-layout"
      id={`discipline-panel-${data.id}`}
      role="tabpanel"
      aria-labelledby={`discipline-tab-${data.id}`}
    >
      {/* Left Column: Editorial Discipline Photography */}
      <div className="discipline-media-wrapper">
        <div className="discipline-media-frame">
          <Media label={imageLabel} variant="tall" className="discipline-media-img" />
          <div className="discipline-media-badge">
            <span className="discipline-badge-tag">{domain} Discipline</span>
          </div>
        </div>
      </div>

      {/* Right Column: Discipline & Mentor Info */}
      <div className="discipline-content-wrapper">
        <div className="discipline-header-meta">
          <span className="eyebrow">Discipline Focus</span>
          <h3 className="discipline-title">{domain}</h3>
          <p className="discipline-tagline">{tagline}</p>
        </div>

        <p className="discipline-description">{description}</p>

        {/* Mentors Section */}
        <div className="discipline-mentors-block">
          <span className="discipline-mentors-heading">
            {mentors.length > 1 ? "Activity Class Mentors" : "Activity Class Mentor"}
          </span>

          <div className="discipline-mentors-list">
            {mentors.map((mentor) => {
              const initials = mentor.name
                .replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s+/, "")
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (
                <div key={mentor.id} className="discipline-mentor-card">
                  <div className="discipline-mentor-avatar-box">
                    {mentor.image ? (
                      <img src={mentor.image} alt={mentor.name} className="discipline-mentor-photo" />
                    ) : (
                      <span className="discipline-mentor-avatar">{initials}</span>
                    )}
                  </div>
                  <div className="discipline-mentor-info">
                    <h4 className="discipline-mentor-name">{mentor.name}</h4>
                    <span className="discipline-mentor-role">{mentor.role}</span>
                    {mentor.bio && <p className="discipline-mentor-bio">{mentor.bio}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SPArC Club Connection Action */}
        {club && (
          <div className="discipline-club-connection">
            <div className="discipline-club-info">
              <span className="discipline-club-label">Associated Forum</span>
              <h5 className="discipline-club-name">{club.name}</h5>
            </div>
            <Link to={club.route} className="btn btn-gold-outline discipline-club-btn">
              Explore {club.name} &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

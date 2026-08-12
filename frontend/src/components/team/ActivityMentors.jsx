import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import { activityMentors } from "../../data/team/mentors";

export default function ActivityMentors() {
  return (
    <section className="section section--dark mentors-section">
      <div className="container">
        <SectionHeader
          eyebrow="Activity Class Mentors"
          title="Specialized Discipline Mentorship"
        />

        <Stagger className="mentors-grid">
          {activityMentors.map((group) => (
            <div key={group.domain} className="mentor-domain-card">
              <div className="domain-header">
                <span className="domain-icon">{group.icon}</span>
                <div>
                  <h3 className="domain-title">{group.domain}</h3>
                  <p className="domain-desc">{group.description}</p>
                </div>
              </div>

              <div className="mentors-list">
                {group.mentors.map((mentor) => {
                  const initials = mentor.name
                    .replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s+/, "")
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();
                  return (
                    <div key={mentor.id} className="mentor-item">
                      {mentor.image ? (
                        <img src={mentor.image} alt={mentor.name} className="mentor-photo-img" />
                      ) : (
                        <span className="mentor-avatar">{initials}</span>
                      )}
                      <div>
                        <h4 className="mentor-name">{mentor.name}</h4>
                        <span className="mentor-role">{mentor.role}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

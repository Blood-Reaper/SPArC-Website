import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import CommitteeGroup from "./CommitteeGroup";
import { officialClubs } from "../../data/team/clubs";

export default function ClubsSection() {
  return (
    <section className="section section--dark clubs-team-section">
      <div className="container">
        <SectionHeader
          eyebrow="Official Cultural Clubs"
          title="Creative Wings of SPArC"
        />

        <Stagger className="clubs-grid">
          {officialClubs.map((club) => (
            <CommitteeGroup
              key={club.id}
              name={club.name}
              description={club.description}
              moderator={club.moderator}
              members={club.members}
              type="club"
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import PersonCard from "./PersonCard";
import { institutionalLeadership } from "../../data/team/leadership";

export default function LeadershipSection() {
  return (
    <section className="section leadership-section">
      <div className="container">
        <SectionHeader
          eyebrow="Institutional Leadership"
          title="Guiding Vision &amp; Patronage"
        />

        <Stagger className="leadership-grid">
          {institutionalLeadership.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              variant="leadership"
              className="institutional-card"
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

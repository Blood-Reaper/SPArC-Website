import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import PersonCard from "./PersonCard";
import { executiveCommittee } from "../../data/team/executive";

export default function ExecutiveCommittee() {
  return (
    <section className="section section--dark executive-section">
      <div className="container">
        <SectionHeader
          eyebrow="Executive Committee"
          title="Administrative &amp; Governance Panel"
        />

        <Stagger className="grid grid-3">
          {executiveCommittee.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              dark
              showAssignments
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

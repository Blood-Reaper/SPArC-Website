import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import PersonCard from "./PersonCard";
import { advisoryCommittee } from "../../data/team/advisory";

export default function AdvisoryCommittee() {
  return (
    <section className="section advisory-section">
      <div className="container">
        <SectionHeader
          eyebrow="Advisory Committee"
          title="Faculty Mentors &amp; Academic Advisors"
        />

        <Stagger className="advisory-grid">
          {advisoryCommittee.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              variant="advisory"
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import CommitteeGroup from "./CommitteeGroup";
import { sparcBodies } from "../../data/team/bodies";

export default function BodiesSection() {
  return (
    <section className="section bodies-team-section">
      <div className="container">
        <SectionHeader
          eyebrow="SPArC Functional Bodies"
          title="Operations, Media &amp; Management Wings"
        />

        <Stagger className="bodies-grid">
          {sparcBodies.map((body) => (
            <CommitteeGroup
              key={body.id}
              name={body.name}
              description={body.description}
              moderator={body.moderator}
              members={body.members}
              type="body"
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

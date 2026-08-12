import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import Media from "../common/Media";
import { homeCommittee } from "../../data/team";

export default function TeamPreview() {
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeader
          eyebrow="Student Organising Committee"
          title="The Minds Behind the Magic"
          ctaLabel="Meet the People Behind SPArC →"
          ctaTo="/team"
        />
        <Stagger className="grid grid-4">
          {homeCommittee.map((member) => (
            <div className="card" style={{ background: "transparent", boxShadow: "none", textAlign: "center" }} key={member.name}>
              <Media label="Photo" variant="square" rounded />
              <h3 style={{ fontSize: 16, color: "#fff", marginTop: 14 }}>{member.name}</h3>
              <span style={{ fontSize: 13, color: "var(--accent)" }}>{member.role}</span>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import Card from "../common/Card";
import Media from "../common/Media";
import { clubs } from "../../data/clubs";

export default function ClubsPreview() {
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHeader
          eyebrow="Our Clubs & Bodies"
          title="Creative Clubs & Important Bodies"
          ctaLabel="View All →"
          ctaTo="/clubs"
        />
        <Stagger className="grid grid-3">
          {clubs.map((club) => (
            <Card to={`/clubs/${club.id}`} transparent key={club.id}>
              <Media label={club.shortName} variant="square" />
              <p style={{ color: "#fff", marginTop: 12, fontSize: 14, fontWeight: 600 }}>{club.name}</p>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

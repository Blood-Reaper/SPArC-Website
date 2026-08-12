import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import Card from "../common/Card";
import Media from "../common/Media";
import { featuredEvent, upcomingEvents } from "../../data/events";

export default function EventsPreview() {
  const [first, second] = upcomingEvents;

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Featured Events"
          title="Celebrations That Define Us"
          ctaLabel="Explore Event Calendar →"
          ctaTo="/events"
        />
        <Stagger className="grid grid-4">
          <Card to={`/events/${featuredEvent.id}`} transparent style={{ gridColumn: "span 2" }}>
            <Media label="Mega Event" variant="wide" />
            <h3 style={{ fontSize: 20, marginTop: 14 }}>SATRANG</h3>
            <p style={{ color: "var(--text-soft)", fontSize: 14 }}>{featuredEvent.tagline}</p>
          </Card>
          <Card to={`/events/${first.id}`} transparent>
            <Media label={first.tag} />
            <h3 style={{ fontSize: 18, marginTop: 14 }}>{first.name}</h3>
          </Card>
          <Card to={`/events/${second.id}`} transparent>
            <Media label={second.tag} />
            <h3 style={{ fontSize: 18, marginTop: 14 }}>{second.name}</h3>
          </Card>
        </Stagger>
      </div>
    </section>
  );
}

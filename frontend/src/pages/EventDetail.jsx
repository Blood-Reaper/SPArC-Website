import { useParams } from "react-router-dom";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/common/Reveal";
import Stagger from "../components/common/Stagger";
import SectionHeader from "../components/common/SectionHeader";
import Media from "../components/common/Media";
import Button from "../components/common/Button";
import NotFoundNotice from "../components/common/NotFoundNotice";
import { getEventById } from "../data/events";

export default function EventDetail() {
  const { eventId } = useParams();
  const event = getEventById(eventId);

  if (!event) {
    return (
      <NotFoundNotice
        title="Event not found"
        message="We couldn't find an event with that name. It may have wrapped up or the link is out of date."
        backTo="/events"
        backLabel="Browse All Events"
      />
    );
  }

  const about = event.about || event.tagline || `Details for ${event.name} are coming soon.`;

  return (
    <>
      <PageHero
        breadcrumb={`Home / Events / ${event.name}`}
        title={event.name}
        lede={event.tagline || event.dateLabel}
      />

      <section className="section">
        <Reveal as="div" className="container two-col">
          <div>
            <span className="eyebrow">About</span>
            <h2 style={{ fontSize: 28, marginBottom: 16 }}>What to expect</h2>
            <p style={{ color: "var(--text-soft)", fontSize: 16 }}>{about}</p>
          </div>
          {event.schedule ? (
            <div className="card" style={{ padding: 28 }}>
              <span className="eyebrow">Schedule</span>
              <ul style={{ marginTop: 14, fontSize: 14, color: "var(--text-soft)" }}>
                {event.schedule.map((line, i) => (
                  <li
                    key={line}
                    style={{
                      padding: "8px 0",
                      borderBottom: i < event.schedule.length - 1 ? "1px solid var(--line)" : "none",
                    }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Media label={event.tag || event.name} variant="wide" />
          )}
        </Reveal>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Stagger className="grid grid-3">
            <div className="card" style={{ background: "rgba(255,255,255,0.06)", boxShadow: "none", padding: 24 }}>
              <span className="eyebrow">Venue</span>
              <p style={{ marginTop: 10, color: "rgba(250,247,242,0.85)" }}>
                {event.venue || "Karim City College, Jamshedpur"}
              </p>
            </div>
            <div className="card" style={{ background: "rgba(255,255,255,0.06)", boxShadow: "none", padding: 24 }}>
              <span className="eyebrow">Rules</span>
              <p style={{ marginTop: 10, color: "rgba(250,247,242,0.85)" }}>
                {event.rules || "Team size, eligibility and code of conduct detailed at registration."}
              </p>
            </div>
            <div className="card" style={{ background: "rgba(255,255,255,0.06)", boxShadow: "none", padding: 24 }}>
              <div>
                <span className="eyebrow">Registration</span>
              </div>
              <div style={{ marginTop: 12 }}>
                <Button to="/portal" variant="gold">
                  Register Now
                </Button>
              </div>
            </div>
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Gallery" title="From Last Year" />
          <div className="grid grid-4">
            {["01", "02", "03", "04"].map((label) => (
              <Media label={label} variant="square" key={label} />
            ))}
          </div>
        </div>
      </section>

      {event.sponsors && (
        <section className="section section--dark">
          <div className="container">
            <SectionHeader eyebrow="Sponsors" title="Made Possible By" />
            <div className="grid grid-4">
              {event.sponsors.map((sponsor, i) => (
                <div
                  key={sponsor + i}
                  className="card"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    boxShadow: "none",
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(250,247,242,0.6)",
                  }}
                >
                  {sponsor}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

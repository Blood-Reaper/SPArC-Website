import { useMemo, useState } from "react";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/common/Reveal";
import Stagger from "../components/common/Stagger";
import SectionHeader from "../components/common/SectionHeader";
import FilterBar from "../components/common/FilterBar";
import Card from "../components/common/Card";
import Media from "../components/common/Media";
import Pill from "../components/common/Pill";
import { featuredEvent, upcomingEvents, pastEvents, pastEventYears } from "../data/events";

export default function Events() {
  const [year, setYear] = useState("All");

  const filteredPast = useMemo(
    () => (year === "All" ? pastEvents : pastEvents.filter((event) => String(event.year) === year)),
    [year]
  );

  return (
    <>
      <PageHero
        breadcrumb="Home / Events"
        title="Every event, one calendar."
        lede="From flagship fests to intimate open-mics — find what's next."
      />

      <section className="section">
        <div className="container">
          <Card
            to={`/events/${featuredEvent.id}`}
            className="two-col"
            style={{ alignItems: "stretch", padding: 0, overflow: "hidden" }}
          >
            <Media label="Featured" variant="wide" className="wide" style={{ aspectRatio: "auto", height: "100%" }} />
            <div style={{ padding: 40 }}>
              <Pill>{featuredEvent.tag}</Pill>
              <h2 style={{ fontSize: 30, marginTop: 14 }}>{featuredEvent.name}</h2>
              <p style={{ color: "var(--text-soft)", marginTop: 12 }}>{featuredEvent.tagline}</p>
              <p style={{ marginTop: 16, fontWeight: 600 }}>
                {featuredEvent.dateLabel} · {featuredEvent.venue}
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeader eyebrow="Upcoming" title="What's Coming Up" />
          <Stagger className="grid grid-4">
            {upcomingEvents.map((event) => (
              <Card to={`/events/${event.id}`} key={event.id} style={{ background: "rgba(255,255,255,0.06)", boxShadow: "none" }}>
                <Media label={event.tag} />
                <div style={{ padding: 18 }}>
                  <h3 style={{ fontSize: 16, color: "#fff" }}>{event.name}</h3>
                  <p style={{ fontSize: 13, color: "var(--accent)", marginTop: 6 }}>{event.dateLabel}</p>
                </div>
              </Card>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <Reveal as="div" className="container">
          <div className="section-head">
            <span className="eyebrow">Calendar</span>
            <h2>Plan Around It</h2>
          </div>
          <div className="card" style={{ padding: 32, textAlign: "center", color: "var(--text-soft)" }}>
            Interactive month-view calendar goes here.
          </div>
        </Reveal>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeader eyebrow="Past Events" title="What We've Hosted" ctaLabel="View Archive →" ctaTo="/events" />
          <FilterBar options={pastEventYears} value={year} onChange={setYear} />
          <Stagger className="grid grid-3">
            {filteredPast.map((event) => (
              <Card to={`/events/${event.id}`} key={event.id} style={{ background: "rgba(255,255,255,0.06)", boxShadow: "none" }}>
                <Media label={event.tag} />
              </Card>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

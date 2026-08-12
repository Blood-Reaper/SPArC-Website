import PageHero from "../components/layout/PageHero";
import Reveal from "../components/common/Reveal";
import Stagger from "../components/common/Stagger";
import SectionHeader from "../components/common/SectionHeader";
import Media from "../components/common/Media";
import Pill from "../components/common/Pill";
import Button from "../components/common/Button";
import JourneyTimeline from "../components/achievements/JourneyTimeline";
import { achievementStats, journeyMilestones, awards, pressMentions } from "../data/achievements";

export default function Achievements() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Achievements"
        title={
          <>
            Two decades of
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>art, culture &amp; legacy.</em>
          </>
        }
        lede="Milestones, awards, and a year-by-year chronicle of SPArC's journey since 2004."
      />

      <section className="section" style={{ paddingBottom: 0 }}>
        <Reveal as="div" className="container two-col">
          <div>
            <span className="eyebrow">Est. 2004</span>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: 20 }}>A Story Written in Passion</h2>
            <p style={{ color: "var(--text-soft)", fontSize: 17, maxWidth: 480 }}>
              From a small cultural committee to one of the most celebrated co-curricular forums in
              Jharkhand — the SPArC story is one of courage, creativity, and community.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {achievementStats.map((stat) => (
              <div className="card" style={{ padding: 28, textAlign: "center" }} key={stat.label}>
                <b style={{ fontFamily: "var(--font-display)", fontSize: 40, color: "var(--secondary)", display: "block" }}>
                  {stat.value}
                </b>
                <span style={{ fontSize: 14, color: "var(--text-soft)" }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section journey-section-enhanced">
        <div className="container">
          <SectionHeader
            eyebrow="Year by Year"
            title="Our Journey of Recognition"
            description="Every chapter of our story, told in milestones."
          />
          <JourneyTimeline items={journeyMilestones} />
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeader eyebrow="Awards" title="National Recognition" />
          <Stagger className="grid grid-3">
            {awards.map((award) => (
              <div className="card" style={{ background: "rgba(255,255,255,0.06)", boxShadow: "none", padding: 26 }} key={award.title}>
                <Pill>{award.level}</Pill>
                <h3 style={{ color: "#fff", marginTop: 12, fontSize: 17 }}>{award.title}</h3>
                <span style={{ fontSize: 13, color: "var(--accent)" }}>{award.year}</span>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Media Coverage" title="In the Press" />
          <div className="grid grid-3">
            {pressMentions.map((source) => (
              <div className="card" key={source}>
                <Media label={source} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <Reveal as="div" className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">What's Next</span>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: 20 }}>The Story Continues in 2026</h2>
          <p style={{ color: "rgba(250,247,242,0.75)", fontSize: 17, maxWidth: 560, margin: "0 auto 36px" }}>
            SATRANG 2026 is on the horizon. Be part of the next chapter — register, perform, create.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Button to="/events" variant="gold">
              Explore SATRANG 2026
            </Button>
            <Button to="/portal" variant="outline">
              Join SPArC →
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

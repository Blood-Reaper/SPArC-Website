import PageHero from "../components/layout/PageHero";
import Reveal from "../components/common/Reveal";
import Stagger from "../components/common/Stagger";
import SectionHeader from "../components/common/SectionHeader";
import Timeline from "../components/common/Timeline";
import Media from "../components/common/Media";
import { aboutTimeline } from "../data/achievements";

const MESSAGES = [
  {
    role: "Principal's Message",
    quote:
      "SPArC represents everything a co-curricular forum should be — inclusive, ambitious and deeply rooted in student leadership. It is a privilege to watch it grow year after year.",
    author: "Dr. Mohammad Reyaz",
  },
  {
    role: "Convener's Message",
    quote: "Every event we run is built by students, for students. Our role is simply to open doors and get out of the way.",
    author: "Dr. S. M. Yahiya Ibrahim",
  },
];

const PILLARS = [
  { label: "Vision", copy: "To be a platform where every individual discovers, develops and expresses their talent." },
  { label: "Mission", copy: "To promote art, culture and literature through inclusive and inspiring initiatives." },
  { label: "Core Values", copy: "Creativity, inclusivity, discipline and community — the four pillars of everything we do." },
];

const FAQS = [
  { q: "Who can join SPArC?", a: "Any registered student of Karim City College, across all years and departments." },
  { q: "Is there a membership fee?", a: "SPArC membership is free; some club-specific events may have nominal costs." },
];

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="Home / About"
        title="Two decades of art, culture and community."
        lede="The story of how a small student initiative grew into the cultural heartbeat of Karim City College."
      />

      <section className="section">
        <Reveal as="div" className="container two-col">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 style={{ fontSize: 36, marginBottom: 20 }}>Where it all began</h2>
            <p style={{ color: "var(--text-soft)", fontSize: 17 }}>
              Founded in 2004, SPArC was born from a simple idea — that a college campus should be
              more than lecture halls and examinations. It should be a place where students discover
              who they are through art. What started as a handful of students staging a small drama
              evening has grown into five clubs, four functional bodies, a magazine, and thousands of
              alumni carrying that spirit forward.
            </p>
          </div>
          <Media label="Founding Members, 2004" variant="wide" />
        </Reveal>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Stagger className="grid grid-2">
            {MESSAGES.map((message) => (
              <div className="card" style={{ background: "rgba(255,255,255,0.06)", padding: 36, boxShadow: "none" }} key={message.role}>
                <span className="eyebrow">{message.role}</span>
                <p style={{ marginTop: 16, fontSize: 16, color: "rgba(250,247,242,0.85)" }}>“{message.quote}”</p>
                <p style={{ marginTop: 18, fontWeight: 700, color: "var(--accent)" }}>— {message.author}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Stagger className="grid grid-3">
            {PILLARS.map((pillar) => (
              <div className="card" style={{ padding: 32 }} key={pillar.label}>
                <span className="pill">{pillar.label}</span>
                <p style={{ marginTop: 14, color: "var(--text-soft)" }}>{pillar.copy}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeader eyebrow="Journey Timeline" title="Two decades in the making" />
          <Timeline items={aboutTimeline} />
        </div>
      </section>

      <section className="section">
        <Reveal as="div" className="container two-col">
          <Media label="Legacy & Impact" variant="wide" />
          <div>
            <span className="eyebrow">Legacy &amp; Impact</span>
            <h2 style={{ fontSize: 32, marginBottom: 16 }}>More than an activity — a foundation</h2>
            <p style={{ color: "var(--text-soft)", fontSize: 16 }}>
              Alumni of SPArC have gone on to careers in film, journalism, design and academia,
              crediting their years on stage and behind the scenes as where they learned to lead,
              collaborate and take creative risks.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section section--dark">
        <Reveal as="div" className="container">
          <div className="section-head">
            <span className="eyebrow">FAQs</span>
            <h2>Common Questions</h2>
          </div>
          <Stagger className="grid grid-2">
            {FAQS.map((faq) => (
              <div className="card" style={{ background: "rgba(255,255,255,0.06)", boxShadow: "none", padding: 24 }} key={faq.q}>
                <h3 style={{ fontSize: 16, color: "#fff" }}>{faq.q}</h3>
                <p style={{ color: "rgba(250,247,242,0.75)", marginTop: 8, fontSize: 14 }}>{faq.a}</p>
              </div>
            ))}
          </Stagger>
        </Reveal>
      </section>
    </>
  );
}

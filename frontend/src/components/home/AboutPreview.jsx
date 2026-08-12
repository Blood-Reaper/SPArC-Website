import Reveal from "../common/Reveal";
import Button from "../common/Button";
import Media from "../common/Media";

const PILLARS = [
  { label: "Vision", copy: "A platform where every talent discovers its voice." },
  { label: "Mission", copy: "Promoting art, culture and literature through inclusive initiatives." },
  { label: "Legacy", copy: "Two decades of passion and countless achievements." },
];

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container two-col">
        <Reveal>
          <span className="eyebrow">Who We Are</span>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", marginBottom: 20 }}>Our Story, Our Spirit</h2>
          <p style={{ color: "var(--text-soft)", fontSize: 17, marginBottom: 28, maxWidth: 460 }}>
            SPArC, the Co-Curricular Forum of Karim City College, has been the heartbeat of cultural
            expression on campus since 2004 — a space where students learn beyond the classroom and
            create memories that shape confidence, creativity and character.
          </p>
          <div className="grid grid-3" style={{ marginBottom: 32 }}>
            {PILLARS.map((pillar) => (
              <div key={pillar.label}>
                <span className="pill">{pillar.label}</span>
                <p style={{ fontSize: 14, marginTop: 10, color: "var(--text-soft)" }}>{pillar.copy}</p>
              </div>
            ))}
          </div>
          <Button to="/about" variant="primary">
            Know Our Journey
          </Button>
        </Reveal>

        <Reveal style={{ position: "relative" }}>
          <Media label="Campus — Karim City College" variant="wide" />
          <div
            className="card"
            style={{
              position: "absolute",
              bottom: -24,
              left: -24,
              background: "var(--primary)",
              color: "#fff",
              padding: "20px 24px",
              maxWidth: 220,
            }}
          >
            <b style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--accent)", display: "block" }}>
              2004
            </b>
            <span style={{ fontSize: 13 }}>The beginning of a beautiful journey</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

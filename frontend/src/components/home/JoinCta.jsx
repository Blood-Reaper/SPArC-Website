import Reveal from "../common/Reveal";
import Button from "../common/Button";

export default function JoinCta() {
  return (
    <section
      className="section"
      style={{
        background:
          "linear-gradient(180deg, rgba(123,30,58,0.92), rgba(15,20,18,0.94)), var(--secondary)",
        color: "#fff",
      }}
    >
      <Reveal as="div" className="container" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(30px,5vw,50px)", color: "#fff", maxWidth: 720, margin: "0 auto 24px" }}>
          Become Part of the Legacy
        </h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <Button to="/portal" variant="gold">
            Join SPArC
          </Button>
          <Button to="/portal" variant="outline">
            Open Portal
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

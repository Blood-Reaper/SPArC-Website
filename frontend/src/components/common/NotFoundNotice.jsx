import Button from "./Button";

export default function NotFoundNotice({ title, message, backTo, backLabel }) {
  return (
    <section className="section" style={{ textAlign: "center", minHeight: "50vh" }}>
      <div className="container">
        <span className="eyebrow">Oops</span>
        <h1 style={{ fontSize: "clamp(28px,4vw,44px)", marginBottom: 16 }}>{title}</h1>
        <p style={{ color: "var(--text-soft)", fontSize: 17, maxWidth: 480, margin: "0 auto 32px" }}>{message}</p>
        <Button to={backTo} variant="primary">
          {backLabel}
        </Button>
      </div>
    </section>
  );
}

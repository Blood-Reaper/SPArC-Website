import Media from "../common/Media";

export default function TeamMemberCard({ name, role, dark = false, faded = false }) {
  return (
    <div style={{ textAlign: "center", opacity: faded ? 0.8 : 1 }}>
      <Media label="Photo" variant="square" rounded />
      <h3 style={{ fontSize: 16, color: dark ? "#fff" : undefined, marginTop: 14 }}>{name}</h3>
      {role && <span style={{ fontSize: 13, color: dark ? "var(--accent)" : "var(--secondary)" }}>{role}</span>}
    </div>
  );
}

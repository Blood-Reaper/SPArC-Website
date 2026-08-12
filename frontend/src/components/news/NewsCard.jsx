import Card from "../common/Card";
import Media from "../common/Media";

export default function NewsCard({ item, dark = false }) {
  return (
    <Card to="/news" transparent style={dark ? { background: "rgba(255,255,255,0.06)" } : undefined}>
      <Media label={item.tag} />
      <div style={{ padding: 18 }}>
        <p style={{ fontSize: 13, color: dark ? "var(--accent)" : "var(--text-soft)" }}>{item.date}</p>
        <h3 style={{ fontSize: 17, color: dark ? "#fff" : undefined, marginTop: 8 }}>{item.title}</h3>
      </div>
    </Card>
  );
}

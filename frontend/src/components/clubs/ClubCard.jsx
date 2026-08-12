import Card from "../common/Card";
import Pill from "../common/Pill";
import Media from "../common/Media";

export default function ClubCard({ club }) {
  return (
    <Card to={`/clubs/${club.id}`}>
      <Media label={club.name} variant="wide" />
      <div style={{ padding: 22 }}>
        <Pill>{club.category}</Pill>
        <h3 style={{ fontSize: 20, marginTop: 12 }}>{club.name}</h3>
        <p style={{ color: "var(--text-soft)", fontSize: 14, marginTop: 8 }}>{club.tagline}</p>
      </div>
    </Card>
  );
}

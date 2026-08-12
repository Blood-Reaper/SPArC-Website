import { useParams } from "react-router-dom";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/common/Reveal";
import Stagger from "../components/common/Stagger";
import SectionHeader from "../components/common/SectionHeader";
import Timeline from "../components/common/Timeline";
import Media from "../components/common/Media";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import NotFoundNotice from "../components/common/NotFoundNotice";
import { getClubById } from "../data/clubs";

export default function ClubDetail() {
  const { clubId } = useParams();
  const club = getClubById(clubId);

  if (!club) {
    return (
      <NotFoundNotice
        title="Club or Body not found"
        message="We couldn't find a club or body with that name. It may have been renamed or the link is out of date."
        backTo="/clubs"
        backLabel="Browse All Clubs & Bodies"
      />
    );
  }

  const related = club.relatedClubs.map((id) => getClubById(id)).filter(Boolean);

  return (
    <>
      <PageHero breadcrumb={`Home / Clubs / ${club.name}`} title={club.name} lede={club.tagline} />

      <section className="section">
        <Reveal as="div" className="container two-col">
          <Media label={`${club.name} in Action`} variant="wide" />
          <div>
            <span className="eyebrow">About</span>
            <h2 style={{ fontSize: 28, marginBottom: 16 }}>
              {club.category === "Important Bodies" ? "Powering SPArC Operations" : "The stage is ours"}
            </h2>
            <p style={{ color: "var(--text-soft)", fontSize: 16 }}>{club.description}</p>
          </div>
        </Reveal>
      </section>

      {/* Moderator & Members */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeader
            eyebrow="People"
            title={club.category === "Important Bodies" ? "Who runs this body" : "Who runs this club"}
          />
          <Stagger className="grid grid-3">
            {/* Moderator */}
            {club.moderator && (
              <div className="card" style={{ background: "rgba(255,255,255,0.08)", boxShadow: "none", padding: 28, textAlign: "center" }}>
                <Media label="Photo" variant="square" rounded />
                <span className="eyebrow" style={{ marginTop: 14, display: "block" }}>Moderator</span>
                <h3 style={{ color: "#fff", marginTop: 6, fontSize: 18 }}>{club.moderator.name}</h3>
              </div>
            )}
            {/* Members */}
            {club.members && club.members.map((member) => (
              <div
                key={member.id}
                className="card"
                style={{ background: "rgba(255,255,255,0.06)", boxShadow: "none", padding: 28, textAlign: "center" }}
              >
                <Media label="Photo" variant="square" rounded />
                <h3 style={{ color: "#fff", marginTop: 14, fontSize: 16 }}>{member.name}</h3>
                <span style={{ fontSize: 13, color: "var(--accent)" }}>Member</span>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {club.events.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Events"
              title={club.category === "Important Bodies" ? "Managed by this body" : "Hosted by this club"}
            />
            <div className="grid grid-3">
              {club.events.map((event) => (
                <Card key={event}>
                  <Media label={event} />
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {club.achievements.length > 0 && (
        <section className="section section--dark">
          <div className="container">
            <SectionHeader eyebrow="Achievements" title="Highlights" />
            <Timeline items={club.achievements.map((a) => ({ year: a.year, label: a.label }))} />
          </div>
        </section>
      )}

      <section className="section" style={{ textAlign: "center" }}>
        <Reveal as="div" className="container">
          <h2 style={{ fontSize: 30, marginBottom: 20 }}>
            {club.category === "Important Bodies" ? "Ready to contribute?" : "Ready to take the stage?"}
          </h2>
          <Button to="/portal" variant="primary">
            Join {club.name}
          </Button>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="section section--dark">
          <div className="container">
            <SectionHeader
              eyebrow={club.category === "Important Bodies" ? "Related Bodies" : "Related Clubs"}
              title="You Might Also Like"
            />
            <div className="grid grid-3">
              {related.map((r) => (
                <Card to={`/clubs/${r.id}`} transparent key={r.id} style={{ background: "rgba(255,255,255,0.06)" }}>
                  <Media label={r.name} />
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

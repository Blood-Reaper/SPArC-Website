import Reveal from "../common/Reveal";
import Stagger from "../common/Stagger";
import RoleCard from "./RoleCard";
import { useParallax } from "../../hooks/useParallax";
import { portalRoles } from "../../data/portal";

export default function PortalHero({ selectedRole, onSelectRole }) {
  const parallaxRef = useParallax(0.08);

  return (
    <header className="page-hero hero-portal">
      <div className="hero-media" ref={parallaxRef} />
      <div className="hero-grain" />
      <Reveal as="div" className="container">
        <p
          className="breadcrumb"
          style={{ justifyContent: "center", display: "flex" }}
        >
          SPArC Portal
        </p>
        <h1 style={{ margin: "0 auto 8px" }}>
          Welcome to <span style={{ color: "var(--accent)" }}>SPArC</span>
        </h1>
        <div className="hero-gold-divider" style={{ margin: "16px auto 24px auto" }}>
          <span className="gold-line" />
          <span className="gold-diamond">◆</span>
          <span className="gold-line" />
        </div>
        <p className="lede" style={{ margin: "0 auto 40px", maxWidth: 560 }}>
          Choose how you'd like to continue — log in as a member, reconnect as
          an alumnus, or apply to join the SPArC family.
        </p>
        <Stagger className="grid grid-3" style={{ textAlign: "left" }}>
          {portalRoles.map((role) => (
            <RoleCard
              role={role}
              key={role.id}
              isSelected={selectedRole === role.id}
              onClick={() => onSelectRole(role.id)}
            />
          ))}
        </Stagger>
      </Reveal>
    </header>
  );
}

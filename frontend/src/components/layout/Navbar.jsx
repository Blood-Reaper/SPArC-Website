import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useScrollState } from "../../hooks/useScrollState";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/clubs", label: "Clubs" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/achievements", label: "Achievements" },
  { to: "/reports", label: "Reports" },
  { to: "/team", label: "Team" },
  { to: "/news", label: "News" },
];

export default function Navbar() {
  const { isScrolled } = useScrollState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={["navbar", isScrolled ? "is-scrolled" : ""].filter(Boolean).join(" ")}>
      <div className="container">
        <Link to="/" className="brand">
          <span className="brand-mark">SPArC</span>
          <span className="brand-sub">The Co-Curricular Forum</span>
        </Link>

        <ul className={["nav-links", isOpen ? "is-open" : ""].filter(Boolean).join(" ")}>
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link to="/portal" className="btn btn-burgundy">
            Join SPArC
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  const { isScrolled: isPastThreshold, isScrollingDown } = useScrollState(40);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const darkSections = Array.from(document.querySelectorAll('.section--dark, .page-hero, .hero-custom, .site-footer'));
      let overDark = false;
      
      for (const section of darkSections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 20 && rect.bottom >= 40) {
          overDark = true;
          break;
        }
      }
      setIsOverDarkSection(overDark);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  let navClass = "";
  if (pathname === "/") {
    if (!isPastThreshold) {
      navClass = "is-hero-scrolled"; // transparent, dark text at very top
    } else if (isOverDarkSection) {
      navClass = ""; // transparent, white text
    } else {
      navClass = "is-scrolled"; // standard beige, dark text when scrolling
    }
  } else {
    navClass = isPastThreshold ? (isOverDarkSection ? "" : "is-scrolled") : "";
  }

  if (isScrollingDown) {
    navClass += " is-hidden";
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={["navbar", navClass].filter(Boolean).join(" ")}>
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
          <Link to="/portal" className={`btn ${pathname === "/" ? "btn-dark-green" : "btn-burgundy"}`}>
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

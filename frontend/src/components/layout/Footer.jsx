import { useState } from "react";
import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { to: "/about", label: "About Us" },
  { to: "/clubs", label: "Clubs" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/achievements", label: "Achievements" },
];

const RESOURCE_LINKS = [
  { to: "/reports", label: "Annual Reports" },
  { to: "/reports", label: "Sparkling Span" },
  { to: "/reports", label: "Bulletin" },
  { to: "/reports", label: "Downloads" },
  { to: "/reports", label: "Archive" },
];

const SOCIALS = [
  { label: "Instagram", short: "IG" },
  { label: "YouTube", short: "YT" },
  { label: "LinkedIn", short: "IN" },
  { label: "Facebook", short: "FB" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-mark">SPArC</span>
            <p>
              The Co-Curricular Forum, Karim City College, Jamshedpur, Jharkhand. Empowering
              students to explore, express and excel in the world of art and culture.
            </p>
            <div className="footer-social">
              {SOCIALS.map((social) => (
                <a href="#" aria-label={social.label} key={social.label}>
                  {social.short}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              {RESOURCE_LINKS.map((link, i) => (
                <li key={link.label + i}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul>
              <li>Karim City College, Jamshedpur, Jharkhand</li>
              <li>sparc@karimcitycollege.ac.in</li>
              <li>+91 92345 67890</li>
            </ul>
            <h4 style={{ marginTop: 24 }}>Newsletter</h4>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" aria-label="Subscribe">
                &rarr;
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 SPArC — Society for Promotion of Art &amp; Culture. All Rights Reserved.</span>
          <span>Karim City College, Jamshedpur</span>
        </div>
      </div>
    </footer>
  );
}

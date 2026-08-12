import Reveal from "../common/Reveal";
import Button from "../common/Button";
import Countdown from "../common/Countdown";
import { useParallax } from "../../hooks/useParallax";
import { featuredEvent } from "../../data/events";

export default function HomeHero() {
  const parallaxRef = useParallax(0.12);

  return (
    <header className="page-hero hero-custom">
      {/* Background Image Layer with Gradient Overlay */}
      <div className="hero-backdrop" ref={parallaxRef}>
        <img src="/image.png" alt="SPArC Art & Culture Backdrop" className="hero-bg-img" />
        <div className="hero-vignette-overlay" />
      </div>

      {/* Left Social Icons Sidebar */}
      <div className="hero-social-sidebar">
        <div className="social-top-indicator" />
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="YouTube">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
      </div>

      {/* Hero Content Container */}
      <div className="container hero-content-grid">
        {/* Center Title & CTAs Block */}
        <div className="hero-center-block">
          <Reveal>
            <p className="hero-eyebrow-text">Society for Promotion of</p>
            <h1 className="hero-main-heading">Art &amp; Culture</h1>
            
            <div className="hero-gold-divider">
              <span className="gold-line" />
              <span className="gold-diamond">◆</span>
              <span className="gold-line" />
            </div>

            <p className="hero-tagline-text">
              Nurturing creativity, Inspiring minds,<br />
              Building a cultural legacy since 2004.
            </p>

            <div className="hero-cta-group">
              <Button to="/portal" variant="burgundy" magnetic>
                Join SPArC <span className="arrow">→</span>
              </Button>
              <Button to="/about" variant="gold-outline" magnetic>
                Explore More
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right Event Glass Card */}
        <div className="hero-right-block">
          <Reveal>
            <div className="hero-event-card">
              <span className="event-card-eyebrow">Next Big Event</span>
              <h3 className="event-card-title">{featuredEvent.name}</h3>
              
              <Countdown target={featuredEvent.countdownTarget} />
              
              <Button to="/events" variant="gold-outline" style={{ width: "100%", justifyContent: "center" }}>
                Explore SATRANG
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom Animated Scroll Indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="mouse-icon">
          <span className="mouse-wheel-dot" />
        </div>
      </div>
    </header>
  );
}


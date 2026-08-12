import Reveal from "../common/Reveal";
import { useParallax } from "../../hooks/useParallax";

/**
 * The cinematic inner-page header used by every page except Home and
 * Portal (which have their own hero layouts under components/home and
 * components/portal).
 */
export default function PageHero({ breadcrumb, title, lede, children, tall = false }) {
  const parallaxRef = useParallax(0.1);

  return (
    <header className="page-hero">
      <div className="hero-media" ref={parallaxRef} />
      <div className="hero-grain" />
      <Reveal as="div" className="container">
        {breadcrumb && <p className="breadcrumb">{breadcrumb}</p>}
        <h1>{title}</h1>
        <div className="hero-gold-divider">
          <span className="gold-line" />
          <span className="gold-diamond">◆</span>
          <span className="gold-line" />
        </div>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </Reveal>
    </header>
  );
}

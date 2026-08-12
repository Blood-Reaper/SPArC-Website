import { Link } from "react-router-dom";
import Reveal from "./Reveal";

/**
 * Replaces repeated <div class="section-head"> markup. Pass `ctaLabel`
 * + `ctaTo` for the "split" variant with a link-cta on the right.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaTo,
  className = "",
}) {
  const split = Boolean(ctaLabel && ctaTo);

  return (
    <Reveal className={["section-head", split ? "section-head--split" : "", className].filter(Boolean).join(" ")}>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2>{title}</h2>}
        {description && <p>{description}</p>}
      </div>
      {split && (
        <Link to={ctaTo} className="link-cta">
          {ctaLabel}
        </Link>
      )}
    </Reveal>
  );
}

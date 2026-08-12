import { Link } from "react-router-dom";

/**
 * Thin wrapper around the .card class. Renders a <Link> when `to` is
 * given, otherwise a plain <div>. `transparent` mirrors the many
 * inline `background:transparent; box-shadow:none;` card overrides
 * used for cards sitting on dark sections.
 */
export default function Card({ to, transparent = false, className = "", style, children, ...rest }) {
  const classes = ["card", className].filter(Boolean).join(" ");
  const mergedStyle = transparent
    ? { background: "transparent", boxShadow: "none", ...style }
    : style;

  if (to) {
    return (
      <Link to={to} className={classes} style={mergedStyle} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <div className={classes} style={mergedStyle} {...rest}>
      {children}
    </div>
  );
}

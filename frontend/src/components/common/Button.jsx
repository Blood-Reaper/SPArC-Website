import { Link } from "react-router-dom";
import { useMagnetic } from "../../hooks/useMagnetic";

const VARIANT_CLASS = {
  primary: "btn-primary",
  outline: "btn-outline",
  "outline-dark": "btn-outline-dark",
  gold: "btn-gold",
  burgundy: "btn-burgundy",
  "gold-outline": "btn-gold-outline",
};

/**
 * Renders as an internal <Link> when `to` is given, an external <a> when
 * `href` is given, otherwise a <button>. `variant` maps to the original
 * .btn-primary / .btn-outline / .btn-gold classes. `magnetic` restores
 * the [data-magnetic] cursor-pull effect from main.js.
 */
export default function Button({
  variant = "primary",
  to,
  href,
  magnetic = false,
  className = "",
  children,
  ...rest
}) {
  const magneticRef = useMagnetic();
  const classes = ["btn", VARIANT_CLASS[variant] || "", className].filter(Boolean).join(" ");
  const extra = magnetic ? { ref: magneticRef, "data-magnetic": true } : {};

  if (to) {
    return (
      <Link to={to} className={classes} {...extra} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...extra} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...extra} {...rest}>
      {children}
    </button>
  );
}

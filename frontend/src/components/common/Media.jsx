const VARIANT_CLASS = {
  default: "",
  wide: "wide",
  square: "square",
  tall: "tall",
};

/**
 * Styled placeholder used everywhere the original site had a ".media"
 * box (no real images exist in the source project — assets/img is
 * empty). Once real photography is available, swap the <span> label
 * for an <img>; the aspect-ratio classes stay the same.
 */
export default function Media({ label, variant = "default", rounded = false, className = "", style }) {
  const classes = [
    "media",
    VARIANT_CLASS[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const mergedStyle = { ...(rounded ? { borderRadius: "50%" } : null), ...style };

  return (
    <div className={classes} style={mergedStyle}>
      <span>{label}</span>
    </div>
  );
}

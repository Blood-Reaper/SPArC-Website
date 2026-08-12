import { useInView } from "../../hooks/useInView";

/**
 * Replaces the original .stagger class + IntersectionObserver: children
 * fade/rise in sequence once the container scrolls into view. Pass grid
 * classes (e.g. "grid grid-3") via className; they compose with "stagger".
 */
export default function Stagger({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, inView] = useInView(0.12);
  const classes = ["stagger", className, inView ? "in-view" : ""].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}

import { useInView } from "../../hooks/useInView";

/**
 * Replaces the original [data-animate] attribute + IntersectionObserver
 * reveal. Renders as `as` (default "div"), forwarding className/style.
 */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, inView] = useInView();
  const classes = [className, inView ? "in-view" : ""].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} data-animate className={classes} {...rest}>
      {children}
    </Tag>
  );
}

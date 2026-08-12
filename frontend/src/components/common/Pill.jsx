export default function Pill({ children, className = "" }) {
  return <span className={["pill", className].filter(Boolean).join(" ")}>{children}</span>;
}

export default function DownloadRow({ label, dark = false }) {
  return (
    <a
      href="#"
      className="card"
      style={{
        padding: 22,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: dark ? "rgba(255,255,255,0.06)" : undefined,
        boxShadow: dark ? "none" : undefined,
        color: dark ? "#fff" : undefined,
      }}
    >
      <span>{label}</span>
      <span className="pill">PDF</span>
    </a>
  );
}

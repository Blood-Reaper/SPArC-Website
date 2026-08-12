import Reveal from "../common/Reveal";
import Stagger from "../common/Stagger";
import Media from "../common/Media";
import { Link } from "react-router-dom";

const PREVIEW_LABELS = ["01", "02", "03", "04", "05", "06"];

export default function GalleryPreview() {
  return (
    <section className="section section--dark">
      <div className="container two-col">
        <Reveal>
          <span className="eyebrow">Moments That Live Forever</span>
          <h2>A glimpse of our vibrant journey through art, culture and passion.</h2>
          <Link to="/gallery" className="link-cta" style={{ marginTop: 20, display: "inline-flex" }}>
            Relive Every Moment →
          </Link>
        </Reveal>
        <Stagger className="grid grid-3">
          {PREVIEW_LABELS.map((label) => (
            <Media label={label} variant="square" key={label} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

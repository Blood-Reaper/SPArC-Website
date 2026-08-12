import Reveal from "../common/Reveal";
import Pill from "../common/Pill";
import Media from "../common/Media";
import { journeyArchivalImages } from "../../data/journey";

export default function JourneyTimeline({ items }) {
  return (
    <div className="journey-timeline journey-timeline--enhanced">
      {items.map((item, i) => {
        const isEven = i % 2 === 0;
        const imageLabel = journeyArchivalImages[item.year] || `${item.year} Archival Photo`;

        return (
          <Reveal
            as="div"
            className={`journey-item journey-item--${isEven ? "right" : "left"}`}
            key={item.year}
          >
            <div className="journey-dot" />
            <div className="journey-year">{item.year}</div>
            <div className="card journey-card journey-card--archival">
              <div className="journey-card-header">
                <Pill variant="burgundy">{item.tag}</Pill>
                <span className="journey-card-year-badge">{item.year}</span>
              </div>

              <h3 className="journey-card-title">{item.title}</h3>
              <p className="journey-card-desc">{item.description}</p>

              <div className="journey-card-media-wrapper">
                <Media label={imageLabel} variant="wide" className="journey-card-media" />
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

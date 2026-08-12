import React from "react";
import Media from "../../common/Media";
import Pill from "../../common/Pill";
import { journeyArchivalImages } from "../../../data/journey";

export default function JourneyMilestone({ milestone, index, total }) {
  if (!milestone) return null;

  const { year, tag, title, description } = milestone;
  const imageLabel = journeyArchivalImages[year] || `${year} Archival Photography`;

  return (
    <div className="journey-milestone-display">
      {/* Background Watermark Year */}
      <div className="journey-bg-year" aria-hidden="true">
        {year}
      </div>

      <div className="journey-milestone-grid">
        {/* Left: Archival Image Container */}
        <div className="journey-archival-frame">
          <div className="journey-frame-badge">
            <span className="journey-badge-year">{year}</span>
            <span className="journey-badge-tag">{tag}</span>
          </div>
          <Media label={imageLabel} variant="wide" className="journey-media" />
          <div className="journey-frame-caption">
            Archival Document • SPArC History ({year})
          </div>
        </div>

        {/* Right: Milestone Details */}
        <div className="journey-content-box">
          <div className="journey-content-header">
            <Pill variant="burgundy">{tag}</Pill>
            <span className="journey-year-tag">{year}</span>
          </div>

          <h3 className="journey-milestone-title">{title}</h3>
          <p className="journey-milestone-desc">{description}</p>

          <div className="journey-content-footer">
            <span className="journey-milestone-meta">
              Chapter {index + 1} of {total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

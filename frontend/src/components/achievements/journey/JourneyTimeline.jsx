import React from "react";
import SectionHeader from "../../common/SectionHeader";
import JourneyProgress from "./JourneyProgress";
import JourneyMilestone from "./JourneyMilestone";

export default function JourneyTimeline({
  milestones,
  activeIndex,
  progress,
  onSelectStep,
}) {
  const currentMilestone = milestones[activeIndex] || milestones[0];

  return (
    <div className="journey-timeline-sticky">
      {/* Editorial Section Header */}
      <div className="journey-header-wrapper">
        <SectionHeader
          eyebrow="Our Journey"
          title="A Story Built Year by Year"
          description="Scroll to explore SPArC's unfolding history from 2004 to present day."
          className="journey-section-header"
        />
      </div>

      {/* Main Interactive Stage */}
      <div className="journey-stage">
        {/* Connection Line */}
        <div className="journey-connecting-line-track">
          <div
            className="journey-connecting-line-fill"
            style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
          />
        </div>

        {/* Milestone Node Rail & Counter */}
        <JourneyProgress
          current={activeIndex}
          total={milestones.length}
          milestones={milestones}
          activeIndex={activeIndex}
          onSelectStep={onSelectStep}
        />

        {/* Active Milestone Content Display */}
        <JourneyMilestone
          milestone={currentMilestone}
          index={activeIndex}
          total={milestones.length}
        />
      </div>
    </div>
  );
}

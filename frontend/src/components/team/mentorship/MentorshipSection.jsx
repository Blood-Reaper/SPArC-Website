import React, { useState } from "react";
import SectionHeader from "../../common/SectionHeader";
import DisciplineSelector from "./DisciplineSelector";
import DisciplinePanel from "./DisciplinePanel";
import { disciplineMentorshipData } from "../../../data/mentorship";

export default function MentorshipSection({ data = disciplineMentorshipData }) {
  const [activeId, setActiveId] = useState(data[0]?.id || "music");

  const activeData = data.find((item) => item.id === activeId) || data[0];

  return (
    <section className="section section--dark mentorship-experience-section">
      <div className="container">
        <SectionHeader
          eyebrow="Activity Class Mentors"
          title="Specialized Discipline Mentorship"
          description="SPArC nurtures core creative disciplines under the guidance of expert mentors, connected directly to student clubs."
        />

        {/* Interactive Discipline Selector */}
        <DisciplineSelector
          disciplines={data}
          activeId={activeId}
          onSelect={setActiveId}
        />

        {/* Selected Discipline Stage */}
        <div className="discipline-stage-container">
          <DisciplinePanel key={activeId} data={activeData} />
        </div>
      </div>
    </section>
  );
}

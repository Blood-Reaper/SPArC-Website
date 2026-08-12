import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import PersonCard from "./PersonCard";
import YearSelector from "./YearSelector";
import { availableYears, studentLeadershipByYear } from "../../data/team/studentOrganising";

export default function StudentLeadershipSection() {
  const [selectedYear, setSelectedYear] = useState("2026–27");
  const leaders = studentLeadershipByYear[selectedYear] || [];

  return (
    <section className="section student-leadership-section">
      <div className="container">
        <div className="section-head-with-year">
          <SectionHeader
            eyebrow={`Student Organising Committee ${selectedYear}`}
            title="Student Executive Officers"
          />
          <YearSelector
            years={availableYears}
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
          />
        </div>

        <Stagger className="grid grid-3">
          {leaders.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              showAssignments
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

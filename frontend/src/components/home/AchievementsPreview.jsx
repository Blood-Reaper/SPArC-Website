import SectionHeader from "../common/SectionHeader";
import Timeline from "../common/Timeline";
import { homeTimeline } from "../../data/achievements";

export default function AchievementsPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Achievements"
          title="Milestones of Pride"
          ctaLabel="View Our Legacy →"
          ctaTo="/achievements"
        />
        <Timeline items={homeTimeline} />
      </div>
    </section>
  );
}

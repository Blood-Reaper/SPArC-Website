import TeamHero from "../components/team/TeamHero";
import LeadershipSection from "../components/team/LeadershipSection";
import ExecutiveCommittee from "../components/team/ExecutiveCommittee";
import AdvisoryCommittee from "../components/team/AdvisoryCommittee";
import ActivityMentors from "../components/team/ActivityMentors";
import StudentLeadershipSection from "../components/team/StudentLeadershipSection";
import ClubsSection from "../components/team/ClubsSection";
import BodiesSection from "../components/team/BodiesSection";
import SparklingSpanSection from "../components/team/SparklingSpanSection";

export default function Team() {
  return (
    <>
      <TeamHero />
      <LeadershipSection />
      <ExecutiveCommittee />
      <AdvisoryCommittee />
      <ActivityMentors />
      <StudentLeadershipSection />
      <ClubsSection />
      <BodiesSection />
      <SparklingSpanSection />
    </>
  );
}

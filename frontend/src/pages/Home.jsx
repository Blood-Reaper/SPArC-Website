import InteractiveHero from "../components/home/InteractiveHero";
import HomeHero from "../components/home/HomeHero";
import StatsStrip from "../components/home/StatsStrip";
import AboutPreview from "../components/home/AboutPreview";
import ClubsPreview from "../components/home/ClubsPreview";
import EventsPreview from "../components/home/EventsPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import AchievementsPreview from "../components/home/AchievementsPreview";
import TeamPreview from "../components/home/TeamPreview";
import NewsPreview from "../components/home/NewsPreview";
import JoinCta from "../components/home/JoinCta";

export default function Home() {
  return (
    <>
      <InteractiveHero />
      <HomeHero />
      <StatsStrip />
      <AboutPreview />
      <ClubsPreview />
      <EventsPreview />
      <GalleryPreview />
      <AchievementsPreview />
      <TeamPreview />
      <NewsPreview />
      <JoinCta />
    </>
  );
}

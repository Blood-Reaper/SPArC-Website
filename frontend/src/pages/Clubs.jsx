import { useMemo, useState } from "react";
import PageHero from "../components/layout/PageHero";
import FilterBar from "../components/common/FilterBar";
import ClubGrid from "../components/clubs/ClubGrid";
import { clubCategories, clubs } from "../data/clubs";

export default function Clubs() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? clubs : clubs.filter((club) => club.category === category)),
    [category]
  );

  return (
    <>
      <PageHero
        breadcrumb="Home / Clubs & Bodies"
        title="Clubs & Important Bodies"
        lede="Each club and functional body is a world of its own — find where your talent belongs."
      />

      <section className="section">
        <div className="container">
          <FilterBar options={clubCategories} value={category} onChange={setCategory} />
          <ClubGrid clubs={filtered} />
        </div>
      </section>
    </>
  );
}

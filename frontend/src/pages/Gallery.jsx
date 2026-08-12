import { useMemo, useState } from "react";
import PageHero from "../components/layout/PageHero";
import FilterBar from "../components/common/FilterBar";
import SectionHeader from "../components/common/SectionHeader";
import Media from "../components/common/Media";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { galleryCategories, galleryItems, galleryVideos, galleryAlbums } from "../data/gallery";

export default function Gallery() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? galleryItems : galleryItems.filter((item) => item.category === category)),
    [category]
  );

  return (
    <>
      <PageHero
        breadcrumb="Home / Gallery"
        title="Every moment, captured."
        lede="Twenty years of performances, celebrations and everything in between."
      />

      <section className="section">
        <div className="container">
          <FilterBar options={galleryCategories} value={category} onChange={setCategory} />
          <GalleryGrid items={filtered} />
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeader eyebrow="Videos" title="Watch the Highlights" />
          <div className="grid grid-3">
            {galleryVideos.map((video) => (
              <Media label={video} variant="wide" key={video} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Albums" title="Browse by Event" />
          <div className="grid grid-4">
            {galleryAlbums.map((album) => (
              <div className="card" key={album}>
                <Media label={album} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

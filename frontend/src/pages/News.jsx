import { useMemo, useState } from "react";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/common/Reveal";
import Stagger from "../components/common/Stagger";
import FilterBar from "../components/common/FilterBar";
import Media from "../components/common/Media";
import NewsCard from "../components/news/NewsCard";
import { newsCategories, featuredNews, newsItems } from "../data/news";

export default function News() {
  const [category, setCategory] = useState("All");
  const [email, setEmail] = useState("");

  const filtered = useMemo(
    () => (category === "All" ? newsItems : newsItems.filter((item) => item.category === category)),
    [category]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <>
      <PageHero
        breadcrumb="Home / News"
        title="Stories from SPArC."
        lede="Announcements, recaps and everything happening around campus."
      />

      <section className="section">
        <Reveal as="div" className="container two-col">
          <Media label="Featured Story" variant="wide" />
          <div>
            <span className="pill">{featuredNews.category}</span>
            <h2 style={{ fontSize: 28, margin: "14px 0" }}>{featuredNews.title}</h2>
            <p style={{ color: "var(--text-soft)" }}>{featuredNews.excerpt}</p>
            <p style={{ fontSize: 13, color: "var(--text-soft)", marginTop: 16 }}>{featuredNews.date}</p>
          </div>
        </Reveal>
      </section>

      <section className="section section--dark">
        <div className="container">
          <FilterBar options={newsCategories} value={category} onChange={setCategory} />
          <Stagger className="grid grid-3">
            {filtered.map((item) => (
              <NewsCard item={item} dark key={item.id} />
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <Reveal as="div" className="container">
          <span className="eyebrow">Newsletter</span>
          <h2 style={{ fontSize: 28, margin: "12px 0 20px" }}>Never Miss a Story</h2>
          <form
            className="newsletter-form"
            style={{ maxWidth: 380, margin: "0 auto", borderColor: "var(--line)" }}
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{ color: "var(--text)" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">→</button>
          </form>
        </Reveal>
      </section>
    </>
  );
}

import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import Card from "../common/Card";
import Media from "../common/Media";
import { featuredNews, newsItems } from "../../data/news";

export default function NewsPreview() {
  const secondary = newsItems[0];

  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Latest News" title="Stay Updated" ctaLabel="View All News →" ctaTo="/news" />
        <Stagger className="grid grid-3">
          <Card to="/news" transparent style={{ gridColumn: "span 2" }}>
            <Media label="Featured" variant="wide" />
            <p style={{ fontSize: 13, color: "var(--text-soft)", marginTop: 14 }}>{featuredNews.date}</p>
            <h3 style={{ fontSize: 20, marginTop: 6 }}>{featuredNews.title}</h3>
          </Card>
          <Card to="/news" transparent>
            <Media label={secondary.tag} />
            <p style={{ fontSize: 13, color: "var(--text-soft)", marginTop: 14 }}>{secondary.date}</p>
            <h3 style={{ fontSize: 16, marginTop: 6 }}>{secondary.title}</h3>
          </Card>
        </Stagger>
      </div>
    </section>
  );
}

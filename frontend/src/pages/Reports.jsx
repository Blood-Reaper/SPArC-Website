import PageHero from "../components/layout/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import DownloadRow from "../components/common/DownloadRow";
import Media from "../components/common/Media";
import { annualReports, activityReports, magazineIssues } from "../data/reports";

export default function Reports() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Reports"
        title="Reports & Publications"
        lede="Annual reports, activity summaries and Sparkling Span archives."
      />

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Annual Reports" title="Year in Review" />
          <div className="grid grid-3">
            {annualReports.map((label) => (
              <DownloadRow label={label} key={label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeader eyebrow="Activity Reports" title="Event-by-Event" />
          <div className="grid grid-3">
            {activityReports.map((label) => (
              <DownloadRow label={label} dark key={label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Sparkling Span" title="Magazine Archive" />
          <div className="grid grid-4">
            {magazineIssues.map((issue) => (
              <a href="#" className="card" key={issue}>
                <Media label={issue} variant="tall" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

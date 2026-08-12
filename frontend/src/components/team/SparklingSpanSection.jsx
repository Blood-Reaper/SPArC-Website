import SectionHeader from "../common/SectionHeader";
import Stagger from "../common/Stagger";
import { sparklingSpanTeam } from "../../data/team/sparklingSpan";

export default function SparklingSpanSection() {
  const { title, subtitle, description, chiefEditor, editors } = sparklingSpanTeam;

  return (
    <section className="section sparkling-span-section">
      <div className="container">
        <div className="magazine-hero-banner">
          <div className="magazine-badge">Official Magazine</div>
          <h2 className="magazine-title">{title}</h2>
          <p className="magazine-subtitle">{subtitle}</p>
          <p className="magazine-desc">{description}</p>
        </div>

        <SectionHeader
          eyebrow="Editorial Board"
          title="Literary &amp; Creative Editors"
        />

        {/* Chief Editor Spotlight */}
        <div className="chief-editor-card">
          <div className="chief-editor-avatar-wrap">
            {chiefEditor.image ? (
              <img src={chiefEditor.image} alt={chiefEditor.name} className="chief-editor-img" />
            ) : (
              <div className="chief-editor-avatar-placeholder">
                {chiefEditor.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
              </div>
            )}
          </div>
          <div className="chief-editor-badge">Chief Editor</div>
          <h3 className="chief-editor-name">{chiefEditor.name}</h3>
          <span className="chief-editor-title">{chiefEditor.role}</span>
        </div>

        {/* Language & Design Editors Grid */}
        <Stagger className="editors-grid">
          {editors.map((editor) => {
            const initials = editor.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
            return (
              <div key={editor.id || editor.name} className="editor-card">
                <div className="editor-avatar-wrap">
                  {editor.image ? (
                    <img src={editor.image} alt={editor.name} className="editor-photo-img" />
                  ) : (
                    <div className="editor-avatar-placeholder">{initials}</div>
                  )}
                </div>
                <div className="editor-details">
                  <h4 className="editor-name">{editor.name}</h4>
                  <span className="editor-role-chip">{editor.role}</span>
                </div>
              </div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

import { useState } from "react";
import { clubOptions, branchOptions, yearOptions } from "../../data/portal";

const STEPS = ["Personal Info", "Club Preferences", "Review & Submit"];

export default function JoinForm({ onBack }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    rollNumber: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    clubs: [],
    reason: "",
  });

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const toggleClub = (clubId) =>
    setForm((prev) => {
      const has = prev.clubs.includes(clubId);
      if (has) return { ...prev, clubs: prev.clubs.filter((c) => c !== clubId) };
      if (prev.clubs.length >= 3) return prev;
      return { ...prev, clubs: [...prev.clubs, clubId] };
    });

  const canNext = () => {
    if (step === 0)
      return form.fullName && form.rollNumber && form.email && form.branch && form.year;
    if (step === 1) return form.clubs.length > 0;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="portal-success">
        <div className="portal-success-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="var(--primary)" opacity="0.12" />
            <circle cx="32" cy="32" r="23" fill="var(--primary)" opacity="0.2" />
            <path
              d="M22 32.5L29 39.5L42 25"
              stroke="var(--accent)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="portal-check-path"
            />
          </svg>
        </div>
        <h3 className="portal-success-heading">Application Submitted!</h3>
        <p className="portal-success-text">
          Thank you, <strong>{form.fullName}</strong>. Your application to join
          SPArC has been received. The committee will review it and get back to
          you shortly.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="portal-form-header">
        <span className="portal-form-icon">✨</span>
        <h2 className="portal-form-title">Join SPArC</h2>
        <p className="portal-form-subtitle">
          Fill out a quick application — it only takes a minute
        </p>
      </div>

      {/* Step Indicator */}
      <div className="portal-step-bar">
        {STEPS.map((label, i) => (
          <div
            key={label}
            className={[
              "portal-step",
              i < step ? "portal-step--done" : "",
              i === step ? "portal-step--active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span className="portal-step-dot">
              {i < step ? "✓" : i + 1}
            </span>
            <span className="portal-step-label">{label}</span>
          </div>
        ))}
        <div
          className="portal-step-progress"
          style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
        />
      </div>

      <form onSubmit={handleSubmit} className="portal-form">
        {/* STEP 0 — Personal Info */}
        {step === 0 && (
          <div className="portal-fields-grid">
            <label className="portal-label portal-label--full">
              Full Name
              <input
                type="text"
                className="portal-input"
                placeholder="Your full name"
                value={form.fullName}
                onChange={set("fullName")}
                required
              />
            </label>
            <label className="portal-label">
              Roll Number
              <input
                type="text"
                className="portal-input"
                placeholder="e.g. KCC24CS045"
                value={form.rollNumber}
                onChange={set("rollNumber")}
                required
              />
            </label>
            <label className="portal-label">
              Email
              <input
                type="email"
                className="portal-input"
                placeholder="you@example.com"
                value={form.email}
                onChange={set("email")}
                required
              />
            </label>
            <label className="portal-label">
              Phone (optional)
              <input
                type="tel"
                className="portal-input"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={set("phone")}
              />
            </label>
            <label className="portal-label">
              Branch
              <select
                className="portal-input"
                value={form.branch}
                onChange={set("branch")}
                required
              >
                <option value="">Select branch…</option>
                {branchOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>
            <label className="portal-label">
              Year
              <select
                className="portal-input"
                value={form.year}
                onChange={set("year")}
                required
              >
                <option value="">Select year…</option>
                {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}

        {/* STEP 1 — Club Preferences */}
        {step === 1 && (
          <>
            <p className="portal-field-note">
              Select up to <strong>3 clubs</strong> you'd like to join
            </p>
            <div className="portal-club-grid">
              {clubOptions.map((club) => {
                const checked = form.clubs.includes(club.id);
                return (
                  <button
                    key={club.id}
                    type="button"
                    className={[
                      "portal-club-chip",
                      checked ? "portal-club-chip--selected" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => toggleClub(club.id)}
                  >
                    <span className="portal-club-chip-check">
                      {checked ? "✓" : ""}
                    </span>
                    <span>
                      <strong>{club.name}</strong>
                      <small>{club.category}</small>
                    </span>
                  </button>
                );
              })}
            </div>

            <label className="portal-label" style={{ marginTop: 24 }}>
              Why do you want to join SPArC?
              <textarea
                className="portal-input portal-textarea"
                placeholder="Tell us a bit about your interests and what excites you about SPArC…"
                rows={4}
                value={form.reason}
                onChange={set("reason")}
              />
            </label>
          </>
        )}

        {/* STEP 2 — Review */}
        {step === 2 && (
          <>
            <p className="portal-field-note">
              Please review your application before submitting
            </p>
            <table className="portal-review-table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{form.fullName}</td>
                </tr>
                <tr>
                  <th>Roll Number</th>
                  <td>{form.rollNumber}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{form.email}</td>
                </tr>
                {form.phone && (
                  <tr>
                    <th>Phone</th>
                    <td>{form.phone}</td>
                  </tr>
                )}
                <tr>
                  <th>Branch</th>
                  <td>{form.branch}</td>
                </tr>
                <tr>
                  <th>Year</th>
                  <td>{form.year}</td>
                </tr>
                <tr>
                  <th>Preferred Clubs</th>
                  <td>
                    {form.clubs
                      .map(
                        (id) =>
                          clubOptions.find((c) => c.id === id)?.name ?? id,
                      )
                      .join(", ")}
                  </td>
                </tr>
                {form.reason && (
                  <tr>
                    <th>Reason</th>
                    <td>{form.reason}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}

        {/* Navigation */}
        <div className="portal-nav-row">
          {step > 0 && (
            <button
              type="button"
              className="btn btn-outline-dark portal-nav-btn"
              onClick={() => setStep((s) => s - 1)}
            >
              ← Back
            </button>
          )}
          {step < STEPS.length - 1 && (
            <button
              type="button"
              className="btn btn-primary portal-nav-btn"
              disabled={!canNext()}
              onClick={() => setStep((s) => s + 1)}
            >
              Next →
            </button>
          )}
          {step === STEPS.length - 1 && (
            <button
              type="submit"
              className="btn btn-primary portal-nav-btn"
            >
              Submit Application →
            </button>
          )}
        </div>
      </form>

      <button type="button" className="portal-back-link" onClick={onBack}>
        ← Choose a different role
      </button>
    </>
  );
}

import { useState } from "react";

export default function AlumniLogin({ onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="portal-success">
        <div className="portal-success-icon">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="28" fill="var(--primary)" opacity="0.12" />
            <circle cx="28" cy="28" r="20" fill="var(--primary)" opacity="0.2" />
            <path
              d="M20 28.5L25.5 34L36 22"
              stroke="var(--accent)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="portal-check-path"
            />
          </svg>
        </div>
        <h3 className="portal-success-heading">Welcome back, alumnus!</h3>
        <p className="portal-success-text">
          Signed in as <strong>{email}</strong>. Loading your alumni
          profile…
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="portal-form-header">
        <span className="portal-form-icon">🎓</span>
        <h2 className="portal-form-title">Alumni Login</h2>
        <p className="portal-form-subtitle">
          Reconnect with the SPArC community
        </p>
      </div>

      <form onSubmit={handleSubmit} className="portal-form">
        <label className="portal-label">
          Email or Alumni ID
          <input
            type="text"
            className="portal-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="portal-label">
          Password
          <input
            type="password"
            className="portal-input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <div className="portal-form-row" style={{ justifyContent: "flex-end" }}>
          <a href="#" className="portal-forgot-link">
            Forgot password?
          </a>
        </div>

        <button type="submit" className="btn btn-primary portal-submit">
          Log In <span className="arrow">→</span>
        </button>
      </form>

      <p className="portal-form-note">
        Not registered as alumni yet?{" "}
        <a href="mailto:sparc@kccemsr.edu.in" className="portal-forgot-link">
          Contact SPArC
        </a>
      </p>

      <button type="button" className="portal-back-link" onClick={onBack}>
        ← Choose a different role
      </button>
    </>
  );
}

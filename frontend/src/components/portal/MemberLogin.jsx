import { useState } from "react";

export default function MemberLogin({ onBack }) {
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
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
        <h3 className="portal-success-heading">Welcome back!</h3>
        <p className="portal-success-text">
          You've logged in as <strong>{roll}</strong>. Redirecting to your
          dashboard…
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="portal-form-header">
        <span className="portal-form-icon">🎭</span>
        <h2 className="portal-form-title">Member Login</h2>
        <p className="portal-form-subtitle">
          Sign in with your SPArC credentials
        </p>
      </div>

      <form onSubmit={handleSubmit} className="portal-form">
        <label className="portal-label">
          Roll Number
          <input
            type="text"
            className="portal-input"
            placeholder="e.g. KCC24CS045"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
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

        <div className="portal-form-row">
          <label className="portal-checkbox-label">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>
          <a href="#" className="portal-forgot-link">
            Forgot password?
          </a>
        </div>

        <button type="submit" className="btn btn-primary portal-submit">
          Log In <span className="arrow">→</span>
        </button>
      </form>

      <button type="button" className="portal-back-link" onClick={onBack}>
        ← Choose a different role
      </button>
    </>
  );
}

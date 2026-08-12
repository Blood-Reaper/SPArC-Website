import React, { useState, useEffect, useRef } from "react";
import JourneyTimeline from "./JourneyTimeline";
import SectionHeader from "../../common/SectionHeader";
import Media from "../../common/Media";
import Pill from "../../common/Pill";
import { journeyMilestones, journeyArchivalImages } from "../../../data/journey";

export default function JourneySection({ items = journeyMilestones }) {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Scroll listener for sticky progress calculation
  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (wrapperRef.current) {
            const rect = wrapperRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalScrollable = rect.height - windowHeight;

            if (totalScrollable > 0) {
              // Calculate progress clamped to [0, 1]
              const currentProgress = Math.max(
                0,
                Math.min(1, -rect.top / totalScrollable)
              );
              setProgress(currentProgress);

              // Calculate active milestone index
              const step = Math.min(
                items.length - 1,
                Math.floor(currentProgress * items.length)
              );
              setActiveIndex(step);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length, prefersReducedMotion]);

  // Handler for manual jump via node dots
  const handleSelectStep = (idx) => {
    setActiveIndex(idx);
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      const targetScroll =
        window.scrollY + rect.top + (idx / (items.length - 1)) * totalScrollable;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  // Fallback view for users with prefers-reduced-motion enabled
  if (prefersReducedMotion) {
    return (
      <section className="section journey-reduced-motion-section">
        <div className="container">
          <SectionHeader
            eyebrow="Our Journey"
            title="A Story Built Year by Year"
            description="SPArC's historical chronicle from 2004 to present day."
          />
          <div className="journey-accessible-list">
            {items.map((item, idx) => (
              <div key={item.year} className="journey-accessible-card card">
                <div className="journey-accessible-header">
                  <span className="journey-year-tag">{item.year}</span>
                  <Pill variant="burgundy">{item.tag}</Pill>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Media
                  label={journeyArchivalImages[item.year] || `${item.year} Archival Photo`}
                  variant="wide"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="journey-scroll-wrapper" ref={wrapperRef}>
      <JourneyTimeline
        milestones={items}
        activeIndex={activeIndex}
        progress={progress}
        onSelectStep={handleSelectStep}
      />
    </section>
  );
}

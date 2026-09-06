import React from 'react';

export function PhilosophySection() {
  return (
    <section className="section" id="philosophy" style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Preparation Philosophy</span>
          <h2>A System Built on Clarity & Discipline</h2>
          <p>We believe every successful aspirant begins with the right mindset, not just books and formulas.</p>
        </div>

        <div className="philosophy-grid">
          <div className="philosophy-card">
            <div className="philosophy-num">01</div>
            <h3 className="philosophy-title">Right Awareness</h3>
            <p className="philosophy-desc">
              Understand the exam pattern, cutoff trends, syllabus limits, and eligibility before starting preparation. Avoid wasted effort on irrelevant topics.
            </p>
          </div>

          <div className="philosophy-card">
            <div className="philosophy-num">02</div>
            <h3 className="philosophy-title">Right Guidance</h3>
            <p className="philosophy-desc">
              Direct mentorship by experienced faculty who have navigated competitive exams. Learn proven shortcut techniques, Vedic math tricks, and analytical reasoning.
            </p>
          </div>

          <div className="philosophy-card">
            <div className="philosophy-num">03</div>
            <h3 className="philosophy-title">Systematic Preparation</h3>
            <p className="philosophy-desc">
              Consistent daily routine, active recall, spaced repetition, and simulated computer-based tests with sectional performance breakdowns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

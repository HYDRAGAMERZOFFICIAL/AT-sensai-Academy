import React from 'react';
import { useModal } from '../../context/ModalContext';

export function HeroSection() {
  const { openWorkshopModal } = useModal();

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-live-pulse"></span>
            <span>Admissions Open for Banking, SSC & Foundation</span>
          </div>
          <h1 className="hero-title">
            Master Your Competitive Exams with <span className="gradient-text">Structured Guidance</span>
          </h1>
          <p className="hero-subtitle">
            Right awareness + right guidance + systematic preparation = a better career. We empower aspirants with exam-oriented training, 3-Year Extended Validity, and expert mentorship.
          </p>

          <div className="hero-cta-group">
            <a href="#programs" className="btn btn-primary btn-lg">
              Explore Programs
            </a>
            <button
              type="button"
              className="btn btn-gold btn-lg pulse-gold"
              onClick={() => openWorkshopModal()}
            >
              Book 100% Free Workshop
            </button>
          </div>

          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-number">3 Years</span>
              <span className="stat-label">Extended Course Validity</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100% Free</span>
              <span className="stat-label">Career Awareness Workshops</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6 Days / Wk</span>
              <span className="stat-label">Structured Foundation Batches</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-main">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-6)' }}>
              <div>
                <h3 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '4px' }}>AT Sensei Advantage</h3>
                <p style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.85rem' }}>Integrated Coaching Framework</p>
              </div>
              <span className="badge badge-gold">Certified Curriculum</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <div className="hero-card-item">
                <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: 'rgba(83,103,184,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-gold)' }}>🏛️</div>
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem', display: 'block' }}>Banking Mastery</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-inverse-muted)' }}>IBPS, SBI, RBI, LIC & RRB with 3-Yr Support</span>
                </div>
              </div>

              <div className="hero-card-item">
                <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: 'rgba(83,103,184,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-gold)' }}>🎯</div>
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem', display: 'block' }}>SSC Central Govt Exams</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-inverse-muted)' }}>CGL, CHSL, MTS, CPO, GD & Intelligence Bureau</span>
                </div>
              </div>

              <div className="hero-card-item">
                <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: 'rgba(83,103,184,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-gold)' }}>📚</div>
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem', display: 'block' }}>School Foundation (8th-10th)</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-inverse-muted)' }}>State, CBSE & ICSE Concept Mastery (6:30 PM - 8:00 PM)</span>
                </div>
              </div>
            </div>

            <div style={{ padding: 'var(--space-4)', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>✓ Transparent Fees</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-inverse-muted)' }}>All prices inclusive of GST with zero hidden costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

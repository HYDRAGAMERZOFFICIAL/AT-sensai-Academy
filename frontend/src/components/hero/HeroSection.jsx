import React from 'react';
import { useModal } from '../../context/ModalContext';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const { openWorkshopModal } = useModal();

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot"></span>
            <span>Admissions Open • 2026–2027 Batches</span>
          </div>

          <h1 className="hero-title">
            Competitive Exam Coaching & <span className="highlight-red">School Foundation</span>
          </h1>

          <p className="hero-subtitle">
            Right awareness + right guidance + systematic preparation = a better career. We prepare aspirants for Banking, SSC, Central Govt careers, and Classes 8th–10th conceptual foundations.
          </p>

          <div className="hero-cta-group">
            <a href="#programs" className="btn btn-primary btn-lg">
              Explore Programs
            </a>
            <button
              type="button"
              className="btn btn-gold btn-lg"
              onClick={() => openWorkshopModal()}
            >
              Book 100% Free Workshop
            </button>
          </div>

          <div className="hero-trust-chips">
            <div className="trust-chip">
              <span className="trust-chip-check">✓</span>
              <span>3-Year Extended Validity</span>
            </div>
            <div className="trust-chip">
              <span className="trust-chip-check">✓</span>
              <span>100% Transparent Fees (GST Incl.)</span>
            </div>
            <div className="trust-chip">
              <span className="trust-chip-check">✓</span>
              <span>Bangalore Offline & Hybrid</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-advantage-card">
            <div className="hero-advantage-header">
              <div>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '2px' }}>
                  The Sensei Framework
                </h3>
                <p style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.8rem', margin: 0 }}>
                  Structured paths designed for exam clearance
                </p>
              </div>
              <span className="badge badge-gold">Verified Tracks</span>
            </div>

            <div className="hero-advantage-list">
              <div className="hero-advantage-row">
                <div className="hero-advantage-icon">🏛️</div>
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem', display: 'block' }}>
                    Banking Mastery
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-inverse-muted)' }}>
                    IBPS PO/Clerk, SBI PO/Clerk, RBI Assistant, LIC & RRB with 3-Yr Support
                  </span>
                </div>
              </div>

              <div className="hero-advantage-row">
                <div className="hero-advantage-icon">🎯</div>
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem', display: 'block' }}>
                    SSC Central Govt Exams
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-inverse-muted)' }}>
                    CGL, CHSL, MTS, CPO, GD Constable, and Intelligence Bureau
                  </span>
                </div>
              </div>

              <div className="hero-advantage-row">
                <div className="hero-advantage-icon">📚</div>
                <div>
                  <strong style={{ color: '#fff', fontSize: '0.95rem', display: 'block' }}>
                    School Foundation (8th–10th)
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-inverse-muted)' }}>
                    State Board, CBSE & ICSE Concept Mastery (6:30 PM – 8:00 PM)
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-advantage-banner">
              <span><strong>💡 Free Guidance:</strong> Attend our 45–90 min Awareness Session</span>
              <button 
                onClick={() => openWorkshopModal()}
                style={{ background: 'none', border: 'none', color: 'var(--color-primary-navy)', fontWeight: 800, textDecoration: 'underline', cursor: 'pointer' }}
              >
                Join Free →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

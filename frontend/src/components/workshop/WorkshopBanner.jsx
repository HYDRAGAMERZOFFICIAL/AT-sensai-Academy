import React from 'react';
import { useModal } from '../../context/ModalContext';

export function WorkshopBanner() {
  const { openWorkshopModal } = useModal();

  return (
    <section className="section" id="workshop">
      <div className="container">
        <div className="workshop-banner-clean">
          <div className="workshop-grid">
            <div>
              <span className="badge badge-gold" style={{ marginBottom: 'var(--space-3)' }}>
                Community Outreach Initiative
              </span>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.75rem, 3vw, 2.3rem)', marginBottom: 'var(--space-3)' }}>
                Career & Competitive Exam Awareness Workshop
              </h2>
              <p style={{ color: 'var(--color-text-inverse-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                A 100% free educational session designed to help students and parents discover government exam pathways, eligibility criteria, and systematic preparation strategies.
              </p>

              <div className="workshop-feature-list">
                <div className="workshop-feature-item">
                  <span className="workshop-feature-check">✓</span>
                  <span><strong>Duration:</strong> 45–90 Minutes interactive live workshop</span>
                </div>
                <div className="workshop-feature-item">
                  <span className="workshop-feature-check">✓</span>
                  <span><strong>Audience:</strong> 8th–10th students, PUC, Degree students & active aspirants</span>
                </div>
                <div className="workshop-feature-item">
                  <span className="workshop-feature-check">✓</span>
                  <span><strong>Cost:</strong> 100% FREE with zero financial obligation</span>
                </div>
              </div>
            </div>

            <div className="workshop-card-action-box">
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-accent-gold)', marginBottom: '2px', lineHeight: 1 }}>
                100% FREE
              </div>
              <div style={{ fontSize: '0.85rem', color: '#fff', marginBottom: 'var(--space-5)' }}>
                Hosted directly by AT Sensei Mentors
              </div>
              <button
                type="button"
                className="btn btn-gold btn-block"
                style={{ marginBottom: 'var(--space-3)' }}
                onClick={() => openWorkshopModal()}
              >
                Book Free Seat Now
              </button>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                Instant confirmation • No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { useModal } from '../../context/ModalContext';

export function WorkshopBanner() {
  const { openWorkshopModal } = useModal();

  return (
    <section className="section" id="workshop">
      <div className="container">
        <div className="workshop-banner">
          <div className="workshop-banner-grid">
            <div>
              <span className="badge badge-gold" style={{ marginBottom: 'var(--space-3)' }}>
                Community Outreach Initiative
              </span>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: 'var(--space-3)' }}>
                Career & Competitive Exam Awareness Workshop
              </h2>
              <p style={{ color: 'var(--color-text-inverse-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                An awareness initiative designed to help students discover career opportunities, demystify government exam pathways, and take an informed first step towards their future.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: '#fff' }}>
                  <span style={{ color: 'var(--color-accent-gold)', fontWeight: 'bold' }}>✓</span>
                  <span><strong>Duration:</strong> 45–90 Minutes interactive live session</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: '#fff' }}>
                  <span style={{ color: 'var(--color-accent-gold)', fontWeight: 'bold' }}>✓</span>
                  <span><strong>Audience:</strong> 8th–10th students, PUC, Degree students & active aspirants</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--font-size-sm)', color: '#fff' }}>
                  <span style={{ color: 'var(--color-accent-gold)', fontWeight: 'bold' }}>✓</span>
                  <span><strong>Cost:</strong> 100% FREE with zero financial obligation</span>
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255, 255, 255, 0.15)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--color-accent-gold)', marginBottom: '4px' }}>
                100% FREE
              </div>
              <div style={{ fontSize: '0.9rem', color: '#fff', marginBottom: 'var(--space-6)' }}>
                Directly Hosted by AT Sensei Mentors
              </div>
              <button
                type="button"
                className="btn btn-gold btn-block"
                style={{ marginBottom: 'var(--space-3)' }}
                onClick={() => openWorkshopModal()}
              >
                Book Free Workshop Seat
              </button>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-inverse-muted)' }}>
                No credit card or payment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

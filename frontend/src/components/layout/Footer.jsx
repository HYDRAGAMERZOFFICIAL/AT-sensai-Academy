import React from 'react';
import { useModal } from '../../context/ModalContext';

export function Footer() {
  const { openPolicyModal } = useModal();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo" style={{ marginBottom: 'var(--space-3)' }}>
              <div className="brand-icon">AT</div>
              <div className="brand-text">
                <span className="brand-title" style={{ color: '#fff' }}>AT <span className="red-accent">Sensei</span> Academy</span>
                <span className="brand-tagline" style={{ color: 'var(--color-accent-gold)' }}>Learn Today, Lead Tomorrow</span>
              </div>
            </div>
            <p>
              Right awareness + right guidance + systematic preparation = a better career. Dedicated coaching for Banking, SSC and School Foundation in Bangalore.
            </p>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-inverse-muted)' }}>
              3-Year Extended Course Validity & Structured Mentorship.
            </div>
          </div>

          <div className="footer-col">
            <h4>Programmes</h4>
            <div className="footer-links">
              <a href="#programs">Banking Coaching</a>
              <a href="#programs">SSC Central Govt</a>
              <a href="#programs">SSC + Banking Combo</a>
              <a href="#programs">School Foundation (8-10th)</a>
              <a href="#workshop">Free Career Workshop</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Academy & Trust</h4>
            <div className="footer-links">
              <a href="#methodology">5 Jutsu Methodology</a>
              <a href="#mentors">Our Mentors</a>
              <a href="#transparency">Fee Transparency</a>
              <button type="button" onClick={() => openPolicyModal('privacy')}>Privacy Policy</button>
              <button type="button" onClick={() => openPolicyModal('terms')}>Terms & Conditions</button>
            </div>
          </div>

          <div className="footer-col">
            <h4>Contact & Location</h4>
            <div style={{ fontSize: '0.85rem', marginBottom: 'var(--space-2)' }}>
              📍 #16, Opp. MNTI College, 16th Cross, Kammagondanahalli, Abbigere Main Rd, Bangalore – 560015
            </div>
            <div style={{ fontSize: '0.85rem', marginBottom: 'var(--space-2)' }}>
              📞 +91 91106 87171 / +91 63606 51497
            </div>
            <div style={{ fontSize: '0.85rem' }}>
              ✉️ atsensei0@gmail.com
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 AT Sensei Academy. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <button type="button" onClick={() => openPolicyModal('privacy')} style={{ background: 'none', border: 'none', color: 'var(--color-text-inverse-muted)', cursor: 'pointer', textDecoration: 'underline' }}>
              Privacy Policy
            </button>
            <button type="button" onClick={() => openPolicyModal('terms')} style={{ background: 'none', border: 'none', color: 'var(--color-text-inverse-muted)', cursor: 'pointer', textDecoration: 'underline' }}>
              Terms of Service
            </button>
            <button type="button" onClick={() => openPolicyModal('refund')} style={{ background: 'none', border: 'none', color: 'var(--color-text-inverse-muted)', cursor: 'pointer', textDecoration: 'underline' }}>
              Refund Policy
            </button>
            <button type="button" onClick={() => openPolicyModal('minorConsent')} style={{ background: 'none', border: 'none', color: 'var(--color-text-inverse-muted)', cursor: 'pointer', textDecoration: 'underline' }}>
              Minor & Parent Consent
            </button>
            <button type="button" onClick={() => openPolicyModal('disclaimer')} style={{ background: 'none', border: 'none', color: 'var(--color-text-inverse-muted)', cursor: 'pointer', textDecoration: 'underline' }}>
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

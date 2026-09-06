import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
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
              <Link to="/programs/banking">Banking Coaching</Link>
              <Link to="/programs/ssc">SSC Central Govt</Link>
              <Link to="/programs/ssc-banking-combo">SSC + Banking Combo</Link>
              <Link to="/programs/foundation">School Foundation (8-10th)</Link>
              <Link to="/workshop">Free Career Workshop</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Academy & Trust</h4>
            <div className="footer-links">
              <Link to="/methodology">5 Jutsu Methodology</Link>
              <Link to="/mentors">Our Mentors</Link>
              <Link to="/fees">Fee Transparency</Link>
              <Link to="/policies?tab=privacy">Privacy Policy</Link>
              <Link to="/policies?tab=terms">Terms & Conditions</Link>
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
            <Link to="/policies?tab=privacy" style={{ color: 'var(--color-text-inverse-muted)', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            <Link to="/policies?tab=terms" style={{ color: 'var(--color-text-inverse-muted)', textDecoration: 'underline' }}>
              Terms of Service
            </Link>
            <Link to="/policies?tab=refund" style={{ color: 'var(--color-text-inverse-muted)', textDecoration: 'underline' }}>
              Refund Policy
            </Link>
            <Link to="/policies?tab=minorConsent" style={{ color: 'var(--color-text-inverse-muted)', textDecoration: 'underline' }}>
              Minor & Parent Consent
            </Link>
            <Link to="/policies?tab=disclaimer" style={{ color: 'var(--color-text-inverse-muted)', textDecoration: 'underline' }}>
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

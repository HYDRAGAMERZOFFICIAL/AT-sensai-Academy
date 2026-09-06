import React from 'react';
import { useModal } from '../../context/ModalContext';

export function EnquirySection() {
  const { openEnquiryModal } = useModal();
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdS3JZJ4lmZf4Q1dXG5HjakNFEF0PJVQAAFCGlYDuBf91ZfFQ/viewform";

  return (
    <section className="section section-alt" id="admissions">
      <div className="container">
        <div className="section-header" style={{ marginBottom: 'var(--space-8)', textAlign: 'center' }}>
          <span className="section-tag">Direct Admissions & Counseling</span>
          <h2>Enroll or Request a Free Counseling Call</h2>
          <p>Fill out the official admission enquiry form below. Our academic counseling team will connect with you within 24 hours.</p>
        </div>

        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div className="glass-card" style={{ background: 'var(--color-primary-navy)', color: '#fff', padding: 'var(--space-8) var(--space-10)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-6)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', paddingBottom: 'var(--space-5)' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: 'var(--space-2)' }}>
                  Why AT Sensei Academy
                </span>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: 0 }}>
                  Structured Mentorship for Exam Clearance
                </h3>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-gold btn-lg"
                  onClick={() => openEnquiryModal()}
                  style={{ fontWeight: 800 }}
                >
                  📝 Open Admission Enquiry Form
                </button>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-lg"
                  style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
                >
                  ↗ Open in Full Window
                </a>
              </div>
            </div>

            {/* Value Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>✓</span>
                <div>
                  <strong style={{ color: '#fff', fontSize: '1.05rem', display: 'block', marginBottom: '2px' }}>
                    3-Year Extended Course Validity
                  </strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                    Study with full access to revision batches and offline mock series until your target exam is cleared.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>✓</span>
                <div>
                  <strong style={{ color: '#fff', fontSize: '1.05rem', display: 'block', marginBottom: '2px' }}>
                    100% Transparent Fees (GST Included)
                  </strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                    Banking (₹16,999), SSC (₹18,999), Combo (₹27,999), Foundation (from ₹18,000) with zero hidden costs.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>✓</span>
                <div>
                  <strong style={{ color: '#fff', fontSize: '1.05rem', display: 'block', marginBottom: '2px' }}>
                    Daily CBT Test Practice Lab
                  </strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                    40+ seat computer simulation lab mirroring real IBPS & SSC exam interfaces.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>✓</span>
                <div>
                  <strong style={{ color: '#fff', fontSize: '1.05rem', display: 'block', marginBottom: '2px' }}>
                    Direct Parent Progress Reporting
                  </strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                    Minor protection protocols and weekly attendance logs for School Foundation (8th–10th).
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Contact & Action Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)', padding: 'var(--space-4) var(--space-6)', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', fontSize: '0.9rem' }}>
                <div>📞 <strong>Direct Hotline:</strong> <a href="tel:+919110687171" style={{ color: 'var(--color-accent-gold)', textDecoration: 'none' }}>+91 91106 87171</a></div>
                <div>📍 <strong>Campus:</strong> Abbigere Main Rd, Kammagondanahalli, Bangalore – 560015</div>
              </div>

              <a
                href="https://wa.me/919110687171?text=Hello%20AT%20Sensei%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-whatsapp-confirm"
                style={{ fontSize: '0.85rem' }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

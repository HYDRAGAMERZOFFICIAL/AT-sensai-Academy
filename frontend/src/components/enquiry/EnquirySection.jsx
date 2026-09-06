import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';

export function EnquirySection() {
  const { openEnquiryModal } = useModal();
  const [iframeLoading, setIframeLoading] = useState(true);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdS3JZJ4lmZf4Q1dXG5HjakNFEF0PJVQAAFCGlYDuBf91ZfFQ/viewform";
  const embedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdS3JZJ4lmZf4Q1dXG5HjakNFEF0PJVQAAFCGlYDuBf91ZfFQ/viewform?embedded=true";

  return (
    <section className="section section-alt" id="admissions">
      <div className="container">
        <div className="section-header" style={{ marginBottom: 'var(--space-8)', textAlign: 'center' }}>
          <span className="section-tag">Direct Admissions & Counseling</span>
          <h2>Enroll or Request a Free Counseling Call</h2>
          <p>Fill out the official admission enquiry form below. Our academic counseling team will connect with you within 24 hours.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: 'var(--space-8)', alignItems: 'start' }}>
          {/* Left Column: Academy Highlights */}
          <div style={{ background: 'var(--color-primary-navy)', color: '#fff', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)' }}>
            <span className="badge badge-gold" style={{ marginBottom: 'var(--space-3)' }}>
              Why AT Sensei Academy
            </span>
            <h3 style={{ color: '#fff', marginBottom: 'var(--space-4)', fontSize: '1.4rem' }}>
              Structured Mentorship for Exam Clearance
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>✓</span>
                <div>
                  <strong style={{ color: '#fff' }}>3-Year Extended Course Validity</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                    Study with full access to revision batches and offline mock series until your target exam is cleared.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>✓</span>
                <div>
                  <strong style={{ color: '#fff' }}>100% Transparent Fees (GST Included)</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                    Banking (₹16,999), SSC (₹18,999), Combo (₹27,999), Foundation (from ₹18,000) with zero hidden costs.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>✓</span>
                <div>
                  <strong style={{ color: '#fff' }}>Daily CBT Test Practice Lab</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                    40+ seat computer simulation lab mirroring real IBPS & SSC exam interfaces.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>✓</span>
                <div>
                  <strong style={{ color: '#fff' }}>Direct Parent Progress Reporting</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                    Minor protection protocols and weekly attendance logs for School Foundation (8th–10th).
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '0.85rem' }}>📞 <strong>Direct Hotline:</strong> +91 91106 87171</div>
              <div style={{ fontSize: '0.85rem', marginTop: '4px' }}>📍 <strong>Campus:</strong> Abbigere Main Rd, Kammagondanahalli, Bangalore – 560015</div>
            </div>

            <button
              type="button"
              className="btn btn-gold btn-block"
              style={{ marginTop: 'var(--space-6)' }}
              onClick={() => openEnquiryModal()}
            >
              Open Form in Popup Window
            </button>
          </div>

          {/* Right Column: Embedded Google Form */}
          <div className="form-card glass-card" style={{ padding: 'var(--space-4)', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-subtle)' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Course Admission Enquiry</h3>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Official Google Registration Form</p>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <button
                  type="button"
                  className="btn btn-sm btn-gold"
                  onClick={() => openEnquiryModal()}
                  style={{ fontSize: '0.8rem' }}
                >
                  Popup Form ↗
                </button>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline"
                  style={{ fontSize: '0.8rem' }}
                >
                  Fullscreen ↗
                </a>
              </div>
            </div>

            <div style={{ minHeight: '680px', position: 'relative', background: '#fff', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              {iframeLoading && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', zIndex: 2 }}>
                  <div className="spinner" style={{ width: '36px', height: '36px', border: '3px solid #ccc', borderTopColor: 'var(--color-sensei-red)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                  <p style={{ marginTop: 'var(--space-3)', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                    Loading Enquiry Form...
                  </p>
                </div>
              )}
              <iframe
                src={embedUrl}
                title="AT Sensei Academy Admission Enquiry Form"
                width="100%"
                height="700px"
                style={{ border: 'none', display: 'block', width: '100%' }}
                onLoad={() => setIframeLoading(false)}
              >
                Loading Form...
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

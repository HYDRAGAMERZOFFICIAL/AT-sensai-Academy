import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';

export function EnquirySection() {
  const { openEnquiryModal } = useModal();
  const [iframeLoading, setIframeLoading] = useState(true);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdS3JZJ4lmZf4Q1dXG5HjakNFEF0PJVQAAFCGlYDuBf91ZfFQ/viewform";
  const embedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdS3JZJ4lmZf4Q1dXG5HjakNFEF0PJVQAAFCGlYDuBf91ZfFQ/viewform?embedded=true";

  return (
    <section className="section section-alt" id="admissions" style={{ padding: 'var(--space-8) 0' }}>
      <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
        <div className="form-card glass-card" style={{ padding: 'var(--space-4)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 'var(--space-3)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-subtle)', gap: 'var(--space-2)' }}>
            <button
              type="button"
              className="btn btn-sm btn-gold"
              onClick={() => openEnquiryModal()}
              style={{ fontSize: '0.82rem', padding: '6px 14px' }}
            >
              Open Form in Popup Window ↗
            </button>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
              style={{ fontSize: '0.82rem', padding: '6px 14px' }}
            >
              Fullscreen ↗
            </a>
          </div>

          <div style={{ minHeight: '750px', position: 'relative', background: '#fff', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            {iframeLoading && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', zIndex: 2 }}>
                <div className="spinner" style={{ width: '36px', height: '36px', border: '3px solid #ccc', borderTopColor: 'var(--color-sensei-red)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                <p style={{ marginTop: 'var(--space-3)', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  Loading Admission Form...
                </p>
              </div>
            )}
            <iframe
              src={embedUrl}
              title="AT Sensei Academy Admission Enquiry Form"
              width="100%"
              height="750px"
              style={{ border: 'none', display: 'block', width: '100%' }}
              onLoad={() => setIframeLoading(false)}
            >
              Loading Form...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

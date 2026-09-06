import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';

export function EnquiryModal() {
  const { activeModal, closeModal } = useModal();
  const [iframeLoading, setIframeLoading] = useState(true);

  if (activeModal !== 'enquiry') return null;

  // Official Admission Enquiry Google Form
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdS3JZJ4lmZf4Q1dXG5HjakNFEF0PJVQAAFCGlYDuBf91ZfFQ/viewform";
  const embedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdS3JZJ4lmZf4Q1dXG5HjakNFEF0PJVQAAFCGlYDuBf91ZfFQ/viewform?embedded=true";

  const handleClose = () => {
    closeModal();
  };

  return (
    <div className="modal-backdrop is-active" onClick={handleClose}>
      <div 
        className="modal-container glass-card workshop-popup-modal" 
        style={{ 
          maxWidth: '760px', 
          width: '95%', 
          maxHeight: '92vh', 
          display: 'flex', 
          flexDirection: 'column', 
          padding: 0,
          overflow: 'hidden',
          borderRadius: 'var(--radius-xl)'
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div 
          className="modal-header" 
          style={{ 
            padding: 'var(--space-4) var(--space-6)', 
            borderBottom: '1px solid var(--color-border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--color-bg-surface)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <span style={{ fontSize: '1.4rem' }}>📝</span>
            <div>
              <h3 className="modal-title" style={{ fontSize: '1.15rem', margin: 0, color: 'var(--color-primary-navy)' }}>
                Admission & Course Enquiry
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>
                AT Sensei Academy — Banking • SSC • School Foundation (Bangalore)
              </p>
            </div>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={handleClose}
            aria-label="Close Enquiry Form"
            style={{ fontSize: '1.2rem', padding: '4px 8px' }}
          >
            ✕
          </button>
        </div>

        {/* Action / Helper Bar */}
        <div 
          style={{ 
            padding: 'var(--space-2) var(--space-6)', 
            background: 'rgba(217, 83, 79, 0.08)', 
            borderBottom: '1px solid rgba(217, 83, 79, 0.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-2)'
          }}
        >
          <span style={{ fontSize: '0.82rem', color: 'var(--color-sensei-red-dark)', fontWeight: 600 }}>
            📌 Fill the form below. Once submitted, click Pop Out to return to the site.
          </span>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'var(--color-bg-card)', border: '1px solid var(--color-border-subtle)', color: 'var(--color-text-primary)' }}
            >
              Open in New Window ↗
            </a>
            <button
              type="button"
              className="btn btn-gold btn-sm"
              onClick={handleClose}
              style={{ fontSize: '0.75rem', padding: '4px 12px', fontWeight: 700 }}
            >
              ✕ Done / Pop Out
            </button>
          </div>
        </div>

        {/* Modal Body / Embedded Google Form */}
        <div 
          className="modal-body" 
          style={{ 
            padding: 0, 
            flex: 1, 
            minHeight: '520px', 
            maxHeight: 'calc(92vh - 120px)', 
            overflow: 'auto',
            position: 'relative',
            background: '#ffffff'
          }}
        >
          {iframeLoading && (
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: '#f8fafc',
              zIndex: 2 
            }}>
              <div className="spinner" style={{ width: '36px', height: '36px', border: '3px solid rgba(0,0,0,0.1)', borderTopColor: 'var(--color-sensei-red)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
              <p style={{ marginTop: 'var(--space-3)', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                Loading Admission Enquiry Form...
              </p>
            </div>
          )}

          <iframe
            src={embedUrl}
            title="AT Sensei Academy Admission Enquiry Form"
            width="100%"
            height="100%"
            style={{ 
              border: 'none', 
              width: '100%', 
              minHeight: '600px',
              height: '100%',
              display: 'block' 
            }}
            onLoad={() => setIframeLoading(false)}
          >
            Loading enquiry form…
          </iframe>
        </div>

        {/* Modal Footer */}
        <div 
          style={{ 
            padding: 'var(--space-3) var(--space-6)', 
            background: 'var(--color-bg-surface)', 
            borderTop: '1px solid var(--color-border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
            🔒 DPDP Aligned • Verified Counseling by Senior Mentors
          </span>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={handleClose}
          >
            Close / Pop Out
          </button>
        </div>
      </div>
    </div>
  );
}

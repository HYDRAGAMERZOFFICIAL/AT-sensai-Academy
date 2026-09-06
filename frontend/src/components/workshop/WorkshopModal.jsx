import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';

export function WorkshopModal() {
  const { activeModal, closeModal } = useModal();
  const [iframeLoading, setIframeLoading] = useState(true);

  if (activeModal !== 'workshop') return null;

  const googleFormUrl = "https://forms.gle/cVF41oTAjvCCJoMQ9";
  // Embedded friendly URL
  const formEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdO7c6Tq4-z5wN-xT0QeE6QpZ6Q9/viewform?embedded=true";

  const handleClose = () => {
    closeModal();
  };

  return (
    <div className="modal-backdrop is-active" onClick={handleClose}>
      <div 
        className="modal-container glass-card workshop-popup-modal" 
        style={{ 
          maxWidth: '740px', 
          width: '95%', 
          maxHeight: '90vh', 
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
            <span style={{ fontSize: '1.4rem' }}>🎓</span>
            <div>
              <h3 className="modal-title" style={{ fontSize: '1.15rem', margin: 0, color: 'var(--color-primary-navy)' }}>
                100% Free Career & Competitive Workshop
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>
                AT Sensei Academy — Offline & Interactive Guidance
              </p>
            </div>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={handleClose}
            aria-label="Close Registration Form"
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
            📌 Fill the form below. When submitted, click Pop Out to return.
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
            minHeight: '480px', 
            maxHeight: 'calc(90vh - 120px)', 
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
                Loading Official Workshop Form...
              </p>
            </div>
          )}

          <iframe
            src={googleFormUrl}
            title="AT Sensei Academy Free Workshop Registration Form"
            width="100%"
            height="100%"
            style={{ 
              border: 'none', 
              width: '100%', 
              minHeight: '560px',
              height: '100%',
              display: 'block' 
            }}
            onLoad={() => setIframeLoading(false)}
          >
            Loading registration form…
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
            100% Free • No fee or payment required
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export function MobileDrawer({ isOpen, onClose }) {
  const { openWorkshopModal, openEnquiryModal } = useModal();
  const [programsExpanded, setProgramsExpanded] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="mobile-drawer-backdrop is-open" onClick={onClose}></div>
      <aside className="mobile-drawer is-open" aria-label="Mobile Navigation">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-5)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-subtle)' }}>
          <div className="brand-logo" style={{ gap: 'var(--space-2)' }}>
            <img src="/logo.png" alt="AT Sensei" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
            <div className="brand-text">
              <span className="brand-title" style={{ fontSize: '1.05rem' }}>AT <span className="red-accent">Sensei</span></span>
              <span className="brand-tagline" style={{ fontSize: '0.65rem' }}>Learn Today, Lead Tomorrow</span>
            </div>
          </div>
          <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: 'var(--color-text-muted)' }}>
            ✕
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
          <Link to="/" onClick={onClose} className="mobile-nav-link">Home</Link>
          
          {/* Programs Mobile Submenu */}
          <div>
            <button
              type="button"
              className="mobile-nav-link mobile-submenu-toggle"
              onClick={() => setProgramsExpanded(prev => !prev)}
            >
              <span>Programs & Batches</span>
              <span>{programsExpanded ? '▲' : '▼'}</span>
            </button>
            {programsExpanded && (
              <div className="mobile-submenu-list">
                <Link to="/programs" onClick={onClose}>All Flagship Tracks</Link>
                <Link to="/programs/banking" onClick={onClose}>Banking Coaching (₹16,999)</Link>
                <Link to="/programs/ssc" onClick={onClose}>SSC Central Govt (₹18,999)</Link>
                <Link to="/programs/ssc-banking-combo" onClick={onClose}>SSC + Banking Combo (₹27,999)</Link>
                <Link to="/programs/foundation" onClick={onClose}>School Foundation (8th–10th)</Link>
                <Link to="/workshop" onClick={onClose} style={{ color: 'var(--color-brand-blue)', fontWeight: 700 }}>100% Free Career Workshop</Link>
              </div>
            )}
          </div>

          {/* About Mobile Submenu */}
          <div>
            <button
              type="button"
              className="mobile-nav-link mobile-submenu-toggle"
              onClick={() => setAboutExpanded(prev => !prev)}
            >
              <span>Academy & Pedagogy</span>
              <span>{aboutExpanded ? '▲' : '▼'}</span>
            </button>
            {aboutExpanded && (
              <div className="mobile-submenu-list">
                <Link to="/methodology" onClick={onClose}>5 Jutsu Methodology</Link>
                <Link to="/mentors" onClick={onClose}>Faculty & Mentors</Link>
                <Link to="/fees" onClick={onClose}>Fee Transparency Matrix</Link>
                <Link to="/policies?tab=privacy" onClick={onClose}>DPDP Privacy & Policies</Link>
              </div>
            )}
          </div>

          <Link to="/faq" onClick={onClose} className="mobile-nav-link">FAQ</Link>
          <Link to="/admissions" onClick={onClose} className="mobile-nav-link">Admissions & Counseling</Link>
          <Link to="/contact" onClick={onClose} className="mobile-nav-link">Bangalore Campus</Link>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <button
            type="button"
            className="btn btn-gold btn-block"
            onClick={() => {
              onClose();
              openWorkshopModal();
            }}
          >
            Book Free Workshop Seat
          </button>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => {
              onClose();
              openEnquiryModal();
            }}
          >
            Direct Admission Enquiry
          </button>
        </div>
      </aside>
    </>
  );
}

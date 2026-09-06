import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export function MobileDrawer({ isOpen, onClose }) {
  const { openWorkshopModal } = useModal();

  if (!isOpen) return null;

  return (
    <>
      <div className="mobile-drawer-backdrop is-open" onClick={onClose}></div>
      <aside className="mobile-drawer is-open" aria-label="Mobile Navigation">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-4)', borderBottom: '1px solid var(--color-border-subtle)' }}>
          <div className="brand-text">
            <span className="brand-title">AT <span className="red-accent">Sensei</span></span>
            <span className="brand-tagline">Learn Today, Lead Tomorrow</span>
          </div>
          <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>
            ✕
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
          <Link to="/" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Home</Link>
          <Link to="/programs" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Programs Catalog</Link>
          <Link to="/methodology" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>5 Jutsu Method</Link>
          <Link to="/workshop" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Free Career Workshop</Link>
          <Link to="/mentors" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Our Mentors</Link>
          <Link to="/fees" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Fees & Batches</Link>
          <Link to="/faq" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>FAQ</Link>
          <Link to="/admissions" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Admission Request</Link>
          <Link to="/contact" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Campus & Contact</Link>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <button
            type="button"
            className="btn btn-gold btn-block"
            onClick={() => {
              onClose();
              openWorkshopModal();
            }}
          >
            Book Free Workshop
          </button>
          <a
            href="https://wa.me/919110687171"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-block"
          >
            WhatsApp Directly
          </a>
        </div>
      </aside>
    </>
  );
}

import React from 'react';
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
          <a href="#programs" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Programs</a>
          <a href="#methodology" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>5 Jutsu Method</a>
          <a href="#workshop" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Free Career Workshop</a>
          <a href="#mentors" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Our Mentors</a>
          <a href="#transparency" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Fees & Batches</a>
          <a href="#faq" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>FAQ</a>
          <a href="#admission-section" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Admission Request</a>
          <a href="#contact" onClick={onClose} style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary-navy)' }}>Campus & Contact</a>
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

import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';

export function Header({ onOpenMobileMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openWorkshopModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="site-header">
      <div className="container header-inner">
        <a href="#hero" className="brand-logo" aria-label="AT Sensei Academy Home">
          <div className="brand-icon">AT</div>
          <div className="brand-text">
            <span className="brand-title">AT <span className="red-accent">Sensei</span> Academy</span>
            <span className="brand-tagline">Learn Today, Lead Tomorrow</span>
          </div>
        </a>

        <nav className="nav-menu" aria-label="Main Navigation">
          <a href="#programs" className="nav-link">Programs</a>
          <a href="#methodology" className="nav-link">5 Jutsu Method</a>
          <a href="#workshop" className="nav-link">Free Workshop</a>
          <a href="#mentors" className="nav-link">Mentors</a>
          <a href="#transparency" className="nav-link">Fees & Batches</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <button
            type="button"
            className="btn btn-gold btn-sm header-cta-desktop"
            onClick={() => openWorkshopModal()}
          >
            Free Workshop
          </button>
          <a href="#admission-section" className="btn btn-primary btn-sm header-cta-desktop">
            Enquire Now
          </a>
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={onOpenMobileMenu}
            aria-label="Open Navigation Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

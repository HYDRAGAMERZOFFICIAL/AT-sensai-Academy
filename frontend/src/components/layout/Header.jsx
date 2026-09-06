import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export function Header({ onOpenMobileMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openWorkshopModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-logo" aria-label="AT Sensei Academy Home">
          <div className="brand-icon">AT</div>
          <div className="brand-text">
            <span className="brand-title">AT <span className="red-accent">Sensei</span> Academy</span>
            <span className="brand-tagline">Learn Today, Lead Tomorrow</span>
          </div>
        </Link>

        <nav className="nav-menu" aria-label="Main Navigation">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>Home</NavLink>
          <NavLink to="/programs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Programs</NavLink>
          <NavLink to="/methodology" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>5 Jutsu Method</NavLink>
          <NavLink to="/workshop" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Free Workshop</NavLink>
          <NavLink to="/mentors" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Faculty</NavLink>
          <NavLink to="/fees" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Fees Matrix</NavLink>
          <NavLink to="/faq" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>FAQ</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
        </nav>

        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <button
            type="button"
            className="btn btn-gold btn-sm header-cta-desktop"
            onClick={() => openWorkshopModal()}
          >
            Free Workshop
          </button>
          <Link to="/admissions" className="btn btn-primary btn-sm header-cta-desktop">
            Enquire Now
          </Link>
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

import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export function Header({ onOpenMobileMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const { openWorkshopModal, openEnquiryModal } = useModal();
  const navigate = useNavigate();

  const programsRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (programsRef.current && !programsRef.current.contains(e.target)) {
        setProgramsDropdownOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-logo" aria-label="AT Sensei Academy Home">
          <img
            src="/logo.png"
            alt="AT Sensei Academy Logo"
            className="brand-logo-img"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="brand-icon-fallback" style={{ display: 'none' }}>AT</div>
          <div className="brand-text">
            <span className="brand-title">AT <span className="red-accent">Sensei</span> Academy</span>
            <span className="brand-tagline">Learn Today, Lead Tomorrow</span>
          </div>
        </Link>

        <nav className="nav-menu" aria-label="Main Navigation">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            Home
          </NavLink>

          {/* Programs Dropdown */}
          <div
            className={`nav-dropdown-wrapper ${programsDropdownOpen ? 'open' : ''}`}
            ref={programsRef}
            onMouseEnter={() => setProgramsDropdownOpen(true)}
            onMouseLeave={() => setProgramsDropdownOpen(false)}
          >
            <button
              type="button"
              className="nav-link nav-dropdown-btn"
              onClick={() => setProgramsDropdownOpen(prev => !prev)}
              aria-expanded={programsDropdownOpen}
            >
              <span>Programs & Batches</span>
              <span className="dropdown-caret">▾</span>
            </button>
            <div className="nav-dropdown-menu">
              <Link to="/programs" className="dropdown-item featured" onClick={() => setProgramsDropdownOpen(false)}>
                <strong>All Flagship Tracks</strong>
                <span>Explore all competitive & foundation batches</span>
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/programs/banking" className="dropdown-item" onClick={() => setProgramsDropdownOpen(false)}>
                <strong>Banking Mastery (IBPS • SBI • RBI)</strong>
                <span>₹16,999 • 3-Year Extended Validity</span>
              </Link>
              <Link to="/programs/ssc" className="dropdown-item" onClick={() => setProgramsDropdownOpen(false)}>
                <strong>SSC Central Govt (CGL • CHSL • MTS)</strong>
                <span>₹18,999 • Morning, Afternoon & Weekend</span>
              </Link>
              <Link to="/programs/ssc-banking-combo" className="dropdown-item" onClick={() => setProgramsDropdownOpen(false)}>
                <strong>SSC + Banking Combo (Dual Track)</strong>
                <span>₹27,999 • Maximum Exam Coverage</span>
              </Link>
              <Link to="/programs/foundation" className="dropdown-item" onClick={() => setProgramsDropdownOpen(false)}>
                <strong>School Foundation (Classes 8th–10th)</strong>
                <span>State • CBSE • ICSE (6:30–8:00 PM)</span>
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/workshop" className="dropdown-item highlight" onClick={() => setProgramsDropdownOpen(false)}>
                <strong>100% Free Career Awareness Workshop</strong>
                <span>45–90 min session • Zero financial obligation</span>
              </Link>
            </div>
          </div>

          {/* About & Pedagogy Dropdown */}
          <div
            className={`nav-dropdown-wrapper ${aboutDropdownOpen ? 'open' : ''}`}
            ref={aboutRef}
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              type="button"
              className="nav-link nav-dropdown-btn"
              onClick={() => setAboutDropdownOpen(prev => !prev)}
              aria-expanded={aboutDropdownOpen}
            >
              <span>Academy & Pedagogy</span>
              <span className="dropdown-caret">▾</span>
            </button>
            <div className="nav-dropdown-menu">
              <Link to="/methodology" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                <strong>5 Jutsu Methodology</strong>
                <span>Our proprietary 5-phase exam clearance system</span>
              </Link>
              <Link to="/mentors" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                <strong>Faculty & Mentors</strong>
                <span>Meet Mohan Sensei, Anikethana Sensei & Tansen Sensei</span>
              </Link>
              <Link to="/fees" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                <strong>Fee Transparency Matrix</strong>
                <span>Comprehensive fee comparison with zero hidden costs</span>
              </Link>
              <a href="/#campus-facilities" className="dropdown-item" onClick={() => setAboutDropdownOpen(false)}>
                <strong>Bangalore Campus & CBT Labs</strong>
                <span>Classroom infrastructure and reading room amenities</span>
              </a>
            </div>
          </div>

          <NavLink to="/faq" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            FAQ
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="btn btn-gold btn-sm header-cta-desktop"
            onClick={() => openWorkshopModal()}
          >
            Free Workshop
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm header-cta-desktop"
            onClick={() => openEnquiryModal()}
          >
            Enquire Now
          </button>
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

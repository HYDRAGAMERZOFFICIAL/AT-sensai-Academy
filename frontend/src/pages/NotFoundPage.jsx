import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="error-page-wrapper">
      <div className="container" style={{ maxWidth: '640px', padding: 'var(--space-16) var(--space-4)' }}>
        <div className="error-card glass-card">
          <div className="error-badge-icon">
            <span className="error-code">404</span>
            <span className="error-symbol">🧭</span>
          </div>

          <h1 className="error-title">Page Not Found</h1>
          <p className="error-subtitle">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="error-quick-links">
            <h4>Explore Official Programs & Resources:</h4>
            <div className="error-links-grid">
              <Link to="/programs/banking" className="error-link-pill">🏦 Banking Coaching</Link>
              <Link to="/programs/ssc" className="error-link-pill">🏛️ SSC Central Govt</Link>
              <Link to="/programs/ssc-banking-combo" className="error-link-pill">⚡ SSC + Banking Combo</Link>
              <Link to="/programs/foundation" className="error-link-pill">🎓 School Foundation</Link>
              <Link to="/methodology" className="error-link-pill">🎯 5 Jutsu Methodology</Link>
              <Link to="/workshop" className="error-link-pill">🎁 Free Workshop</Link>
            </div>
          </div>

          <div className="error-actions-group">
            <Link to="/" className="btn btn-primary">
              ← Return to Academy Home
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Academy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export function AccessDeniedPage() {
  return (
    <div className="error-page-wrapper">
      <div className="container" style={{ maxWidth: '640px', padding: 'var(--space-16) var(--space-4)' }}>
        <div className="error-card glass-card">
          <div className="error-badge-icon">
            <span className="error-code">403</span>
            <span className="error-symbol">🔒</span>
          </div>

          <h1 className="error-title">Access Restricted</h1>
          <p className="error-subtitle">
            This area requires authorized administrative clearance or specific credentials. Your request cannot be completed with current permissions.
          </p>

          <div className="error-reasons-box">
            <h4>Common Reasons for Access Restriction:</h4>
            <ul>
              <li>🛡️ Unauthorized attempt to access internal staff or admissions controls.</li>
              <li>⏱️ Administrative session timed out or security passkey not provided.</li>
              <li>📜 DPDP child safety & data privacy restriction in effect.</li>
            </ul>
          </div>

          <div className="error-actions-group">
            <Link to="/" className="btn btn-primary">
              ← Return to Academy Home
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Support Desk
            </Link>
          </div>

          <div className="error-footer-note">
            AT Sensei Academy Security & Data Governance Protocol • Bengaluru
          </div>
        </div>
      </div>
    </div>
  );
}

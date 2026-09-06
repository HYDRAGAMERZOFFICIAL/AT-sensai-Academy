import React from 'react';

export function TopBar() {
  return (
    <aside className="top-bar" aria-label="Announcement & Direct Contact">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <span>📍</span>
            <span>Bangalore Campus: Near Metro, Vijayanagar / Rajajinagar Link</span>
          </div>
          <div className="top-bar-item">
            <span>⏰</span>
            <span>Batches: Morning (10 AM) • Afternoon (1 PM) • Foundation (6:30 PM)</span>
          </div>
        </div>
        <div className="top-bar-right">
          <div className="top-bar-item">
            <span>📞</span>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>
          <div className="top-bar-item">
            <span>✉️</span>
            <a href="mailto:admissions@atsensei.in">admissions@atsensei.in</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

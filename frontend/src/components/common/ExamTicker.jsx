import React from 'react';
import { Link } from 'react-router-dom';

export function ExamTicker() {
  return (
    <div className="exam-ticker-bar" aria-label="Upcoming Exam & Batch Notifications">
      <div className="container exam-ticker-inner">
        <div className="ticker-badge">
          <span className="ticker-pulse"></span>
          <span>ANNOUNCEMENTS</span>
        </div>
        <div className="ticker-content-track">
          <span className="ticker-item">
            📢 <strong>Upcoming Batch:</strong> Banking & SSC Morning Batch starts Monday (10:00 AM – 12:00 PM)
          </span>
          <span className="ticker-divider">•</span>
          <span className="ticker-item">
            🎯 <strong>Foundation 2026/27:</strong> Evening Batch for 8th–10th (6:30 PM – 8:00 PM) Admissions Open
          </span>
          <span className="ticker-divider">•</span>
          <span className="ticker-item">
            🎓 <strong>Free Workshop:</strong> 100% Free Career Awareness Workshop seats filling fast
          </span>
        </div>
        <Link to="/admissions" className="ticker-cta-link">
          Reserve Seat →
        </Link>
      </div>
    </div>
  );
}

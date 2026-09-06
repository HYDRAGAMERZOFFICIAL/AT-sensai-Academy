import React, { useState } from 'react';

const FOUNDATION_FEES = {
  '8': { state: '₹18,000', cbse: '₹18,000', icse: '₹22,000' },
  '9': { state: '₹18,000', cbse: '₹20,000', icse: '₹25,000' },
  '10': { state: '₹22,000', cbse: '₹25,000', icse: '₹30,000' }
};

export function TransparencySection() {
  const [selectedClass, setSelectedClass] = useState('8');

  return (
    <section className="section section-alt" id="transparency">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Fee Transparency</span>
          <h2>School Foundation Fee Matrix</h2>
          <p>Full 10-Month Academic Year program for Classes 8th, 9th & 10th (6 Days/Week, 6:30 PM – 8:00 PM).</p>
        </div>

        <div className="fee-matrix-card">
          <div className="fee-class-selector">
            {['8', '9', '10'].map(std => (
              <button
                key={std}
                type="button"
                className={`filter-btn ${selectedClass === std ? 'active' : ''}`}
                onClick={() => setSelectedClass(std)}
              >
                Class {std}th Standard
              </button>
            ))}
          </div>

          <div className="fee-board-grid">
            <div className="fee-board-box">
              <div className="fee-board-name">Karnataka State Board</div>
              <div className="fee-board-price">
                {FOUNDATION_FEES[selectedClass].state}
              </div>
              <div className="fee-board-sub">10 Months • 6:30–8:00 PM</div>
            </div>

            <div className="fee-board-box">
              <div className="fee-board-name">CBSE Board</div>
              <div className="fee-board-price">
                {FOUNDATION_FEES[selectedClass].cbse}
              </div>
              <div className="fee-board-sub">10 Months • 6:30–8:00 PM</div>
            </div>

            <div className="fee-board-box">
              <div className="fee-board-name">ICSE Board</div>
              <div className="fee-board-price">
                {FOUNDATION_FEES[selectedClass].icse}
              </div>
              <div className="fee-board-sub">10 Months • 6:30–8:00 PM</div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', background: 'var(--color-brand-blue-soft)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--color-brand-blue)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span>💡</span>
            <span><strong>Competitive Coaching Fees:</strong> Banking: <strong>₹16,999</strong> • SSC: <strong>₹18,999</strong> • SSC + Banking Combo: <strong>₹27,999</strong>. All include 3 Years Validity and GST.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

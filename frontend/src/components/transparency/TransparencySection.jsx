import React, { useState } from 'react';

const FOUNDATION_FEES = {
  '8': { state: '₹18,000', cbse: '₹18,000', icse: '₹22,000' },
  '9': { state: '₹18,000', cbse: '₹20,000', icse: '₹25,000' },
  '10': { state: '₹22,000', cbse: '₹25,000', icse: '₹30,000' }
};

export function TransparencySection() {
  const [selectedClass, setSelectedClass] = useState('8');

  return (
    <section className="section" id="transparency">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Governance & Transparency</span>
          <h2>Transparent Fee & Batch Schedules</h2>
          <p>Zero surprise charges. Every fee includes applicable GST and standard academic materials.</p>
        </div>

        <div className="form-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: 'var(--space-4)', textAlign: 'center' }}>
            School Foundation Course Fee Matrix (Full Academic Year)
          </h3>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
            {['8', '9', '10'].map(std => (
              <button
                key={std}
                type="button"
                className={`filter-btn ${selectedClass === std ? 'active' : ''}`}
                onClick={() => setSelectedClass(std)}
              >
                {std}th Standard
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)', textAlign: 'center' }}>
            <div style={{ background: 'var(--color-bg-alt)', padding: 'var(--space-5)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>State Board</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary-navy)', margin: 'var(--space-2) 0' }}>
                {FOUNDATION_FEES[selectedClass].state}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Full 10-Month Term (6:30-8:00 PM)</div>
            </div>

            <div style={{ background: 'var(--color-bg-alt)', padding: 'var(--space-5)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>CBSE Board</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary-navy)', margin: 'var(--space-2) 0' }}>
                {FOUNDATION_FEES[selectedClass].cbse}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Full 10-Month Term (6:30-8:00 PM)</div>
            </div>

            <div style={{ background: 'var(--color-bg-alt)', padding: 'var(--space-5)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>ICSE Board</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary-navy)', margin: 'var(--space-2) 0' }}>
                {FOUNDATION_FEES[selectedClass].icse}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Full 10-Month Term (6:30-8:00 PM)</div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', background: 'var(--color-brand-blue-soft)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--color-brand-blue)' }}>
            💡 <strong>Competitive Coaching Summary:</strong> Banking (₹16,999), SSC (₹18,999), SSC + Banking Combo (₹27,999). All competitive programs include <strong>3 Years of validity</strong> and Morning / Afternoon / Weekend batch flexibility.
          </div>
        </div>
      </div>
    </section>
  );
}

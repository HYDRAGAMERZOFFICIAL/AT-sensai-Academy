import React from 'react';

const REASONS = [
  {
    icon: '🛡️',
    title: 'Job Security & Stability',
    desc: 'Central & State government positions provide lifelong job assurance, transparent pay commissions, and economic resilience.'
  },
  {
    icon: '📈',
    title: 'Structured Promotions',
    desc: 'Predictable time-bound departmental promotions, gazetted cadre upgrades, and leadership opportunities across ministries.'
  },
  {
    icon: '⚖️',
    title: 'Work-Life Balance & Perks',
    desc: 'Standard working hours, medical allowances, housing schemes, travel concessions, and guaranteed post-retirement benefits.'
  },
  {
    icon: '🎖️',
    title: 'Social Prestige & National Impact',
    desc: 'Public service careers carry immense societal respect, authority to make impactful policy decisions, and pride for your family.'
  }
];

export function WhyGovtCareer() {
  return (
    <section className="section section-alt" id="why-career">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Aspirant Motivation</span>
          <h2>Why Choose a Government or Banking Career?</h2>
          <p>A career in public administration and nationalized banking offers unparalleled security, dignity, and career progression.</p>
        </div>

        <div className="why-career-grid">
          {REASONS.map((r, idx) => (
            <div key={idx} className="why-career-card">
              <div className="why-career-icon">{r.icon}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

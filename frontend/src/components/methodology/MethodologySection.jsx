import React from 'react';

const JUTSU_LIST = [
  {
    num: '01',
    title: 'Concept Clarification',
    desc: 'Deep foundational grounding in mathematical concepts, reasoning logic, and English grammar before shortcuts.'
  },
  {
    num: '02',
    title: 'Pattern Recognition',
    desc: 'Systematic classification of questions into predictable patterns observed in official exams over the past 5 years.'
  },
  {
    num: '03',
    title: 'Speed & Accuracy Tactics',
    desc: 'Vedic math shortcuts, logical option elimination, and tactical time-budgeting per section to maximize raw score.'
  },
  {
    num: '04',
    title: 'Rigorous Mock Simulations',
    desc: 'Full-length computer-based test simulations with pinpoint sectional analytics and bottleneck resolution.'
  },
  {
    num: '05',
    title: 'Mentor Support & Clearing',
    desc: 'Direct access to subject senseis for customized study scheduling, performance counseling, and individual doubt clearing.'
  }
];

export function MethodologySection() {
  return (
    <section className="section section-alt" id="methodology">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pedagogy & Philosophy</span>
          <h2>5 Jutsu for Exam Success</h2>
          <p>Our proprietary 5-phase preparation framework refined through years of competitive coaching experience.</p>
        </div>

        <div className="jutsu-grid">
          {JUTSU_LIST.map((item, idx) => (
            <div key={idx} className="jutsu-card">
              <div className="jutsu-number">{item.num}</div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)' }}>{item.title}</h3>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';

const JUTSU_STEPS = [
  {
    step: '01',
    navTitle: '01. Syllabus',
    title: 'Understand Syllabus & Pattern',
    subtitle: 'Step 1 of the Sensei System',
    desc: 'Never start by randomly solving books. Deep dive into official notification weightages, sectional cutoffs, and question trends over the last 5 years. Know precisely what to study and what to skip.',
    highlights: ['Official notification topic mapping', 'Sectional weightage & trend analysis', 'Marking scheme & negative mark strategy']
  },
  {
    step: '02',
    navTitle: '02. Quality',
    title: 'Prioritize Quality Over Quantity',
    subtitle: 'Step 2 of the Sensei System',
    desc: 'Master foundational principles and concepts rather than memorizing endless question variations. Deep conceptual clarity ensures you can tackle any novel problem variation in the actual exam.',
    highlights: ['Root concept grounding', 'Vedic & logical elimination shortcuts', 'Avoidance of low-yield topic clutter']
  },
  {
    step: '03',
    navTitle: '03. Retention',
    title: 'Active Recall & Spaced Repetition',
    subtitle: 'Step 3 of the Sensei System',
    desc: 'Move beyond passive reading. Use active questioning, formula flashcards, and scheduled 1-day, 7-day, and 21-day revision cycles to permanently lock concepts into long-term memory.',
    highlights: ['Weekly structured revision timetables', 'Active question quizzing', 'High-yield formula & rule sheets']
  },
  {
    step: '04',
    navTitle: '04. Mock Tests',
    title: 'Mock Tests & Time Management',
    subtitle: 'Step 4 of the Sensei System',
    desc: 'Simulate exact exam hall conditions on real CBT interfaces. Analyze time spent per question, error patterns, and unattempted sections to systematically raise your percentile.',
    highlights: ['Real exam interface CBT simulations', 'In-depth sectional speed analytics', 'Error tracking & bottleneck remediation']
  },
  {
    step: '05',
    navTitle: '05. Routine',
    title: 'Consistent Daily Routine',
    subtitle: 'Step 5 of the Sensei System',
    desc: 'Consistency beats intensity. Follow a balanced daily schedule balancing concept learning, practice sets, current affairs review, and mentor doubt resolution without burnout.',
    highlights: ['Sustainable daily study blocks', 'Daily current affairs & mental math drills', 'Direct mentor doubt-clearing sessions']
  },
  {
    step: '🏆',
    navTitle: 'SUCCESS',
    title: 'Exam Clearance & Rank Achievement',
    subtitle: 'The Final Milestone',
    desc: 'By executing all 5 Jutsu systematically under expert guidance, you enter the exam hall with total confidence, superior speed, and high accuracy to secure your desired post.',
    highlights: ['Tier-1 & Tier-2 selection readiness', 'Interview & descriptive test confidence', 'Permanent career appointment']
  }
];

export function MethodologySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeJutsu = JUTSU_STEPS[activeIdx];

  return (
    <section className="section section-alt" id="methodology">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Proprietary Pedagogy</span>
          <h2>5 Jutsu for Exam Success</h2>
          <p>Our structured step-by-step preparation journey that turns raw potential into verified rank-holders.</p>
        </div>

        <div className="jutsu-journey-container">
          <div className="jutsu-nav-tabs" role="tablist">
            {JUTSU_STEPS.map((j, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activeIdx === idx}
                className={`jutsu-step-tab ${idx === JUTSU_STEPS.length - 1 ? 'success-milestone' : ''} ${activeIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="jutsu-step-num">{j.step}</div>
                <span className="jutsu-step-title-short">{j.navTitle}</span>
              </button>
            ))}
          </div>

          <div className="jutsu-display-box">
            <div>
              <span className="jutsu-display-badge">{activeJutsu.subtitle}</span>
              <h3 className="jutsu-display-title">{activeJutsu.title}</h3>
              <p className="jutsu-display-desc">{activeJutsu.desc}</p>
            </div>

            <div className="jutsu-display-meta">
              <h4 style={{ fontSize: '0.95rem', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-3)' }}>
                Key Takeaways:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {activeJutsu.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                    <span style={{ color: 'var(--color-emerald)', fontWeight: 'bold' }}>✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const JUTSU_STEPS = [
  {
    step: '01',
    jutsuName: 'First Jutsu',
    title: 'Understand Syllabus & Pattern',
    category: 'Strategic Foundation',
    desc: 'Never start by randomly solving books. Deep dive into official notification weightages, sectional cutoffs, and question trends over the last 5 years. Know precisely what to study and what to skip.',
    highlights: ['Official notification topic mapping', 'Sectional weightage & trend analysis', 'Marking scheme & negative mark strategy'],
    icon: '🎯'
  },
  {
    step: '02',
    jutsuName: 'Second Jutsu',
    title: 'Prioritize Quality Over Quantity',
    category: 'Conceptual Clarity',
    desc: 'Master foundational principles and concepts rather than memorizing endless question variations. Deep conceptual clarity ensures you can tackle any novel problem variation in the actual exam.',
    highlights: ['Root concept grounding', 'Vedic & logical elimination shortcuts', 'Avoidance of low-yield topic clutter'],
    icon: '💎'
  },
  {
    step: '03',
    jutsuName: 'Third Jutsu',
    title: 'Active Recall & Spaced Repetition',
    category: 'Long-Term Retention',
    desc: 'Move beyond passive reading. Use active questioning, formula flashcards, and scheduled 1-day, 7-day, and 21-day revision cycles to permanently lock concepts into long-term memory.',
    highlights: ['Weekly structured revision timetables', 'Active question quizzing', 'High-yield formula & rule sheets'],
    icon: '🧠'
  },
  {
    step: '04',
    jutsuName: 'Fourth Jutsu',
    title: 'Mock Tests & Time Management',
    category: 'Speed & Simulation',
    desc: 'Simulate exact exam hall conditions on real CBT interfaces. Analyze time spent per question, error patterns, and unattempted sections to systematically raise your percentile.',
    highlights: ['Real exam interface CBT simulations', 'In-depth sectional speed analytics', 'Error tracking & bottleneck remediation'],
    icon: '⏱️'
  },
  {
    step: '05',
    jutsuName: 'Fifth Jutsu',
    title: 'Consistent Daily Routine',
    category: 'Execution Discipline',
    desc: 'Consistency beats intensity. Follow a balanced daily schedule balancing concept learning, practice sets, current affairs review, and mentor doubt resolution without burnout.',
    highlights: ['Sustainable daily study blocks', 'Daily current affairs & mental math drills', 'Direct mentor doubt-clearing sessions'],
    icon: '⚡'
  },
  {
    step: '🏆',
    jutsuName: 'Final Milestone',
    title: 'Exam Clearance & Rank Achievement',
    category: 'Selection Victory',
    desc: 'By executing all 5 Jutsu systematically under expert guidance, you enter the exam hall with total confidence, superior speed, and high accuracy to secure your appointment.',
    highlights: ['Tier-1 & Tier-2 selection readiness', 'Interview & descriptive test confidence', 'Permanent career appointment'],
    icon: '🎓'
  }
];

export function MethodologySection() {
  return (
    <section className="section section-alt jutsu-section-wrapper" id="methodology">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Proprietary Pedagogy</span>
          <h2>The 5 Jutsu for Exam Success</h2>
          <p>
            Our proven vertical step-by-step roadmap that turns systematic daily preparation into verified rank-holding selections.
          </p>
        </div>

        <div className="jutsu-zigzag-timeline">
          {/* Vertical Center Connecting Line */}
          <div className="jutsu-timeline-spine" aria-hidden="true"></div>

          {JUTSU_STEPS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const isMilestone = idx === JUTSU_STEPS.length - 1;

            return (
              <div
                key={idx}
                className={`jutsu-zigzag-item ${isEven ? 'item-left' : 'item-right'} ${isMilestone ? 'item-final' : ''}`}
              >
                {/* Center Node on the Spine */}
                <div className={`jutsu-spine-node ${isMilestone ? 'node-trophy' : ''}`}>
                  <span className="node-text">{item.step}</span>
                </div>

                {/* Content Card */}
                <div className="jutsu-card glass-card">
                  <div className="jutsu-card-top">
                    <div className="jutsu-icon-bubble">{item.icon}</div>
                    <div>
                      <span className="badge badge-navy jutsu-category-badge">{item.jutsuName}</span>
                      <span className="jutsu-tag-sub">{item.category}</span>
                    </div>
                  </div>

                  <h3 className="jutsu-title">{item.title}</h3>
                  <p className="jutsu-desc">{item.desc}</p>

                  <div className="jutsu-card-highlights">
                    <div className="highlights-header">Strategic Takeaways:</div>
                    <ul className="highlights-list">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="highlight-bullet">
                          <span className="check-icon">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="jutsu-summary-banner glass-card">
          <div className="summary-banner-content">
            <span className="summary-badge">The Sensei Guarantee</span>
            <h3>Right Awareness + Right Guidance + Systematic Preparation</h3>
            <p>Every student gets structured personal mentorship and individual mock analytics to master all 5 Jutsu.</p>
          </div>
          <a href="#admissions" className="btn btn-primary">
            Start Your Preparation
          </a>
        </div>
      </div>
    </section>
  );
}

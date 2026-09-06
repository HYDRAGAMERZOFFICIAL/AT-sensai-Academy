import React, { useState } from 'react';

const FAQS = [
  {
    q: 'What is the 3-Year Course Validity policy for competitive exams?',
    a: 'Students enrolled in Banking, SSC, or Combo programs can attend classes, take revision batches, and access updated mock tests for 3 full years until they clear their targeted examination.'
  },
  {
    q: 'Are the displayed fees inclusive of GST and course materials?',
    a: 'Yes. All fees listed on our website and catalog (Banking ₹16,999, SSC ₹18,999, Combo ₹27,999) are 100% transparent and inclusive of applicable GST with zero hidden costs.'
  },
  {
    q: 'What are the batch timings for School Foundation (Classes 8th–10th)?',
    a: 'School Foundation classes run 6 days a week from 6:30 PM to 8:00 PM, designed specifically to avoid conflicting with regular school hours while providing continuous concept mastery.'
  },
  {
    q: 'What is covered in the 100% Free Career Awareness Workshop?',
    a: 'The 45–90 minute workshop demystifies competitive exam eligibility (Banking, SSC, Railways, State exams), career pathways, syllabus breakdowns, and provides a customized preparation roadmap.'
  },
  {
    q: 'Can parents enroll students for the Foundation course directly?',
    a: 'Yes. For minors in classes 8th to 10th, we provide a verified parent/guardian consent flow during admission to ensure transparency and proper academic counseling.'
  }
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Common Queries</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about courses, schedules, validity, and admissions.</p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIdx === idx ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-trigger"
                onClick={() => toggle(idx)}
                aria-expanded={openIdx === idx}
              >
                <span>{faq.q}</span>
                <span style={{ fontSize: '1.25rem', color: openIdx === idx ? 'var(--color-sensei-red)' : 'var(--color-text-muted)', marginLeft: 'var(--space-4)' }}>
                  {openIdx === idx ? '−' : '+'}
                </span>
              </button>
              {openIdx === idx && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

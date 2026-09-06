import React, { useState } from 'react';

const FAQS = [
  {
    q: 'What is the 3-Year Extended Course Validity benefit?',
    a: 'For Banking, SSC, and Combo programmes, your admission remains active for 3 full years (36 months). You can attend subsequent batch rotations, practice with refreshed mock tests, and consult mentors until you clear your targeted exam, without paying re-admission fees.'
  },
  {
    q: 'Are the fees inclusive of GST and course materials?',
    a: 'Yes. All stated fees (₹16,999 for Banking, ₹18,999 for SSC, ₹27,999 for Combo) include applicable GST. We maintain 100% pricing transparency with zero hidden charges.'
  },
  {
    q: 'How does the School Foundation Course support minor students?',
    a: 'Our School Foundation course operates 6 days a week from 6:30 PM to 8:00 PM for 8th, 9th, and 10th graders (State, CBSE, ICSE). In strict compliance with child protection guidelines, registration requires Parent/Guardian consent and all progress updates are communicated directly to parents.'
  },
  {
    q: 'Is the Career Awareness Workshop truly 100% Free?',
    a: 'Yes. Our 45–90 minute Career & Competitive Exam Awareness Workshop is completely free for individual students as well as hosting schools/colleges as part of our academic outreach mission.'
  },
  {
    q: 'Where is the academy campus located in Bangalore?',
    a: 'Our center is located at #16, Opp. MNTI College, 16th Cross, Kammagondanahalli, Abbigere Main Road, Bangalore – 560015. You can reach us on +91 91106 87171 or +91 63606 51497.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Common Queries</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our batches, validity, fees, and workshop sessions.</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${isOpen ? 'var(--color-brand-blue)' : 'var(--color-border-subtle)'}`,
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-5) var(--space-6)',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 700,
                    color: 'var(--color-primary-navy)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: 'var(--color-brand-blue)' }}>
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 var(--space-6) var(--space-6) var(--space-6)', fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

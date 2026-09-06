import React from 'react';
import { FAQSection } from '../components/faq/FAQSection';
import { Link } from 'react-router-dom';

export function FAQPage() {
  return (
    <div className="page-faq" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
        <span className="badge badge-navy" style={{ marginBottom: 'var(--space-2)' }}>Knowledge Base</span>
        <h1>Frequently Asked Questions</h1>
        <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
          Detailed answers on course validity, batch timings, exam preparation strategies, and parent consent guidelines.
        </p>
      </div>

      <FAQSection />

      <div className="container" style={{ marginTop: 'var(--space-12)', textAlign: 'center' }}>
        <p style={{ color: 'var(--color-text-muted)' }}>Still have an unanswered question?</p>
        <Link to="/contact" className="btn btn-outline" style={{ marginTop: 'var(--space-2)' }}>
          Contact Our Bangalore Campus
        </Link>
      </div>
    </div>
  );
}

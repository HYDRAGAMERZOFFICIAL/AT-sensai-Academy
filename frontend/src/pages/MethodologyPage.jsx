import React from 'react';
import { MethodologySection } from '../components/methodology/MethodologySection';
import { Link } from 'react-router-dom';

export function MethodologyPage() {
  return (
    <div className="page-methodology" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container" style={{ marginBottom: 'var(--space-6)', textAlign: 'center' }}>
        <span className="badge badge-red" style={{ marginBottom: 'var(--space-2)' }}>Preparation Philosophy</span>
        <h1>The 5 Jutsu Methodology</h1>
        <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
          A structured 5-phase preparation framework developed by AT Sensei mentors to take students from core concepts to top exam percentiles.
        </p>
      </div>

      <MethodologySection />

      <div className="container" style={{ marginTop: 'var(--space-12)', textAlign: 'center' }}>
        <div style={{ background: '#fff', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-subtle)', maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: 'var(--space-3)' }}>Experience the Sensei Methodology in Action</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
            Join our 100% Free Career & Competitive Awareness Workshop to see how we break down complex reasoning, aptitude, and general studies.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/workshop" className="btn btn-gold btn-lg">Book Free Workshop</Link>
            <Link to="/admissions" className="btn btn-primary btn-lg">Apply for Admission</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

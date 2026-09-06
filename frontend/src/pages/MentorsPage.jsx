import React from 'react';
import { MentorSection } from '../components/mentors/MentorSection';
import { Link } from 'react-router-dom';

export function MentorsPage() {
  return (
    <div className="page-mentors" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
        <span className="badge badge-navy" style={{ marginBottom: 'var(--space-2)' }}>Academic Faculty</span>
        <h1>Meet Our Mentors & Senseis</h1>
        <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
          Experienced educators committed to personalized doubt solving, speed-calculation training, and exam strategy.
        </p>
      </div>

      <MentorSection />

      <div className="container" style={{ marginTop: 'var(--space-12)', textAlign: 'center' }}>
        <div style={{ background: 'var(--color-brand-blue-soft)', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)', maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ color: 'var(--color-primary-navy)', marginBottom: 'var(--space-2)' }}>Have Questions for Our Mentors?</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
            Schedule a 1-on-1 counseling session or visit our Bangalore campus to discuss your target exams.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">Visit Campus or Contact Mentors</Link>
        </div>
      </div>
    </div>
  );
}

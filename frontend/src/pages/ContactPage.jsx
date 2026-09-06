import React from 'react';
import { ContactSection } from '../components/contact/ContactSection';

export function ContactPage() {
  return (
    <div className="page-contact" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
        <span className="badge badge-blue" style={{ marginBottom: 'var(--space-2)' }}>Bangalore Campus</span>
        <h1>Visit or Connect with Us</h1>
        <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
          We welcome students and parents to visit our classroom center for in-person faculty discussions and syllabus walk-throughs.
        </p>
      </div>

      <ContactSection />
    </div>
  );
}

import React from 'react';

export function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Campus & Reach</span>
          <h2>Visit Our Bangalore Academy</h2>
          <p>Conveniently accessible near public transit links with dedicated counseling desks and offline classroom facilities.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
          <div style={{ background: '#fff', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }}>📍</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>Campus Address</h3>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              <strong>AT Sensei Academy</strong><br />
              Near Vijayanagar / Rajajinagar Link Metro Station,<br />
              Bengaluru, Karnataka — 560040
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }}>📞</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>Direct Hotlines</h3>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Admissions: <strong>+91 98765 43210</strong><br />
              Foundation Desk: <strong>+91 98765 43211</strong><br />
              Email: <strong>admissions@atsensei.in</strong>
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }}>⏰</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>Operating Hours</h3>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Monday – Saturday: <strong>8:30 AM – 8:30 PM</strong><br />
              Sunday: <strong>9:00 AM – 5:00 PM</strong><br />
              Counseling & Demos: By Appointment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

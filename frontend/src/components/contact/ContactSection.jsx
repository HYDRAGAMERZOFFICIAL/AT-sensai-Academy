import React from 'react';

export function ContactSection() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Visit or Call Us</span>
          <h2>Bangalore Campus & Contact Hub</h2>
          <p>Reach out directly to speak with our counselors or visit our classroom facility.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
          <div className="form-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ marginBottom: 'var(--space-4)' }}>Campus Information</h3>

              <div style={{ marginBottom: 'var(--space-4)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '2px' }}>📍 Address:</div>
                <p style={{ fontSize: '0.9rem' }}>#16, Opp. MNTI College, 16th Cross, Kammagondanahalli, Abbigere Main Road, Bangalore – 560015</p>
              </div>

              <div style={{ marginBottom: 'var(--space-4)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '2px' }}>📞 Phone Hotlines:</div>
                <p style={{ fontSize: '0.9rem' }}>
                  <a href="tel:+919110687171" style={{ fontWeight: 600 }}>+91 91106 87171</a><br />
                  <a href="tel:+916360651497" style={{ fontWeight: 600 }}>+91 63606 51497</a>
                </p>
              </div>

              <div style={{ marginBottom: 'var(--space-4)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '2px' }}>✉️ Email:</div>
                <p style={{ fontSize: '0.9rem' }}><a href="mailto:atsensei0@gmail.com">atsensei0@gmail.com</a></p>
              </div>

              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '2px' }}>⏰ Batch Timings:</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  Morning: 10:00 AM – 12:00 PM<br />
                  Afternoon: 1:00 PM – 3:00 PM<br />
                  Foundation: 6:30 PM – 8:00 PM
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              <a href="tel:+919110687171" className="btn btn-primary" style={{ flex: 1 }}>Call Center</a>
              <a href="https://wa.me/919110687171?text=Hello%20AT%20Sensei%20Academy" target="_blank" rel="noopener noreferrer" className="btn btn-blue" style={{ flex: 1 }}>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="form-card" style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column' }}>
            <iframe
              title="AT Sensei Academy Bangalore Location"
              src="https://maps.google.com/maps?q=Kammagondanahalli%20Abbigere%20Main%20Road%20Bangalore%20560015&t=&z=14&ie=UTF8&iwloc=&output=embed"
              style={{ width: '100%', height: '100%', minHeight: '320px', border: 0, borderRadius: 'var(--radius-md)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Campus & Direct Reach</span>
          <h2>Visit or Contact AT Sensei Academy</h2>
          <p>Get in touch with our admissions and academic counselors directly or visit our Bangalore campus.</p>
        </div>

        <div className="contact-grid-clean">
          <div className="contact-card-clean">
            <div className="contact-icon-clean">📍</div>
            <h3 className="contact-card-title">Campus Address</h3>
            <p className="contact-card-desc">
              <strong>AT Sensei Academy</strong><br />
              #16, Opp. MNTI College, 16th Cross,<br />
              Kammagondanahalli, Abbigere Main Road,<br />
              Bangalore – 560015, Karnataka
            </p>
            <a
              href="https://maps.google.com/?q=Kammagondanahalli+Abbigere+Main+Road+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ marginTop: 'auto' }}
            >
              Get Directions ↗
            </a>
          </div>

          <div className="contact-card-clean">
            <div className="contact-icon-clean">📞</div>
            <h3 className="contact-card-title">Direct Hotlines & Email</h3>
            <p className="contact-card-desc">
              Phone: <a href="tel:+919110687171" style={{ fontWeight: 700, color: 'var(--color-primary-navy)' }}>+91 91106 87171</a><br />
              Phone: <a href="tel:+916360651497" style={{ fontWeight: 700, color: 'var(--color-primary-navy)' }}>+91 63606 51497</a><br />
              Email: <a href="mailto:atsensei0@gmail.com" style={{ color: 'var(--color-brand-blue)', fontWeight: 600 }}>atsensei0@gmail.com</a>
            </p>
            <a
              href="https://wa.me/919110687171"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-sm"
              style={{ marginTop: 'auto' }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="contact-card-clean">
            <div className="contact-icon-clean">⏰</div>
            <h3 className="contact-card-title">Batch & Counseling Hours</h3>
            <p className="contact-card-desc">
              <strong>Banking & SSC:</strong> 10:00 AM – 12:00 PM & 1:00 PM – 3:00 PM<br />
              <strong>School Foundation:</strong> 6:30 PM – 8:00 PM (Mon–Sat)<br />
              <strong>Campus Inquiries:</strong> Monday – Saturday: 9:00 AM – 8:00 PM
            </p>
            <a
              href="#admissions"
              className="btn btn-primary btn-sm"
              style={{ marginTop: 'auto' }}
            >
              Request Call Back
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

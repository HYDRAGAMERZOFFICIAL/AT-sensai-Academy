import React from 'react';

const FACILITIES = [
  {
    icon: '💻',
    title: 'Computer-Based Test (CBT) Lab',
    desc: 'Simulate official IBPS, SBI, and SSC online examination interfaces with timer countdowns and sectional navigation.'
  },
  {
    icon: '🧑‍🏫',
    title: '1-on-1 Mentor Doubt Cabins',
    desc: 'Dedicated private discussion booths with subject senseis to resolve complex quant, reasoning, and conceptual physics bottlenecks.'
  },
  {
    icon: '📚',
    title: 'Curated Study Library',
    desc: 'Quiet reading room stocked with official past 10-year question banks, standard reference texts, and daily editorial digests.'
  },
  {
    icon: '❄️',
    title: 'Smart Air-Conditioned Classrooms',
    desc: 'Ergonomic seating, high-definition digital boards, and distraction-free learning environments built for intensive multi-hour sessions.'
  }
];

export function CampusFacilities() {
  return (
    <section className="section" id="campus-facilities">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Campus & Infrastructure</span>
          <h2>Bangalore Classroom Infrastructure & Amenities</h2>
          <p>Purpose-built academic infrastructure designed for deep focus, daily mock test practice, and mentor interaction.</p>
        </div>

        <div className="facilities-grid">
          {FACILITIES.map((f, idx) => (
            <div key={idx} className="facility-card">
              <div className="facility-icon">{f.icon}</div>
              <h3 className="facility-title">{f.title}</h3>
              <p className="facility-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="campus-location-banner">
          <div className="campus-location-info">
            <div className="campus-pin-icon">📍</div>
            <div>
              <h4 style={{ color: 'var(--color-primary-navy)', fontSize: '1.1rem', marginBottom: '2px' }}>
                Prime Bangalore Location: #16, Opp. MNTI College, Kammagondanahalli
              </h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0 }}>
                Abbigere Main Road, Bangalore – 560015 • Near Metro Link with easy bus connectivity.
              </p>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Kammagondanahalli+Abbigere+Main+Road+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
}

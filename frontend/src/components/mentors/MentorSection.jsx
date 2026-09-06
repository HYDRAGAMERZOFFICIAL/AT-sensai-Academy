import React, { useState, useEffect } from 'react';
import { MentorService } from '../../api/mentorService';
import { MentorCard } from './MentorCard';

export function MentorSection() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMentors() {
      try {
        setLoading(true);
        const data = await MentorService.getAllMentors();
        setMentors(data || []);
      } catch (err) {
        console.error("Failed to load mentors:", err);
      } finally {
        setLoading(false);
      }
    }
    loadMentors();
  }, []);

  return (
    <section className="section section-alt" id="mentors">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Faculty & Leadership</span>
          <h2>Guided by Dedicated Mentors</h2>
          <p>Learn from experienced educators who combine deep subject knowledge with real competitive exam insight.</p>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-8)', color: 'var(--color-text-muted)' }}>
            Loading mentor profiles...
          </div>
        ) : (
          <div className="mentors-grid">
            {mentors.map(m => (
              <MentorCard key={m.id || m.name} mentor={m} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

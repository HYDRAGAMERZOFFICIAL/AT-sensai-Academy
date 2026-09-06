import React from 'react';

export function MentorCard({ mentor }) {
  return (
    <article className="mentor-card">
      <div className="mentor-avatar">{mentor.initials}</div>
      <h3 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-1)' }}>{mentor.name}</h3>
      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-brand-blue)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
        {mentor.qualification}
      </div>
      <span className="badge badge-gold" style={{ marginBottom: 'var(--space-4)' }}>
        {mentor.experience}
      </span>
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-4)' }}>
        {mentor.focus}
      </p>
    </article>
  );
}

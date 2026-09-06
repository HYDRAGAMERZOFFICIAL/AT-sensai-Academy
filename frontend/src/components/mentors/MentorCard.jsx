import React from 'react';

export function MentorCard({ mentor }) {
  return (
    <article className="mentor-card-clean">
      <div className="mentor-avatar-clean">
        {mentor.initials || mentor.name.charAt(0)}
      </div>
      <h3 className="mentor-name">{mentor.name}</h3>
      <div className="mentor-qualification">{mentor.qualification}</div>
      <span className="mentor-experience-badge">{mentor.experience}</span>
      <p className="mentor-focus-text">
        {mentor.focus}
      </p>
    </article>
  );
}

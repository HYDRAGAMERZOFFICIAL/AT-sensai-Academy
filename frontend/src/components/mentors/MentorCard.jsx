import React, { useState } from 'react';

const MENTOR_PHOTOS = {
  'Mohan Sensei': '/images/mentors/mohan-sensei.png',
  'Anikethana Sensei': '/images/mentors/anikethana-sensei.png',
  'Tansen Sensei': '/images/mentors/tansen-sensei.png'
};

export function MentorCard({ mentor }) {
  const [imgError, setImgError] = useState(false);
  const photoUrl = mentor.imageUrl || MENTOR_PHOTOS[mentor.name];

  return (
    <article className="mentor-card-clean glass-card">
      <div className="mentor-avatar-clean">
        {photoUrl && !imgError ? (
          <img
            src={photoUrl}
            alt={mentor.name}
            className="mentor-photo-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="mentor-initials">{mentor.initials || mentor.name?.charAt(0)}</span>
        )}
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

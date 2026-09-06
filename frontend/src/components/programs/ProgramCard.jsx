import React from 'react';
import { Link } from 'react-router-dom';

export function ProgramCard({ program, onEnrollClick }) {
  const isFeatured = program.featured ? 'featured' : '';
  const badgeCategory = program.category === 'school' ? 'badge-gold' : 'badge-blue';
  const categoryName = program.category === 'school' ? 'School Foundation' : 'Competitive Track';

  let subjects = [];
  try {
    subjects = typeof program.subjectsJson === 'string' ? JSON.parse(program.subjectsJson) : program.subjects || [];
  } catch (e) {
    subjects = [];
  }

  let exams = [];
  try {
    exams = typeof program.examsJson === 'string' ? JSON.parse(program.examsJson) : program.examsCovered || [];
  } catch (e) {
    exams = [];
  }

  return (
    <article className={`program-card ${isFeatured}`} id={`card-${program.code}`}>
      {program.featured && <div className="program-card-ribbon">{program.tag || 'Popular'}</div>}

      <div className="program-card-header">
        <div className="program-card-top-tags">
          <span className={`badge ${badgeCategory}`}>{categoryName}</span>
          <span className="badge badge-navy">Batch 2026/27</span>
        </div>

        <div className="program-meta-line">
          <span className="edtech-rating">★ 4.9</span>
          <span>•</span>
          <span>{program.validity} Validity</span>
          <span>•</span>
          <span>Offline + Hybrid</span>
        </div>

        <h3 className="program-card-title">
          <Link to={`/programs/${program.code}`}>
            {program.title}
          </Link>
        </h3>
        <p className="program-card-desc">
          {program.description}
        </p>
      </div>

      <div className="program-details-box">
        <div className="detail-item">
          <span className="detail-label">Schedule & Timings</span>
          <span className="detail-val">{program.timings}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Batch Options</span>
          <span className="detail-val">{program.batches}</span>
        </div>
      </div>

      {exams.length > 0 && (
        <div style={{ marginBottom: 'var(--space-3)' }}>
          <div className="program-section-label">Target Exams</div>
          <div className="subject-tags">
            {exams.slice(0, 3).map((ex, idx) => (
              <span key={idx} className="subject-tag highlight">
                {ex}
              </span>
            ))}
            {exams.length > 3 && (
              <span className="subject-tag">+{exams.length - 3} more</span>
            )}
          </div>
        </div>
      )}

      {subjects.length > 0 && (
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <div className="program-section-label">Core Subjects</div>
          <div className="subject-tags">
            {subjects.slice(0, 4).map((s, idx) => (
              <span key={idx} className="subject-tag">{s}</span>
            ))}
            {subjects.length > 4 && (
              <span className="subject-tag">+{subjects.length - 4} more</span>
            )}
          </div>
        </div>
      )}

      <div className="program-pricing-box">
        <div>
          <div className="pricing-amount">{program.feeDisplay}</div>
          <div className="pricing-subtext">{program.feeSubtext || 'Inclusive of GST'}</div>
        </div>
        <span className="badge badge-emerald">Verified Fee</span>
      </div>

      <div className="program-card-actions">
        <Link to={`/programs/${program.code}`} className="btn btn-outline btn-sm">
          Syllabus & Details
        </Link>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => onEnrollClick(program.code)}
        >
          Enquire Now
        </button>
      </div>
    </article>
  );
}

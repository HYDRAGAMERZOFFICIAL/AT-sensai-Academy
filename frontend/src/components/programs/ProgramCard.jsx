import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

export function ProgramCard({ program, onEnrollClick }) {
  const { openCurriculumModal } = useModal();

  const isFeatured = program.featured ? 'featured' : '';
  const badgeCategory = program.category === 'school' ? 'badge-gold' : 'badge-blue';
  const categoryName = program.category === 'school' ? 'School Foundation' : 'Govt Competitive';

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
      {program.featured && <div className="program-card-ribbon">{program.tag}</div>}

      <div style={{ marginBottom: 'var(--space-4)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
          <span className={`badge ${badgeCategory}`}>{categoryName}</span>
          <span className="badge badge-navy">Target 2026 / 2027</span>
        </div>

        <div className="edtech-meta-row">
          <span className="edtech-rating">★ 4.9</span>
          <span>•</span>
          <span>{program.validity} Course Validity</span>
          <span>•</span>
          <span>Bilingual Guidance</span>
        </div>

        <h3 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-2)' }}>
          <Link to={`/programs/${program.code}`} style={{ color: 'inherit' }}>
            {program.title}
          </Link>
        </h3>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)', lineHeight: 1.6 }}>
          {program.description}
        </p>
      </div>

      <div className="program-details-box">
        <div className="detail-item">
          <span className="detail-label">Schedule / Timings</span>
          <span className="detail-val">{program.timings}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Batch Options</span>
          <span className="detail-val">{program.batches}</span>
        </div>
      </div>

      <div style={{ marginBottom: 'var(--space-4)' }}>
        <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
          Target Exams Covered
        </div>
        <div className="subject-tags" style={{ marginBottom: 'var(--space-3)' }}>
          {exams.slice(0, 3).map((ex, idx) => (
            <span key={idx} className="subject-tag" style={{ background: 'var(--color-brand-blue-soft)', color: 'var(--color-brand-blue)', fontWeight: 600 }}>
              {ex}
            </span>
          ))}
          {exams.length > 3 && (
            <span className="subject-tag">+{exams.length - 3} more</span>
          )}
        </div>
      </div>

      <div style={{ marginBottom: 'var(--space-6)', flexGrow: 1 }}>
        <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
          Key Subjects & Syllabus
        </div>
        <div className="subject-tags">
          {subjects.slice(0, 4).map((s, idx) => (
            <span key={idx} className="subject-tag">{s}</span>
          ))}
          {subjects.length > 4 && (
            <span className="subject-tag">+{subjects.length - 4} more</span>
          )}
        </div>
      </div>

      <div className="program-pricing">
        <div>
          <div className="pricing-amount">{program.feeDisplay}</div>
          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>{program.feeSubtext}</div>
        </div>
        <span className="badge badge-emerald">Verified Catalog Fee</span>
      </div>

      <div className="program-card-actions">
        <Link to={`/programs/${program.code}`} className="btn btn-outline">
          Explore Batch
        </Link>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onEnrollClick(program.code)}
        >
          Enroll Now
        </button>
      </div>
    </article>
  );
}

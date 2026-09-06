import React from 'react';
import { Link } from 'react-router-dom';
import { formatFeeDisplay } from '../../utils/formatters';
import { useModal } from '../../context/ModalContext';

export function ProgramCard({ program, onEnrollClick }) {
  const { openEnquiryModal } = useModal();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const subjects = typeof program.subjectsJson === 'string'
    ? (() => { try { return JSON.parse(program.subjectsJson); } catch (e) { return []; } })()
    : (program.subjectsJson || program.subjects || []);

  const exams = typeof program.examsJson === 'string'
    ? (() => { try { return JSON.parse(program.examsJson); } catch (e) { return []; } })()
    : (program.examsJson || program.exams || []);

  const isCombo = program.code === 'ssc-banking-combo';

  const handleEnquire = () => {
    if (onEnrollClick) {
      onEnrollClick(program.code);
    } else {
      openEnquiryModal({ course: program.code });
    }
  };

  return (
    <article className={`program-card glass-card ${isCombo ? 'featured-card' : ''}`}>
      {isCombo && (
        <div className="program-card-badge">
          ★ Maximum Value Pathway
        </div>
      )}

      <div className="program-card-header">
        <span className="badge badge-navy">{program.category === 'school' ? 'School Foundation' : 'Competitive Exam'}</span>
        {program.tag && (
          <span className="badge badge-accent">{program.tag}</span>
        )}
      </div>

      <h3 className="program-card-title">
        <Link to={`/programs/${program.code}`}>{program.title}</Link>
      </h3>

      <p className="program-card-desc">{program.description}</p>

      <div className="program-meta-list">
        <div className="program-meta-item">
          <span className="meta-icon">⏳</span>
          <div>
            <strong>Course Validity:</strong> {program.validity}
          </div>
        </div>
        <div className="program-meta-item">
          <span className="meta-icon">📅</span>
          <div>
            <strong>Timings:</strong> {program.timings}
          </div>
        </div>
        <div className="program-meta-item">
          <span className="meta-icon">🎯</span>
          <div>
            <strong>Eligibility:</strong> {program.eligibility}
          </div>
        </div>
      </div>

      {/* Expandable Details / Read More Section */}
      <div className={`program-expandable-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {exams.length > 0 && (
          <div className="program-section-preview">
            <div className="program-section-label">Target Recruitments & Boards</div>
            <div className="exam-target-chips">
              {exams.map((exam, idx) => (
                <span key={idx} className="exam-chip">{exam}</span>
              ))}
            </div>
          </div>
        )}

        {subjects.length > 0 && (
          <div className="program-section-preview">
            <div className="program-section-label">Core Subjects Covered</div>
            <div className="subject-tags">
              {subjects.map((s, idx) => (
                <span key={idx} className="subject-tag">{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        className="btn-read-more-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? '▲ Hide Full Syllabus & Exams' : '▼ Read More (Syllabus & Exams)'}</span>
      </button>

      <div className="program-pricing-box">
        <div>
          <div className="pricing-amount">{formatFeeDisplay(program.feeDisplay)}</div>
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
          onClick={handleEnquire}
        >
          Enquire Now
        </button>
      </div>
    </article>
  );
}

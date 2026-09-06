import React from 'react';
import { useModal } from '../../context/ModalContext';

export function CurriculumModal() {
  const { activeModal, modalData: program, closeModal } = useModal();

  if (activeModal !== 'curriculum' || !program) return null;

  let curriculum = [];
  try {
    curriculum = typeof program.curriculumJson === 'string' ? JSON.parse(program.curriculumJson) : program.curriculum || [];
  } catch (e) {
    curriculum = [];
  }

  let exams = [];
  try {
    exams = typeof program.examsJson === 'string' ? JSON.parse(program.examsJson) : program.examsCovered || [];
  } catch (e) {
    exams = [];
  }

  return (
    <div className="modal-backdrop is-active" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{program.title} — Syllabus & Structure</h3>
          <button type="button" className="modal-close-btn" onClick={closeModal}>✕</button>
        </div>
        <div className="modal-body">
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <p><strong>Eligibility:</strong> {program.eligibility}</p>
            <p><strong>Course Validity:</strong> {program.validity} active mentor support & test access.</p>
            <p><strong>Batch Timings:</strong> {program.timings}</p>
          </div>

          <h4 style={{ marginBottom: 'var(--space-3)', color: 'var(--color-primary-navy)' }}>Detailed Subject Breakdown:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {curriculum.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--color-bg-alt)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-brand-blue)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '4px' }}>{item.subject}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{item.topics}</div>
              </div>
            ))}
          </div>

          {exams.length > 0 && (
            <div style={{ marginTop: 'var(--space-4)' }}>
              <h4 style={{ marginBottom: 'var(--space-2)', color: 'var(--color-primary-navy)' }}>Target Examinations:</h4>
              <div className="subject-tags">
                {exams.map((ex, idx) => (
                  <span key={idx} className="subject-tag" style={{ background: 'var(--color-brand-blue-soft)', color: 'var(--color-brand-blue)', fontWeight: 600 }}>
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={closeModal}>
            Close Syllabus
          </button>
        </div>
      </div>
    </div>
  );
}

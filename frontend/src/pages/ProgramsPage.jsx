import React from 'react';
import { ProgramSection } from '../components/programs/ProgramSection';
import { useNavigate } from 'react-router-dom';

export function ProgramsPage() {
  const navigate = useNavigate();

  const handleEnroll = (code) => {
    navigate(`/admissions?course=${code}`);
  };

  return (
    <div className="page-programs" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container" style={{ marginBottom: 'var(--space-6)' }}>
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <span className="badge badge-blue" style={{ marginBottom: 'var(--space-2)' }}>Academic Catalog</span>
          <h1 style={{ marginBottom: 'var(--space-3)' }}>Our Flagship Coaching Programmes</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
            Systematic classroom courses for Banking, Staff Selection Commission (SSC), and School Foundation (8th-10th) in Bangalore with 3-Year validity.
          </p>
        </div>
      </div>

      <ProgramSection onEnrollSelect={handleEnroll} />
    </div>
  );
}

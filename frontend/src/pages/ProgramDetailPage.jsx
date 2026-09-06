import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ProgramService } from '../api/programService';
import { formatFeeDisplay } from '../utils/formatters';

export function ProgramDetailPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProgram() {
      try {
        setLoading(true);
        const data = await ProgramService.getProgramByCode(code);
        setProgram(data);
      } catch (err) {
        console.error("Error loading program:", err);
      } finally {
        setLoading(false);
      }
    }
    loadProgram();
  }, [code]);

  if (loading) {
    return (
      <div className="container" style={{ padding: 'var(--space-20) 0', textAlign: 'center' }}>
        <h2>Loading Programme Details...</h2>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="container" style={{ padding: 'var(--space-20) 0', textAlign: 'center' }}>
        <h2>Programme Not Found</h2>
        <p>The requested course code "{code}" does not exist in our catalog.</p>
        <Link to="/programs" className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>
          Back to All Programmes
        </Link>
      </div>
    );
  }

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

  let subjects = [];
  try {
    subjects = typeof program.subjectsJson === 'string' ? JSON.parse(program.subjectsJson) : program.subjects || [];
  } catch (e) {
    subjects = [];
  }

  return (
    <div className="page-program-detail" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-20)' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ marginBottom: 'var(--space-6)', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          <Link to="/">Home</Link> &gt; <Link to="/programs">Programs</Link> &gt; <span style={{ color: 'var(--color-primary-navy)', fontWeight: 600 }}>{program.title}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr', gap: 'var(--space-10)' }}>
          {/* Main Content */}
          <div>
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
              <span className="badge badge-blue">{program.category === 'school' ? 'School Foundation' : 'Govt Competitive'}</span>
              <span className="badge badge-navy">{program.validity} Course Validity</span>
              {program.featured && <span className="badge badge-gold">Featured Course</span>}
            </div>

            <h1 style={{ marginBottom: 'var(--space-4)' }}>{program.title}</h1>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)' }}>
              {program.description}
            </p>

            <h3 style={{ marginBottom: 'var(--space-4)' }}>Core Subjects & Syllabus</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
              {curriculum.map((item, idx) => (
                <div key={idx} style={{ background: '#fff', padding: 'var(--space-5)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)', borderLeft: '4px solid var(--color-brand-blue)' }}>
                  <h4 style={{ color: 'var(--color-primary-navy)', marginBottom: '4px' }}>{item.subject}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>{item.topics}</p>
                </div>
              ))}
            </div>

            {exams.length > 0 && (
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>Target Examinations Covered</h3>
                <div className="subject-tags">
                  {exams.map((ex, idx) => (
                    <span key={idx} className="subject-tag" style={{ background: 'var(--color-brand-blue-soft)', color: 'var(--color-brand-blue)', fontWeight: 600, padding: '0.4rem 0.8rem' }}>
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Summary Card */}
          <div>
            <div className="form-card" style={{ position: 'sticky', top: '100px' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: 'var(--space-1)' }}>
                Verified Catalog Fee
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary-navy)', marginBottom: '4px' }}>
                {formatFeeDisplay(program.feeDisplay)}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                {program.feeSubtext || 'Inclusive of GST'} (Transparent pricing with zero hidden fees)
              </div>

              <div style={{ borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)', padding: 'var(--space-4) 0', marginBottom: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Eligibility:</span>
                  <strong>{program.eligibility}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Validity:</span>
                  <strong>{program.validity}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Batches:</span>
                  <strong>{program.batches}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>Timings:</span>
                  <strong>{program.timings}</strong>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                style={{ marginBottom: 'var(--space-3)' }}
                onClick={() => navigate(`/admissions?course=${program.code}`)}
              >
                Enroll in this Programme
              </button>

              <a
                href={`https://wa.me/919110687171?text=Hello%20AT%20Sensei%20Academy%2C%20I%20am%20interested%20in%20${encodeURIComponent(program.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-block"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

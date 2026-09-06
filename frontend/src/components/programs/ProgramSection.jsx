import React, { useState, useEffect } from 'react';
import { ProgramService } from '../../api/programService';
import { ProgramCard } from './ProgramCard';
import { useToast } from '../../context/ToastContext';

export function ProgramSection({ onEnrollSelect }) {
  const [programs, setPrograms] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    async function loadPrograms() {
      try {
        setLoading(true);
        const data = await ProgramService.getAllPrograms();
        setPrograms(data || []);
      } catch (err) {
        showToast("Failed to load programs from backend. Please ensure the Spring Boot server is running.", "error");
      } finally {
        setLoading(false);
      }
    }
    loadPrograms();
  }, [showToast]);

  const filteredPrograms = programs.filter(p => {
    const matchesCategory = filter === 'all' || p.category === filter;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesTitle = p.title.toLowerCase().includes(query);
    const matchesDesc = p.description.toLowerCase().includes(query);
    const matchesExams = (p.examsJson || '').toLowerCase().includes(query);
    const matchesSubjects = (p.subjectsJson || '').toLowerCase().includes(query);

    return matchesCategory && (matchesTitle || matchesDesc || matchesExams || matchesSubjects);
  });

  return (
    <section className="section" id="programs">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Tracks & Batches</span>
          <h2>Explore Our Flagship Programmes</h2>
          <p>PW & Vedantu-style structured learning paths designed for conceptual mastery and high competitive rank.</p>
        </div>

        {/* EdTech Search Bar */}
        <div className="edtech-search-bar">
          <span style={{ fontSize: '1.25rem', color: 'var(--color-brand-blue)' }}>🔍</span>
          <input
            type="text"
            className="edtech-search-input"
            placeholder="Search by exam (e.g. IBPS, CGL, CHSL, ICSE) or subject (e.g. Aptitude, Reasoning, Science)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontWeight: 'bold' }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="program-filter-tabs">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Programmes ({programs.length})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'competitive' ? 'active' : ''}`}
            onClick={() => setFilter('competitive')}
          >
            Competitive Govt Exams
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'school' ? 'active' : ''}`}
            onClick={() => setFilter('school')}
          >
            School Foundation (8th-10th)
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-10)', color: 'var(--color-text-muted)' }}>
            Loading programmes from SQL database...
          </div>
        ) : filteredPrograms.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-10)', background: '#fff', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-subtle)' }}>
            <h3>No courses match "{searchQuery}"</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Try searching for "Banking", "SSC", "Maths", or "Foundation".</p>
            <button className="btn btn-outline" style={{ marginTop: 'var(--space-3)' }} onClick={() => { setSearchQuery(''); setFilter('all'); }}>
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="programs-grid">
            {filteredPrograms.map(p => (
              <ProgramCard key={p.id || p.code} program={p} onEnrollClick={onEnrollSelect} />
            ))}
          </div>
        )}

        {/* PW / Vedantu Style Trust Grid */}
        <div className="edtech-trust-grid">
          <div className="edtech-trust-item">
            <div className="edtech-trust-icon">🎯</div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>3-Year Extended Validity</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>Attend revisions and retake tests until exam success.</p>
          </div>

          <div className="edtech-trust-item">
            <div className="edtech-trust-icon">💡</div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Daily Doubt Resolution</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>Direct 1-on-1 access to subject senseis after classes.</p>
          </div>

          <div className="edtech-trust-item">
            <div className="edtech-trust-icon">📊</div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Exam Pattern Mock Tests</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>Sectional analytics and time-management practice.</p>
          </div>

          <div className="edtech-trust-item">
            <div className="edtech-trust-icon">🛡️</div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>Zero Hidden Fees</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>100% transparent pricing inclusive of GST.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

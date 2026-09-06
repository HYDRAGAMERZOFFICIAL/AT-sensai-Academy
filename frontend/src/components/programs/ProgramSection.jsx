import React, { useState, useEffect } from 'react';
import { ProgramService } from '../../api/programService';
import { ProgramCard } from './ProgramCard';

export function ProgramSection({ onEnrollSelect }) {
  const [programs, setPrograms] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPrograms() {
      try {
        setLoading(true);
        const data = await ProgramService.getAllPrograms();
        setPrograms(data || []);
      } catch (err) {
        console.error("Failed to load programs:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPrograms();
  }, []);

  const filteredPrograms = programs.filter(p => {
    const matchesCategory = filter === 'all' || p.category === filter;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesTitle = p.title.toLowerCase().includes(query);
    const matchesDesc = (p.description || '').toLowerCase().includes(query);
    const matchesExams = (p.examsJson || '').toLowerCase().includes(query);
    const matchesSubjects = (p.subjectsJson || '').toLowerCase().includes(query);

    return matchesCategory && (matchesTitle || matchesDesc || matchesExams || matchesSubjects);
  });

  return (
    <section className="section" id="programs">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Tracks & Batches</span>
          <h2>Flagship Programs & Comprehensive Batches</h2>
          <p>Structured curriculum designed by expert mentors for conceptual clarity and high competitive rank.</p>
        </div>

        {/* Search Bar */}
        <div className="edtech-search-bar">
          <span style={{ fontSize: '1.1rem', color: 'var(--color-brand-blue)' }}>🔍</span>
          <input
            type="text"
            className="edtech-search-input"
            placeholder="Search by exam (IBPS, CGL, CHSL, ICSE) or subject (Aptitude, Reasoning, Science)..."
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
            All Tracks ({programs.length})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'competitive' ? 'active' : ''}`}
            onClick={() => setFilter('competitive')}
          >
            Govt Competitive Exams (Bank • SSC)
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'school' ? 'active' : ''}`}
            onClick={() => setFilter('school')}
          >
            School Foundation (Classes 8th–10th)
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-12)', color: 'var(--color-text-muted)' }}>
            Loading verified programs...
          </div>
        ) : filteredPrograms.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-10)', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-subtle)' }}>
            <h3>No programs match "{searchQuery}"</h3>
            <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>Try searching for "Banking", "SSC", "Maths", or "Foundation".</p>
            <button className="btn btn-outline btn-sm" style={{ marginTop: 'var(--space-4)' }} onClick={() => { setSearchQuery(''); setFilter('all'); }}>
              Reset Search
            </button>
          </div>
        ) : (
          <div className="programs-grid">
            {filteredPrograms.map(p => (
              <ProgramCard key={p.id || p.code} program={p} onEnrollClick={onEnrollSelect} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

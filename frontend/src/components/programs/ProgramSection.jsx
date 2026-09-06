import React, { useState, useEffect } from 'react';
import { ProgramService } from '../../api/programService';
import { ProgramCard } from './ProgramCard';
import { useToast } from '../../context/ToastContext';

export function ProgramSection({ onEnrollSelect }) {
  const [programs, setPrograms] = useState([]);
  const [filter, setFilter] = useState('all');
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
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section className="section" id="programs">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Offerings</span>
          <h2>Explore Our Flagship Programmes</h2>
          <p>Comprehensive coaching tracks designed to take you from foundational concepts to exam-day confidence.</p>
        </div>

        <div className="program-filter-tabs">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Programmes
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
            School Foundation (8-10th)
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-10)', color: 'var(--color-text-muted)' }}>
            Loading programmes from SQL database...
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

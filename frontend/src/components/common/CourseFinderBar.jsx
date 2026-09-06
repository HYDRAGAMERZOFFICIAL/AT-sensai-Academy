import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CourseFinderBar() {
  const navigate = useNavigate();
  const [examCategory, setExamCategory] = useState('banking');
  const [preferredMode, setPreferredMode] = useState('classroom');
  const [targetYear, setTargetYear] = useState('2026');

  const handleSearch = (e) => {
    e.preventDefault();
    if (examCategory === 'foundation') {
      navigate('/programs/foundation');
    } else if (examCategory === 'ssc') {
      navigate('/programs/ssc');
    } else if (examCategory === 'combo') {
      navigate('/programs/ssc-banking-combo');
    } else {
      navigate('/programs/banking');
    }
  };

  return (
    <div className="course-finder-wrapper">
      <div className="container">
        <form onSubmit={handleSearch} className="course-finder-box" aria-label="Course and Batch Finder">
          <div className="finder-header-label">
            <span className="finder-badge">Quick Course Finder</span>
            <span className="finder-subtext">Find your tailored batch & curriculum</span>
          </div>

          <div className="finder-inputs-row">
            <div className="finder-field">
              <label htmlFor="finder-category" className="finder-label">Target Exam / Goal</label>
              <select
                id="finder-category"
                className="finder-select"
                value={examCategory}
                onChange={(e) => setExamCategory(e.target.value)}
              >
                <option value="banking">Banking (IBPS, SBI, RBI, LIC)</option>
                <option value="ssc">SSC Central Govt (CGL, CHSL, MTS, CPO)</option>
                <option value="combo">SSC + Banking Combo (Dual Track)</option>
                <option value="foundation">School Foundation (Classes 8th–10th)</option>
              </select>
            </div>

            <div className="finder-field">
              <label htmlFor="finder-mode" className="finder-label">Learning Modality</label>
              <select
                id="finder-mode"
                className="finder-select"
                value={preferredMode}
                onChange={(e) => setPreferredMode(e.target.value)}
              >
                <option value="classroom">Bangalore Offline Classroom</option>
                <option value="hybrid">Hybrid Interactive Sessions</option>
                <option value="weekend">Weekend Working Professional</option>
              </select>
            </div>

            <div className="finder-field">
              <label htmlFor="finder-year" className="finder-label">Target Batch Year</label>
              <select
                id="finder-year"
                className="finder-select"
                value={targetYear}
                onChange={(e) => setTargetYear(e.target.value)}
              >
                <option value="2026">2026 Admissions (Active)</option>
                <option value="2027">2027 Early Bird Batch</option>
              </select>
            </div>

            <div className="finder-field finder-btn-field">
              <button type="submit" className="btn btn-primary btn-block finder-btn">
                <span>Find Course & Batches</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

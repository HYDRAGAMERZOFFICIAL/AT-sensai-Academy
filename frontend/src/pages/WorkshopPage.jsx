import React, { useState } from 'react';
import { useModal } from '../context/ModalContext';

export function WorkshopPage() {
  const { openWorkshopModal } = useModal();
  const [iframeLoading, setIframeLoading] = useState(true);
  const googleFormUrl = "https://forms.gle/cVF41oTAjvCCJoMQ9";

  return (
    <div className="page-workshop" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--space-8) auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: 'var(--space-2)' }}>100% Free Live Session</span>
          <h1>Career & Competitive Exam Awareness Workshop</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
            Discover untapped opportunities in Banking, Central Government SSC recruitments, and early Olympiad/Aptitude grounding.
          </p>
        </div>

        <div className="workshop-page-grid">
          {/* Workshop Value Highlights */}
          <div style={{ background: 'var(--color-primary-navy)', color: '#fff', padding: 'var(--space-6)', borderRadius: 'var(--radius-xl)' }}>
            <span className="badge badge-gold" style={{ marginBottom: 'var(--space-3)' }}>
              Community Outreach
            </span>
            <h3 style={{ color: '#fff', marginBottom: 'var(--space-4)', fontSize: '1.3rem' }}>What You Will Gain</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>01</span>
                <div>
                  <strong>Complete Government Career Roadmap</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                    Understand eligibility, age criteria, salary scales, and perks across IBPS, SBI, SSC CGL, CHSL, and State recruitments.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>02</span>
                <div>
                  <strong>Demystifying Competitive Exams</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                    Break down the myths surrounding cutoffs, preparation timelines, and how to balance degree college with exam study.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>03</span>
                <div>
                  <strong>Interactive Q&A with Senior Senseis</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>
                    Get direct answers to your career questions, syllabus doubts, and preparation bottlenecks.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', fontSize: '0.88rem' }}>
              <div><strong>Duration:</strong> 45 to 90 Minutes</div>
              <div><strong>Cost:</strong> 100% Free (Zero financial commitment)</div>
              <div><strong>Audience:</strong> School Students (8th–10th), PUC, Degree Students & Parents</div>
            </div>

            <button
              type="button"
              className="btn btn-gold btn-block"
              style={{ marginTop: 'var(--space-6)' }}
              onClick={() => openWorkshopModal()}
            >
              Open Form in Popup Window
            </button>
          </div>

          {/* Embedded Google Form Card */}
          <div className="form-card glass-card" style={{ padding: 'var(--space-4)', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-subtle)', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Online Workshop Registration</h3>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Official Google Form</p>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <button
                  type="button"
                  className="btn btn-sm btn-gold"
                  onClick={() => openWorkshopModal()}
                  style={{ fontSize: '0.8rem' }}
                >
                  Popup Form ↗
                </button>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline"
                  style={{ fontSize: '0.8rem' }}
                >
                  Fullscreen ↗
                </a>
              </div>
            </div>

            <div style={{ minHeight: '560px', position: 'relative', background: '#fff', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              {iframeLoading && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
                  <div className="spinner" style={{ width: '32px', height: '32px', border: '3px solid #ccc', borderTopColor: 'var(--color-sensei-red)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                </div>
              )}
              <iframe
                src={googleFormUrl}
                title="Workshop Registration Google Form"
                width="100%"
                height="600px"
                style={{ border: 'none', display: 'block', width: '100%' }}
                onLoad={() => setIframeLoading(false)}
              >
                Loading Form...
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

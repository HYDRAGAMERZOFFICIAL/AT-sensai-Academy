import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PolicyService } from '../api/policyService';

export function PoliciesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabQuery = searchParams.get('tab') || 'privacy';
  const [currentTab, setCurrentTab] = useState(activeTabQuery);
  const [policies, setPolicies] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPolicies() {
      try {
        setLoading(true);
        const data = await PolicyService.getAllPolicies();
        const map = {};
        if (Array.isArray(data)) {
          data.forEach(p => { map[p.policyKey] = p; });
        }
        setPolicies(map);
      } catch (err) {
        console.error("Failed to load policies:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPolicies();
  }, []);

  const handleTabChange = (key) => {
    setCurrentTab(key);
    setSearchParams({ tab: key });
  };

  const currentPolicy = policies[currentTab] || {
    title: 'Policy Document',
    contentHtml: '<p>Loading legal policy details...</p>'
  };

  return (
    <div className="page-policies" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-20)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <span className="badge badge-navy" style={{ marginBottom: 'var(--space-2)' }}>Legal & Governance</span>
          <h1>Institutional Governance & Policies</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Clear commitments regarding student data privacy, DPDP compliance, minor protection, and academic terms.
          </p>
        </div>

        <div className="form-card">
          <div className="policy-tabs" style={{ marginBottom: 'var(--space-8)' }}>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'privacy' ? 'active' : ''}`}
              onClick={() => handleTabChange('privacy')}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'terms' ? 'active' : ''}`}
              onClick={() => handleTabChange('terms')}
            >
              Terms of Service
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'refund' ? 'active' : ''}`}
              onClick={() => handleTabChange('refund')}
            >
              Refund Policy
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'minorConsent' ? 'active' : ''}`}
              onClick={() => handleTabChange('minorConsent')}
            >
              Minor & Parent Consent
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'disclaimer' ? 'active' : ''}`}
              onClick={() => handleTabChange('disclaimer')}
            >
              Disclaimer
            </button>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-8)', color: 'var(--color-text-muted)' }}>
              Loading policy content from secure database...
            </div>
          ) : (
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-4)', color: 'var(--color-primary-navy)' }}>
                {currentPolicy.title}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: currentPolicy.contentHtml }}
                style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PolicyService } from '../api/policyService';
import { COMPREHENSIVE_POLICIES } from '../data/legalPolicies';

export function PoliciesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabQuery = searchParams.get('tab') || 'privacy';
  const [currentTab, setCurrentTab] = useState(activeTabQuery);
  const [policies, setPolicies] = useState(COMPREHENSIVE_POLICIES);

  useEffect(() => {
    async function loadPolicies() {
      try {
        const data = await PolicyService.getAllPolicies();
        if (Array.isArray(data) && data.length > 0) {
          const map = { ...COMPREHENSIVE_POLICIES };
          data.forEach(p => {
            if (p.policyKey && p.contentHtml) {
              map[p.policyKey] = p;
            }
          });
          setPolicies(map);
        }
      } catch (err) {
        console.warn("Using comprehensive local legal policies data");
      }
    }
    loadPolicies();
  }, []);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && tabParam !== currentTab) {
      setCurrentTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (key) => {
    setCurrentTab(key);
    setSearchParams({ tab: key });
  };

  const currentPolicy = policies[currentTab] || COMPREHENSIVE_POLICIES[currentTab] || {
    title: 'Policy Document',
    contentHtml: '<p>Select a legal policy tab above to view the full text.</p>'
  };

  return (
    <div className="page-policies" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-20)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <span className="section-tag" style={{ marginBottom: 'var(--space-2)' }}>Institutional Governance</span>
          <h1>Legal & Privacy Governance</h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Transparent legal terms, DPDP compliance, student data safety, and zero-deception coaching standards for AT Sensei Academy.
          </p>
        </div>

        <div className="form-card" style={{ padding: 'var(--space-8)' }}>
          <div className="policy-tabs" style={{ marginBottom: 'var(--space-8)' }}>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'privacy' ? 'active' : ''}`}
              onClick={() => handleTabChange('privacy')}
            >
              Privacy Policy (DPDP)
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'terms' ? 'active' : ''}`}
              onClick={() => handleTabChange('terms')}
            >
              Terms & Conditions
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'refund' ? 'active' : ''}`}
              onClick={() => handleTabChange('refund')}
            >
              Fee & Refund Policy
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'minorConsent' ? 'active' : ''}`}
              onClick={() => handleTabChange('minorConsent')}
            >
              Minor Protection & Consent
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'disclaimer' ? 'active' : ''}`}
              onClick={() => handleTabChange('disclaimer')}
            >
              Disclaimer & Standards
            </button>
          </div>

          <div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-4)', color: 'var(--color-primary-navy)' }}>
              {currentPolicy.title}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: currentPolicy.contentHtml }}
              className="legal-content-container"
              style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

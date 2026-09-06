import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
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
      <div className="container" style={{ maxWidth: '1020px' }}>
        <div className="policies-header-masthead">
          <img src="/logo.png" alt="AT Sensei Official Seal" className="policies-seal-logo" />
          <div>
            <span className="section-tag">Institutional Governance & Compliance</span>
            <h1>Academic & Legal Policies</h1>
            <p>
              Digital Personal Data Protection (DPDP) Act alignment, student privacy, zero hidden fee disclosure, and minor protection charter.
            </p>
          </div>
        </div>

        <div className="policies-container-card glass-card">
          {/* Policy Selection Buttons */}
          <div className="policy-tabs" role="tablist" aria-label="Legal Policy Navigation">
            <button
              type="button"
              role="tab"
              aria-selected={currentTab === 'privacy'}
              className={`policy-tab-btn ${currentTab === 'privacy' ? 'active' : ''}`}
              onClick={() => handleTabChange('privacy')}
            >
              🔒 Privacy Policy (DPDP)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={currentTab === 'terms'}
              className={`policy-tab-btn ${currentTab === 'terms' ? 'active' : ''}`}
              onClick={() => handleTabChange('terms')}
            >
              📜 Terms & Conditions
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={currentTab === 'refund'}
              className={`policy-tab-btn ${currentTab === 'refund' ? 'active' : ''}`}
              onClick={() => handleTabChange('refund')}
            >
              💳 Fee & Refund Policy
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={currentTab === 'minorConsent'}
              className={`policy-tab-btn ${currentTab === 'minorConsent' ? 'active' : ''}`}
              onClick={() => handleTabChange('minorConsent')}
            >
              🛡️ Minor Protection & Consent
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={currentTab === 'disclaimer'}
              className={`policy-tab-btn ${currentTab === 'disclaimer' ? 'active' : ''}`}
              onClick={() => handleTabChange('disclaimer')}
            >
              ⚖️ Disclaimer & Standards
            </button>
          </div>

          <div className="policy-document-body">
            <div className="policy-title-bar">
              <h2>{currentPolicy.title}</h2>
              <span className="policy-verified-badge">✓ Institutional Verification</span>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: currentPolicy.contentHtml }}
              className="legal-content-container"
            />
          </div>

          <div className="policy-footer-bar">
            <span>Questions regarding compliance or DPDP data requests?</span>
            <Link to="/contact" className="btn btn-outline btn-sm">
              Contact Compliance Desk →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

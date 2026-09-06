import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import { PolicyService } from '../../api/policyService';

export function PolicyModal() {
  const { activeModal, modalData: initialPolicyKey, closeModal } = useModal();
  const [currentTab, setCurrentTab] = useState('privacy');
  const [policies, setPolicies] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeModal === 'policy') {
      setCurrentTab(initialPolicyKey || 'privacy');
      async function loadAllPolicies() {
        try {
          setLoading(true);
          const data = await PolicyService.getAllPolicies();
          const map = {};
          if (Array.isArray(data)) {
            data.forEach(p => { map[p.policyKey] = p; });
          }
          setPolicies(map);
        } catch (e) {
          console.error("Failed to load policies from API:", e);
        } finally {
          setLoading(false);
        }
      }
      loadAllPolicies();
    }
  }, [activeModal, initialPolicyKey]);

  if (activeModal !== 'policy') return null;

  const currentPolicy = policies[currentTab] || {
    title: 'Policy Details',
    contentHtml: '<p>Loading policy details from secure server...</p>'
  };

  return (
    <div className="modal-backdrop is-active" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{currentPolicy.title}</h3>
          <button type="button" className="modal-close-btn" onClick={closeModal}>✕</button>
        </div>

        <div className="modal-body">
          <div className="policy-tabs">
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setCurrentTab('privacy')}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'terms' ? 'active' : ''}`}
              onClick={() => setCurrentTab('terms')}
            >
              Terms of Service
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'refund' ? 'active' : ''}`}
              onClick={() => setCurrentTab('refund')}
            >
              Refund Policy
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'minorConsent' ? 'active' : ''}`}
              onClick={() => setCurrentTab('minorConsent')}
            >
              Minor & Parent Consent
            </button>
            <button
              type="button"
              className={`policy-tab-btn ${currentTab === 'disclaimer' ? 'active' : ''}`}
              onClick={() => setCurrentTab('disclaimer')}
            >
              Disclaimer
            </button>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: currentPolicy.contentHtml }}
            style={{ fontSize: '0.9rem', lineHeight: 1.7 }}
          />
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={closeModal}>
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

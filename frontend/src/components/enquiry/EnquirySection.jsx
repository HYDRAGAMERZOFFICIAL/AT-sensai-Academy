import React, { useState, useEffect } from 'react';
import { EnquiryService } from '../../api/enquiryService';
import { useToast } from '../../context/ToastContext';
import { useModal } from '../../context/ModalContext';

export function EnquirySection({ preselectedCourse }) {
  const { showToast } = useToast();
  const { openPolicyModal } = useModal();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [batchPreference, setBatchPreference] = useState('Morning');
  
  // Minor Consent State
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentConsent, setParentConsent] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setCourseCode(preselectedCourse);
    }
  }, [preselectedCourse]);

  const isFoundation = courseCode === 'foundation';

  const getFeePreview = () => {
    switch (courseCode) {
      case 'banking': return '₹16,999 (Includes GST | 3 Years Validity)';
      case 'ssc': return '₹18,999 (Includes GST | 3 Years Validity)';
      case 'ssc-banking-combo': return '₹27,999 (Includes GST | 3 Years Validity)';
      case 'foundation': return '₹18,000 to ₹30,000 (Based on Class 8th/9th/10th & Board)';
      default: return 'Select a program to view catalog fee';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || name.trim().length < 2) {
      showToast("Please enter your full name.", "error");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.trim())) {
      showToast("Please enter a valid 10-digit Indian mobile number.", "error");
      return;
    }

    if (!courseCode) {
      showToast("Please select your target programme.", "error");
      return;
    }

    if (isFoundation) {
      if (!parentName.trim() || parentName.trim().length < 2) {
        showToast("Parent/Guardian full name is mandatory for Foundation students.", "error");
        return;
      }
      if (!phoneRegex.test(parentPhone.trim())) {
        showToast("Please enter a valid 10-digit Parent/Guardian phone number.", "error");
        return;
      }
      if (!parentConsent) {
        showToast("Parent/Guardian consent checkbox is required for minor students.", "error");
        return;
      }
    }

    if (!privacyConsent) {
      showToast("Please accept the Privacy Policy.", "error");
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim() || null,
        courseCode,
        batchPreference,
        parentName: isFoundation ? parentName.trim() : null,
        parentPhone: isFoundation ? parentPhone.trim() : null,
        parentConsentGiven: isFoundation ? parentConsent : null
      };

      const res = await EnquiryService.submitEnquiry(payload);
      showToast(res.message || "Enquiry submitted successfully! A mentor will contact you.", "success", 7000);

      // Reset form
      setName('');
      setPhone('');
      setEmail('');
      setCourseCode('');
      setParentName('');
      setParentPhone('');
      setParentConsent(false);
    } catch (err) {
      showToast(err.message || "Failed to submit enquiry. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section section-alt" id="admission-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Begin Your Journey</span>
          <h2>Enquire & Admission Request</h2>
          <p>Submit your details below for personalized batch consultation and admission guidance from our mentors.</p>
        </div>

        <div className="form-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name <span style={{ color: 'var(--color-sensei-red)' }}>*</span></label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number <span style={{ color: 'var(--color-sensei-red)' }}>*</span></label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="10-digit mobile number"
                  maxLength="10"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="e.g. rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Target Programme <span style={{ color: 'var(--color-sensei-red)' }}>*</span></label>
                <select
                  className="form-select"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                  required
                >
                  <option value="" disabled>-- Select a Programme --</option>
                  <option value="banking">Banking Programme (₹16,999 | 3 Yrs)</option>
                  <option value="ssc">SSC Programme (₹18,999 | 3 Yrs)</option>
                  <option value="ssc-banking-combo">SSC + Banking Combo (₹27,999 | 3 Yrs)</option>
                  <option value="foundation">School Foundation (8th/9th/10th)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Batch Preference</label>
                <select
                  className="form-select"
                  value={batchPreference}
                  onChange={(e) => setBatchPreference(e.target.value)}
                >
                  <option value="Morning">Morning Batch (10:00 AM - 12:00 PM)</option>
                  <option value="Afternoon">Afternoon Batch (1:00 PM - 3:00 PM)</option>
                  <option value="Evening">Evening Foundation (6:30 PM - 8:00 PM)</option>
                  <option value="Weekend">Weekend Batch</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Catalog Fee Preview</label>
                <div style={{ padding: '0.75rem 1rem', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-navy)' }}>
                  {getFeePreview()}
                </div>
              </div>

              {isFoundation && (
                <div className="form-group full-width">
                  <div className="consent-box">
                    <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 700, color: 'var(--color-sensei-red)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
                      🛡️ Minor Safety & Parent / Guardian Verification
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)' }}>
                      Since the School Foundation Course caters to students in Classes 8th to 10th (minors), Parent/Guardian involvement is required by institutional policy.
                    </p>
                    <div className="form-grid" style={{ marginBottom: 'var(--space-3)' }}>
                      <div className="form-group">
                        <label className="form-label">Parent / Guardian Name *</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Parent / Guardian Full Name"
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Parent Mobile Number *</label>
                        <input
                          type="tel"
                          className="form-input"
                          placeholder="10-digit Parent Mobile"
                          maxLength="10"
                          value={parentPhone}
                          onChange={(e) => setParentPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={parentConsent}
                        onChange={(e) => setParentConsent(e.target.checked)}
                        style={{ marginTop: '3px', accentColor: 'var(--color-sensei-red)' }}
                      />
                      <span>I confirm that I am the Parent/Guardian of the student and authorize AT Sensei Academy to share academic updates.</span>
                    </label>
                  </div>
                </div>
              )}

              <div className="form-group full-width" style={{ marginTop: 'var(--space-2)' }}>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    required
                  />
                  <span>
                    I agree to the <button type="button" onClick={() => openPolicyModal('privacy')} style={{ background: 'none', border: 'none', color: 'var(--color-brand-blue)', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}>Privacy Policy</button> and understand that my information is stored securely in accordance with Indian DPDP privacy principles.
                  </span>
                </label>
              </div>

              <div className="form-group full-width" style={{ marginTop: 'var(--space-4)' }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting to Server...' : 'Submit Admission Enquiry'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

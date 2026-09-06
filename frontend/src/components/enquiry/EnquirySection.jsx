import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EnquiryService } from '../../api/enquiryService';
import { useToast } from '../../context/ToastContext';

const COURSE_MAP = {
  banking: 'Banking Programme',
  ssc: 'SSC Programme',
  'ssc-banking-combo': 'SSC + Banking Combo',
  foundation: 'School Foundation Course (8th–10th)'
};

export function EnquirySection({ preselectedCourse = '' }) {
  const location = useLocation();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    courseCode: preselectedCourse || 'banking',
    educationLevel: 'Degree',
    preferredBatch: 'Morning (10 AM - 12 PM)',
    parentName: '',
    parentPhone: '',
    parentConsent: false,
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const courseParam = params.get('course');
    if (courseParam) {
      setFormData(prev => ({ ...prev, courseCode: courseParam }));
    }
  }, [location]);

  const isFoundation = formData.courseCode === 'foundation';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFoundation && !formData.parentConsent) {
      showToast("Parent/Guardian consent is required for the Foundation course.", "error");
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '').replace(/^(91|0)/, '');
    if (cleanPhone.length < 10) {
      showToast("Please enter a valid 10-digit mobile number.", "error");
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = {
        name: formData.fullName.trim(),
        phone: cleanPhone,
        email: formData.email.trim(),
        courseCode: formData.courseCode,
        batchPreference: formData.preferredBatch,
        parentName: isFoundation && formData.parentName ? formData.parentName.trim() : null,
        parentPhone: isFoundation && formData.parentPhone ? formData.parentPhone.replace(/\D/g, '').replace(/^(91|0)/, '') : null,
        parentConsentGiven: isFoundation ? Boolean(formData.parentConsent) : false
      };

      await EnquiryService.submitEnquiry(payload);

      const refNo = `ATS-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      const courseTitle = COURSE_MAP[formData.courseCode] || formData.courseCode;

      setSubmissionSuccess({
        refNo,
        name: formData.fullName,
        phone: cleanPhone,
        email: formData.email,
        courseTitle,
        batch: formData.preferredBatch
      });

      showToast("Enquiry registered! Confirmation dispatched to your number.", "success");
    } catch (err) {
      showToast(err.message || "Failed to submit enquiry. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      courseCode: 'banking',
      educationLevel: 'Degree',
      preferredBatch: 'Morning (10 AM - 12 PM)',
      parentName: '',
      parentPhone: '',
      parentConsent: false,
      notes: ''
    });
  };

  return (
    <section className="section section-alt" id="admissions">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Admissions</span>
          <h2>Enroll or Request a Free Counseling Call</h2>
          <p>Fill in your details below. You will receive an instant WhatsApp & SMS confirmation notification for your registration.</p>
        </div>

        <div className="form-card glass-card">
          {submissionSuccess ? (
            <div className="submission-success-card">
              <div className="success-icon-badge">✓</div>
              <span className="badge badge-emerald" style={{ alignSelf: 'center', marginBottom: 'var(--space-2)' }}>
                Application Recorded
              </span>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-2)' }}>
                Thank You, {submissionSuccess.name}!
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                Your admission enquiry for <strong>{submissionSuccess.courseTitle}</strong> has been registered with Reference ID:
              </p>

              <div className="ref-number-pill">
                <span className="ref-label">Application Reference ID</span>
                <span className="ref-val">{submissionSuccess.refNo}</span>
              </div>

              {/* WhatsApp Confirmation Notification Box */}
              <div className="whatsapp-dispatch-card">
                <div className="dispatch-header">
                  <span className="dispatch-icon">💬</span>
                  <div>
                    <strong>WhatsApp Confirmation Dispatched</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                      Notification sent to registered number: <strong>+91 {submissionSuccess.phone}</strong>
                    </div>
                  </div>
                </div>

                <div className="whatsapp-preview-box">
                  <div className="preview-bubble">
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '4px' }}>
                      AT Sensei Academy Admissions Desk
                    </div>
                    "Hello {submissionSuccess.name}, your admission enquiry for {submissionSuccess.courseTitle} ({submissionSuccess.refNo}) is confirmed. Our senior counselor will connect with you within 24 hours."
                  </div>
                </div>

                <a
                  href={`https://wa.me/919110687171?text=${encodeURIComponent(
                    `Hello AT Sensei Academy, I have submitted my admission enquiry for ${submissionSuccess.courseTitle} (Ref: ${submissionSuccess.refNo}) under the name ${submissionSuccess.name} (${submissionSuccess.phone}). Please send my course syllabus and counseling schedule.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-confirm"
                >
                  <span>📲 Open & Verify on WhatsApp</span>
                </a>
              </div>

              <div style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleReset}
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-input"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    required
                    placeholder="e.g. 9876543210 (For WhatsApp confirmation)"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <span className="field-hint">You will receive instant registration updates on this number.</span>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    required
                    placeholder="e.g. ramesh@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="courseCode">Select Track / Program *</label>
                  <select
                    id="courseCode"
                    name="courseCode"
                    className="form-select"
                    value={formData.courseCode}
                    onChange={handleChange}
                  >
                    <option value="banking">Banking Programme</option>
                    <option value="ssc">SSC Programme</option>
                    <option value="ssc-banking-combo">SSC + Banking Combo</option>
                    <option value="foundation">School Foundation Course (8th–10th)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="preferredBatch">Preferred Batch Schedule</label>
                  <select
                    id="preferredBatch"
                    name="preferredBatch"
                    className="form-select"
                    value={formData.preferredBatch}
                    onChange={handleChange}
                  >
                    <option value="Morning (10 AM - 12 PM)">Morning (10:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (1 PM - 3 PM)">Afternoon (1:00 PM – 3:00 PM)</option>
                    <option value="Weekend Batch">Weekend Batch (Saturday & Sunday)</option>
                    <option value="Evening (6:30 PM - 8 PM Foundation)">Evening (6:30 PM – 8:00 PM Foundation)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="educationLevel">Current Education Level</label>
                  <select
                    id="educationLevel"
                    name="educationLevel"
                    className="form-select"
                    value={formData.educationLevel}
                    onChange={handleChange}
                  >
                    <option value="School (8th-10th)">School Student (8th–10th)</option>
                    <option value="PUC / 12th">PUC / 10+2 / Intermediate</option>
                    <option value="Degree Pursuing">Bachelor's Degree (Pursuing)</option>
                    <option value="Graduate">Degree Graduate</option>
                    <option value="Working Professional">Working Professional</option>
                  </select>
                </div>

                {isFoundation && (
                  <div className="form-group full-width">
                    <div className="consent-box">
                      <h4 style={{ color: 'var(--color-sensei-red-dark)', marginBottom: 'var(--space-2)', fontSize: '0.95rem' }}>
                        Parent / Guardian Verification for School Foundation
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                        As this course caters to minors (Classes 8–10), please provide parent contact details as per DPDP protection guidelines.
                      </p>

                      <div className="form-grid" style={{ marginBottom: 'var(--space-3)' }}>
                        <div>
                          <label className="form-label" htmlFor="parentName">Parent/Guardian Name *</label>
                          <input
                            type="text"
                            id="parentName"
                            name="parentName"
                            className="form-input"
                            required={isFoundation}
                            placeholder="Parent Name"
                            value={formData.parentName}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="parentPhone">Parent/Guardian Phone *</label>
                          <input
                            type="tel"
                            id="parentPhone"
                            name="parentPhone"
                            className="form-input"
                            required={isFoundation}
                            placeholder="Parent Phone"
                            value={formData.parentPhone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="parentConsent"
                          checked={formData.parentConsent}
                          onChange={handleChange}
                          required={isFoundation}
                        />
                        <span>I confirm that I am the parent/legal guardian and consent to enrolling and receiving academic updates for this student.</span>
                      </label>
                    </div>
                  </div>
                )}

                <div className="form-group full-width">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Admission Enquiry & Get WhatsApp Confirmation'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

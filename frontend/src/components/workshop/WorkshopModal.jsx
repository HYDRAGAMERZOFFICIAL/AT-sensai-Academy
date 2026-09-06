import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { useToast } from '../../context/ToastContext';
import { WorkshopService } from '../../api/workshopService';

export function WorkshopModal() {
  const { activeModal, closeModal } = useModal();
  const { showToast } = useToast();

  const [bookingType, setBookingType] = useState('student');
  const [attendeeName, setAttendeeName] = useState('');
  const [phone, setPhone] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [expectedAttendees, setExpectedAttendees] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  if (activeModal !== 'workshop') return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!attendeeName.trim()) {
      showToast("Please enter your name.", "error");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.trim())) {
      showToast("Please enter a valid 10-digit Indian phone number.", "error");
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        bookingType,
        attendeeName: attendeeName.trim(),
        phone: phone.trim(),
        institutionName: bookingType === 'institution' ? institutionName.trim() : null,
        expectedAttendees: bookingType === 'institution' && expectedAttendees ? parseInt(expectedAttendees) : null
      };

      await WorkshopService.bookWorkshop(payload);
      const refNo = `WK-2026-${Math.floor(10000 + Math.random() * 90000)}`;

      setBookingSuccess({
        refNo,
        name: attendeeName.trim(),
        phone: phone.trim(),
        bookingType
      });

      showToast("Workshop seat reserved! WhatsApp confirmation generated.", "success");
    } catch (err) {
      showToast(err.message || "Failed to submit booking.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setBookingSuccess(null);
    setAttendeeName('');
    setPhone('');
    setInstitutionName('');
    setExpectedAttendees('');
    closeModal();
  };

  return (
    <div className="modal-backdrop is-active" onClick={handleClose}>
      <div className="modal-container glass-card" style={{ maxWidth: '580px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Book 100% Free Career Workshop</h3>
          <button type="button" className="modal-close-btn" onClick={handleClose}>✕</button>
        </div>

        <div className="modal-body">
          {bookingSuccess ? (
            <div className="submission-success-card" style={{ padding: 'var(--space-2) 0' }}>
              <div className="success-icon-badge">✓</div>
              <span className="badge badge-emerald" style={{ alignSelf: 'center', marginBottom: 'var(--space-2)' }}>
                Free Workshop Seat Confirmed
              </span>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-navy)', marginBottom: 'var(--space-2)' }}>
                You're In, {bookingSuccess.name}!
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                Your 100% Free Career Awareness & Strategy Session is booked under:
              </p>

              <div className="ref-number-pill">
                <span className="ref-label">Workshop Pass Reference ID</span>
                <span className="ref-val">{bookingSuccess.refNo}</span>
              </div>

              {/* WhatsApp Confirmation Notification Box */}
              <div className="whatsapp-dispatch-card">
                <div className="dispatch-header">
                  <span className="dispatch-icon">💬</span>
                  <div>
                    <strong>WhatsApp Confirmation Generated</strong>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                      Notification sent to: <strong>+91 {bookingSuccess.phone}</strong>
                    </div>
                  </div>
                </div>

                <div className="whatsapp-preview-box">
                  <div className="preview-bubble">
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '4px' }}>
                      AT Sensei Academy Career Guidance Desk
                    </div>
                    "Hello {bookingSuccess.name}, your free workshop seat ({bookingSuccess.refNo}) is reserved. We look forward to guiding your competitive exam preparation!"
                  </div>
                </div>

                <a
                  href={`https://wa.me/919110687171?text=${encodeURIComponent(
                    `Hello AT Sensei Academy, I have booked my seat for the Free Career Workshop (Pass Ref: ${bookingSuccess.refNo}) under ${bookingSuccess.name} (${bookingSuccess.phone}). Please send my session schedule and syllabus blueprint.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-confirm"
                >
                  <span>📲 Open & Verify on WhatsApp</span>
                </a>
              </div>

              <div style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleClose}
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                45–90 minute interactive career & competitive exam awareness session with zero cost. You will receive an instant WhatsApp confirmation message.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: 'var(--space-4)' }}>
                  <label className="form-label">Booking For *</label>
                  <select
                    className="form-select"
                    value={bookingType}
                    onChange={(e) => setBookingType(e.target.value)}
                  >
                    <option value="student">Individual Student / Aspirant</option>
                    <option value="institution">School / College / Institution Session</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 'var(--space-4)' }}>
                  <label className="form-label">Attendee / Contact Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your Full Name"
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 'var(--space-4)' }}>
                  <label className="form-label">WhatsApp Mobile Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="10-digit Indian mobile (e.g. 9876543210)"
                    maxLength="10"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <span className="field-hint">You will receive the workshop pass on WhatsApp.</span>
                </div>

                {bookingType === 'institution' && (
                  <div style={{ marginBottom: 'var(--space-4)' }}>
                    <div className="form-group" style={{ marginBottom: 'var(--space-3)' }}>
                      <label className="form-label">Institution / College Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. National Degree College"
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Expected Number of Students</label>
                      <input
                        type="number"
                        className="form-input"
                        placeholder="e.g. 100"
                        value={expectedAttendees}
                        onChange={(e) => setExpectedAttendees(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  style={{ marginTop: 'var(--space-4)' }}
                  disabled={submitting}
                >
                  {submitting ? 'Confirming...' : 'Confirm Free Booking & Get WhatsApp Pass'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

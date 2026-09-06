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

      const res = await WorkshopService.bookWorkshop(payload);
      showToast(res.message || "Workshop registration confirmed!", "success", 7000);
      closeModal();
      setAttendeeName('');
      setPhone('');
      setInstitutionName('');
      setExpectedAttendees('');
    } catch (err) {
      showToast(err.message || "Failed to submit booking.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop is-active" onClick={closeModal}>
      <div className="modal-container" style={{ maxWidth: '620px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Book 100% Free Career Workshop</h3>
          <button type="button" className="modal-close-btn" onClick={closeModal}>✕</button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
            45–90 minute interactive career & competitive exam awareness session with zero cost.
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
                placeholder="10-digit Indian mobile"
                maxLength="10"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
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
              className="btn btn-gold btn-lg btn-block"
              style={{ marginTop: 'var(--space-4)' }}
              disabled={submitting}
            >
              {submitting ? 'Confirming...' : 'Confirm Free Workshop Booking'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

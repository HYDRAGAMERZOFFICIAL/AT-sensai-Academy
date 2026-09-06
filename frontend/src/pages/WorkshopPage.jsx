import React, { useState } from 'react';
import { WorkshopService } from '../api/workshopService';
import { useToast } from '../context/ToastContext';

export function WorkshopPage() {
  const { showToast } = useToast();
  const [bookingType, setBookingType] = useState('student');
  const [attendeeName, setAttendeeName] = useState('');
  const [phone, setPhone] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [expectedAttendees, setExpectedAttendees] = useState('');
  const [submitting, setSubmitting] = useState(false);

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
      showToast(res.message || "Workshop registration confirmed!", "success", 8000);
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
    <div className="page-workshop" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-20)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--space-12) auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: 'var(--space-2)' }}>100% Free Live Session</span>
          <h1>Career & Competitive Exam Awareness Workshop</h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary)' }}>
            Discover untapped opportunities in Banking, Central Government SSC recruitments, and early Olympiad/Aptitude grounding.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-10)', alignItems: 'start' }}>
          {/* Workshop Value Highlights */}
          <div style={{ background: 'var(--color-primary-navy)', color: '#fff', padding: 'var(--space-8)', borderRadius: 'var(--radius-xl)' }}>
            <h3 style={{ color: '#fff', marginBottom: 'var(--space-4)' }}>What You Will Gain</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>01</span>
                <div>
                  <strong>Complete Government Career Roadmap</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>Understand eligibility, age criteria, salary scales, and perks across IBPS, SBI, SSC CGL, CHSL, and State recruitments.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>02</span>
                <div>
                  <strong>Demystifying Competitive Exams</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>Break down the myths surrounding cutoffs, preparation timelines, and how to balance degree college with exam study.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                <span style={{ color: 'var(--color-accent-gold)', fontSize: '1.25rem', fontWeight: 800 }}>03</span>
                <div>
                  <strong>Interactive Q&A with Senior Senseis</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-inverse-muted)', margin: 0 }}>Get direct answers to your career questions, syllabus doubts, and preparation bottlenecks.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-8)', padding: 'var(--space-4)', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)' }}>
              <strong>Duration:</strong> 45 to 90 Minutes | <strong>Cost:</strong> 100% Free
            </div>
          </div>

          {/* Booking Form */}
          <div className="form-card">
            <h3 style={{ marginBottom: 'var(--space-2)' }}>Reserve Your Free Seat / Request Session</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
              Select whether you are reserving an individual seat or requesting a workshop for your school/college.
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
                  placeholder="10-digit Indian mobile number"
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
                disabled={submitting}
              >
                {submitting ? 'Confirming...' : 'Confirm Free Workshop Booking'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

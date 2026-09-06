import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminService } from '../api/adminService';
import { useToast } from '../context/ToastContext';

export function AdminPortalPage() {
  const { showSuccess, showError } = useToast();

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('atsensei_admin_auth') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Active Tab: 'enquiries' | 'workshops' | 'announcements' | 'fees' | 'system'
  const [activeTab, setActiveTab] = useState('enquiries');

  // Enquiries state
  const [enquiries, setEnquiries] = useState([]);
  const [enquiriesLoading, setEnquiriesLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [courseFilter, setCourseFilter] = useState('ALL');
  const [selectedEnquiryForNotes, setSelectedEnquiryForNotes] = useState(null);
  const [notesDraft, setNotesDraft] = useState('');

  // Workshop Bookings state
  const [workshops, setWorkshops] = useState([]);
  const [workshopsLoading, setWorkshopsLoading] = useState(false);
  const [workshopSearch, setWorkshopSearch] = useState('');

  // Announcements state
  const [announcements, setAnnouncements] = useState([]);
  const [announcementsLoading, setAnnouncementsLoading] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    icon: '📢',
    category: 'Upcoming Batch',
    text: '',
    actionLink: '/admissions',
    actionText: 'Reserve Seat',
    displayOrder: 1,
    active: true
  });
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  // Programs / Fees state
  const [programs, setPrograms] = useState([]);
  const [programsLoading, setProgramsLoading] = useState(false);
  const [editingProgram, setEditingProgram] = useState(null);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!passwordInput.trim()) {
      setAuthError('Please enter the administrator access password');
      return;
    }
    try {
      setAuthLoading(true);
      setAuthError('');
      const data = await AdminService.verifyPassword(passwordInput.trim());
      if (data && data.authenticated) {
        sessionStorage.setItem('atsensei_admin_auth', 'true');
        sessionStorage.setItem('atsensei_admin_token', data.token);
        setIsAuthenticated(true);
        showSuccess('Authenticated successfully. Welcome Sensei Admin.');
      } else {
        setAuthError('Invalid password. Access Denied.');
      }
    } catch (err) {
      setAuthError(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('atsensei_admin_auth');
    sessionStorage.removeItem('atsensei_admin_token');
    setIsAuthenticated(false);
    setPasswordInput('');
    showSuccess('Logged out of Admin Portal');
  };

  // Load Data on Tab Switch
  useEffect(() => {
    if (!isAuthenticated) return;

    if (activeTab === 'enquiries') {
      loadEnquiries();
    } else if (activeTab === 'workshops') {
      loadWorkshops();
    } else if (activeTab === 'announcements') {
      loadAnnouncements();
    } else if (activeTab === 'fees') {
      loadPrograms();
    }
  }, [isAuthenticated, activeTab]);

  const loadEnquiries = async () => {
    try {
      setEnquiriesLoading(true);
      const data = await AdminService.getEnquiries();
      setEnquiries(data || []);
    } catch (err) {
      showError('Failed to load enquiries: ' + err.message);
    } finally {
      setEnquiriesLoading(false);
    }
  };

  const loadWorkshops = async () => {
    try {
      setWorkshopsLoading(true);
      const data = await AdminService.getWorkshopBookings();
      setWorkshops(data || []);
    } catch (err) {
      showError('Failed to load workshop bookings: ' + err.message);
    } finally {
      setWorkshopsLoading(false);
    }
  };

  const loadAnnouncements = async () => {
    try {
      setAnnouncementsLoading(true);
      const data = await AdminService.getAnnouncements(true);
      setAnnouncements(data || []);
    } catch (err) {
      showError('Failed to load announcements: ' + err.message);
    } finally {
      setAnnouncementsLoading(false);
    }
  };

  const loadPrograms = async () => {
    try {
      setProgramsLoading(true);
      const data = await AdminService.getPrograms();
      setPrograms(data || []);
    } catch (err) {
      showError('Failed to load programs: ' + err.message);
    } finally {
      setProgramsLoading(false);
    }
  };

  // Status Updater
  const handleStatusChange = async (enquiryId, newStatus) => {
    try {
      await AdminService.updateEnquiryStatus(enquiryId, newStatus);
      showSuccess(`Enquiry status updated to ${newStatus}`);
      setEnquiries(prev => prev.map(e => e.id === enquiryId ? { ...e, status: newStatus } : e));
    } catch (err) {
      showError('Failed to update status: ' + err.message);
    }
  };

  // Save Notes
  const handleSaveNotes = async () => {
    if (!selectedEnquiryForNotes) return;
    try {
      await AdminService.updateEnquiryStatus(selectedEnquiryForNotes.id, selectedEnquiryForNotes.status, notesDraft);
      showSuccess('Internal notes saved successfully');
      setEnquiries(prev => prev.map(e => e.id === selectedEnquiryForNotes.id ? { ...e, adminNotes: notesDraft } : e));
      setSelectedEnquiryForNotes(null);
    } catch (err) {
      showError('Failed to save notes: ' + err.message);
    }
  };

  // Delete Enquiry
  const handleDeleteEnquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry record?')) return;
    try {
      await AdminService.deleteEnquiry(id);
      showSuccess('Enquiry deleted successfully');
      setEnquiries(prev => prev.filter(e => e.id !== id));
    } catch (err) {
      showError('Failed to delete enquiry: ' + err.message);
    }
  };

  // WhatsApp 1-Click Message Generator for Enquiries
  const getWhatsAppLink = (enquiry) => {
    const rawPhone = (enquiry.phone || '').replace(/\D/g, '');
    const phone = rawPhone.startsWith('91') ? rawPhone : `91${rawPhone}`;
    const courseTitle = enquiry.courseCode ? enquiry.courseCode.toUpperCase() : 'Coaching Track';
    const text = `Hi ${enquiry.studentName || 'there'}! 👋 Thank you for enquiring about the *${courseTitle}* at *AT Sensei Academy*, Bangalore. We would love to assist you with batch schedules, syllabus blueprint, and upcoming demo sessions. When would be a good time to connect?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  // WhatsApp 1-Click Message Generator for Workshop Bookings
  const getWorkshopWhatsAppLink = (wk) => {
    const rawPhone = (wk.phone || '').replace(/\D/g, '');
    const phone = rawPhone.startsWith('91') ? rawPhone : `91${rawPhone}`;
    const text = `Hi ${wk.attendeeName || 'there'}! 👋 Thank you for registering for the *100% Free Career Awareness & Strategy Workshop* at *AT Sensei Academy*, Bangalore. We have confirmed your pass! Would you like us to share the session timetable and preparation guide on WhatsApp?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  // Announcement Actions
  const handleCreateAnnouncement = async (e) => {
    e.preventDefault();
    if (!newAnnouncement.text.trim()) {
      showError('Announcement text is required');
      return;
    }
    try {
      await AdminService.createAnnouncement(newAnnouncement);
      showSuccess('New announcement published to live marquee ticker!');
      setNewAnnouncement({
        icon: '📢',
        category: 'Upcoming Batch',
        text: '',
        actionLink: '/admissions',
        actionText: 'Reserve Seat',
        displayOrder: announcements.length + 1,
        active: true
      });
      loadAnnouncements();
    } catch (err) {
      showError('Failed to create announcement: ' + err.message);
    }
  };

  const handleToggleAnnouncement = async (id) => {
    try {
      await AdminService.toggleAnnouncement(id);
      showSuccess('Announcement status toggled');
      setAnnouncements(prev => prev.map(a => a.id === id ? { ...a, active: !a.active } : a));
    } catch (err) {
      showError('Failed to toggle announcement: ' + err.message);
    }
  };

  const handleUpdateAnnouncement = async (e) => {
    e.preventDefault();
    if (!editingAnnouncement) return;
    try {
      await AdminService.updateAnnouncement(editingAnnouncement.id, editingAnnouncement);
      showSuccess('Announcement updated successfully!');
      setEditingAnnouncement(null);
      loadAnnouncements();
    } catch (err) {
      showError('Failed to update announcement: ' + err.message);
    }
  };

  const handleDeleteAnnouncement = async (id) => {
    if (!window.confirm('Are you sure you want to delete this announcement?')) return;
    try {
      await AdminService.deleteAnnouncement(id);
      showSuccess('Announcement deleted');
      setAnnouncements(prev => prev.filter(a => a.id !== id));
    } catch (err) {
      showError('Failed to delete announcement: ' + err.message);
    }
  };

  // Program Fee Updater
  const handleSaveProgramFee = async (e) => {
    e.preventDefault();
    if (!editingProgram) return;
    try {
      await AdminService.updateProgramFee(editingProgram.code, {
        feeDisplay: editingProgram.feeDisplay,
        feeSubtext: editingProgram.feeSubtext,
        validity: editingProgram.validity,
        timings: editingProgram.timings
      });
      showSuccess(`Fee structure updated for ${editingProgram.title}!`);
      setEditingProgram(null);
      loadPrograms();
    } catch (err) {
      showError('Failed to update fee: ' + err.message);
    }
  };

  // Filtered enquiries
  const filteredEnquiries = enquiries.filter(enq => {
    const matchesSearch = 
      (enq.studentName && enq.studentName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (enq.phone && enq.phone.includes(searchQuery)) ||
      (enq.email && enq.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (enq.locality && enq.locality.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'ALL' || enq.status === statusFilter;
    const matchesCourse = courseFilter === 'ALL' || (enq.courseCode && enq.courseCode.toLowerCase() === courseFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesCourse;
  });

  // Filtered workshops
  const filteredWorkshops = workshops.filter(wk => {
    const q = workshopSearch.toLowerCase();
    return (
      (wk.attendeeName && wk.attendeeName.toLowerCase().includes(q)) ||
      (wk.phone && wk.phone.includes(q)) ||
      (wk.institutionName && wk.institutionName.toLowerCase().includes(q)) ||
      (wk.bookingType && wk.bookingType.toLowerCase().includes(q))
    );
  });

  // Export Enquiries CSV
  const exportToCSV = () => {
    if (filteredEnquiries.length === 0) {
      showError('No enquiries to export');
      return;
    }
    const headers = ['ID', 'Date', 'Student Name', 'Phone', 'Email', 'Course', 'Batch', 'Locality', 'Status', 'Parent Name', 'Parent Phone', 'Notes'];
    const rows = filteredEnquiries.map(e => [
      e.id,
      e.createdAt ? new Date(e.createdAt).toLocaleString() : '',
      `"${e.studentName || ''}"`,
      `"${e.phone || ''}"`,
      `"${e.email || ''}"`,
      `"${e.courseCode || ''}"`,
      `"${e.batchPreference || ''}"`,
      `"${e.locality || ''}"`,
      `"${e.status || 'NEW'}"`,
      `"${e.guardianConsent?.parentName || ''}"`,
      `"${e.guardianConsent?.parentPhone || ''}"`,
      `"${(e.adminNotes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `AT_Sensei_Enquiries_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showSuccess('Exported enquiries to CSV successfully');
  };

  // Export Workshops CSV
  const exportWorkshopsCSV = () => {
    if (filteredWorkshops.length === 0) {
      showError('No workshop bookings to export');
      return;
    }
    const headers = ['ID', 'Date', 'Attendee Name', 'Phone', 'Booking Type', 'Institution Name', 'Expected Count'];
    const rows = filteredWorkshops.map(w => [
      w.id,
      w.createdAt ? new Date(w.createdAt).toLocaleString() : '',
      `"${w.attendeeName || ''}"`,
      `"${w.phone || ''}"`,
      `"${w.bookingType || 'student'}"`,
      `"${w.institutionName || ''}"`,
      `"${w.expectedAttendees || 1}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `AT_Sensei_Workshops_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showSuccess('Exported workshop bookings to CSV successfully');
  };

  // 1. Password Protected Login Gate Screen
  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <div className="container" style={{ maxWidth: '480px', padding: 'var(--space-12) var(--space-4)' }}>
          <div className="admin-login-card glass-card">
            <div className="admin-login-header">
              <img
                src="/logo.png"
                alt="AT Sensei Logo"
                className="admin-login-logo"
              />
              <h2>Academy Staff Portal</h2>
              <p>Enter your administrator security passkey to manage admissions, enquiries, workshops, fees, and live announcements.</p>
            </div>

            {authError && (
              <div className="admin-alert-error" role="alert">
                ⚠️ {authError}
              </div>
            )}

            <form onSubmit={handleLogin} className="admin-login-form">
              <div className="form-group">
                <label htmlFor="adminPassword">Administrator Passkey</label>
                <input
                  type="password"
                  id="adminPassword"
                  placeholder="Enter admin password..."
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="admin-input-field"
                  autoFocus
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block btn-admin-login"
                disabled={authLoading}
              >
                {authLoading ? 'Verifying Credentials...' : 'Unlock Staff Portal →'}
              </button>
            </form>

            <div className="admin-login-footer">
              <Link to="/" className="back-to-site-link">
                ← Return to Public Website
              </Link>
              <span className="admin-security-note">🔒 DPDP & Role-Based Access Protected</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Main Authenticated Admin Portal
  return (
    <div className="admin-portal-wrapper">
      {/* Top Admin Navigation Bar */}
      <header className="admin-topbar">
        <div className="container admin-topbar-inner">
          <div className="admin-topbar-brand">
            <img src="/logo.png" alt="AT Sensei Emblem" className="admin-brand-logo" />
            <div>
              <div className="admin-brand-title">AT Sensei Academy — Staff Operations</div>
              <div className="admin-brand-subtitle">Bangalore Campus Management Console</div>
            </div>
          </div>

          <div className="admin-topbar-actions">
            <Link to="/" className="btn-admin-secondary" target="_blank" title="View Public Website">
              🌐 View Live Site
            </Link>
            <button
              type="button"
              className="btn-admin-danger"
              onClick={handleLogout}
              title="Sign Out"
            >
              🚪 Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Dashboard Container */}
      <main className="container admin-dashboard-body">
        {/* Navigation Tabs */}
        <div className="admin-tabs-nav">
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'enquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('enquiries')}
          >
            📋 Student Enquiries ({enquiries.length})
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'workshops' ? 'active' : ''}`}
            onClick={() => setActiveTab('workshops')}
          >
            🎓 Workshop Registrations ({workshops.length})
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'announcements' ? 'active' : ''}`}
            onClick={() => setActiveTab('announcements')}
          >
            📢 Marquee Announcements ({announcements.length})
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'fees' ? 'active' : ''}`}
            onClick={() => setActiveTab('fees')}
          >
            💰 Course Fees & Schedules
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'system' ? 'active' : ''}`}
            onClick={() => setActiveTab('system')}
          >
            ⚙️ System & Database
          </button>
        </div>

        {/* TAB 1: ENQUIRIES & REGISTRATIONS */}
        {activeTab === 'enquiries' && (
          <section className="admin-tab-pane">
            {/* Quick Metrics Bar */}
            <div className="admin-metrics-row">
              <div className="admin-metric-card glass-card">
                <div className="metric-num">{enquiries.length}</div>
                <div className="metric-label">Total Enquiries</div>
              </div>
              <div className="admin-metric-card glass-card">
                <div className="metric-num text-red">{enquiries.filter(e => e.status === 'NEW' || !e.status || e.status === 'PENDING').length}</div>
                <div className="metric-label">Action Required (New)</div>
              </div>
              <div className="admin-metric-card glass-card">
                <div className="metric-num text-gold">{enquiries.filter(e => e.status === 'CONTACTED' || e.status === 'COUNSELED').length}</div>
                <div className="metric-label">In Counseling</div>
              </div>
              <div className="admin-metric-card glass-card">
                <div className="metric-num text-green">{enquiries.filter(e => e.status === 'ENROLLED').length}</div>
                <div className="metric-label">Confirmed Admissions</div>
              </div>
            </div>

            {/* Filter & Action Toolbar */}
            <div className="admin-toolbar glass-card">
              <div className="toolbar-search">
                <input
                  type="text"
                  placeholder="🔍 Search student name, phone, locality, email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="admin-search-input"
                />
              </div>

              <div className="toolbar-filters">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="admin-select"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="NEW">New (Uncontacted)</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="COUNSELED">Counseled / Demo Scheduled</option>
                  <option value="ENROLLED">Enrolled (Admitted)</option>
                  <option value="CLOSED">Closed / Archived</option>
                </select>

                <select
                  value={courseFilter}
                  onChange={(e) => setCourseFilter(e.target.value)}
                  className="admin-select"
                >
                  <option value="ALL">All Programs</option>
                  <option value="banking">Banking Programme</option>
                  <option value="ssc">SSC Programme</option>
                  <option value="ssc-banking-combo">SSC + Banking Combo</option>
                  <option value="foundation">School Foundation</option>
                </select>

                <button
                  type="button"
                  className="btn btn-outline btn-admin-export"
                  onClick={exportToCSV}
                  title="Download CSV report"
                >
                  📥 Export CSV
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-admin-refresh"
                  onClick={loadEnquiries}
                  disabled={enquiriesLoading}
                >
                  🔄 Refresh
                </button>
              </div>
            </div>

            {/* Enquiries Table */}
            {enquiriesLoading ? (
              <div className="admin-loading-state glass-card">
                <span className="spinner"></span> Loading admissions records...
              </div>
            ) : filteredEnquiries.length === 0 ? (
              <div className="admin-empty-state glass-card">
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>📭</div>
                <h3>No enquiries matching your current filters</h3>
                <p>Try clearing your search query or selecting "All Statuses".</p>
              </div>
            ) : (
              <div className="admin-table-container glass-card">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Ref / Date</th>
                      <th>Student Info</th>
                      <th>Course & Batch</th>
                      <th>Direct Contact Actions</th>
                      <th>Minor Protection</th>
                      <th>Admissions Status</th>
                      <th>Notes & Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEnquiries.map(enq => (
                      <tr key={enq.id} className={`status-row-${enq.status ? enq.status.toLowerCase() : 'new'}`}>
                        <td>
                          <div className="enq-ref-badge">#ENQ-{enq.id}</div>
                          <div className="enq-date">
                            {enq.createdAt ? new Date(enq.createdAt).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            }) : 'Recent'}
                          </div>
                        </td>
                        <td>
                          <div className="student-primary-name">{enq.studentName}</div>
                          <div className="student-contact-sub">{enq.phone}</div>
                          {enq.email && <div className="student-email-sub">{enq.email}</div>}
                          {enq.locality && (
                            <span className="student-locality-tag">📍 {enq.locality}</span>
                          )}
                        </td>
                        <td>
                          <span className={`program-tag-pill program-${enq.courseCode || 'gen'}`}>
                            {(enq.courseCode || 'General').toUpperCase()}
                          </span>
                          <div className="batch-pref-text">🕒 {enq.batchPreference || 'Morning'}</div>
                        </td>
                        <td>
                          <div className="contact-actions-cell">
                            <a
                              href={getWhatsAppLink(enq)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-action-whatsapp"
                              title="Send 1-Click WhatsApp greeting"
                            >
                              💬 WhatsApp
                            </a>
                            <a
                              href={`tel:+91${(enq.phone || '').replace(/\D/g, '')}`}
                              className="btn-action-call"
                              title="Direct Phone Call"
                            >
                              📞 Call
                            </a>
                          </div>
                        </td>
                        <td>
                          {enq.guardianConsent ? (
                            <div className="guardian-info-box">
                              <span className="guardian-badge">🛡️ Parent Consent</span>
                              <div className="guardian-name">{enq.guardianConsent.parentName}</div>
                              <div className="guardian-phone">
                                <a href={`tel:+91${(enq.guardianConsent.parentPhone || '').replace(/\D/g, '')}`}>
                                  📞 {enq.guardianConsent.parentPhone}
                                </a>
                              </div>
                            </div>
                          ) : (
                            <span className="adult-tag">Direct Applicant</span>
                          )}
                        </td>
                        <td>
                          <select
                            value={enq.status || 'NEW'}
                            onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                            className={`status-dropdown status-pill-${(enq.status || 'NEW').toLowerCase()}`}
                          >
                            <option value="NEW">🔴 NEW (Pending)</option>
                            <option value="CONTACTED">🟡 Contacted</option>
                            <option value="COUNSELED">🔵 Counseled / Demo</option>
                            <option value="ENROLLED">🟢 Enrolled (Paid)</option>
                            <option value="CLOSED">⚪ Closed / Archive</option>
                          </select>
                        </td>
                        <td>
                          <div className="notes-actions-cell">
                            <button
                              type="button"
                              className={`btn-note-pill ${enq.adminNotes ? 'has-notes' : ''}`}
                              onClick={() => {
                                setSelectedEnquiryForNotes(enq);
                                setNotesDraft(enq.adminNotes || '');
                              }}
                              title="View or add internal counselor notes"
                            >
                              📝 {enq.adminNotes ? 'View Notes' : '+ Add Note'}
                            </button>
                            <button
                              type="button"
                              className="btn-delete-row"
                              onClick={() => handleDeleteEnquiry(enq.id)}
                              title="Delete enquiry record"
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* TAB 2: WORKSHOP REGISTRATIONS */}
        {activeTab === 'workshops' && (
          <section className="admin-tab-pane">
            <div className="admin-toolbar glass-card">
              <div className="toolbar-search">
                <input
                  type="text"
                  placeholder="🔍 Search attendee name, phone, college/institution..."
                  value={workshopSearch}
                  onChange={(e) => setWorkshopSearch(e.target.value)}
                  className="admin-search-input"
                />
              </div>

              <div className="toolbar-filters">
                <button
                  type="button"
                  className="btn btn-outline btn-admin-export"
                  onClick={exportWorkshopsCSV}
                  title="Download Workshop CSV report"
                >
                  📥 Export CSV
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-admin-refresh"
                  onClick={loadWorkshops}
                  disabled={workshopsLoading}
                >
                  🔄 Refresh
                </button>
              </div>
            </div>

            {workshopsLoading ? (
              <div className="admin-loading-state glass-card">Loading workshop bookings...</div>
            ) : filteredWorkshops.length === 0 ? (
              <div className="admin-empty-state glass-card">
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-2)' }}>🎓</div>
                <h3>No workshop bookings found</h3>
                <p>When students or colleges reserve seats for the 100% Free Workshop, they will show here immediately.</p>
              </div>
            ) : (
              <div className="admin-table-container glass-card">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Ref / Date</th>
                      <th>Attendee / Contact</th>
                      <th>Type & Category</th>
                      <th>Institution / Group Size</th>
                      <th>Contact Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWorkshops.map(wk => (
                      <tr key={wk.id}>
                        <td>
                          <div className="enq-ref-badge">#WK-{wk.id}</div>
                          <div className="enq-date">
                            {wk.createdAt ? new Date(wk.createdAt).toLocaleDateString('en-IN', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            }) : 'Recent'}
                          </div>
                        </td>
                        <td>
                          <div className="student-primary-name">{wk.attendeeName}</div>
                          <div className="student-contact-sub">{wk.phone}</div>
                        </td>
                        <td>
                          <span className={`program-tag-pill ${wk.bookingType === 'institution' ? 'program-banking' : 'program-foundation'}`}>
                            {wk.bookingType === 'institution' ? '🏢 INSTITUTION' : '👤 INDIVIDUAL'}
                          </span>
                        </td>
                        <td>
                          {wk.institutionName ? (
                            <div>
                              <strong>{wk.institutionName}</strong>
                              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                                Expected Students: {wk.expectedAttendees || 'N/A'}
                              </div>
                            </div>
                          ) : (
                            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Individual Candidate</span>
                          )}
                        </td>
                        <td>
                          <div className="contact-actions-cell">
                            <a
                              href={getWorkshopWhatsAppLink(wk)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-action-whatsapp"
                              title="Send 1-Click Workshop WhatsApp Pass"
                            >
                              💬 WhatsApp
                            </a>
                            <a
                              href={`tel:+91${(wk.phone || '').replace(/\D/g, '')}`}
                              className="btn-action-call"
                              title="Direct Phone Call"
                            >
                              📞 Call
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* TAB 3: ANNOUNCEMENTS & MARQUEE MANAGER */}
        {activeTab === 'announcements' && (
          <section className="admin-tab-pane">
            <div className="admin-announcement-grid">
              {/* Form: Add Announcement */}
              <div className="announcement-form-card glass-card">
                <h3>📢 Publish New Live Announcement</h3>
                <p>This text appears immediately on the top scrolling marquee across all pages.</p>

                <form onSubmit={handleCreateAnnouncement} style={{ marginTop: 'var(--space-4)' }}>
                  <div className="form-group">
                    <label>Category Label</label>
                    <input
                      type="text"
                      placeholder="e.g. Upcoming Batch / Free Workshop / Foundation 2026"
                      value={newAnnouncement.category}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, category: e.target.value })}
                      className="admin-input-field"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Announcement Text</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Banking & SSC Morning Batch starts Monday (10:00 AM – 12:00 PM)..."
                      value={newAnnouncement.text}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, text: e.target.value })}
                      className="admin-input-field"
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                    <div className="form-group">
                      <label>Icon Emoji</label>
                      <input
                        type="text"
                        value={newAnnouncement.icon}
                        onChange={(e) => setNewAnnouncement({ ...newAnnouncement, icon: e.target.value })}
                        className="admin-input-field"
                      />
                    </div>
                    <div className="form-group">
                      <label>Action Link</label>
                      <input
                        type="text"
                        value={newAnnouncement.actionLink}
                        onChange={(e) => setNewAnnouncement({ ...newAnnouncement, actionLink: e.target.value })}
                        className="admin-input-field"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 'var(--space-3)' }}>
                    🚀 Publish Live Announcement
                  </button>
                </form>
              </div>

              {/* List: Current Announcements */}
              <div className="announcements-list-card glass-card">
                <h3>Live Announcements Queue ({announcements.length})</h3>
                <p>Active items rotate continuously on the website header marquee.</p>

                {announcementsLoading ? (
                  <div style={{ padding: 'var(--space-6)', textAlign: 'center' }}>Loading announcements...</div>
                ) : announcements.length === 0 ? (
                  <div style={{ padding: 'var(--space-6)', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                    No announcements currently configured.
                  </div>
                ) : (
                  <div className="announcements-item-stack" style={{ marginTop: 'var(--space-4)' }}>
                    {announcements.map((item) => (
                      <div key={item.id} className={`announcement-admin-item ${item.active ? 'item-active' : 'item-inactive'}`}>
                        <div className="announcement-item-left">
                          <span className="item-icon">{item.icon || '📢'}</span>
                          <div>
                            <div className="item-cat-tag">
                              {item.category}
                              <span className={`status-badge-inline ${item.active ? 'badge-live' : 'badge-paused'}`}>
                                {item.active ? '🟢 LIVE' : '⏸️ PAUSED'}
                              </span>
                            </div>
                            <div className="item-text-body">{item.text}</div>
                          </div>
                        </div>

                        <div className="announcement-item-actions">
                          <button
                            type="button"
                            className="btn-action-edit"
                            onClick={() => setEditingAnnouncement({ ...item })}
                            title="Edit Announcement Details"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            type="button"
                            className="btn-action-toggle"
                            onClick={() => handleToggleAnnouncement(item.id)}
                            title={item.active ? 'Pause from live marquee' : 'Resume on live marquee'}
                          >
                            {item.active ? 'Pause' : 'Activate'}
                          </button>
                          <button
                            type="button"
                            className="btn-action-delete"
                            onClick={() => handleDeleteAnnouncement(item.id)}
                            title="Delete Announcement"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: COURSE FEES & SCHEDULES */}
        {activeTab === 'fees' && (
          <section className="admin-tab-pane">
            <div className="admin-header-row">
              <div>
                <h2>Program Fee Structures & Batch Timings</h2>
                <p>Edit course tuition fees, validity terms, and batch timings in real time.</p>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={loadPrograms}
                disabled={programsLoading}
              >
                🔄 Reload Programs
              </button>
            </div>

            {programsLoading ? (
              <div className="admin-loading-state glass-card">Loading course programs...</div>
            ) : (
              <div className="admin-programs-grid">
                {programs.map((prog) => (
                  <div key={prog.id || prog.code} className="admin-prog-card glass-card">
                    <div className="prog-card-top">
                      <span className="prog-category-badge">{(prog.category || 'Course').toUpperCase()}</span>
                      <span className="prog-validity-badge">⏳ {prog.validity}</span>
                    </div>

                    <h3 className="prog-card-title">{prog.title}</h3>
                    <div className="prog-fee-amount">{prog.feeDisplay}</div>
                    <div className="prog-fee-sub">{prog.feeSubtext}</div>

                    <div className="prog-timing-info">
                      <strong>🕒 Schedule:</strong> {prog.timings}
                    </div>

                    <button
                      type="button"
                      className="btn btn-outline btn-block btn-edit-fee"
                      onClick={() => setEditingProgram({ ...prog })}
                    >
                      ✏️ Edit Fee & Schedule
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* TAB 5: SYSTEM & DATABASE HEALTH */}
        {activeTab === 'system' && (
          <section className="admin-tab-pane">
            <div className="system-health-grid">
              <div className="system-card glass-card">
                <h3>🗄️ Relational Database & Console</h3>
                <p>The system is connected to the in-memory transactional database seeded with verified institutional records.</p>
                <div className="system-detail-list">
                  <div><strong>Database Engine:</strong> H2 In-Memory (Production-Ready Hibernate JPA)</div>
                  <div><strong>JDBC URL:</strong> <code>jdbc:h2:mem:atsenseidb</code></div>
                  <div><strong>User:</strong> <code>sa</code> (Password: <em>empty</em>)</div>
                  <div><strong>H2 Web Console:</strong> <a href="http://localhost:8081/h2-console" target="_blank" rel="noopener noreferrer">http://localhost:8081/h2-console</a></div>
                </div>
                <a
                  href="http://localhost:8081/h2-console"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: 'var(--space-4)', display: 'inline-block' }}
                >
                  Open H2 DB Console ↗
                </a>
              </div>

              <div className="system-card glass-card">
                <h3>🛡️ DPDP & Child Safety Protocols</h3>
                <p>All student phone numbers, email addresses, and minor consent records follow DPDP data minimization rules.</p>
                <ul className="safety-checklist">
                  <li>✅ Parent consent verification mandatory for School Foundation.</li>
                  <li>✅ Zero raw payment credential storage (Hosted tokenized flow).</li>
                  <li>✅ Structured audit trail on enquiry status transitions.</li>
                  <li>✅ Safe localized data export available via CSV.</li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Internal Notes Modal */}
      {selectedEnquiryForNotes && (
        <div className="admin-modal-overlay" onClick={() => setSelectedEnquiryForNotes(null)}>
          <div className="admin-modal-box glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>Internal Notes — {selectedEnquiryForNotes.studentName}</h3>
              <button
                type="button"
                className="admin-modal-close"
                onClick={() => setSelectedEnquiryForNotes(null)}
              >
                ✕
              </button>
            </div>
            <div className="admin-modal-body">
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-3)' }}>
                Target Track: <strong>{selectedEnquiryForNotes.courseCode}</strong> | Phone: <strong>{selectedEnquiryForNotes.phone}</strong>
              </div>
              <label>Counselor Observations & Follow-up Log:</label>
              <textarea
                rows={5}
                placeholder="e.g. Student requested evening batch demo for SSC CGL. Parent called on Tuesday..."
                value={notesDraft}
                onChange={(e) => setNotesDraft(e.target.value)}
                className="admin-input-field"
                style={{ marginTop: 'var(--space-2)' }}
              />
            </div>
            <div className="admin-modal-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setSelectedEnquiryForNotes(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveNotes}
              >
                💾 Save Notes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Announcement Modal */}
      {editingAnnouncement && (
        <div className="admin-modal-overlay" onClick={() => setEditingAnnouncement(null)}>
          <div className="admin-modal-box glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>Edit Announcement #{editingAnnouncement.id}</h3>
              <button
                type="button"
                className="admin-modal-close"
                onClick={() => setEditingAnnouncement(null)}
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleUpdateAnnouncement}>
              <div className="admin-modal-body">
                <div className="form-group">
                  <label>Category Label</label>
                  <input
                    type="text"
                    value={editingAnnouncement.category}
                    onChange={(e) => setEditingAnnouncement({ ...editingAnnouncement, category: e.target.value })}
                    className="admin-input-field"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Announcement Text</label>
                  <textarea
                    rows={3}
                    value={editingAnnouncement.text}
                    onChange={(e) => setEditingAnnouncement({ ...editingAnnouncement, text: e.target.value })}
                    className="admin-input-field"
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                  <div className="form-group">
                    <label>Icon Emoji</label>
                    <input
                      type="text"
                      value={editingAnnouncement.icon}
                      onChange={(e) => setEditingAnnouncement({ ...editingAnnouncement, icon: e.target.value })}
                      className="admin-input-field"
                    />
                  </div>
                  <div className="form-group">
                    <label>Action Link</label>
                    <input
                      type="text"
                      value={editingAnnouncement.actionLink}
                      onChange={(e) => setEditingAnnouncement({ ...editingAnnouncement, actionLink: e.target.value })}
                      className="admin-input-field"
                    />
                  </div>
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setEditingAnnouncement(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  💾 Save Announcement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Program Fee Editor Modal */}
      {editingProgram && (
        <div className="admin-modal-overlay" onClick={() => setEditingProgram(null)}>
          <div className="admin-modal-box glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>Edit Program: {editingProgram.title}</h3>
              <button
                type="button"
                className="admin-modal-close"
                onClick={() => setEditingProgram(null)}
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSaveProgramFee}>
              <div className="admin-modal-body">
                <div className="form-group">
                  <label>Tuition Fee Display</label>
                  <input
                    type="text"
                    value={editingProgram.feeDisplay}
                    onChange={(e) => setEditingProgram({ ...editingProgram, feeDisplay: e.target.value })}
                    className="admin-input-field"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Fee Subtext (e.g. Including GST / Zero Hidden Fees)</label>
                  <input
                    type="text"
                    value={editingProgram.feeSubtext}
                    onChange={(e) => setEditingProgram({ ...editingProgram, feeSubtext: e.target.value })}
                    className="admin-input-field"
                  />
                </div>

                <div className="form-group">
                  <label>Validity Duration</label>
                  <input
                    type="text"
                    value={editingProgram.validity}
                    onChange={(e) => setEditingProgram({ ...editingProgram, validity: e.target.value })}
                    className="admin-input-field"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Batch Schedule & Timings</label>
                  <input
                    type="text"
                    value={editingProgram.timings}
                    onChange={(e) => setEditingProgram({ ...editingProgram, timings: e.target.value })}
                    className="admin-input-field"
                    required
                  />
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setEditingProgram(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  💾 Save Fee Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

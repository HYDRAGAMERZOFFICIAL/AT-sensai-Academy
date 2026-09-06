import { request } from './apiClient';

export const AdminService = {
  // Authentication
  async verifyPassword(password) {
    const res = await request('/admin/auth/verify', {
      method: 'POST',
      body: { password }
    });
    return res.data;
  },

  // Enquiries
  async getEnquiries() {
    const res = await request('/enquiries');
    return res.data || [];
  },

  // Workshop Bookings
  async getWorkshopBookings() {
    const res = await request('/workshops/bookings');
    return res.data || [];
  },

  async updateEnquiryStatus(id, status, notes) {
    const res = await request(`/enquiries/${id}/status`, {
      method: 'PATCH',
      body: { status, notes }
    });
    return res.data;
  },

  async deleteEnquiry(id) {
    const res = await request(`/enquiries/${id}`, {
      method: 'DELETE'
    });
    return res.data;
  },

  async bulkDeleteEnquiries(ids) {
    const res = await request('/enquiries/bulk-delete', {
      method: 'POST',
      body: { ids }
    });
    return res.data;
  },

  async bulkUpdateEnquiryStatus(ids, status) {
    const res = await request('/enquiries/bulk-status', {
      method: 'POST',
      body: { ids, status }
    });
    return res.data;
  },

  // Announcements
  async getAnnouncements(all = true) {
    const res = await request(`/announcements?all=${all}`);
    return res.data || [];
  },

  async createAnnouncement(data) {
    const res = await request('/announcements', {
      method: 'POST',
      body: data
    });
    return res.data;
  },

  async updateAnnouncement(id, data) {
    const res = await request(`/announcements/${id}`, {
      method: 'PUT',
      body: data
    });
    return res.data;
  },

  async toggleAnnouncement(id) {
    const res = await request(`/announcements/${id}/toggle`, {
      method: 'PATCH'
    });
    return res.data;
  },

  async deleteAnnouncement(id) {
    const res = await request(`/announcements/${id}`, {
      method: 'DELETE'
    });
    return res.data;
  },

  // Program / Fee Updates
  async getPrograms() {
    const res = await request('/programs');
    return res.data || [];
  },

  async createProgram(programData) {
    const res = await request('/programs', {
      method: 'POST',
      body: programData
    });
    return res.data;
  },

  async updateProgramFee(code, { feeDisplay, feeSubtext, validity, timings }) {
    const res = await request(`/programs/${code}/fee`, {
      method: 'PATCH',
      body: { feeDisplay, feeSubtext, validity, timings }
    });
    return res.data;
  },

  async deleteProgram(code) {
    const res = await request(`/programs/${code}`, {
      method: 'DELETE'
    });
    return res.data;
  }
};

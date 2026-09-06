import { request } from './apiClient';

export const AnnouncementService = {
  async getActiveAnnouncements() {
    try {
      const res = await request('/announcements');
      return res.data || [];
    } catch (err) {
      console.warn("Using fallback announcement items:", err);
      return [];
    }
  }
};

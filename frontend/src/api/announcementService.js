import { INITIAL_ANNOUNCEMENTS } from '../data/staticData';

export const AnnouncementService = {
  async getActiveAnnouncements() {
    return INITIAL_ANNOUNCEMENTS.filter(a => a.active);
  }
};

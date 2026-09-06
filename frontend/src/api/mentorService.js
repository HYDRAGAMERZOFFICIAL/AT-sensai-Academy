import { request } from './apiClient';

export const MentorService = {
  async getAllMentors() {
    const res = await request('/mentors');
    return res.data;
  }
};

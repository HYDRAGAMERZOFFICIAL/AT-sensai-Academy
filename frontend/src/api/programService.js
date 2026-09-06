import { request } from './apiClient';

export const ProgramService = {
  async getAllPrograms(category = '') {
    const query = category ? `?category=${encodeURIComponent(category)}` : '';
    const res = await request(`/programs${query}`);
    return res.data;
  },

  async getProgramByCode(code) {
    const res = await request(`/programs/${code}`);
    return res.data;
  }
};

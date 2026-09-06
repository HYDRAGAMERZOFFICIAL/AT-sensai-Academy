import { request } from './apiClient';

export const WorkshopService = {
  async bookWorkshop(payload) {
    const res = await request('/workshops/book', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    return res;
  }
};

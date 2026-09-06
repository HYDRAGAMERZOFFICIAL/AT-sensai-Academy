import { request } from './apiClient';

export const EnquiryService = {
  async submitEnquiry(payload) {
    const res = await request('/enquiries', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    return res;
  }
};

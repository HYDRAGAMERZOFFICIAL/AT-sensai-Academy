import { request } from './apiClient';

export const PolicyService = {
  async getAllPolicies() {
    const res = await request('/policies');
    return res.data;
  },

  async getPolicyByKey(key) {
    const res = await request(`/policies/${key}`);
    return res.data;
  }
};

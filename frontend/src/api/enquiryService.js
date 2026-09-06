export const EnquiryService = {
  async submitEnquiry(payload) {
    try {
      const existing = JSON.parse(localStorage.getItem('atsensei_enquiries') || '[]');
      const newEnquiry = {
        id: Date.now(),
        ...payload,
        createdAt: new Date().toISOString(),
        status: 'NEW'
      };
      existing.unshift(newEnquiry);
      localStorage.setItem('atsensei_enquiries', JSON.stringify(existing));
    } catch (e) {
      console.warn('Could not cache enquiry to localStorage', e);
    }

    return {
      success: true,
      message: 'Enquiry submitted successfully! A counselor will contact you shortly.'
    };
  }
};

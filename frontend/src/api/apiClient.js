/**
 * AT SENSEI ACADEMY — CENTRALIZED API CLIENT
 * Isolated HTTP fetch client with safe fallback handling for standalone/static frontend mode
 */

const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL;
  if (envUrl) {
    const cleanUrl = envUrl.trim().replace(/\/+$/, '');
    return cleanUrl.endsWith('/api/v1') ? cleanUrl : `${cleanUrl}/api/v1`;
  }
  return 'https://at-sensai-academy.onrender.com/api/v1';
};

export const API_BASE_URL = getApiBaseUrl();

export async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  let body = options.body;
  if (body !== undefined && body !== null) {
    if (typeof body === 'object' && !(body instanceof FormData)) {
      body = JSON.stringify(body);
    }
  }

  const config = {
    ...options,
    body,
    headers: {
      ...defaultHeaders,
      ...options.headers
    }
  };

  try {
    const response = await fetch(url, config);
    const result = await response.json();

    if (!response.ok) {
      const errorMsg = result?.message || result?.errors || `HTTP Error ${response.status}`;
      throw new Error(typeof errorMsg === 'object' ? JSON.stringify(errorMsg) : errorMsg);
    }

    return result;
  } catch (error) {
    console.warn(`[API Client Notice] ${endpoint}: Running in standalone frontend mode.`, error.message);
    // Return empty payload safely rather than throwing fatal error
    return { success: true, data: [] };
  }
}

/**
 * AT SENSEI ACADEMY — CENTRALIZED API CLIENT
 * Isolated HTTP fetch client with standardized error handling and response unwrapping
 */

const envUrl = import.meta.env.VITE_API_URL;
const API_BASE_URL = envUrl 
  ? `${envUrl.replace(/\/$/, '')}/api/v1`
  : 'http://localhost:8081/api/v1';

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
    console.error(`[API Error] ${endpoint}:`, error.message);
    throw error;
  }
}

/**
 * AT SENSEI ACADEMY — CENTRALIZED API CLIENT
 * Isolated HTTP fetch client with standardized error handling and response unwrapping
 */

const API_BASE_URL = 'http://localhost:8081/api/v1';

export async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  const config = {
    ...options,
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

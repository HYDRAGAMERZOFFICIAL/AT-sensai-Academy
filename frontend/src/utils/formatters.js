/**
 * Text and currency formatting utilities for AT Sensei Academy
 */

export function formatFeeDisplay(feeStr) {
  if (!feeStr || typeof feeStr !== 'string') return 'Contact Desk';
  
  // If already properly formatted with ₹, return trimmed
  if (feeStr.startsWith('₹') || feeStr.startsWith('From ₹')) {
    return feeStr.replace(/\?1/g, '₹').trim();
  }

  // If there's an encoding issue like ?1 or ?1
  const cleaned = feeStr.replace(/^[^\d₹]*/, '₹').replace(/\?1/g, '₹');
  if (/^\d/.test(feeStr)) {
    return `₹${feeStr}`;
  }
  return cleaned;
}

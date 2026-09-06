import React from 'react';

export function FloatingWhatsApp() {
  return (
    <aside className="floating-whatsapp-container" aria-label="Direct WhatsApp Contact">
      <a
        href="https://wa.me/919110687171?text=Hi%20AT%20Sensei%20Academy,%20I%20would%20like%20to%20enquire%20about%20your%20coaching%20programs."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat with AT Sensei Counselors on WhatsApp"
      >
        <span className="whatsapp-icon">💬</span>
        <span className="whatsapp-text">Chat with Sensei</span>
      </a>
    </aside>
  );
}

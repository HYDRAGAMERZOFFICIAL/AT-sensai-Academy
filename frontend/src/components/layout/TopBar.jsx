import React from 'react';

export function TopBar() {
  return (
    <aside className="top-bar" aria-label="Announcement & Direct Contact">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <span>📍</span>
            <span>#16, Opp. MNTI College, 16th Cross, Kammagondanahalli, Abbigere Main Rd, Bangalore – 560015</span>
          </div>
        </div>
        <div className="top-bar-right">
          <div className="top-bar-item">
            <span>📞</span>
            <a href="tel:+919110687171">+91 91106 87171</a>
            <span>/</span>
            <a href="tel:+916360651497">+91 63606 51497</a>
          </div>
          <div className="top-bar-item">
            <span>✉️</span>
            <a href="mailto:atsensei0@gmail.com">atsensei0@gmail.com</a>
          </div>
          <div className="top-bar-item">
            <a
              href="https://wa.me/919110687171"
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-whatsapp-btn"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

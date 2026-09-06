import React from 'react';

export function TopBar() {
  return (
    <aside className="top-bar" aria-label="Quick contact and updates">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <span className="top-bar-item">
            📍 Bangalore Campus: #16, Opp. MNTI College, Kammagondanahalli, Abbigere Main Rd
          </span>
        </div>
        <div className="top-bar-right">
          <span className="top-bar-item">
            📞 <a href="tel:+919110687171">+91 91106 87171</a> / <a href="tel:+916360651497">+91 63606 51497</a>
          </span>
          <span className="top-bar-item">
            ✉️ <a href="mailto:atsensei0@gmail.com">atsensei0@gmail.com</a>
          </span>
        </div>
      </div>
    </aside>
  );
}

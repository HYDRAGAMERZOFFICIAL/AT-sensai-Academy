import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { AnnouncementService } from '../../api/announcementService';

export function ExamTicker() {
  const { openWorkshopModal } = useModal();
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    async function loadAnnouncements() {
      try {
        const items = await AnnouncementService.getActiveAnnouncements();
        if (items && items.length > 0) {
          setAnnouncements(items);
        }
      } catch (e) {
        // Fallback default is rendered
      }
    }
    loadAnnouncements();
  }, []);

  const renderContent = () => {
    if (announcements.length > 0) {
      return (
        <>
          {announcements.map((item, idx) => (
            <React.Fragment key={item.id || idx}>
              <span className="ticker-segment">
                {item.icon || '📢'} <strong>{item.category ? `${item.category}:` : ''}</strong> {item.text.replace(new RegExp(`^${item.category}:?\\s*`, 'i'), '')}
              </span>
              <span className="ticker-dot">•</span>
            </React.Fragment>
          ))}
        </>
      );
    }

    return (
      <>
        <span className="ticker-segment">
          📢 <strong>Upcoming Batch:</strong> Banking & SSC Morning Batch starts Monday (10:00 AM – 12:00 PM)
        </span>
        <span className="ticker-dot">•</span>
        <span className="ticker-segment">
          🎯 <strong>Foundation 2026/27:</strong> Evening Batch for 8th–10th (6:30 PM – 8:00 PM) Admissions Open
        </span>
        <span className="ticker-dot">•</span>
        <span className="ticker-segment">
          🎓 <strong>Free Workshop:</strong> 100% Free Career Awareness Workshop seats filling fast
        </span>
        <span className="ticker-dot">•</span>
      </>
    );
  };

  return (
    <div className="exam-ticker-bar" aria-label="Live Announcements Marquee">
      <div className="exam-ticker-inner">
        <div className="ticker-badge">
          <span className="ticker-pulse"></span>
          <span>ANNOUNCEMENTS</span>
        </div>

        <div className="ticker-marquee-wrapper">
          <div className="ticker-marquee-track">
            <div className="ticker-marquee-content">{renderContent()}</div>
            <div className="ticker-marquee-content" aria-hidden="true">{renderContent()}</div>
          </div>
        </div>

        <div className="ticker-action-wrap">
          <button
            type="button"
            className="ticker-reserve-btn"
            onClick={openWorkshopModal}
            title="Reserve Free Workshop Seat"
          >
            Reserve Seat
          </button>
        </div>
      </div>
    </div>
  );
}

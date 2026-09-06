import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

const ENQUIRY_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdS3JZJ4lmZf4Q1dXG5HjakNFEF0PJVQAAFCGlYDuBf91ZfFQ/viewform";
const WORKSHOP_FORM_URL = "https://forms.gle/cVF41oTAjvCCJoMQ9";

const KNOWLEDGE_BASE = [
  {
    keywords: ['enquiry', 'inquiry', 'admission', 'admissions', 'enroll', 'apply', 'form', 'register', 'seat', 'booking', 'counseling form'],
    answer: `Here is the official **Admission & Course Enquiry Form** for AT Sensei Academy:\n\n📋 **[Open Official Admission Enquiry Google Form](${ENQUIRY_FORM_URL})**\n\nOur academic counseling team will connect with you within 24 hours to guide your batch selection and timetable!`,
    action: 'enquiry'
  },
  {
    keywords: ['workshop', 'demo', 'free workshop', 'webinar', 'seminar'],
    answer: `Our **Career Awareness & Strategy Workshop** is 100% Free:\n\n• **Duration**: 45 to 90 minutes interactive session.\n• **Topics**: Exam cutoffs, Vedic math speed techniques, syllabus blueprints, and personalized preparation planning.\n• **Cost**: Zero fees.\n\n🎓 **[Register for Free Workshop on Google Forms](${WORKSHOP_FORM_URL})**`,
    action: 'workshop'
  },
  {
    keywords: ['fee', 'fees', 'cost', 'price', 'pricing', 'charges', 'gst', 'amount', 'pay'],
    answer: `Here is the transparent fee structure for all AT Sensei Academy programmes (all inclusive of GST, zero hidden fees):\n\n• **Banking Programme**: ₹16,999 (3 Years Extended Validity, PO/Clerk/RBI/LIC)\n• **SSC Programme**: ₹18,999 (3 Years Extended Validity, CGL/CHSL/MTS/CPO)\n• **SSC + Banking Combo**: ₹27,999 (3 Years Validity — Maximum Value Track)\n• **School Foundation (8th–10th)**: From ₹18,000 to ₹30,000 (10-month term, 6 days/week, 6:30 PM–8:00 PM).\n\nWould you like to fill out the admission form?`,
    action: 'enquiry'
  },
  {
    keywords: ['banking', 'bank', 'ibps', 'sbi', 'rbi', 'lic', 'rrb', 'clerk', 'po'],
    answer: `The **Banking Programme** (₹16,999) offers 3-Year Extended Validity and covers:\n• **Target Exams**: IBPS PO/Clerk, SBI PO/Clerk, RBI Assistant/Grade B, LIC AAO/ADO, RRB, NIACL.\n• **Core Subjects**: Quantitative Aptitude, Logical Reasoning, English, Current Affairs, Banking & Financial Awareness, Computer.\n• **Batch Timings**: 10:00 AM – 12:00 PM / 1:00 PM – 3:00 PM.\n• **Eligibility**: Any Bachelor's Degree.`,
    action: 'enquiry'
  },
  {
    keywords: ['ssc', 'cgl', 'chsl', 'mts', 'cpo', 'gd', 'central government', 'govt job'],
    answer: `The **SSC Programme** (₹18,999) provides 3-Year Extended Validity for Central Government careers:\n• **Target Exams**: SSC CGL (Tier I & II), SSC CHSL (10+2), SSC MTS & Havaldar, SSC CPO, SSC GD Constable, IB ACIO.\n• **Core Subjects**: Quantitative Aptitude & Advance Maths, Reasoning, English, General Awareness (Polity, History, Science), Computer & Typing.\n• **Batch Timings**: Morning, Afternoon & Weekend batches.\n• **Eligibility**: SSLC / PUC / Degree.`,
    action: 'enquiry'
  },
  {
    keywords: ['combo', 'ssc + banking', 'both', 'ssc and banking'],
    answer: `The **SSC + Banking Combo** (₹27,999) is our most popular unified pathway:\n• Covers **both Banking & Central Govt SSC examinations** simultaneously.\n• Includes high-speed Banking arithmetic, high-level reasoning puzzles, financial awareness PLUS SSC advance maths (Geometry, Algebra), Polity, History & General Science.\n• **Validity**: Full 3 Years with flexible schedule.`,
    action: 'enquiry'
  },
  {
    keywords: ['foundation', 'school', '8th', '9th', '10th', 'board', 'cbse', 'icse', 'state board', 'class 8', 'class 9', 'class 10'],
    answer: `The **School Foundation Course** targets students of Classes 8th, 9th, and 10th:\n• **Boards Supported**: Karnataka State Board, CBSE, ICSE.\n• **Subjects**: Mathematics (Concept & Problem Solving), Science (Physics, Chemistry, Biology), Logical Thinking, English & Early Aptitude Grounding.\n• **Schedule**: 6:30 PM – 8:00 PM (6 Days / Week, Monday to Saturday).\n• **DPDP Child Safety**: Requires verified parent/guardian consent during enrolment.`,
    action: 'enquiry'
  },
  {
    keywords: ['jutsu', 'methodology', '5 jutsu', 'strategy', 'how to prepare', 'pedagogy', 'pillars'],
    answer: `Our preparation is built on the **3 Pillars** (Right Awareness + Right Guidance + Systematic Preparation) and the **5 Jutsu**:\n1. **01 Syllabus & Pattern**: Weightage & cutoff mapping.\n2. **02 Quality Over Quantity**: Deep root concepts over blind memorization.\n3. **03 Active Recall & Spaced Repetition**: 1-day, 7-day, and 21-day revision cycles.\n4. **04 Mock Tests & Time Management**: Real CBT simulations with speed analysis.\n5. **05 Consistent Daily Routine**: Structured drills & mentor doubt resolution.`
  },
  {
    keywords: ['address', 'location', 'where', 'campus', 'bangalore', 'bengaluru', 'map', 'directions', 'reach', 'center'],
    answer: `**Bangalore Campus Location**:\n📍 **#16, Opp. MNTI College, 16th Cross, Kammagondanahalli, Abbigere Main Road, Bangalore – 560015**\n*(Equipped with 40+ seat CBT Computer Test Lab, 1-on-1 Mentor Doubt Cabins, and Self-Study Library)*.`
  },
  {
    keywords: ['contact', 'phone', 'call', 'number', 'hotline', 'mobile', 'whatsapp', 'email', 'timing', 'hours', 'open'],
    answer: `**Direct Contact Hotlines & Operating Hours**:\n• 📞 **Admissions & Guidance**: +91 91106 87171\n• 📞 **School Foundation Desk**: +91 63606 51497\n• 💬 **WhatsApp**: https://wa.me/919110687171\n• ✉️ **Email**: atsensei0@gmail.com\n• ⏰ **Hours**: Mon–Sat: 8:30 AM – 8:30 PM | Sun: 9:00 AM – 5:00 PM.`
  },
  {
    keywords: ['mentor', 'faculty', 'teacher', 'sir', 'mohan', 'anikethana', 'tansen', 'who teaches'],
    answer: `**Meet Our Expert Faculty Mentors**:\n• **Mohan Sensei**: 10+ Years Experience in Quantitative Aptitude & Analytical Reasoning.\n• **Anikethana Sensei**: 8+ Years Experience in English Comprehension & General Awareness.\n• **Tansen Sensei**: 12+ Years Experience in School Foundation Mathematics & Science.`
  }
];

const INITIAL_MESSAGES = [
  {
    sender: 'bot',
    text: `Hello! I'm your **Sensei AI Assistant** 👋. Welcome to **AT Sensei Academy**!\n\nHow can I help with your exam preparation today? You can ask about our **Banking**, **SSC**, or **School Foundation** courses, transparent fees, or submit an admission enquiry below!`,
    timestamp: 'Just now',
    action: 'enquiry'
  }
];

const QUICK_PROMPTS = [
  '📝 Admission Enquiry',
  '🎓 Free Workshop',
  'Fee Structure',
  'Banking Course',
  'SSC Exam Track',
  'School Foundation',
  'Campus Address',
  'Talk on WhatsApp'
];

export function SenseiChatbot() {
  const { openEnquiryModal, openWorkshopModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto popup AI Assistant immediately on website visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const userMsg = { 
      sender: 'user', 
      text: query, 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // AI Response Engine
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();

      // Check for direct enquiry form request
      if (
        lowerQuery.includes('enquiry') ||
        lowerQuery.includes('inquiry') ||
        lowerQuery.includes('admission') ||
        lowerQuery.includes('apply') ||
        lowerQuery.includes('enroll') ||
        lowerQuery.includes('form')
      ) {
        const botMsg = {
          sender: 'bot',
          text: `Here is the official **Admission & Course Enquiry Form** for AT Sensei Academy:\n\n📋 **[Open Official Admission Enquiry Google Form](${ENQUIRY_FORM_URL})**\n\nClick the button below to open the form in a popup window:`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: 'enquiry'
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // Check for workshop
      if (lowerQuery.includes('workshop') || lowerQuery.includes('demo') || lowerQuery.includes('free session')) {
        const botMsg = {
          sender: 'bot',
          text: `You can reserve your seat for the **100% Free Career & Competitive Awareness Workshop** here:\n\n🎓 **[Open Free Workshop Registration Form](${WORKSHOP_FORM_URL})**\n\nClick below to open the registration form in a popup:`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: 'workshop'
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // Check for WhatsApp redirect
      if (lowerQuery.includes('whatsapp') || lowerQuery.includes('talk to human') || lowerQuery.includes('counselor') || lowerQuery.includes('call')) {
        const botMsg = {
          sender: 'bot',
          text: `You can connect directly with our senior mentors on WhatsApp at **+91 91106 87171**.\n\n[👉 Click here to open WhatsApp Chat](https://wa.me/919110687171?text=Hello%20AT%20Sensei%20Academy%2C%20I%20have%20an%20enquiry)`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: 'enquiry'
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // Find match in knowledge base
      let matchedAnswer = null;
      let matchedAction = null;
      let maxScore = 0;

      for (const item of KNOWLEDGE_BASE) {
        let score = 0;
        for (const kw of item.keywords) {
          if (lowerQuery.includes(kw)) {
            score += 1;
          }
        }
        if (score > maxScore) {
          maxScore = score;
          matchedAnswer = item.answer;
          matchedAction = item.action;
        }
      }

      let responseText = matchedAnswer;
      if (!responseText) {
        responseText = `Thank you for reaching out! AT Sensei Academy offers specialized coaching for **Banking (₹16,999)**, **SSC Central Govt (₹18,999)**, **SSC+Banking Combo (₹27,999)**, and **School Foundation 8th–10th (from ₹18,000)** at our Bangalore campus with 3-Year Extended Validity.\n\nWould you like to submit an admission enquiry?`;
        matchedAction = 'enquiry';
      }

      const botMsg = {
        sender: 'bot',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: matchedAction
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 550);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="chatbot-launcher-container">
        <button
          type="button"
          className={`chatbot-launcher-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Sensei AI Chat Assistant"
        >
          {isOpen ? (
            <span className="launcher-icon-close">✕</span>
          ) : (
            <div className="launcher-icon-ai">
              <img src="/favicon.png" alt="Sensei AI" className="chatbot-favicon-img" />
              <span className="ai-icon-sparkle">✨</span>
            </div>
          )}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window glass-card">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <img src="/favicon.png" alt="AT Sensei" className="header-favicon-img" />
                <span className="status-dot"></span>
              </div>
              <div>
                <div className="chatbot-title">Sensei AI Assistant</div>
                <div className="chatbot-status">Instant Academy Guide & Admissions</div>
              </div>
            </div>
            <div className="chatbot-header-actions">
              <button
                type="button"
                className="chatbot-action-icon"
                onClick={() => setIsOpen(false)}
                title="Minimize Chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages">
            {messages.map((m, idx) => (
              <div key={idx} className={`chat-bubble-row ${m.sender === 'user' ? 'row-user' : 'row-bot'}`}>
                {m.sender === 'bot' && (
                  <div className="chat-msg-avatar">
                    <img src="/favicon.png" alt="AT" className="msg-favicon-img" />
                  </div>
                )}
                <div className={`chat-bubble ${m.sender === 'user' ? 'bubble-user' : 'bubble-bot'}`}>
                  <div
                    className="bubble-content"
                    dangerouslySetInnerHTML={{
                      __html: m.text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--color-sensei-red); font-weight: 700; text-decoration: underline;">$1</a>')
                        .replace(/\n/g, '<br />')
                    }}
                  />

                  {/* Interactive In-Chat Form Triggers */}
                  {m.action === 'enquiry' && (
                    <div style={{ marginTop: 'var(--space-3)', display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={() => openEnquiryModal()}
                        style={{ fontSize: '0.8rem', padding: '6px 12px' }}
                      >
                        📝 Open Admission Form (Popup)
                      </button>
                      <a
                        href={ENQUIRY_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline"
                        style={{ fontSize: '0.8rem', padding: '6px 10px' }}
                      >
                        ↗ Open Full Tab
                      </a>
                    </div>
                  )}

                  {m.action === 'workshop' && (
                    <div style={{ marginTop: 'var(--space-3)', display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className="btn btn-sm btn-gold"
                        onClick={() => openWorkshopModal()}
                        style={{ fontSize: '0.8rem', padding: '6px 12px' }}
                      >
                        🎓 Open Free Workshop Form
                      </button>
                    </div>
                  )}

                  <div className="bubble-time">{m.timestamp}</div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble-row row-bot">
                <div className="chat-msg-avatar">
                  <img src="/favicon.png" alt="AT" className="msg-favicon-img" />
                </div>
                <div className="chat-bubble bubble-bot typing-bubble">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="chatbot-quick-chips">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                className="quick-chip"
                onClick={() => handleSendMessage(prompt.replace(/^[📝🎓]\s*/, ''))}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="chatbot-input-bar">
            <input
              type="text"
              placeholder="Ask about admission form, fees, courses, batches..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className="chatbot-input"
            />
            <button
              type="button"
              className="chatbot-send-btn"
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              aria-label="Send Message"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

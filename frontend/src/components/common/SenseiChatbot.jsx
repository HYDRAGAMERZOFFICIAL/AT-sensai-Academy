import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const KNOWLEDGE_BASE = [
  {
    keywords: ['fee', 'fees', 'cost', 'price', 'pricing', 'charges', 'gst', 'amount', 'pay'],
    answer: `Here is the transparent fee structure for all AT Sensei Academy programmes (all inclusive of GST, zero hidden fees):

• **Banking Programme**: ₹16,999 (3 Years Extended Validity, PO/Clerk/RBI/LIC)
• **SSC Programme**: ₹18,999 (3 Years Extended Validity, CGL/CHSL/MTS/CPO)
• **SSC + Banking Combo**: ₹27,999 (3 Years Validity — Maximum Value Combined Track)
• **School Foundation (8th, 9th, 10th)**:
  - State Board: ₹18,000 (8th/9th) | ₹22,000 (10th)
  - CBSE Board: ₹22,000 (8th/9th) | ₹26,000 (10th)
  - ICSE Board: ₹26,000 (8th/9th) | ₹30,000 (10th)
  *(Foundation is a 10-month academic term, 6 days/week, 6:30 PM–8:00 PM)*.`
  },
  {
    keywords: ['banking', 'bank', 'ibps', 'sbi', 'rbi', 'lic', 'rrb', 'clerk', 'po'],
    answer: `The **Banking Programme** (₹16,999) offers 3-Year Extended Validity and covers:
• **Target Exams**: IBPS PO/Clerk, SBI PO/Clerk, RBI Assistant/Grade B, LIC AAO/ADO, RRB, NIACL.
• **Core Subjects**: Quantitative Aptitude, Logical Reasoning, English, Current Affairs, Banking & Financial Awareness, Computer.
• **Batch Timings**: 10:00 AM – 12:00 PM / 1:00 PM – 3:00 PM (Morning & Afternoon batches).
• **Eligibility**: Any Bachelor's Degree.`
  },
  {
    keywords: ['ssc', 'cgl', 'chsl', 'mts', 'cpo', 'gd', 'central government', 'govt job'],
    answer: `The **SSC Programme** (₹18,999) provides 3-Year Extended Validity for Central Government careers:
• **Target Exams**: SSC CGL (Tier I & II), SSC CHSL (10+2), SSC MTS & Havaldar, SSC CPO, SSC GD Constable, IB ACIO.
• **Core Subjects**: Quantitative Aptitude & Advance Maths (Geometry, Trigonometry, Algebra), Reasoning, English, General Awareness (Polity, History, Science), Computer & Typing.
• **Batch Timings**: Morning, Afternoon & Weekend batches.
• **Eligibility**: SSLC / PUC / Degree.`
  },
  {
    keywords: ['combo', 'ssc + banking', 'both', 'ssc and banking'],
    answer: `The **SSC + Banking Combo** (₹27,999) is our most popular unified pathway:
• Covers **both Banking & Central Govt SSC examinations** simultaneously.
• Includes high-speed Banking arithmetic, high-level reasoning puzzles, financial awareness PLUS SSC advance maths (Geometry, Algebra), Polity, History & General Science.
• **Validity**: Full 3 Years with flexible schedule.`
  },
  {
    keywords: ['foundation', 'school', '8th', '9th', '10th', 'board', 'cbse', 'icse', 'state board', 'class 8', 'class 9', 'class 10'],
    answer: `The **School Foundation Course** targets students of Classes 8th, 9th, and 10th:
• **Boards Supported**: Karnataka State Board, CBSE, ICSE.
• **Subjects**: Mathematics (Concept & Problem Solving), Science (Physics, Chemistry, Biology), Logical Thinking, English & Early Aptitude Grounding.
• **Schedule**: 6:30 PM – 8:00 PM (6 Days / Week, Monday to Saturday).
• **DPDP Child Safety**: Requires verified parent/guardian consent during enrolment.`
  },
  {
    keywords: ['workshop', 'demo', 'free', 'counseling', 'webinar', 'seminar'],
    answer: `Our **Career Awareness Workshop & Demo** is 100% Free:
• **Duration**: 45 to 90 minutes.
• **What You Get**: Exam pattern breakdowns, negative marking strategy, Vedic math shortcuts, and a complimentary personalized syllabus blueprint & study planner.
• **Cost**: Zero fees — 100% genuine free career guidance.`
  },
  {
    keywords: ['jutsu', 'methodology', '5 jutsu', 'strategy', 'how to prepare', 'pedagogy', 'pillars', '3 pillars'],
    answer: `Our preparation is built on the **3 Pillars** (Right Awareness + Right Guidance + Systematic Preparation) and the **5 Jutsu**:
1. **01 Syllabus & Pattern**: Official weightage & cutoff mapping.
2. **02 Quality Over Quantity**: Deep root concepts over blind memorization.
3. **03 Active Recall & Spaced Repetition**: 1-day, 7-day, and 21-day revision cycles.
4. **04 Mock Tests & Time Management**: Real CBT simulations with sectional speed analysis.
5. **05 Consistent Daily Routine**: Structured daily drills and mentor doubt resolution.`
  },
  {
    keywords: ['address', 'location', 'where', 'campus', 'bangalore', 'bengaluru', 'map', 'directions', 'reach', 'center'],
    answer: `**Bangalore Campus Location**:
📍 **#16, Opp. MNTI College, 16th Cross, Kammagondanahalli, Abbigere Main Road, Bangalore – 560015**
*(Equipped with 40+ seat CBT Computer Test Lab, 1-on-1 Mentor Doubt Cabins, and Self-Study Library)*.`
  },
  {
    keywords: ['contact', 'phone', 'call', 'number', 'hotline', 'mobile', 'whatsapp', 'email', 'timing', 'hours', 'open'],
    answer: `**Direct Contact Hotlines & Operating Hours**:
• 📞 **Admissions & Guidance**: +91 91106 87171
• 📞 **School Foundation Desk**: +91 63606 51497
• 💬 **WhatsApp**: https://wa.me/919110687171
• ✉️ **Email**: atsensei0@gmail.com
• ⏰ **Hours**: Mon–Sat: 8:30 AM – 8:30 PM | Sun: 9:00 AM – 5:00 PM.`
  },
  {
    keywords: ['mentor', 'faculty', 'teacher', 'sir', 'mohan', 'anikethana', 'tansen', 'who teaches'],
    answer: `**Meet Our Expert Faculty Mentors**:
• **Mohan Sensei**: 10+ Years Experience in Quantitative Aptitude & Analytical Reasoning.
• **Anikethana Sensei**: 8+ Years Experience in English Comprehension & General Awareness.
• **Tansen Sensei**: 12+ Years Experience in School Foundation Mathematics & Science.`
  },
  {
    keywords: ['policy', 'privacy', 'refund', 'terms', 'minor', 'dpdp', 'consent', 'legal'],
    answer: `**Governance & DPDP Compliance**:
• **Privacy Policy**: Full compliance with DPDP Act 2023. No unnecessary data collection, zero third-party profiling.
• **Minor Protection**: Mandatory parent/guardian consent for Foundation course students.
• **Refund Policy**: Transparent milestone-based fee policy with zero hidden deduction clauses.
• **Disclaimer**: AT Sensei Academy is an independent coaching institution providing merit-based guidance.`
  }
];

const INITIAL_MESSAGES = [
  {
    sender: 'bot',
    text: `Hello! I'm your **Sensei AI Assistant**. How can I help you today? Ask me anything about our Banking, SSC, or School Foundation courses, fee structure, 5-Jutsu roadmap, or Bangalore campus!`,
    timestamp: 'Just now'
  }
];

const QUICK_PROMPTS = [
  'Fee Structure',
  'Banking Course',
  'SSC Exam Track',
  'School Foundation',
  'Free Workshop',
  '5-Jutsu Roadmap',
  'Campus Address',
  'Talk on WhatsApp'
];

export function SenseiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const userMsg = { sender: 'user', text: query, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // AI Response Engine
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();

      // Check for WhatsApp redirect
      if (lowerQuery.includes('whatsapp') || lowerQuery.includes('talk to human') || lowerQuery.includes('counselor')) {
        const botMsg = {
          sender: 'bot',
          text: `You can connect directly with our chief counselors on WhatsApp at **+91 91106 87171**.\n\n[👉 Click here to open WhatsApp Chat](https://wa.me/919110687171?text=Hello%20AT%20Sensei%20Academy%2C%20I%20have%20an%20enquiry)`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
        return;
      }

      // Find match in knowledge base
      let matchedAnswer = null;
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
        }
      }

      let responseText = matchedAnswer;
      if (!responseText) {
        responseText = `Thank you for asking! AT Sensei Academy offers specialized coaching for **Banking (₹16,999)**, **SSC Central Govt (₹18,999)**, **SSC+Banking Combo (₹27,999)**, and **School Foundation 8th–10th (from ₹18,000)** at our Bangalore campus with 3-Year Validity.\n\nFeel free to ask about specific courses, fees, 5-Jutsu methodology, or [chat with us on WhatsApp](https://wa.me/919110687171).`;
      }

      const botMsg = {
        sender: 'bot',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 650);
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
        {hasUnread && !isOpen && (
          <div className="chatbot-unread-pill" onClick={() => setIsOpen(true)}>
            <span>💬 Need guidance? Ask Sensei AI</span>
          </div>
        )}
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
                —
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
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
                        .replace(/\n/g, '<br />')
                    }}
                  />
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
                onClick={() => handleSendMessage(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="chatbot-input-bar">
            <input
              type="text"
              placeholder="Ask about fees, 5 Jutsu, courses, batches..."
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

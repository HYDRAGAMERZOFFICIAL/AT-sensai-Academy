-- ===================================================================
-- AT SENSEI ACADEMY — RELATIONAL DATABASE SEEDING
-- Verified institutional data from catalog & legal drafts
-- ===================================================================

-- Programs
INSERT INTO programs (code, title, category, tag, fee_display, fee_subtext, validity, timings, batches, eligibility, description, featured, subjects_json, exams_json, curriculum_json)
VALUES (
  'banking',
  'Banking Programme',
  'competitive',
  'High Demand',
  '₹16,999',
  'Including GST',
  '3 Years',
  '10:00 AM – 12:00 PM / 1:00 PM – 3:00 PM',
  'Morning & Afternoon Batches',
  'Any Bachelor''s Degree',
  'Comprehensive coaching for PO, Clerk, and Specialist Officer examinations across nationalized and regional rural banks.',
  false,
  '["Quantitative Aptitude", "Logical Reasoning", "English Language", "Current Affairs", "Banking & Financial Awareness", "Computer Awareness"]',
  '["IBPS PO / Clerk", "SBI PO / Clerk", "RBI Assistant / Grade B", "LIC AAO / ADO", "NIACL AO / Assistant", "RRB PO / Clerk", "UIIC AO / Assistant"]',
  '[{"subject":"Quantitative Aptitude","topics":"Number Systems, Simplification, Percentages, Ratio, Profit & Loss, SI & CI, Time & Work, Speed Distance, Data Interpretation (DI)."},{"subject":"Logical Reasoning","topics":"Puzzles, Seating Arrangements, Syllogisms, Coding-Decoding, Blood Relations, Inequalities."},{"subject":"English Language","topics":"Reading Comprehension, Cloze Test, Error Spotting, Para Jumbles, Vocabulary."},{"subject":"Banking Awareness","topics":"RBI Monetary Policy, Financial Markets, Inflation, Budget, Banking Terminology."}]'
);

INSERT INTO programs (code, title, category, tag, fee_display, fee_subtext, validity, timings, batches, eligibility, description, featured, subjects_json, exams_json, curriculum_json)
VALUES (
  'ssc',
  'SSC Programme',
  'competitive',
  'Comprehensive',
  '₹18,999',
  'Including GST',
  '3 Years',
  'Morning, Afternoon & Weekend',
  'Regular & Weekend Batches',
  'SSLC / PUC / Degree',
  'Dedicated preparation for Staff Selection Commission exams covering Central Government ministries, departments, and subordinate offices.',
  false,
  '["Quantitative Aptitude", "Logical Reasoning", "English Language", "Current Affairs", "General Awareness", "Computer Awareness", "Typing Test Guidance"]',
  '["SSC CGL (Tier I & II)", "SSC CHSL (10+2)", "SSC MTS & Havaldar", "SSC Selection Posts", "SSC CPO (Sub-Inspector)", "SSC GD Constable", "IB ACIO"]',
  '[{"subject":"Quantitative Aptitude & Advance Maths","topics":"Percentages, Profit & Loss, Geometry, Trigonometry, Mensuration, Algebra, Statistics."},{"subject":"General Awareness","topics":"History, Polity, Geography, Economy, General Science (Physics, Chemistry, Biology)."},{"subject":"General Intelligence","topics":"Analogies, Classifications, Series, Non-Verbal Reasoning, Venn Diagrams."},{"subject":"English Comprehension","topics":"Grammar, Active/Passive Voice, Direct/Indirect Speech, Idioms, Vocab."}]'
);

INSERT INTO programs (code, title, category, tag, fee_display, fee_subtext, validity, timings, batches, eligibility, description, featured, subjects_json, exams_json, curriculum_json)
VALUES (
  'ssc-banking-combo',
  'SSC + Banking Combo',
  'competitive',
  'Most Popular / Maximum Value',
  '₹27,999',
  'Including GST',
  '3 Years',
  'Flexible Schedule',
  'Morning, Afternoon & Weekend',
  'Bachelor''s Degree / Final Year Students',
  'Complete unified preparation pathway maximizing selection probability across Central Government and Nationalized Banking recruitments simultaneously.',
  true,
  '["Unified Quantitative Aptitude & Advance Maths", "Logical Reasoning & High-Level Puzzles", "Advanced English", "General Awareness & Static GK", "Banking Systems", "Computer & Typing"]',
  '["All Banking Exams (IBPS, SBI, RBI, LIC)", "All SSC Exams (CGL, CHSL, CPO, MTS)", "Insurance & Intelligence Bureau"]',
  '[{"subject":"Dual Syllabus Integration","topics":"Complete coverage of Banking high-speed arithmetic, multi-variable puzzles and financial awareness PLUS SSC advance math, geometry, polity, history and general science."}]'
);

INSERT INTO programs (code, title, category, tag, fee_display, fee_subtext, validity, timings, batches, eligibility, description, featured, subjects_json, exams_json, curriculum_json)
VALUES (
  'foundation',
  'School Foundation Course',
  'school',
  'Classes 8th, 9th & 10th',
  'From ₹18,000',
  '10 Months Academic Year',
  'Full Academic Year',
  '6:30 PM – 8:00 PM (6 Days / Week)',
  'Evening Batches',
  'Students of 8th, 9th, and 10th Standards',
  'Early conceptual foundation building for School Board excellence (State / CBSE / ICSE) and early aptitude grounding for future competitive exams.',
  false,
  '["Mathematics (Concept & Problem Solving)", "Science (Physics, Chemistry, Biology)", "Logical Thinking", "English & Vocabulary", "Early Aptitude Grounding"]',
  '["State Board", "CBSE Board", "ICSE Board", "Olympiads & NTSE Readiness"]',
  '[{"subject":"Board Alignment & Concept Mastery","topics":"Line-by-line coverage for State, CBSE, and ICSE boards with weekly mock assessments."},{"subject":"Aptitude & Mental Ability","topics":"Mental math shortcuts, pattern recognition, spatial reasoning and problem solving."}]'
);

-- Mentors
INSERT INTO mentors (name, initials, qualification, experience, focus, active)
VALUES (
  'Mohan Sensei',
  'M',
  'Bachelor of Engineering (B.E.)',
  '5+ Years Teaching Experience',
  'UPSC & KPSC Exam Strategy, General Studies & Mentorship',
  true
);

INSERT INTO mentors (name, initials, qualification, experience, focus, active)
VALUES (
  'Anikethana Sensei',
  'A',
  'Master of Science in Physics (M.Sc.)',
  '3+ Years Teaching Experience',
  'CBSE / ICSE / IGCSE Foundation, Conceptual Science & Physics',
  true
);

INSERT INTO mentors (name, initials, qualification, experience, focus, active)
VALUES (
  'Tansen Sensei',
  'T',
  'Bachelor of Science (B.Sc.)',
  '4+ Years Teaching Experience',
  'Quantitative Aptitude, Fast Calculation & Logical Reasoning',
  true
);

-- Policies
INSERT INTO policies (policy_key, title, content_html)
VALUES (
  'privacy',
  'Privacy Policy',
  '<h3>1. Privacy Commitment</h3><p>AT Sensei Academy complies with Indian data protection standards (DPDP Act). We minimize data collection and never sell student data.</p><h3>2. Data Collected</h3><p>Name, Phone, Email, Target Course, Batch. For minors in the School Foundation Course, Parent/Guardian consent and phone is mandatory.</p><h3>3. Data Usage</h3><p>Strictly for course advisement, batch allocation, and lawful admission services.</p>'
);

INSERT INTO policies (policy_key, title, content_html)
VALUES (
  'terms',
  'Terms & Conditions',
  '<h3>1. Academic Terms</h3><p>Course enrollment provides admission access for the stated duration (3 years for competitive programs).</p><h3>2. Conduct & Material</h3><p>Study materials are proprietary to AT Sensei Academy and may not be redistributed without written consent.</p>'
);

INSERT INTO policies (policy_key, title, content_html)
VALUES (
  'refund',
  'Refund & Cancellation Policy',
  '<h3>1. Transparent Fees</h3><p>All fees are transparent with zero hidden costs. Refund inquiries prior to batch start are evaluated per institutional guidelines.</p><h3>2. Free Workshops</h3><p>All Career & Competitive Awareness Workshops are 100% free with zero financial obligation.</p>'
);

INSERT INTO policies (policy_key, title, content_html)
VALUES (
  'minorConsent',
  'Minor & Parent Consent',
  '<h3>1. Minor Protection</h3><p>Students under 18 enrolling in the School Foundation Course require Parent/Guardian authorization.</p><h3>2. Parent Communications</h3><p>Attendance and performance updates are shared directly with registered parents.</p>'
);

INSERT INTO policies (policy_key, title, content_html)
VALUES (
  'disclaimer',
  'Disclaimer',
  '<h3>1. Independent Institution</h3><p>AT Sensei Academy is an independent educational academy not affiliated with IBPS, SSC, SBI, or UPSC.</p><h3>2. No Guaranteed Appointments</h3><p>Competitive exam results depend on individual student dedication and merit.</p>'
);

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

-- Comprehensive Legal Policies
INSERT INTO policies (policy_key, title, content_html)
VALUES (
  'privacy',
  'Privacy & Data Protection Policy (DPDP Aligned)',
  '<div class="legal-doc">
    <p class="legal-updated">Last Updated: September 2026 | Effective for AT Sensei Academy, Bangalore</p>
    
    <h3>1. Institutional Commitment & Scope</h3>
    <p>AT Sensei Academy ("we", "us", "our", "Academy") operates competitive exam coaching and foundation education programs located at Bangalore, Karnataka. We are committed to upholding the privacy, confidentiality, and security of personal data entrusted to us by aspirants, students, and parents/guardians in accordance with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> and applicable Indian laws.</p>
    
    <h3>2. Categories of Information We Collect</h3>
    <p>We adhere strictly to the principle of <em>Data Minimization</em>. We collect only information reasonably necessary for academic evaluation, admissions processing, and student safety:</p>
    <ul>
      <li><strong>Identity & Contact Information:</strong> Full legal name, phone number, email address, current residential locality (Bangalore), and educational background (e.g. 10th/12th/Graduation status).</li>
      <li><strong>Academic & Enrollment Details:</strong> Selected program track (Banking, SSC, Combo, or Foundation), preferred batch timings, and mock test performance analytics.</li>
      <li><strong>Parent/Guardian Information (for Minors):</strong> Where an applicant is under 18 years of age (specifically for the School Foundation program covering classes 8th, 9th, and 10th), we collect verified parent/guardian name, phone number, and verifiable consent.</li>
      <li><strong>Payment Transaction References:</strong> Transaction identifiers, payment timestamps, and gateway reference tokens. <em>We never store raw credit/debit card numbers, CVVs, or net banking credentials.</em></li>
    </ul>

    <h3>3. Protection of Minors & School Students</h3>
    <p>In strict alignment with child safety regulations:</p>
    <ul>
      <li>We do not publish identifiable student photographs, residential addresses, or personal scores without explicit parental authorization.</li>
      <li>We do not deploy tracking cookies or behavioral advertising targeting minors.</li>
      <li>Academic attendance and progress reports for minor students are communicated directly and exclusively to verified parent/guardian contacts.</li>
    </ul>

    <h3>4. Purpose & Lawful Basis of Processing</h3>
    <p>We utilize personal data solely for:</p>
    <ul>
      <li>Processing admission registrations and reserving batch slots.</li>
      <li>Distributing course schedules, study materials, and mock test notifications.</li>
      <li>Conducting free career awareness workshops and counseling sessions requested by the applicant.</li>
      <li>Fulfilling legal, statutory, and tax accounting obligations under Indian jurisdiction.</li>
    </ul>

    <h3>5. Data Sharing & Third-Party Service Providers</h3>
    <p>AT Sensei Academy does not sell, rent, or trade student data. Information is shared only with trusted infrastructure providers bound by non-disclosure agreements (e.g., cloud hosting, transactional SMS/Email relays, and RBI-regulated payment gateways).</p>

    <h3>6. Security Safeguards & Data Retention</h3>
    <p>We enforce role-based access controls, encrypted transit protocols (TLS/SSL), and regular database audits. Student records are retained only for the duration of the 3-Year course validity plus statutory retention limits.</p>

    <h3>7. Grievance Redressal & Contact</h3>
    <p>For inquiries, correction requests, or data privacy grievances, contact our Data Protection Officer at: <br /><strong>Email:</strong> privacy@atsensei.in | <strong>Phone:</strong> +91 91106 87171<br /><strong>Address:</strong> #16, Opp. MNTI College, 16th Cross, Kammagondanahalli, Abbigere Main Rd, Bangalore – 560015.</p>
  </div>'
);

INSERT INTO policies (policy_key, title, content_html)
VALUES (
  'terms',
  'Terms & Conditions of Admission & Service',
  '<div class="legal-doc">
    <p class="legal-updated">Last Updated: September 2026 | Governing Academic Terms</p>
    
    <h3>1. Acceptance of Terms</h3>
    <p>By registering on this portal, enrolling in an AT Sensei Academy course, or attending our free awareness workshops, students, parents, and guardians agree to be bound by these institutional terms and conditions.</p>

    <h3>2. 3-Year Course Validity Policy</h3>
    <p>Enrolled students in the Banking, SSC, and Combo programs are entitled to <strong>3 Full Years of Course Validity</strong> starting from their date of admission. This validity includes attendance in scheduled regular batches, revision crash courses, and access to all updated offline/hybrid mock examination series until their targeted central/banking exam is completed.</p>

    <h3>3. Intellectual Property Rights & Study Material</h3>
    <p>All curriculum designs, test papers, classroom handouts, 5 Jutsu pedagogy blueprints, and digital lecture notes are the exclusive intellectual property of AT Sensei Academy. Reproduction, commercial resale, public online distribution, or unauthorized sharing without prior written consent from the leadership is strictly prohibited and subject to legal remedies.</p>

    <h3>4. Code of Conduct & Classroom Decorum</h3>
    <p>Students are expected to maintain professional academic discipline during offline and hybrid sessions. Harassment, disruption of lectures, academic dishonesty during mock tests, or destruction of academy property may lead to termination of admission without refund.</p>

    <h3>5. Batch Schedules & Modality Changes</h3>
    <p>While AT Sensei Academy strives to maintain consistent schedules (Morning 10 AM, Afternoon 1 PM, Evening 6:30 PM), the Academy reserves the right to adjust timings or faculty allocations to accommodate official government exam notification shifts and public holidays.</p>

    <h3>6. Governing Law & Jurisdiction</h3>
    <p>These terms and all admissions contracts shall be governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in <strong>Bengaluru, Karnataka</strong>.</p>
  </div>'
);

INSERT INTO policies (policy_key, title, content_html)
VALUES (
  'refund',
  'Transparent Fee & Refund Policy',
  '<div class="legal-doc">
    <p class="legal-updated">Last Updated: September 2026 | Fee Governance & Cancellation</p>

    <h3>1. 100% Transparent Fee Structure</h3>
    <p>AT Sensei Academy maintains zero hidden charges. All published fees across our catalog and portal (Banking: ₹16,999; SSC: ₹18,999; Combo: ₹27,999; Foundation: from ₹18,000) are <strong>strictly inclusive of all applicable GST</strong> and standard academic course material kits.</p>

    <h3>2. Free Career Workshop Zero-Cost Guarantee</h3>
    <p>All Career & Competitive Exam Awareness Workshops (45–90 minutes) are conducted <strong>100% Free of Charge</strong> as community outreach. Attendance carries zero financial obligation or mandatory enrollment commitment.</p>

    <h3>3. Course Cancellation & Refund Rules</h3>
    <ul>
      <li><strong>Prior to Batch Commencement:</strong> If a cancellation request is formally lodged in writing at least 7 days before the designated batch commencement date, a full refund of the fee paid (less standard statutory banking processing charges) will be disbursed.</li>
      <li><strong>Post Batch Commencement:</strong> Once classes commence and study materials/CBT test portal credentials are distributed, fees paid become non-refundable and non-transferable due to seat allocation constraints.</li>
      <li><strong>Course Transfer & Batch Flexibility:</strong> In cases of medical emergencies or employment relocation, students may request a batch transfer or validity freeze under the 3-Year validity charter with written mentor approval.</li>
    </ul>

    <h3>4. Refund Processing Timeline</h3>
    <p>Approved refunds are processed via direct NEFT/RTGS bank transfer to the source bank account within 10 to 14 business days.</p>
  </div>'
);

INSERT INTO policies (policy_key, title, content_html)
VALUES (
  'minorConsent',
  'Minor Protection & Parent Consent Framework',
  '<div class="legal-doc">
    <p class="legal-updated">Last Updated: September 2026 | School Foundation (Classes 8th, 9th, 10th)</p>

    <h3>1. Parental Authority & Consent Requirement</h3>
    <p>The AT Sensei Academy School Foundation Program caters to young scholars in 8th, 9th, and 10th standards. In full alignment with the DPDP Act and child safety norms, no minor student can be enrolled without verifiable consent from their parent or legal guardian.</p>

    <h3>2. Academic Progress & Direct Parental Reporting</h3>
    <p>To ensure holistic student development and parental transparency:</p>
    <ul>
      <li>Weekly attendance logs and monthly conceptual test scores are shared directly with registered parent mobile numbers.</li>
      <li>Parent-Teacher-Mentor counseling sessions are scheduled quarterly to evaluate school board alignment (State / CBSE / ICSE).</li>
    </ul>

    <h3>3. Safe Offline & Digital Learning Environment</h3>
    <p>Our Bangalore campus adheres to strict safety protocols, CCTV-monitored common areas, background-verified faculty, and structured evening timings (6:30 PM to 8:00 PM) designed to integrate seamlessly with school routines.</p>
  </div>'
);

INSERT INTO policies (policy_key, title, content_html)
VALUES (
  'disclaimer',
  'Institutional Disclaimer & Academic Standards',
  '<div class="legal-doc">
    <p class="legal-updated">Last Updated: September 2026 | Transparency Notice</p>

    <h3>1. Independent Coaching Institution</h3>
    <p>AT Sensei Academy is an independent private educational and training institution. We are not officially affiliated with, endorsed by, or representing the <strong>Institute of Banking Personnel Selection (IBPS)</strong>, <strong>Staff Selection Commission (SSC)</strong>, <strong>State Bank of India (SBI)</strong>, <strong>Reserve Bank of India (RBI)</strong>, or any Central/State recruiting body.</p>

    <h3>2. No Guaranteed Appointments or Deceptive Claims</h3>
    <p>In accordance with the Consumer Protection Guidelines for Coaching Centers:</p>
    <ul>
      <li>We do not guarantee exam selection, ranking, or government job appointment.</li>
      <li>Competitive examination outcomes are dependent upon individual aspirant dedication, cognitive aptitude, practice consistency, and official recruitment board cutoffs.</li>
      <li>We do not publish fabricated rankings, fake student testimonials, or unverified pass percentages.</li>
    </ul>

    <h3>3. Syllabus Accuracy</h3>
    <p>While every effort is made to maintain complete fidelity with current exam patterns, applicants are encouraged to cross-reference official recruitment notifications released by the respective recruiting authorities.</p>
  </div>'
);

-- Announcements Seed Data
INSERT INTO announcements (icon, category, text, active, display_order, action_link, action_text)
VALUES (
  '📢',
  'Upcoming Batch',
  'Upcoming Batch: Banking & SSC Morning Batch starts Monday (10:00 AM – 12:00 PM)',
  true,
  1,
  '/admissions',
  'Reserve Seat'
);

INSERT INTO announcements (icon, category, text, active, display_order, action_link, action_text)
VALUES (
  '🎯',
  'Foundation 2026/27',
  'Foundation 2026/27: Evening Batch for 8th–10th (6:30 PM – 8:00 PM) Admissions Open',
  true,
  2,
  '/admissions',
  'Apply Now'
);

INSERT INTO announcements (icon, category, text, active, display_order, action_link, action_text)
VALUES (
  '🎓',
  'Free Workshop',
  'Free Workshop: 100% Free Career Awareness Workshop seats filling fast',
  true,
  3,
  '/admissions',
  'Reserve Seat'
);


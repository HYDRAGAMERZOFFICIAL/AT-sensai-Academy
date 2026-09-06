/**
 * AT SENSEI ACADEMY — APPLICATION DATA SOURCE
 * Strictly adhering to docs/CONTENT_SOURCE_OF_TRUTH.md and source/AT Sensei Academy.pdf
 */

const ACADEMY_DATA = {
  brand: {
    name: "AT Sensei Academy",
    tagline: "Learn Today, Lead Tomorrow",
    positioning: "Right awareness + right guidance + systematic preparation = a better career.",
    phones: ["+91 91106 87171", "+91 63606 51497"],
    email: "atsensei0@gmail.com",
    address: "#16, Opp. MNTI College, 16th Cross, Kammagondanahalli, Abbigere Main Road, Bangalore – 560015",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560015"
  },

  programs: [
    {
      id: "banking",
      category: "competitive",
      title: "Banking Programme",
      tag: "High Demand",
      feeDisplay: "₹16,999",
      feeSubtext: "Including GST",
      validity: "3 Years",
      timings: "10:00 AM – 12:00 PM / 1:00 PM – 3:00 PM",
      batches: "Morning & Afternoon Batches",
      eligibility: "Any Bachelor's Degree",
      description: "Comprehensive coaching for PO, Clerk, and Specialist Officer examinations across nationalized and regional rural banks.",
      examsCovered: [
        "IBPS PO / Clerk",
        "SBI PO / Clerk",
        "RBI Assistant / Grade B",
        "LIC AAO / ADO",
        "NIACL AO / Assistant",
        "RRB PO / Clerk",
        "UIIC AO / Assistant",
        "Other Public Sector Bank Exams"
      ],
      subjects: [
        "Quantitative Aptitude",
        "Logical Reasoning",
        "English Language",
        "Current Affairs",
        "Banking & Financial Awareness",
        "Computer Awareness"
      ],
      curriculum: [
        {
          subject: "Quantitative Aptitude",
          topics: "Number Systems, Simplification & Approximation, Percentages, Ratio & Proportion, Profit & Loss, Simple & Compound Interest, Time & Work, Speed Time & Distance, Data Interpretation (Pie, Bar, Line, Radar & Caselet DI), Quadratic Equations."
        },
        {
          subject: "Logical Reasoning",
          topics: "Puzzles (Floor, Box, Scheduling), Seating Arrangement (Circular, Linear, Parallel), Syllogism, Coding-Decoding, Blood Relations, Direction Sense, Inequality, Input-Output, Critical Reasoning."
        },
        {
          subject: "English Language",
          topics: "Reading Comprehension, Cloze Test, Error Detection, Sentence Improvement, Para Jumbles, Vocabulary, Fill in the Blanks, Idioms & Phrases."
        },
        {
          subject: "Banking & Financial Awareness",
          topics: "RBI Structure & Monetary Policy, Indian Banking System, Financial Markets, Inflation, Budget & Union Policies, Banking Terminology, Payment Systems (NEFT, RTGS, UPI), Negotiable Instruments."
        },
        {
          subject: "Current Affairs & Computer",
          topics: "National & International Events, Government Schemes, Summits, Awards & Honors, Computer Hardware & Software, Internet, Networking, Cybersecurity fundamentals."
        }
      ]
    },

    {
      id: "ssc",
      category: "competitive",
      title: "SSC Programme",
      tag: "Comprehensive",
      feeDisplay: "₹18,999",
      feeSubtext: "Including GST",
      validity: "3 Years",
      timings: "Morning, Afternoon & Weekend",
      batches: "Regular & Weekend Batches",
      eligibility: "SSLC / PUC / Degree (as per exam tier)",
      description: "Dedicated preparation for Staff Selection Commission exams covering Central Government ministries, departments, and subordinate offices.",
      examsCovered: [
        "SSC CGL (Tier I & Tier II)",
        "SSC CHSL (10+2)",
        "SSC MTS & Havaldar",
        "SSC Selection Posts",
        "SSC CPO (Sub-Inspector)",
        "SSC GD Constable",
        "SSC Stenographer (Grade C & D)",
        "IB ACIO & IB SA/MTS"
      ],
      subjects: [
        "Quantitative Aptitude",
        "Logical Reasoning",
        "English Language",
        "Current Affairs",
        "General Awareness",
        "Computer Awareness",
        "Typing Test Guidance"
      ],
      curriculum: [
        {
          subject: "Quantitative Aptitude (Arithmetic + Advance Maths)",
          topics: "Arithmetic: Percentages, Profit & Loss, SI & CI, Time & Work. Advance Maths: Algebra, Geometry, Trigonometry, Mensuration (2D & 3D), Coordinate Geometry, Statistics & Probability."
        },
        {
          subject: "General Intelligence & Reasoning",
          topics: "Analogy, Classification, Series (Number & Figural), Coding-Decoding, Non-Verbal Reasoning (Paper Folding, Mirror Images, Embedded Figures), Venn Diagrams, Syllogisms."
        },
        {
          subject: "General Awareness",
          topics: "Indian History (Ancient, Medieval, Modern), Indian Polity & Constitution, Geography (Physical & Indian), Economy, General Science (Physics, Chemistry, Biology), Static GK."
        },
        {
          subject: "English Comprehension",
          topics: "Grammar Rules, Active/Passive Voice, Direct/Indirect Speech, Idioms & Phrases, One Word Substitution, Synonyms & Antonyms, Reading Comprehension, Cloze Passage."
        },
        {
          subject: "Computer & Skill Test",
          topics: "Computer Basics, MS Office suite (Word, Excel, PowerPoint), Web Browsing, Keyboard Speed & Accuracy Coaching for Tier-II Skill Test."
        }
      ]
    },

    {
      id: "ssc-banking-combo",
      category: "competitive",
      featured: true,
      title: "SSC + Banking Combo",
      tag: "Most Popular / Maximum Value",
      feeDisplay: "₹27,999",
      feeSubtext: "Including GST",
      validity: "3 Years",
      timings: "Flexible Schedule",
      batches: "Morning, Afternoon & Weekend",
      eligibility: "Bachelor's Degree / Final Year Students",
      description: "Complete unified preparation pathway maximizing selection probability across Central Government and Nationalized Banking recruitments simultaneously.",
      examsCovered: [
        "All Banking Exams (IBPS, SBI, RBI, LIC, etc.)",
        "All SSC Exams (CGL, CHSL, CPO, MTS, etc.)",
        "Insurance Exams (NIACL, UIIC, OICL)",
        "Intelligence Bureau (IB ACIO / SA)"
      ],
      subjects: [
        "Unified Quantitative Aptitude & Advance Maths",
        "Comprehensive Logical Reasoning & Analytical Puzzles",
        "Advanced English Language & Grammar",
        "General Awareness & Current Affairs",
        "Banking & Financial Systems",
        "Computer Proficiency & Typing Test"
      ],
      curriculum: [
        {
          subject: "Full Dual-Syllabus Integration",
          topics: "Covers the entirety of the Banking syllabus (fast arithmetic, complex multi-variable puzzles, financial awareness) PLUS the advance math, Indian polity, history, and science required for SSC CGL Tier-I & Tier-II."
        }
      ]
    },

    {
      id: "foundation",
      category: "school",
      title: "School Foundation Course",
      tag: "Classes 8th, 9th & 10th",
      feeDisplay: "From ₹18,000",
      feeSubtext: "10 Months Academic Year",
      validity: "Full Academic Year",
      timings: "6:30 PM – 8:00 PM (6 Days / Week)",
      batches: "Evening Batches",
      eligibility: "Students of 8th, 9th, and 10th Standards",
      description: "Early conceptual foundation building for School Board excellence (State / CBSE / ICSE) and early aptitude grounding for future competitive exams.",
      boardsCovered: ["State Board", "CBSE", "ICSE"],
      feeStructure: [
        { standard: "8th Standard", state: "₹18,000", cbse: "₹18,000", icse: "₹22,000" },
        { standard: "9th Standard", state: "₹18,000", cbse: "₹20,000", icse: "₹25,000" },
        { standard: "10th Standard", state: "₹22,000", cbse: "₹25,000", icse: "₹30,000" }
      ],
      subjects: [
        "Mathematics (Conceptual & Problem-Solving)",
        "Science (Physics, Chemistry, Biology)",
        "Logical & Analytical Thinking",
        "Foundation English & Vocabulary Building",
        "Basic Competitive Aptitude Grounding"
      ],
      curriculum: [
        {
          subject: "Board Alignment & Concept Mastery",
          topics: "Thorough line-by-line coverage of curriculum for State, CBSE, and ICSE boards with rigorous daily practice and weekly mock tests."
        },
        {
          subject: "Aptitude & Mental Ability Jumpstart",
          topics: "Introduction to mental math shortcuts, pattern recognition, spatial reasoning, and scientific reasoning to prepare students for Olympiads, NTSE, and long-term exam readiness."
        }
      ],
      isMinorCourse: true
    }
  ],

  jutsuMethodology: [
    {
      number: "01",
      title: "Concept Clarification",
      desc: "Deep conceptual grounding in fundamentals before moving to shortcuts or time-reduction techniques."
    },
    {
      number: "02",
      title: "Pattern Recognition",
      desc: "Systematic classification of questions into recognizable patterns seen in real exam trends over the last 5 years."
    },
    {
      number: "03",
      title: "Speed & Accuracy Tactics",
      desc: "Proven Vedic math shortcuts, elimination methods, and time-allocation strategies per section."
    },
    {
      number: "04",
      title: "Rigorous Mock Simulations",
      desc: "Exam-identical test interfaces with in-depth sectional analysis and personalized bottleneck identification."
    },
    {
      number: "05",
      title: "Mentorship & Doubt Resolution",
      desc: "One-on-one mentor access for psychological resilience, consistent study scheduling, and individual doubt clearing."
    }
  ],

  workshop: {
    title: "Career & Competitive Exam Awareness Workshop",
    cost: "100% FREE",
    duration: "45 – 90 Minutes",
    audience: "Students of 8th–10th, PUC, Degree + Active Aspirants",
    outcomes: [
      "Clarity on Central & State Government career opportunities",
      "Demystifying exam pathways: SSC, Banking, Railways, State PSCs",
      "Clear timelines, eligibility criteria, and preparation roadmaps",
      "Actionable techniques for balancing college studies with exam prep",
      "Direct Q&A with experienced faculty mentors"
    ],
    bookingTypes: [
      { id: "student", label: "Individual Student / Aspirant Seat" },
      { id: "institution", label: "School / College / Institutional Session" }
    ]
  },

  mentors: [
    {
      name: "Mohan Sensei",
      initials: "M",
      qualification: "Bachelor of Engineering (B.E.)",
      experience: "5+ Years Teaching Experience",
      focus: "UPSC & KPSC Exam Strategy, General Studies & Mentorship"
    },
    {
      name: "Anikethana Sensei",
      initials: "A",
      qualification: "Master of Science in Physics (M.Sc.)",
      experience: "3+ Years Teaching Experience",
      focus: "CBSE / ICSE / IGCSE Foundation, Conceptual Science & Physics"
    },
    {
      name: "Tansen Sensei",
      initials: "T",
      qualification: "Bachelor of Science (B.Sc.)",
      experience: "4+ Years Teaching Experience",
      focus: "Quantitative Aptitude, Fast Calculation & Logical Reasoning"
    }
  ],

  whyGovtCareer: [
    {
      title: "Job Security & Stability",
      desc: "Unmatched stability, lifetime pension/PF security, and strong institutional protections."
    },
    {
      title: "Prestige & Public Impact",
      desc: "Opportunity to contribute directly to national governance, financial systems, and citizen welfare."
    },
    {
      title: "Work-Life Balance & Allowances",
      desc: "Defined working hours, medical coverage, housing allowances (HRA), Dearness Allowance (DA), and leave benefits."
    },
    {
      title: "Merit-Based Equal Opportunity",
      desc: "Transparent recruitment conducted via standardized exams without corporate bias."
    }
  ],

  faqs: [
    {
      q: "What is the 3-Year Course Validity feature?",
      a: "For our Banking, SSC, and Combo programmes, your admission remains active for 3 years. This allows you to attend revisions, access updated test series, and continue mentor consultations until you clear your target exam."
    },
    {
      q: "Are the course fees inclusive of GST and study material?",
      a: "Yes. All fees listed (₹16,999 for Banking, ₹18,999 for SSC, ₹27,999 for Combo) include applicable GST with transparent pricing and zero hidden charges."
    },
    {
      q: "How does the School Foundation Course handle minor students?",
      a: "Our Foundation course is specifically tailored for 8th, 9th, and 10th standard students. We require parent/guardian consent during registration and maintain dedicated parent communication channels."
    },
    {
      q: "Is the Career Awareness Workshop genuinely free?",
      a: "Yes, our 45–90 minute Career & Competitive Exam Awareness Workshop is 100% free of charge for students, parents, and hosting educational institutions."
    },
    {
      q: "Where is the AT Sensei Academy campus located in Bangalore?",
      a: "We are located at #16, Opp. MNTI College, 16th Cross, Kammagondanahalli, Abbigere Main Road, Bangalore – 560015. You can contact us at +91 91106 87171 or +91 63606 51497."
    }
  ],

  policies: {
    privacy: {
      title: "Privacy Policy",
      content: `
        <h3>1. Introduction & Commitment</h3>
        <p>AT Sensei Academy ("Academy", "we", "us") is dedicated to protecting your privacy in compliance with applicable Indian data protection principles, including the Digital Personal Data Protection Act, 2023 (DPDP Act).</p>
        
        <h3>2. Data Minimization Principles</h3>
        <p>We only collect data strictly necessary to fulfill your enquiry, register your workshop attendance, or manage your course enrollment. We <strong>do not</strong> request sensitive details such as Aadhaar, PAN, caste, biometric, or health data for general website inquiries.</p>

        <h3>3. Information Collected</h3>
        <ul>
          <li><strong>Enquiry & Contact Data:</strong> Full Name, Email Address, Phone Number, Selected Programme, and Batch Preference.</li>
          <li><strong>Minors Data:</strong> For students under 18 enrolling in the School Foundation Course, we collect student details accompanied by Parent/Guardian Name, Phone, and Consent.</li>
        </ul>

        <h3>4. Purpose of Data Collection</h3>
        <p>Data is used exclusively to contact you regarding your course request, deliver academic schedules, and process lawful admissions. We never sell, rent, or trade your personal data to third-party marketing brokers.</p>

        <h3>5. Data Security</h3>
        <p>All transmitted information is secured using SSL/TLS encryption. Access to student records is strictly restricted to authorized academy administration and mentors on a need-to-know basis.</p>
      `
    },
    terms: {
      title: "Terms & Conditions",
      content: `
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing the AT Sensei Academy website or registering for our courses and workshops, you agree to comply with these terms of service.</p>

        <h3>2. Course Validity</h3>
        <p>Programmes specifying a 3-Year validity grant the registered student access to ongoing batch rotations, test materials, and faculty support for a maximum period of 36 months from the date of admission confirmation.</p>

        <h3>3. Student Code of Conduct</h3>
        <p>Students are expected to maintain academic discipline, respect mentors and peers, and adhere to classroom and digital safety guidelines.</p>

        <h3>4. Intellectual Property</h3>
        <p>All study material, question banks, mock exams, and proprietary teaching methodologies are the exclusive intellectual property of AT Sensei Academy. Unauthorized copying or redistribution is strictly prohibited.</p>
      `
    },
    refund: {
      title: "Refund & Cancellation Policy",
      content: `
        <h3>1. Transparency Guarantee</h3>
        <p>AT Sensei Academy operates with clear and fair fee governance.</p>

        <h3>2. Admission Fees</h3>
        <p>Upon formal batch enrollment and issuance of study materials/portal credentials, standard admission fees are processed. Any refund requests prior to batch commencement are evaluated in accordance with institutional policy on a case-by-case basis.</p>

        <h3>3. Free Initiatives</h3>
        <p>All Career & Competitive Exam Awareness Workshops are completely free with zero financial obligation.</p>
      `
    },
    minorConsent: {
      title: "Minor & Parent/Guardian Consent",
      content: `
        <h3>1. Minor Protection Standard</h3>
        <p>The School Foundation Course is designed for students in Classes 8th, 9th, and 10th who are typically minors (under 18 years of age).</p>

        <h3>2. Parent/Guardian Involvement</h3>
        <p>Any enrollment or enquiry for a minor student must be submitted with the awareness and verifiable authorization of a Parent or Legal Guardian.</p>

        <h3>3. Communication Notice</h3>
        <p>All official academic communications, fee receipts, and performance evaluations will be directed to the Parent/Guardian's designated contact details.</p>
      `
    },
    disclaimer: {
      title: "Disclaimer",
      content: `
        <h3>1. Institutional Affiliation</h3>
        <p>AT Sensei Academy is an independent coaching and mentorship institution. We are not officially affiliated with or endorsed by IBPS, SBI, SSC, UPSC, KPSC, or any government body.</p>

        <h3>2. Exam Results</h3>
        <p>Success in competitive examinations depends on individual student dedication, practice, and exam-day performance. While we provide systematic preparation, we do not make deceptive promises of guaranteed government appointments.</p>
      `
    }
  }
};

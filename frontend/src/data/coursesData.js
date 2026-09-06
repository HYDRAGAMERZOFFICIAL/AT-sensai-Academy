/**
 * AT SENSEI ACADEMY — STATIC COURSE CATALOG
 * Source of truth for all competitive coaching & foundation programs
 */

export const INITIAL_PROGRAMS = [
  {
    code: 'banking',
    title: 'Banking Programme',
    category: 'competitive',
    tag: 'High Demand',
    feeDisplay: '₹16,999',
    feeSubtext: 'Including GST',
    validity: '3 Years Extended Validity',
    timings: '10:00 AM – 12:00 PM / 1:00 PM – 3:00 PM',
    batches: 'Morning & Afternoon Batches',
    eligibility: "Any Bachelor's Degree",
    description: 'Comprehensive coaching for PO, Clerk, and Specialist Officer examinations across nationalized and regional rural banks.',
    featured: false,
    subjects: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "English Language",
      "Current Affairs",
      "Banking & Financial Awareness",
      "Computer Awareness"
    ],
    subjectsJson: JSON.stringify([
      "Quantitative Aptitude",
      "Logical Reasoning",
      "English Language",
      "Current Affairs",
      "Banking & Financial Awareness",
      "Computer Awareness"
    ]),
    exams: [
      "IBPS PO / Clerk",
      "SBI PO / Clerk",
      "RBI Assistant / Grade B",
      "LIC AAO / ADO",
      "NIACL AO / Assistant",
      "RRB PO / Clerk",
      "UIIC AO / Assistant"
    ],
    examsJson: JSON.stringify([
      "IBPS PO / Clerk",
      "SBI PO / Clerk",
      "RBI Assistant / Grade B",
      "LIC AAO / ADO",
      "NIACL AO / Assistant",
      "RRB PO / Clerk",
      "UIIC AO / Assistant"
    ]),
    curriculum: [
      {
        subject: "Quantitative Aptitude",
        topics: "Number Systems, Simplification, Percentages, Ratio, Profit & Loss, SI & CI, Time & Work, Speed Distance, Data Interpretation (DI)."
      },
      {
        subject: "Logical Reasoning",
        topics: "Puzzles, Seating Arrangements, Syllogisms, Coding-Decoding, Blood Relations, Inequalities."
      },
      {
        subject: "English Language",
        topics: "Reading Comprehension, Cloze Test, Error Spotting, Para Jumbles, Vocabulary."
      },
      {
        subject: "Banking Awareness",
        topics: "RBI Monetary Policy, Financial Markets, Inflation, Budget, Banking Terminology."
      }
    ],
    curriculumJson: JSON.stringify([
      {
        subject: "Quantitative Aptitude",
        topics: "Number Systems, Simplification, Percentages, Ratio, Profit & Loss, SI & CI, Time & Work, Speed Distance, Data Interpretation (DI)."
      },
      {
        subject: "Logical Reasoning",
        topics: "Puzzles, Seating Arrangements, Syllogisms, Coding-Decoding, Blood Relations, Inequalities."
      },
      {
        subject: "English Language",
        topics: "Reading Comprehension, Cloze Test, Error Spotting, Para Jumbles, Vocabulary."
      },
      {
        subject: "Banking Awareness",
        topics: "RBI Monetary Policy, Financial Markets, Inflation, Budget, Banking Terminology."
      }
    ])
  },
  {
    code: 'ssc',
    title: 'SSC Programme',
    category: 'competitive',
    tag: 'Comprehensive',
    feeDisplay: '₹18,999',
    feeSubtext: 'Including GST',
    validity: '3 Years Extended Validity',
    timings: 'Morning, Afternoon & Weekend',
    batches: 'Regular & Weekend Batches',
    eligibility: 'SSLC / PUC / Degree',
    description: 'Dedicated preparation for Staff Selection Commission exams covering Central Government ministries, departments, and subordinate offices.',
    featured: false,
    subjects: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "English Language",
      "Current Affairs",
      "General Awareness",
      "Computer Awareness",
      "Typing Test Guidance"
    ],
    subjectsJson: JSON.stringify([
      "Quantitative Aptitude",
      "Logical Reasoning",
      "English Language",
      "Current Affairs",
      "General Awareness",
      "Computer Awareness",
      "Typing Test Guidance"
    ]),
    exams: [
      "SSC CGL (Tier I & II)",
      "SSC CHSL (10+2)",
      "SSC MTS & Havaldar",
      "SSC Selection Posts",
      "SSC CPO (Sub-Inspector)",
      "SSC GD Constable",
      "IB ACIO"
    ],
    examsJson: JSON.stringify([
      "SSC CGL (Tier I & II)",
      "SSC CHSL (10+2)",
      "SSC MTS & Havaldar",
      "SSC Selection Posts",
      "SSC CPO (Sub-Inspector)",
      "SSC GD Constable",
      "IB ACIO"
    ]),
    curriculum: [
      {
        subject: "Quantitative Aptitude & Advance Maths",
        topics: "Percentages, Profit & Loss, Geometry, Trigonometry, Mensuration, Algebra, Statistics."
      },
      {
        subject: "General Awareness",
        topics: "History, Polity, Geography, Economy, General Science (Physics, Chemistry, Biology)."
      },
      {
        subject: "General Intelligence",
        topics: "Analogies, Classifications, Series, Non-Verbal Reasoning, Venn Diagrams."
      },
      {
        subject: "English Comprehension",
        topics: "Grammar, Active/Passive Voice, Direct/Indirect Speech, Idioms, Vocab."
      }
    ],
    curriculumJson: JSON.stringify([
      {
        subject: "Quantitative Aptitude & Advance Maths",
        topics: "Percentages, Profit & Loss, Geometry, Trigonometry, Mensuration, Algebra, Statistics."
      },
      {
        subject: "General Awareness",
        topics: "History, Polity, Geography, Economy, General Science (Physics, Chemistry, Biology)."
      },
      {
        subject: "General Intelligence",
        topics: "Analogies, Classifications, Series, Non-Verbal Reasoning, Venn Diagrams."
      },
      {
        subject: "English Comprehension",
        topics: "Grammar, Active/Passive Voice, Direct/Indirect Speech, Idioms, Vocab."
      }
    ])
  },
  {
    code: 'ssc-banking-combo',
    title: 'SSC + Banking Combo',
    category: 'competitive',
    tag: 'Most Popular / Maximum Value',
    feeDisplay: '₹27,999',
    feeSubtext: 'Including GST',
    validity: '3 Years Extended Validity',
    timings: 'Flexible Schedule',
    batches: 'Morning, Afternoon & Weekend',
    eligibility: "Bachelor's Degree / Final Year Students",
    description: 'Complete unified preparation pathway maximizing selection probability across Central Government and Nationalized Banking recruitments simultaneously.',
    featured: true,
    subjects: [
      "Unified Quantitative Aptitude & Advance Maths",
      "Logical Reasoning & High-Level Puzzles",
      "Advanced English",
      "General Awareness & Static GK",
      "Banking Systems",
      "Computer & Typing"
    ],
    subjectsJson: JSON.stringify([
      "Unified Quantitative Aptitude & Advance Maths",
      "Logical Reasoning & High-Level Puzzles",
      "Advanced English",
      "General Awareness & Static GK",
      "Banking Systems",
      "Computer & Typing"
    ]),
    exams: [
      "All Banking Exams (IBPS, SBI, RBI, LIC)",
      "All SSC Exams (CGL, CHSL, CPO, MTS)",
      "Insurance & Intelligence Bureau"
    ],
    examsJson: JSON.stringify([
      "All Banking Exams (IBPS, SBI, RBI, LIC)",
      "All SSC Exams (CGL, CHSL, CPO, MTS)",
      "Insurance & Intelligence Bureau"
    ]),
    curriculum: [
      {
        subject: "Dual Syllabus Integration",
        topics: "Complete coverage of Banking high-speed arithmetic, multi-variable puzzles and financial awareness PLUS SSC advance math, geometry, polity, history and general science."
      }
    ],
    curriculumJson: JSON.stringify([
      {
        subject: "Dual Syllabus Integration",
        topics: "Complete coverage of Banking high-speed arithmetic, multi-variable puzzles and financial awareness PLUS SSC advance math, geometry, polity, history and general science."
      }
    ])
  },
  {
    code: 'foundation',
    title: 'School Foundation Course',
    category: 'school',
    tag: 'Classes 8th, 9th & 10th',
    feeDisplay: 'From ₹18,000',
    feeSubtext: '10 Months Academic Year',
    validity: 'Full Academic Year',
    timings: '6:30 PM – 8:00 PM (6 Days / Week)',
    batches: 'Evening Batches',
    eligibility: 'Students of 8th, 9th, and 10th Standards',
    description: 'Early conceptual foundation building for School Board excellence (State / CBSE / ICSE) and early aptitude grounding for future competitive exams.',
    featured: false,
    subjects: [
      "Mathematics (Concept & Problem Solving)",
      "Science (Physics, Chemistry, Biology)",
      "Logical Thinking",
      "English & Vocabulary",
      "Early Aptitude Grounding"
    ],
    subjectsJson: JSON.stringify([
      "Mathematics (Concept & Problem Solving)",
      "Science (Physics, Chemistry, Biology)",
      "Logical Thinking",
      "English & Vocabulary",
      "Early Aptitude Grounding"
    ]),
    exams: [
      "State Board",
      "CBSE Board",
      "ICSE Board",
      "Olympiads & NTSE Readiness"
    ],
    examsJson: JSON.stringify([
      "State Board",
      "CBSE Board",
      "ICSE Board",
      "Olympiads & NTSE Readiness"
    ]),
    curriculum: [
      {
        subject: "Board Alignment & Concept Mastery",
        topics: "Line-by-line coverage for State, CBSE, and ICSE boards with weekly mock assessments."
      },
      {
        subject: "Aptitude & Mental Ability",
        topics: "Mental math shortcuts, pattern recognition, spatial reasoning and problem solving."
      }
    ],
    curriculumJson: JSON.stringify([
      {
        subject: "Board Alignment & Concept Mastery",
        topics: "Line-by-line coverage for State, CBSE, and ICSE boards with weekly mock assessments."
      },
      {
        subject: "Aptitude & Mental Ability",
        topics: "Mental math shortcuts, pattern recognition, spatial reasoning and problem solving."
      }
    ])
  }
];

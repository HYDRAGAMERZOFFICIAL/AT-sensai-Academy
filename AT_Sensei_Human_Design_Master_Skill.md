# AT SENSEI ACADEMY — HUMAN-MADE WEBSITE DESIGN & VIBE-CODING MASTER SKILL

## PURPOSE
This is the single master skill/directive for building and polishing the AT Sensei Academy website.

The website must look deliberately designed by a skilled human designer and frontend developer — NOT like a generic AI-generated website.

Brand:
- AT Sensei Academy
- LEARN TODAY LEAD TOMORROW
- Competitive Exams • Banking • SSC • School Foundation

The experience should feel modern, academic, premium, trustworthy, aspirational, Indian, distinctive, responsive, fast, accessible and conversion-focused without becoming a sales-heavy template.

---

## 1. ANTI-AI / ANTI-SLOP RULES

Do NOT create:
- Generic SaaS layouts
- Generic EdTech templates
- Purple/blue gradient backgrounds
- Excessive glassmorphism
- Excessive rounded cards
- Repetitive 3-card or 6-card grids
- Every section using the same structure
- Giant meaningless hero slogans
- Excessive shadows
- Neon/glowing effects
- Random blobs and abstract 3D shapes
- Generic AI-generated student imagery when real academy imagery is available
- Fake statistics
- Fake testimonials
- Fake rankings or success percentages
- Fake urgency/countdowns
- Excessive pill buttons
- Emoji-heavy UI
- Bouncing everything
- Typewriter effects everywhere
- Gradient text everywhere
- “Revolutionary / unlock your potential” AI-style copy

Human-made means intentional, polished and art-directed — not messy.

---

## 2. DESIGN BEFORE CODE

Before implementing any page, establish:
1. Visual direction
2. Color system
3. Typography
4. Spacing
5. Layout
6. Image treatment
7. Component language
8. Motion language
9. Responsive behavior
10. Accessibility

For every section ask:
- Why does it exist?
- What should the user notice first?
- What action should follow?
- How is it visually different from the previous section?
- Does it reinforce AT Sensei identity?

---

## 3. BRAND COLOR SYSTEM

The following HEX values are a working digital approximation based on the supplied catalog, not confirmed official corporate specifications.

Deep Navy: #071A4D
Academy Blue: #5367B8
Sensei Red: #D92820
Gold / Yellow: #F2D12E
White: #FFFFFF
Soft Background: #F5F7FB
Primary Text: #172033
Muted Text: #5E6678
Border: #DDE2EC

Color roles:
- Navy = structure
- White = breathing room
- Blue = supporting UI
- Red = action/emphasis
- Gold = achievement

Do not use all colors equally.

Avoid:
- Purple gradients
- Rainbow palettes
- Neon colors
- Excessive red
- Random accent colors
- Gradient text for ordinary headings

---

## 4. ACCESSIBLE COLOR

Target WCAG 2.2 AA where applicable.
- Normal text: at least 4.5:1 contrast
- Large text: at least 3:1
- Important UI controls must have adequate contrast
- Never communicate meaning by color alone
- Focus states must be clearly visible

---

## 5. TYPOGRAPHY

Typography must create hierarchy and personality.

Suggested:
- UI/body: Manrope or a comparable clean contemporary sans-serif
- Display: Manrope ExtraBold or another strong display weight
- Optional editorial accent: restrained Playfair Display Italic

Do not use more than a small number of font families.

Use:
- Large display headings
- Strong weight contrast
- Short editorial headlines
- Controlled line length
- Occasional italic emphasis
- Deliberate line breaks
- Left-aligned compositions where appropriate

Avoid:
- Everything centered
- One font size everywhere
- Long centered paragraphs
- Tiny body copy
- Random font switching

---

## 6. EDITORIAL COMPOSITION

Do not center every section.

Use:
- Asymmetric grids
- Split layouts
- Full-width sections
- Large whitespace
- Offset content
- Editorial columns
- Overlapping images
- Numbered sections
- Thin rules
- Large statement typography
- Image/text relationships

Negative space is intentional.

Avoid turning the whole website into floating cards.

---

## 7. CARD DISCIPLINE

Cards are allowed only when they solve a real structural problem.

Prefer:
- Typography
- Dividers
- Borders
- Numbering
- Background changes
- Editorial blocks
- Image composition
- Whitespace

Avoid:
[Card] [Card] [Card]
[Card] [Card] [Card]
throughout the whole page.

---

## 8. CORNERS AND SHADOWS

Use rounded corners selectively.

Do not use:
- border-radius: 9999px everywhere
- Giant rounded cards
- Floating everything

Use shadows sparingly. Prefer depth through:
- Layering
- Contrast
- Borders
- Photography
- Background shifts

---

## 9. IMAGE DIRECTION

Use real academy photography wherever possible:
- Classrooms
- Mentors
- Students
- Workshops
- Events
- Campus

Do not substitute generic AI students for authentic institutional imagery.

Use:
- Intentional crops
- Different aspect ratios
- Full-bleed photography
- Clip-path reveals
- Overlaps
- Subtle hover zoom

Avoid repeating identical image cards.

---

## 10. HOMEPAGE STRUCTURE

Recommended flow:
1. Hero
2. Awareness / Guidance / Preparation philosophy
3. Find Your Path
4. Why Government Career?
5. 5 Jutsu for Exam Success
6. Programs
7. Mentors
8. Classroom / Gallery
9. Free Career Awareness Workshop
10. Verified Results / Testimonials
11. FAQ
12. Final CTA
13. Contact / Location
14. Footer

Each section must have a different visual rhythm.

---

## 11. HERO

Suggested structure:

Eyebrow:
COMPETITIVE EXAMS • BANKING • SSC • FOUNDATION

Headline:
LEARN TODAY.
LEAD TOMORROW.

Supporting idea:
Right awareness + right guidance + systematic preparation = a better career.

CTA:
Explore Programs

Secondary:
Register / Free Awareness Workshop

Use a real academy image where possible.

Hero should be one of the major signature visual moments.

---

## 12. HERO MOTION

Sequence:
1. Background/image establishes
2. Eyebrow appears
3. Headline reveals line-by-line
4. Supporting copy follows
5. CTA appears
6. Small brand accent settles into position

Use staggered timing.

Suggested timing:
- Micro: 150–250ms
- Normal: 250–400ms
- Section: 500–800ms
- Hero/signature: 800–1400ms

Do not animate everything simultaneously.

---

## 13. MASTER MOTION SYSTEM

Motion exists to communicate hierarchy, continuity, feedback and state.

Level 1 — Micro interaction:
150–250ms
- Button hover
- Underline
- Icon movement
- Focus state
- Small image zoom

Level 2 — Component:
250–400ms
- Accordion
- Menu
- Tabs
- Program switching
- Modal

Level 3 — Section:
500–800ms
- Image reveal
- Text reveal
- Scroll entrance
- Editorial transition

Level 4 — Signature:
600–1400ms
Use only 2–3 across the site:
- Hero reveal
- 5 Jutsu progression
- Major program transition

---

## 14. EASING

Use context-specific easing:
- Enter: ease-out
- Exit: ease-in
- Movement: ease-in-out
- Major editorial movement: appropriate custom cubic-bezier

Never use:
transition: all 0.3s ease;

Prefer targeted properties:
- transform
- opacity
- color
- background-color
- border-color

---

## 15. ANIMATION PERFORMANCE

Prefer GPU-friendly:
- transform
- opacity

Avoid unnecessary animation of:
- width
- height
- top
- left
- margin
- padding

Use:
- CSS transitions
- CSS animations
- IntersectionObserver
- Motion/Framer Motion when genuinely useful

Do not add a massive animation library for one tiny effect.

Optimize images and lazy-load below-the-fold content.

---

## 16. SCROLL REVEALS

Good:
- Heading reveal
- Image clip reveal
- Staggered list
- Number progression
- Accent movement

Bad:
- Every paragraph flying in
- Every card coming from a different direction
- Excessive parallax
- Constant movement

A good default:
opacity 0 → 1
translateY(20px) → 0

Vary timing according to context rather than mechanically applying the same animation everywhere.

---

## 17. 5 JUTSU SIGNATURE EXPERIENCE

Use the academy's exact progression:

01 — Understand syllabus & pattern
02 — Prioritize quality over quantity
03 — Active recall & spaced repetition
04 — Mock tests & time management
05 — Consistent routine
→ SUCCESS

Make it feel like a journey.

Possible interaction:
01 → 02 → 03 → 04 → 05 → SUCCESS

Use a progress line, active typography, changing emphasis or scroll choreography.

Do NOT make five identical cards.

SUCCESS should receive stronger visual emphasis.

---

## 18. PROGRAM DESIGN

Programs:
- Banking Programme
- SSC Programme
- SSC + Banking
- Foundation Course

Prefer an editorial selector/list over four identical cards.

Example:
PROGRAMMES

01 BANKING
02 SSC
03 SSC + BANKING
04 FOUNDATION

The selected program can expand or visually dominate.

---

## 19. VERIFIED PROGRAM DATA

Banking:
- Subjects: Quantitative Aptitude, Logical Reasoning, English, Current Affairs, Banking/Financial Awareness, Computer Awareness
- Exams: IBPS PO/Clerk, LIC AAO/ADO, SBI PO/Clerk, RBI Asst./Grade B, NIACL AO/Asst., RRB PO/Clerk, UIIC AO/Asst., other Bank Exams
- Eligibility: Any Bachelor's Degree
- Fee: ₹16,999 including GST
- Timings: 10–12 and 1–3
- Batches: Morning, Afternoon
- Validity: 3 years

SSC:
- Subjects: Quantitative Aptitude, Logical Reasoning, English, Current Affairs, General Awareness, Computer Awareness, Typing Test
- Exams/roles: CGL, Selection Post, CHSL, IB ACIO, MTS, IB SA/MTS, CPO, GD Constable, Stenographer; SI Delhi Police/CISF/BSF/CRPF/SSB, Sub Inspector CBI, Inspector Excise & CBN, Income Tax Inspector, AAO, Assistant Accounts Officer, Central Excise Inspector, Tax Assistant, MTS, LDC
- Eligibility: SSLC / PUC / Degree
- Fee: ₹18,999 including GST
- Timings: 10–12 and 1–3
- Batches: Morning, Afternoon, Weekend
- Validity: 3 years

SSC + Banking:
- Fee: ₹27,999 including GST
- Timings: 10–12 and 1–3
- Batches: Morning, Afternoon, Weekend
- Validity: 3 years

Foundation:
- Boards: State Board, CBSE, ICSE
- Classes: 8th, 9th, 10th
- Focus: conceptual fundamentals, analytical thinking, problem solving, exam-style practice
- Time: 6:30–8:00 PM
- Frequency: weekly 6 days
- Duration: 10 months / full academic year
- Fees:
  - 8th: State ₹18,000 / CBSE ₹18,000 / ICSE ₹22,000
  - 9th: State ₹18,000 / CBSE ₹20,000 / ICSE ₹25,000
  - 10th: State ₹22,000 / CBSE ₹25,000 / ICSE ₹30,000

Never invent discounts, guarantees, success percentages, rankings or partnerships.

---

## 20. MENTORS

Mohan Sensei
- Bachelor of Engineering
- 5 years teaching experience
- UPSC / KPSC

Anikethana Sensei
- Master of Physics
- 3 years
- CBSE / ICSE / IGCSE

Tansen Sensei
- Bachelor of Science
- 4 years
- Aptitude Trainer

Prefer large photography + editorial metadata rather than identical profile cards.

Hover can:
- subtly zoom image
- shift text
- expand an underline/accent

Mobile must not depend on hover.

---

## 21. FREE AWARENESS WORKSHOP

Career & Competitive Exam Awareness Workshop:
- Duration: 45–90 minutes
- Audience: students 8–10, PUC, degree students, active aspirants
- Cost: 100% FREE
- Outcomes:
  - Government career awareness
  - Competitive-exam pathways
  - Preparation/career direction clarity
  - Motivation to begin systematic preparation

The workshop should feel educational, not manipulative.

No fake countdowns or scarcity.

---

## 22. CTA / BUTTON MOTION

Use specific labels:
- Explore Programs
- Register Now
- Join the Awareness Workshop
- Talk to the Academy
- View Course Details
- Get Directions

Button interactions:
- 3–6px arrow movement
- subtle translateY
- subtle scale
- background/border transition
- tactile pressed state

Avoid huge bouncing effects.

---

## 23. NAVBAR

Desktop:
- Logo
- Programs
- Why Government Career
- 5 Jutsu
- Mentors
- Workshop
- Contact
- Register CTA

On scroll:
- subtly compress
- change from transparent to solid when appropriate
- 250–400ms transition

Do not make navigation disappear unpredictably.

---

## 24. MOBILE-FIRST RESPONSIVENESS

Mobile is a deliberate composition, not a shrunken desktop.

Rules:
- comfortable touch targets
- readable text
- no horizontal overflow
- no hover-only interactions
- reduced decorative motion
- preserved hierarchy
- intentional image crops
- clear CTA

Test:
- desktop
- laptop
- tablet
- large mobile
- small mobile

Use clamp() selectively for fluid typography.

---

## 25. ACCESSIBILITY / REDUCED MOTION

Respect:
prefers-reduced-motion: reduce

When enabled:
- remove major parallax
- reduce transforms
- reduce stagger
- shorten transitions
- keep content visible

Never hide important content behind animation.

Ensure:
- keyboard navigation
- visible focus
- accessible names
- correct semantic headings
- meaningful alt text
- decorative images appropriately marked

---

## 26. INTERACTION DESIGN

Every interaction follows:

TRIGGER → RESPONSE → FEEDBACK → COMPLETION

Example:
Program hover:
→ image subtly scales
→ title shifts
→ accent line expands
→ user understands it is interactive

FAQ:
→ answer expands
→ icon rotates
→ active state stays visible

Form:
→ loading
→ success/error
→ clear next step

Never leave the user unsure whether an action worked.

---

## 27. LOADING / ERROR STATES

Do not create skeletons everywhere.

For important actions:
Submitting...
then:
Registered
or:
Something went wrong. Please try again.

Do not artificially delay users.

---

## 28. PAGE TRANSITIONS

If supported by the framework:
- subtle outgoing fade/slide
- subtle incoming reveal
- cohesive but nearly invisible

Do not use dramatic wipes on every route.

---

## 29. VISUAL DEPTH

Create depth with:
- photography
- typography scale
- layering
- borders
- whitespace
- cropping
- contrast
- restrained shadows

Do NOT rely on:
- neon mesh
- glowing blobs
- holograms
- generic AI illustrations
- futuristic 3D objects

This is an education academy, not a cyberpunk startup.

---

## 30. SECTION RHYTHM

Example:
Hero → dark/high impact
Philosophy → light/spacious
Programs → editorial/structured
Why Government Career → storytelling
5 Jutsu → interactive progression
Mentors → photography-driven
Workshop → high-contrast CTA
FAQ → calm/minimal
Footer → dark/structured

Avoid identical backgrounds and components throughout.

---

## 31. DECORATIVE BRAND MOTIFS

Use a small recurring visual vocabulary:
- 01 / 02 / 03 numbering
- thin rules
- red underline
- gold dot
- navy blocks
- editorial labels
- subtle grid
- directional/“Sensei” inspired details

Repeat intentionally. Do not scatter random shapes.

---

## 32. HUMAN-MADE MICRO DETAILS

Use small quality details:
- arrow movement
- underline reveal
- image crop shift
- consistent invisible grid
- tactile button press
- moving active nav indicator
- FAQ icon rotation
- animated program active line
- subtle footer link reveal

Small intentional details are more valuable than giant effects.

---

## 33. COPY STYLE

Sound like a real academy.

Prefer:
- “Understand the exam before you prepare for it.”
- “Build the fundamentals. Practice with purpose.”
- “Know the path. Follow a system. Stay consistent.”

Avoid:
- “Unlock your limitless potential.”
- “Revolutionizing the future of learning.”
- “Where innovation meets excellence.”
- generic motivational AI language

---

## 34. TRUST / LEGAL SAFETY

Never invent:
- selection numbers
- success percentages
- government affiliations
- official rankings
- awards
- accreditations
- partnerships
- faculty credentials
- testimonials
- job guarantees
- exam guarantees

Do not use fake scarcity.

Do not use misleading countdowns.

Do not preselect marketing consent.

Do not hide fees.

Use only verified institutional information.

---

## 35. TESTIMONIALS / RESULTS

Only publish genuine, approved testimonials and verified results.

If testimonials are unavailable:
Do not fabricate them.

Instead omit the section or state that student experiences will be published when available.

---

## 36. FORMS / PRIVACY

Keep forms minimal and purposeful.

Potential fields:
- Name
- Phone
- Email
- Course/interest
- Education level
- Preferred batch
- Parent/guardian information where appropriate
- Required consent

Do not collect unnecessary sensitive information.

Validate server-side.

Protect against spam.

Never store payment card information.

Use hosted/tokenized payment processing when payments are implemented.

---

## 37. MINORS / FOUNDATION

Foundation covers classes 8–10.

Design forms and data handling with minors in mind.

Parent/guardian consent requirements should be reviewed before production.

Do not publicly expose student personal information.

Do not publish identifiable student photos without appropriate permission.

---

## 38. SECURITY BASELINE

Never put in frontend code:
- API secrets
- DB passwords
- private tokens
- payment secrets
- admin credentials

Use environment variables.

Authorization must be server-side.

Protect:
- forms
- APIs
- uploads
- admin routes
- authentication
- payment callbacks
- webhooks

Use:
- input validation
- rate limiting
- safe upload validation
- meaningful audit/security logs
- dependency updates
- backups

---

## 39. SEO

Every page should have:
- unique title
- meta description
- correct heading hierarchy
- descriptive URL
- Open Graph metadata
- appropriate structured data
- image alt text
- canonical handling where necessary

Use natural relevant search terms. Do not keyword stuff.

---

## 40. PERFORMANCE

Prioritize real-world speed.

Optimize:
- images
- fonts
- JavaScript
- CSS
- animation
- third-party scripts

Use:
- responsive images
- lazy loading
- modern formats where appropriate
- code splitting
- minimal dependencies
- efficient animations

---

## 41. DESIGN TOKENS

Use reusable tokens.

Colors:
--color-navy
--color-blue
--color-red
--color-gold
--color-white
--color-bg
--color-text
--color-muted
--color-border

Spacing:
--space-1
--space-2
--space-3
--space-4
--space-6
--space-8
--space-12
--space-16
--space-24
--space-32

Motion:
--duration-fast
--duration-normal
--duration-slow
--ease-standard
--ease-enter
--ease-exit

Do not scatter random values everywhere.

---

## 42. COMPONENT PHILOSOPHY

Useful components:
- Navbar
- Button
- SectionLabel
- EditorialHeading
- ProgramSwitcher
- MentorFeature
- JutsuProgress
- FAQ
- RegistrationForm
- WorkshopCTA
- Footer
- ImageReveal
- ScrollReveal

Build reusable components without forcing every section into one generic Card component.

---

## 43. DESIGN VARIANCE RULE

If three consecutive sections use the same:
- layout
- card style
- heading structure
- background
- image treatment
- animation

redesign at least one.

The page must have rhythm.

---

## 44. AI SLOP BAN LIST

Reject designs with excessive:
- purple gradients
- blue-purple gradients
- glassmorphism
- giant rounded cards
- dashboard-style floating panels
- generic three-column grids
- blobs
- AI-generated people
- generic 3D illustrations
- neon glows
- excessive shadows
- pill buttons
- repeated feature cards
- fake metrics
- fake reviews
- random icons
- random emojis
- excessive parallax
- bouncing objects
- typewriter text
- gradient text
- generic motivational copy

If it could be mistaken for a generic AI-generated landing page, redesign it.

---

## 45. FINAL DESIGN REVIEW

### Brand
[ ] Clearly feels like AT Sensei Academy
[ ] Navy/red/gold identity is restrained
[ ] Educational and trustworthy

### Composition
[ ] Visually varied
[ ] Good negative space
[ ] Not overly symmetrical
[ ] Not everything is a card
[ ] Strong hierarchy

### Typography
[ ] Clear heading hierarchy
[ ] Comfortable line lengths
[ ] Intentional weights
[ ] Deliberate line breaks

### Color
[ ] Guides attention
[ ] Red is restrained
[ ] Contrast is accessible
[ ] No unnecessary gradients

### Imagery
[ ] Real academy imagery where possible
[ ] Intentional crops
[ ] Authentic feel
[ ] Alt text

### Motion
[ ] Every animation has a purpose
[ ] Only 2–3 major signature moments
[ ] Appropriate timing/easing
[ ] Subtle hover/focus
[ ] Reduced-motion support

### Responsive
[ ] Mobile feels intentionally designed
[ ] Touch-friendly
[ ] No overflow
[ ] No hover dependency

### Trust
[ ] Claims verified
[ ] Testimonials genuine
[ ] Fees accurate
[ ] No fake scarcity
[ ] Privacy-conscious forms

### Technical
[ ] No secrets in frontend
[ ] Server-side authorization
[ ] Input validation
[ ] Secure uploads
[ ] Rate limiting where appropriate
[ ] Optimized images
[ ] Fast load
[ ] Keyboard accessible

---

## 46. FINAL QUALITY GATE

Ask:

“Could someone tell that an AI made this?”

If YES, identify the cause and redesign.

Typical causes:
- too many cards
- too much symmetry
- generic copy
- generic colors
- excessive gradients
- repetitive sections
- weak typography
- no authentic imagery
- no visual storytelling
- excessive animation
- poor spacing rhythm

Then ask:

“Does this look like a premium real coaching academy website?”

If NO, improve typography, photography, layout, content hierarchy, motion, spacing, brand consistency and trust.

Then ask:

“Would a student or parent immediately understand what AT Sensei Academy offers?”

If NO, improve information hierarchy.

---

## 47. IMPLEMENTATION PRIORITY

Priority order:

1. Accuracy
2. Usability
3. Accessibility
4. Performance
5. Brand identity
6. Visual hierarchy
7. Interaction quality
8. Animation
9. Decorative effects

Never reverse this order.

---

## MASTER VIBE-CODING DIRECTIVE

Build AT Sensei Academy as a deliberately art-directed, human-made educational brand experience: strong typography, authentic photography, editorial/asymmetric layouts, restrained navy/red/gold branding, purposeful motion, tactile interactions, responsive composition, accessibility, performance, verified content, and ZERO generic AI-slop patterns such as card grids, purple gradients, excessive glassmorphism, fake metrics, fake testimonials or meaningless animation.

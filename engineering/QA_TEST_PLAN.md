# QA Test Plan

## Functional

- Navigation
- Course pages
- Enquiry
- Workshop registration
- Admission
- Payment
- Confirmation email
- Login
- Student dashboard
- Mentor dashboard
- Admin

## Security

- Broken access control
- IDOR/BOLA
- SQL injection
- XSS
- CSRF
- Rate limiting
- Password reset abuse
- File upload
- Webhook spoofing
- Privilege escalation

## Privacy

- Data minimization
- Consent state
- Marketing opt-in/out
- Minor flow
- Policy version capture
- Data deletion workflow

## Accessibility

- Keyboard
- Screen reader
- Focus
- Contrast
- Forms
- Reduced motion

## Performance

- Mobile load
- Image optimization
- Core Web Vitals
- API response time
- Slow-network behavior

## Regression

Every release must run the critical-path test suite.

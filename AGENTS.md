# AI Coding Agent Rules — AT Sensei Academy

You are working on a production-intended education/coaching platform for an Indian institution.

## 1. Source-of-truth hierarchy

Use this order:

1. Approved institution content and documents.
2. `docs/CONTENT_SOURCE_OF_TRUTH.md`.
3. Approved product requirements.
4. Approved architecture/security requirements.
5. General engineering best practices.

If a fact is missing, stop and mark it `TBD`; do not invent it.

## 2. Legal safety

Do not claim that the application is legally compliant merely because tests pass.

Never:
- fabricate a legal requirement;
- fabricate an accreditation;
- fabricate exam results;
- fabricate student success rates;
- fabricate government affiliation;
- copy another site's legal policy;
- scrape copyrighted coaching material;
- add deceptive urgency/scarcity;
- pre-check marketing consent;
- collect unnecessary sensitive data.

All legal policy changes require review of `legal/LEGAL_REVIEW_GATE.md`.

## 3. Privacy-by-design

Default to data minimization.

For every new data field ask:
- Why is it required?
- What exact purpose does it serve?
- Is it optional?
- How long is it retained?
- Who can access it?
- Is a parent/guardian involved?
- Can we avoid collecting it?

Do not collect Aadhaar, PAN, biometric data, health data, caste/religion, or other sensitive/high-risk data for convenience.

## 4. Children

The Foundation course targets classes 8–10. Treat the system as capable of handling minors.

For minors:
- collect only necessary data;
- avoid targeted advertising/profiling;
- implement a parent/guardian consent workflow where required;
- store consent evidence;
- provide a clear parent-facing notice;
- do not expose minor profiles publicly;
- restrict mentor/admin access by role.

## 5. Authentication and authorization

- Hash passwords using a modern password hashing algorithm.
- Never store plaintext passwords.
- Use secure session handling.
- Use MFA for privileged administrator accounts where supported.
- Enforce authorization on the server.
- Use least privilege.
- Rate-limit login, password reset, OTP and public registration endpoints.
- Invalidate sessions on logout/password reset where appropriate.

## 6. API rules

Every API must have:
- authentication requirement;
- authorization policy;
- input validation;
- output schema;
- rate-limit decision;
- error behavior;
- audit/logging decision;
- privacy classification.

Never return entire database records by default.

## 7. Payments

Never process or store raw card numbers, CVV or payment credentials.

Use an established payment gateway's hosted/SDK/tokenized flow.

Verify payment status server-side using the gateway's signed/webhook mechanism before marking an admission paid.

Do not trust a browser redirect as proof of payment.

## 8. Files

Uploads must:
- validate file type and size;
- use safe storage;
- use randomized names;
- prevent executable uploads;
- enforce access control;
- scan where appropriate;
- avoid public buckets for private student documents.

## 9. Database

Use:
- migrations;
- foreign keys;
- constraints;
- indexes;
- transactions for multi-step writes;
- soft deletion only when justified;
- audit history for important administrative actions.

Do not store secrets in database columns unless there is a documented secure design.

## 10. Logging

Never log:
- passwords;
- OTPs;
- authentication tokens;
- payment secrets;
- full identity documents;
- unnecessary personal data.

Use structured logs and correlation IDs.

## 11. Frontend

- Do not put secrets in client-side code.
- Do not trust client-side validation.
- Avoid dangerous HTML injection.
- Sanitize/escape user-controlled content.
- Use CSP/security headers where compatible.
- Respect reduced-motion preferences.
- Ensure keyboard accessibility.

## 12. AI-generated code

AI output is untrusted until reviewed.

Before accepting AI-generated code:
- inspect dependencies;
- inspect data flow;
- inspect authorization;
- inspect error handling;
- inspect secrets;
- inspect third-party network calls;
- run tests and security checks.

## 13. Change protocol

For any feature that changes:
- personal data;
- payment;
- minors;
- authentication;
- authorization;
- public claims;
- legal text;
- third-party tracking;
- user-generated content;

update the relevant docs and request human approval before production.

## 14. Never "solve" an error by weakening security

Do not:
- disable CSRF protection;
- disable certificate verification;
- make a bucket public;
- use `*` CORS for authenticated APIs without justification;
- remove authorization checks;
- expose database errors to users;
- hard-code credentials;
- bypass payment verification.

If a shortcut is necessary for local development, keep it development-only and document it.

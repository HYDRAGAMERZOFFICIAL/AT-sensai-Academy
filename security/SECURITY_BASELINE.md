# Security Baseline

## Threat model

Protect against:
- account takeover;
- credential stuffing;
- SQL injection;
- XSS;
- CSRF;
- SSRF;
- broken access control;
- IDOR/BOLA;
- malicious uploads;
- payment tampering;
- webhook spoofing;
- data leakage;
- admin privilege escalation;
- exposed secrets;
- dependency vulnerabilities;
- denial-of-service against public forms.

## Authentication

- Strong password policy.
- Modern password hashing.
- Secure cookies.
- Session expiration.
- Password reset with single-use expiring tokens.
- MFA for admins where available.
- Rate limits.

## Authorization

Use server-side RBAC/ABAC.

Minimum roles:
- visitor
- student
- parent/guardian
- mentor
- admissions
- finance
- content_manager
- support
- admin
- super_admin

Every sensitive endpoint must verify authorization.

## API security

- Input validation.
- Output encoding.
- Request size limits.
- Rate limits.
- CSRF protection where applicable.
- CORS allowlist.
- Security headers.
- Consistent error responses.

## Database

- Parameterized queries/ORM.
- Least-privilege DB user.
- Encrypted backups.
- No production DB credentials in source code.
- Migrations reviewed.
- Sensitive fields minimized.

## File uploads

- Allowlist MIME/extension.
- Size limits.
- Random filenames.
- Store outside executable web roots.
- Private-by-default.
- Signed URLs for private files.
- Malware scanning where appropriate.

## Payments

- Use gateway-hosted/tokenized payment.
- Verify webhooks cryptographically.
- Verify amount/currency/order server-side.
- Idempotent webhook processing.
- Never store CVV/card number.

## Logging

Log:
- authentication events;
- admin actions;
- payment state transitions;
- policy/consent changes;
- security events.

Do not log:
- passwords;
- OTPs;
- access tokens;
- card data;
- full identity documents.

## Infrastructure

- HTTPS.
- Managed secrets.
- Patch dependencies.
- Separate dev/staging/prod.
- Backups.
- Monitoring.
- Alerting.
- Recovery plan.

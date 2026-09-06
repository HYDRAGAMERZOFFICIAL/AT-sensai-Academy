# Security Baseline

## Application
- Server-side validation
- Strong authentication
- Authorization on every protected action
- Secure password hashing through framework-approved mechanisms
- Session protection
- CSRF protection where applicable
- Output encoding
- Parameterized database access
- File upload validation
- Rate limiting
- Abuse protection
- Secure error handling
- Security headers
- HTTPS only in production

## Admin
- Least privilege
- Separate admin roles
- MFA where supported
- Audit logs
- No shared accounts
- Periodic access review

## Secrets
- Never commit API keys/passwords
- Use environment variables/secrets manager
- Rotate compromised credentials
- Keep `.env` out of version control

## Dependencies
- Pin/lock dependencies
- Review vulnerabilities
- Remove unused packages
- Review licenses

## Payments
- Prefer hosted/tokenized payment flows
- Do not store raw card data
- Verify payment status server-side
- Verify webhooks securely
- Prevent duplicate orders

## AI coding
AI-generated code must pass security review before production.

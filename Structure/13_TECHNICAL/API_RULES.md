# API Rules

- Validate every request server-side.
- Authorize every protected resource.
- Never trust client-supplied role/user IDs.
- Use consistent status codes.
- Return safe error messages.
- Never expose secrets or internal stack traces.
- Validate uploaded files by type, size and content.
- Rate-limit public forms.
- Protect registration endpoints from spam/automation.
- Idempotently handle payment webhooks.
- Log security-relevant events without unnecessarily logging personal data.

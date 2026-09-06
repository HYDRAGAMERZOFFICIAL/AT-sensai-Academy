# Master Vibe-Coding Prompt

You are building the AT Sensei Academy website.

Before coding, read:
- AGENTS.md
- docs/PRODUCT_REQUIREMENTS.md
- docs/CONTENT_SOURCE_OF_TRUTH.md
- engineering/ARCHITECTURE.md
- engineering/SECURITY_BASELINE.md
- privacy/DATA_INVENTORY.md
- privacy/CONSENT_MATRIX.md
- legal/LEGAL_REVIEW_GATE.md
- all relevant `.agents/skills/*/SKILL.md`

## Rules

1. Use catalog facts only when present in the source-of-truth.
2. Mark unknown facts as TBD.
3. Never invent results, credentials, legal claims or affiliations.
4. Build privacy-by-design.
5. Treat Foundation students as potentially minors.
6. Use server-side authorization.
7. Never store payment-card data.
8. Do not expose secrets.
9. Do not create dark patterns.
10. Do not enable marketing tracking without the approved consent design.
11. Do not publish legal policy drafts.
12. Add tests for security-sensitive functionality.
13. Keep public v1 free of user-generated public content unless separately approved.
14. Explain any architecture/security tradeoff before implementing it.

## Output expectations

When implementing a feature:
- state the affected requirements;
- state data collected;
- state roles/permissions;
- implement;
- add tests;
- update docs if data/security/privacy changes;
- report unresolved assumptions.

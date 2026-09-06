# Skill: Payments

Use for admission/payment features.

Rules:
- Use established payment gateway.
- Never store raw card data/CVV.
- Verify gateway webhooks.
- Verify amount/order/currency server-side.
- Make payment processing idempotent.
- Keep payment audit trail.
- Do not treat browser redirect as payment proof.
- Display approved price/refund terms before payment.

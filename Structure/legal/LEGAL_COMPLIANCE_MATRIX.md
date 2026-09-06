# India legal/compliance applicability matrix

This is a planning matrix, not legal advice.

| Area | Why relevant | Engineering action | Status |
|---|---|---|---|
| DPDP Act 2023 | Website collects personal data | Data inventory, notice, consent/purpose controls, rights workflow, security | REVIEW |
| DPDP Rules 2025 | Operational requirements are phased | Design for future full compliance now | REVIEW |
| Child/minor data | Foundation targets classes 8–10 | Parent/guardian consent, minimization, restricted visibility | REQUIRED DESIGN |
| IT Act 2000 | Baseline cyber/legal framework | Secure systems, incident process | REVIEW |
| IT Rules 2021 | May matter if intermediary/user-content functionality exists | Keep UGC out of v1 unless needed; reassess if added | CONDITIONAL |
| CERT-In directions | Cybersecurity incident/logging obligations may apply depending on entity/system | Incident response, time sync, log retention strategy, reporting process | REVIEW |
| Consumer Protection Act 2019 | Coaching services are consumer-facing | Accurate offers, clear terms, complaint handling | REVIEW |
| E-Commerce Rules 2020 | May apply depending on online sale model | Review disclosures, payment/refund/cancellation flows | REVIEW |
| Dark Patterns guidelines | Avoid deceptive UX | No fake scarcity, hidden fees, forced consent, confusing buttons | REQUIRED DESIGN |
| Misleading advertising/endorsement guidelines | Marketing claims/testimonials | Evidence and consent register | REQUIRED |
| Copyright Act 1957 | Website/course content/media | Asset license register and takedown process | REQUIRED |
| Accessibility | Users with disabilities | WCAG 2.2 AA target as engineering best practice | REQUIRED |
| Tax/GST | Course/payment invoicing | Institution/accountant confirms tax treatment | REVIEW |
| Payment gateway rules | Online payments | Use compliant gateway; never store card credentials | REQUIRED DESIGN |

## Regulatory references

Use official sources in `docs/REGULATORY_REFERENCES.md`.

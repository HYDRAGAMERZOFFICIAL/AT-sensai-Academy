# Personal Data Inventory

This is an engineering control document.

| Data | Person | Purpose | Required? | Source | Storage | Access roles | Retention | Deletion | Consent/legal basis | Risk |
|---|---|---|---|---|---|---|---|---|---|---|
| Name | Student/parent | Enquiry/admission | Yes | User | DB | Admissions | TBD | TBD | TBD | Medium |
| Phone | Student/parent | Contact | Yes | User | DB | Admissions | TBD | TBD | TBD | Medium |
| Email | Student/parent | Communication | Conditional | User | DB | Admissions | TBD | TBD | TBD | Medium |
| Class | Student | Foundation eligibility | Yes | User | DB | Admissions/faculty | TBD | TBD | TBD | Medium |
| Parent details | Minor | Consent/contact | Conditional | Parent | DB | Admissions | TBD | TBD | TBD | High |
| Payment reference | Student | Reconciliation | Yes after payment | Gateway | DB | Finance/admin | TBD | TBD | TBD | High |
| Attendance | Student | Course delivery | Future | Faculty | DB | Faculty/admin | TBD | TBD | TBD | Medium |
| Marks/results | Student | Learning | Future | Faculty | DB | Student/faculty/admin | TBD | TBD | TBD | High |
| Photo | Student | Marketing/profile | Optional | Institution/user | Object storage | Content/admin | TBD | TBD | Permission | High |

Do not add fields to the product without updating this inventory.

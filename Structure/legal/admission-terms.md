# Admission Terms — DRAFT

**STATUS: INSTITUTION + LEGAL REVIEW REQUIRED**

## Required information

- Legal entity name
- Program
- Eligibility
- Batch
- Course duration
- Course validity
- Fee
- Tax
- Payment schedule
- Included services
- Excluded services
- Attendance rules
- Batch transfer rules
- Refund/cancellation rules
- Material access rules
- Assessment rules
- Certificate rules
- Student conduct rules
- Parent/guardian requirements
- Contact/grievance process

## Admission state model

ENQUIRY
→ APPLICATION_STARTED
→ APPLICATION_SUBMITTED
→ UNDER_REVIEW
→ APPROVED / REJECTED
→ PAYMENT_PENDING
→ PAYMENT_VERIFIED
→ ENROLLED
→ BATCH_ASSIGNED

Never mark a student `PAID` merely because a frontend redirect succeeded.

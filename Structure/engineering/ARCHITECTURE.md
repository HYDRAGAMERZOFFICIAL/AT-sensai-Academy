# Recommended Architecture

## Public web

- Responsive frontend
- Server/API backend
- CMS/admin for approved content
- Database
- Object storage
- Payment gateway only if online payments are enabled
- Email/SMS/WhatsApp provider as required

## Logical boundaries

PUBLIC
→ API
→ APPLICATION SERVICES
→ DATABASE / OBJECT STORAGE
→ EXTERNAL PROVIDERS

## Future student platform

Roles:
Visitor → Student/Parent → Mentor → Admissions/Finance → Admin

## Security boundary

Never allow browser code to:
- access database credentials;
- directly modify privileged data;
- decide payment success;
- decide role/permissions.

## Suggested modules

- content
- enquiries
- workshops
- admissions
- courses
- batches
- students
- guardians
- attendance
- assessments
- payments
- notifications
- files
- testimonials
- audit logs
- policy/consent records

## Public v1 should remain simple

Do not introduce public comments, forums or social feeds unless there is a business need and a separate compliance review.

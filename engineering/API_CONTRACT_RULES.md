# API Contract Rules

Every endpoint specification must document:

- Method
- Path
- Auth
- Role
- Input schema
- Validation
- Output schema
- Errors
- Rate limit
- Audit requirement
- Data classification

Example:

POST /api/public/enquiries

Auth: public
Rate limit: strict
Input:
- name: string, max length
- phone: validated format
- email: optional valid email
- course_id: valid ID
- message: bounded length

Controls:
- anti-bot/rate limit
- server-side validation
- output escaping
- no internal error leakage

Audit:
- create enquiry event without logging unnecessary sensitive content

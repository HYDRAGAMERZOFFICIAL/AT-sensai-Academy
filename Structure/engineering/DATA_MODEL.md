# Data Model — Initial

## Core entities

Institution
Course
CourseSubject
Exam
Batch
Mentor
Workshop
WorkshopRegistration
Enquiry
Applicant
Guardian
Admission
Payment
Student
Enrollment
Attendance
Assessment
AssessmentResult
Assignment
StudyMaterial
Testimonial
MediaAsset
ConsentRecord
PolicyVersion
Notification
AuditLog

## Critical relationships

Course 1—N Batch
Course N—N Subject
Course N—N Exam
Mentor N—N Course
Student 1—N Enrollment
Student 1—N Attendance
Student 1—N AssessmentResult
Student 0—1 Guardian profile where applicable
Admission 1—N PaymentAttempt
ConsentRecord → Person + Purpose + PolicyVersion

## Rules

- Use immutable IDs.
- Use created_at/updated_at.
- Use foreign keys.
- Add indexes based on query patterns.
- Keep payment state transitions auditable.
- Keep consent/policy versions immutable.

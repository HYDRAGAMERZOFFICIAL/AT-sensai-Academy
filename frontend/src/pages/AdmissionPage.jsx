import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { EnquirySection } from '../components/enquiry/EnquirySection';

export function AdmissionPage() {
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get('course') || '';

  return (
    <div className="page-admission" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-16)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
        <span className="badge badge-blue" style={{ marginBottom: 'var(--space-2)' }}>Direct Admissions</span>
        <h1>Admission & Enrollment Portal</h1>
        <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
          Submit your application for immediate batch allocation and personalized consultation with AT Sensei academic counselors.
        </p>
      </div>

      <EnquirySection preselectedCourse={preselectedCourse} />
    </div>
  );
}

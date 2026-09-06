import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { ProgramSection } from '../components/programs/ProgramSection';
import { MethodologySection } from '../components/methodology/MethodologySection';
import { WorkshopBanner } from '../components/workshop/WorkshopBanner';
import { MentorSection } from '../components/mentors/MentorSection';
import { TransparencySection } from '../components/transparency/TransparencySection';
import { EnquirySection } from '../components/enquiry/EnquirySection';
import { FAQSection } from '../components/faq/FAQSection';
import { ContactSection } from '../components/contact/ContactSection';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  const handleEnrollSelect = (courseCode) => {
    navigate(`/admissions?course=${courseCode}`);
  };

  return (
    <div className="page-home">
      <HeroSection />
      <ProgramSection onEnrollSelect={handleEnrollSelect} />
      <MethodologySection />
      <WorkshopBanner />
      <MentorSection />
      <TransparencySection />
      <EnquirySection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

import React from 'react';
import { ExamTicker } from '../components/common/ExamTicker';
import { HeroSection } from '../components/hero/HeroSection';
import { CourseFinderBar } from '../components/common/CourseFinderBar';
import { PhilosophySection } from '../components/philosophy/PhilosophySection';
import { ProgramSection } from '../components/programs/ProgramSection';
import { CampusFacilities } from '../components/facilities/CampusFacilities';
import { WhyGovtCareer } from '../components/career/WhyGovtCareer';
import { MethodologySection } from '../components/methodology/MethodologySection';
import { MentorSection } from '../components/mentors/MentorSection';
import { WorkshopBanner } from '../components/workshop/WorkshopBanner';
import { TransparencySection } from '../components/transparency/TransparencySection';
import { FAQSection } from '../components/faq/FAQSection';
import { EnquirySection } from '../components/enquiry/EnquirySection';
import { ContactSection } from '../components/contact/ContactSection';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  const handleEnrollSelect = (courseCode) => {
    navigate(`/admissions?course=${courseCode}`);
  };

  return (
    <div className="page-home">
      <ExamTicker />
      <HeroSection />
      <CourseFinderBar />
      <PhilosophySection />
      <ProgramSection onEnrollSelect={handleEnrollSelect} />
      <CampusFacilities />
      <WhyGovtCareer />
      <MethodologySection />
      <MentorSection />
      <WorkshopBanner />
      <TransparencySection />
      <FAQSection />
      <EnquirySection />
      <ContactSection />
    </div>
  );
}

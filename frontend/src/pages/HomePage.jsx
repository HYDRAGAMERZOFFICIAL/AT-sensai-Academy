import React from 'react';
import { ExamTicker } from '../components/common/ExamTicker';
import { HeroSection } from '../components/hero/HeroSection';
import { CourseFinderBar } from '../components/common/CourseFinderBar';
import { PhilosophySection } from '../components/philosophy/PhilosophySection';
import { CampusFacilities } from '../components/facilities/CampusFacilities';
import { WhyGovtCareer } from '../components/career/WhyGovtCareer';
import { MethodologySection } from '../components/methodology/MethodologySection';
import { MentorSection } from '../components/mentors/MentorSection';
import { WorkshopBanner } from '../components/workshop/WorkshopBanner';
import { TransparencySection } from '../components/transparency/TransparencySection';
import { FAQSection } from '../components/faq/FAQSection';
import { EnquirySection } from '../components/enquiry/EnquirySection';
import { ContactSection } from '../components/contact/ContactSection';

export function HomePage() {
  return (
    <div className="page-home">
      <ExamTicker />
      <HeroSection />
      <CourseFinderBar />
      <PhilosophySection />
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

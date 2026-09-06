import React, { useState } from 'react';
import { TopBar } from './components/layout/TopBar';
import { Header } from './components/layout/Header';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { HeroSection } from './components/hero/HeroSection';
import { ProgramSection } from './components/programs/ProgramSection';
import { MethodologySection } from './components/methodology/MethodologySection';
import { WorkshopBanner } from './components/workshop/WorkshopBanner';
import { MentorSection } from './components/mentors/MentorSection';
import { TransparencySection } from './components/transparency/TransparencySection';
import { EnquirySection } from './components/enquiry/EnquirySection';
import { FAQSection } from './components/faq/FAQSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { CurriculumModal } from './components/programs/CurriculumModal';
import { WorkshopModal } from './components/workshop/WorkshopModal';
import { PolicyModal } from './components/policies/PolicyModal';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleEnrollSelect = (courseCode) => {
    setSelectedCourse(courseCode);
    const formSection = document.getElementById('admission-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      <TopBar />
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main id="main-content">
        <HeroSection />
        <ProgramSection onEnrollSelect={handleEnrollSelect} />
        <MethodologySection />
        <WorkshopBanner />
        <MentorSection />
        <TransparencySection />
        <EnquirySection preselectedCourse={selectedCourse} />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Global Modals */}
      <CurriculumModal />
      <WorkshopModal />
      <PolicyModal />
    </div>
  );
}

export default App;

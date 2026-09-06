import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/layout/TopBar';
import { Header } from './components/layout/Header';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { SenseiChatbot } from './components/common/SenseiChatbot';

// Dedicated Modular Pages
import { HomePage } from './pages/HomePage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { WorkshopPage } from './pages/WorkshopPage';
import { MentorsPage } from './pages/MentorsPage';
import { FeesPage } from './pages/FeesPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { PoliciesPage } from './pages/PoliciesPage';

// Global Modals
import { CurriculumModal } from './components/programs/CurriculumModal';
import { WorkshopModal } from './components/workshop/WorkshopModal';
import { PolicyModal } from './components/policies/PolicyModal';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-root">
        <TopBar />
        <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />
        <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:code" element={<ProgramDetailPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/workshop" element={<WorkshopPage />} />
            <Route path="/mentors" element={<MentorsPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/admissions" element={<AdmissionPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Floating Actions */}
        <FloatingWhatsApp />
        <SenseiChatbot />

        {/* Global Modals for Quick Actions */}
        <CurriculumModal />
        <WorkshopModal />
        <PolicyModal />
      </div>
    </BrowserRouter>
  );
}

export default App;

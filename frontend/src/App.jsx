import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SenseiChatbot } from './components/common/SenseiChatbot';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { TopBar } from './components/layout/TopBar';

// Dedicated Modular Pages
import { AccessDeniedPage } from './pages/AccessDeniedPage';
import { AdminPortalPage } from './pages/AdminPortalPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { FeesPage } from './pages/FeesPage';
import { HomePage } from './pages/HomePage';
import { MentorsPage } from './pages/MentorsPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { WorkshopPage } from './pages/WorkshopPage';

// Global Modals
import { PolicyModal } from './components/policies/PolicyModal';
import { CurriculumModal } from './components/programs/CurriculumModal';
import { WorkshopModal } from './components/workshop/WorkshopModal';
import { EnquiryModal } from './components/enquiry/EnquiryModal';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
            {/* Admin and Backend Temporarily Disabled in Standalone Frontend Mode */}
            <Route path="/sensei-admin" element={<AccessDeniedPage />} />
            <Route path="/403" element={<AccessDeniedPage />} />
            <Route path="/access-denied" element={<AccessDeniedPage />} />
            <Route path="/restricted" element={<AccessDeniedPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Floating AI Assistant */}
        <SenseiChatbot />

        {/* Global Modals for Quick Actions */}
        <CurriculumModal />
        <WorkshopModal />
        <EnquiryModal />
        <PolicyModal />
      </div>
    </BrowserRouter>
  );
}

export default App;

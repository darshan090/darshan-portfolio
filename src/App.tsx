import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { EngineeringFocusSection } from './sections/EngineeringFocusSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { ToastNotification } from './components/ToastNotification';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Content */}
      <main>
        <HeroSection 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenCaseStudy={() => setIsCaseStudyOpen(true)} 
        />
        
        <AboutSection />
        
        <ExperienceSection 
          onOpenCaseStudy={() => setIsCaseStudyOpen(true)} 
        />
        
        <ProjectsSection 
          onOpenCaseStudy={() => setIsCaseStudyOpen(true)} 
        />
        
        <SkillsSection />
        
        <EngineeringFocusSection />
        
        <EducationSection />
        
        <ContactSection 
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <CaseStudyModal 
        isOpen={isCaseStudyOpen} 
        onClose={() => setIsCaseStudyOpen(false)} 
      />

      <ResumeViewerModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Toast Notification */}
      <ToastNotification
        isOpen={toastMessage !== null}
        message={toastMessage || ''}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;

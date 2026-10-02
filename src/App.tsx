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
import { InitialPageLoader } from './components/animations/InitialPageLoader';
import { ProjectTransitionLoader } from './components/animations/ProjectTransitionLoader';

export function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isProjectLoading, setIsProjectLoading] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const handleTriggerCaseStudy = () => {
    if (isProjectLoading || isCaseStudyOpen) return;
    setIsProjectLoading(true);
  };

  const handleProjectLoaderComplete = () => {
    setIsProjectLoading(false);
    setIsCaseStudyOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Short Initial Page Entrance Loader */}
      {isInitialLoading && (
        <InitialPageLoader onComplete={() => setIsInitialLoading(false)} />
      )}

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Content */}
      <main className={`transition-opacity duration-500 ${isInitialLoading ? 'opacity-0' : 'opacity-100'}`}>
        <HeroSection 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenCaseStudy={handleTriggerCaseStudy} 
        />
        
        <AboutSection />
        
        <ExperienceSection 
          onOpenCaseStudy={handleTriggerCaseStudy} 
        />
        
        <ProjectsSection 
          onOpenCaseStudy={handleTriggerCaseStudy} 
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

      {/* Project Opening Transition Loader */}
      <ProjectTransitionLoader
        isOpen={isProjectLoading}
        onComplete={handleProjectLoaderComplete}
      />

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

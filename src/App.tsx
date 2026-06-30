import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import ResumeModal from './components/ResumeModal'
import { useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import { MotionConfig } from 'framer-motion'

function App() {
  const [showResume, setShowResume] = useState(false)

  return (
    <ErrorBoundary>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen overflow-x-hidden bg-transparent text-[var(--mono-text)]">
          <div className="geo-bg" />
          <Navbar />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:border focus:border-[var(--mono-accent)] focus:bg-[var(--mono-surface)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--mono-accent)]"
          >
            Skip to main content
          </a>
          <main id="main-content" className="relative z-10 w-full overflow-x-hidden px-0">
            <HeroSection onOpenResume={() => setShowResume(true)} />
            <ProjectsSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ContactSection />
          </main>
          <Footer />
          <ResumeModal open={showResume} onClose={() => setShowResume(false)} />
        </div>
      </MotionConfig>
    </ErrorBoundary>
  )
}

export default App

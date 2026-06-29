import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import LeadershipSection from './sections/LeadershipSection'
import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import ResearchSection from './sections/ResearchSection'
import ResumeModal from './components/ResumeModal'
import { useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [showResume, setShowResume] = useState(false)

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen overflow-x-hidden bg-transparent text-slate-100">
        <ParticlesBackground />
        <Navbar />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          Skip to main content
        </a>
        <main id="main-content" className="relative z-10 w-full overflow-x-hidden px-0">
          <HeroSection onOpenResume={() => setShowResume(true)} />
          <AboutSection />
          <ResearchSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <LeadershipSection />
          <ContactSection />
        </main>
        <Footer />
        <ResumeModal open={showResume} onClose={() => setShowResume(false)} />
      </div>
    </ErrorBoundary>
  )
}

export default App

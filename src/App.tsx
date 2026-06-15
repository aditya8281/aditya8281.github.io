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

function App() {
  const [showResume, setShowResume] = useState(false)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-slate-100">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10 w-full overflow-x-hidden px-0">
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
  )
}

export default App

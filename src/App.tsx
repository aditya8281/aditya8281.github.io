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

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-slate-100">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10 w-full px-0">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

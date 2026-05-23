import AboutSection from './sections/AboutSection'
import BackgroundEffects from './components/BackgroundEffects'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import LeadershipSection from './sections/LeadershipSection'
import Navbar from './components/Navbar'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-screen-2xl px-0">
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

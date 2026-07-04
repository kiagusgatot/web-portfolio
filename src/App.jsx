import { useState } from 'react'
import BackgroundVideo from './components/BackgroundVideo.jsx'
import SideNav from './components/SideNav.jsx'
import Hero from './components/Hero.jsx'
import TechStackSection from './components/TechStackSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useRevealOnScroll } from './hooks/useRevealOnScroll.js'
import { profile } from './data/profile.js'
import { experience } from './data/experience.js'
import { projects } from './data/projects.js'
import { techStack } from './data/techStack.js'

const BACKGROUND_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4'

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(null)

  useRevealOnScroll()

  const activeProject = projects.find((p) => p.id === activeProjectId) || null

  return (
    <div className="font-sans text-dev-text antialiased relative">
      <BackgroundVideo src={BACKGROUND_VIDEO_URL} />
      <SideNav />

      <Hero profile={profile} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-32 space-y-24 md:space-y-32 relative z-10 pb-32 md:pb-[150px]">
        <TechStackSection techStack={techStack} />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} onOpenProject={setActiveProjectId} />
        <Contact profile={profile} />
      </main>

      <Footer />

      <ProjectModal project={activeProject} onClose={() => setActiveProjectId(null)} />
    </div>
  )
}

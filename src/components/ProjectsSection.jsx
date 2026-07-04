import ProjectCard from './ProjectCard.jsx'

export default function ProjectsSection({ projects, onOpenProject }) {
  return (
    <section id="work" className="reveal">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-white">Select Works</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-dev-border to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  )
}

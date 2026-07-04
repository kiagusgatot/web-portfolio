import ToolCard from './ToolCard.jsx'

export default function TechStackSection({ techStack }) {
  return (
    <section id="tech-stack" className="reveal">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-white">Tech Stack & Tools</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-dev-border to-transparent"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
        {techStack.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  )
}

import ExperienceCard from './ExperienceCard.jsx'

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="reveal">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-white">Experience</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-dev-border to-transparent"></div>
      </div>

      <div className="space-y-6">
        {experience.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </div>
    </section>
  )
}

import ExperienceCard from './ExperienceCard.jsx'

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="reveal">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-white">Experience</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-dev-border to-transparent"></div>
      </div>

      <div className="space-y-8">
        {experience.map((item, index) => (
          <div key={item.company + index} className="bento-card p-6 md:p-10 lg:p-12 backdrop-blur-sm bg-[#1A1A1A]/90">
            <ExperienceCard item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

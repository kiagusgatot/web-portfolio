import ExperienceCard from './ExperienceCard.jsx'

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="reveal">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-white">Experience</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-dev-border to-transparent"></div>
      </div>

      <div className="bento-card p-6 md:p-10 lg:p-12 backdrop-blur-sm bg-[#1A1A1A]/90">
        <div className="relative border-l-2 border-dev-border/50 ml-2 md:ml-4 space-y-12 md:space-y-16">
          {experience.map((item, index) => (
            <div key={item.company + index} className="relative pl-8 md:pl-12">
              <div className="absolute w-5 h-5 rounded-full bg-[#1A1A1A] border-4 border-dev-border -left-[11px] top-1.5 flex items-center justify-center transition-colors hover:border-dev-orange">
                <div className="w-1.5 h-1.5 rounded-full bg-dev-orange"></div>
              </div>
              
              <ExperienceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

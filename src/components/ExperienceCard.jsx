export default function ExperienceCard({ item }) {
  return (
    <div className="bento-card p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 md:gap-8 backdrop-blur-sm bg-[#1A1A1A]/90">
      <div className="lg:w-1/3 pb-6 lg:pb-0 border-b lg:border-b-0 lg:border-r border-dev-border">
        <div className="font-mono text-xs font-semibold text-dev-orange mb-4 border border-dev-orange/30 bg-dev-orange/10 px-3 py-1 rounded w-max">
          {item.period}
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
        <p className="text-dev-muted text-base">@ {item.company}</p>
      </div>
      <div className="lg:w-2/3">
        <ul className="space-y-5 text-base text-dev-muted">
          {item.points.map((point, i) => (
            <li key={i} className="flex items-start gap-4">
              <i className="ri-check-line text-dev-orange text-xl mt-[-2px]"></i>
              <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

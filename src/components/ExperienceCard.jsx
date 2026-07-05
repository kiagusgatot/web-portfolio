export default function ExperienceCard({ item }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 md:gap-10 group">
      <div className="lg:w-1/3 shrink-0">
        <div className="font-mono text-xs font-semibold text-dev-orange mb-4 border border-dev-orange/20 bg-dev-orange/10 px-3 py-1.5 rounded-md w-max">
          {item.period}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-dev-orange transition-colors">{item.role}</h3>
        <p className="text-dev-text font-medium text-base mb-2">@ {item.company}</p>
        {item.location && (
          <div className="flex items-center gap-1.5 text-sm font-mono text-dev-muted">
            <i className="ri-map-pin-line"></i> {item.location}
          </div>
        )}
      </div>
      <div className="lg:w-2/3 lg:border-l lg:border-dev-border/50 lg:pl-10">
        <ul className="space-y-4 text-base text-dev-muted">
          {item.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <i className="ri-arrow-right-s-line text-dev-orange text-xl mt-[-2px]"></i>
              <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

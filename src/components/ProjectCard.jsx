export default function ProjectCard({ project, onOpen }) {
  const { index, tag, layout, icon, title, summary, tags } = project

  if (layout === 'large' || layout === 'large-reverse') {
    const isReverse = layout === 'large-reverse'
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpen(project.id)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(project.id); } }}
        aria-label={`View details for ${title}`}
        className={`md:col-span-2 bento-card project-card flex flex-col ${
          isReverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } cursor-pointer group overflow-hidden backdrop-blur-sm bg-[#1A1A1A]/90`}
      >
        <div
          className={`md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center border-b md:border-b-0 ${
            isReverse ? 'md:border-l' : 'md:border-r'
          } border-dev-border`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="font-mono text-xs font-semibold text-dev-muted">
              {index} // {tag}
            </div>
            {project.client === 'Personal Project' && (
              <span className="px-2 py-1 bg-dev-orange/10 border border-dev-orange/20 rounded text-[10px] font-mono text-dev-orange font-semibold uppercase tracking-wider">
                Personal Project
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-dev-orange transition-colors">
            {title}
          </h3>
          <p className="text-base text-dev-muted mb-8 line-clamp-3">{summary}</p>
          <div className="flex flex-wrap gap-2 text-xs font-mono mt-auto">
            {tags.map((t) => (
              <span key={t} className="px-3 py-1.5 bg-dev-surface border border-dev-border rounded-md text-dev-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-dev-surface/50">
          <i className={`${icon} text-7xl text-[#4A4A4A] project-icon`}></i>
        </div>
      </div>
    )
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project.id)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(project.id); } }}
      aria-label={`View details for ${title}`}
      className="bento-card project-card flex flex-col cursor-pointer group overflow-hidden backdrop-blur-sm bg-[#1A1A1A]/90"
    >
      <div className="h-48 flex items-center justify-center border-b border-dev-border bg-dev-surface/50">
        <i className={`${icon} text-6xl text-[#4A4A4A] project-icon`}></i>
      </div>
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <div className="font-mono text-xs font-semibold text-dev-muted">
            {index} // {tag}
          </div>
          {project.client === 'Personal Project' && (
            <span className="px-2 py-1 bg-dev-orange/10 border border-dev-orange/20 rounded text-[10px] font-mono text-dev-orange font-semibold uppercase tracking-wider">
              Personal Project
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-dev-orange transition-colors">{title}</h3>
        <p className="text-sm text-dev-muted mb-6 line-clamp-2">{summary}</p>
        <div className="flex flex-wrap gap-2 text-xs font-mono mt-auto">
          {tags.map((t) => (
            <span key={t} className="px-2.5 py-1 bg-dev-surface border border-dev-border rounded-md text-dev-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

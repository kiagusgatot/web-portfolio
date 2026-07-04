import { useEffect, useState } from 'react'

export default function ProjectModal({ project, onClose }) {
  const [visible, setVisible] = useState(false)

  const isOpen = Boolean(project)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const id = setTimeout(() => setVisible(true), 10)
      return () => clearTimeout(id)
    }
    setVisible(false)
    document.body.style.overflow = 'auto'
  }, [isOpen])

  const handleClose = () => {
    setVisible(false)
    document.body.style.overflow = 'auto'
    setTimeout(onClose, 300)
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose()
      }}
    >
      <div
        className={`bg-[#1A1A1A] border border-dev-border max-w-3xl w-full max-h-[85vh] flex flex-col relative transform transition-transform duration-300 rounded-2xl shadow-2xl ${
          visible ? 'scale-100' : 'scale-95'
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 md:top-5 md:right-5 w-10 h-10 rounded-full bg-dev-surface border border-dev-border flex items-center justify-center text-dev-muted hover:text-white hover:border-white transition-all z-10"
        >
          <i className="ri-close-line text-xl"></i>
        </button>

        <div className="overflow-y-auto flex-1 p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 border-b border-dev-border pb-8">
            <div className="w-20 h-20 rounded-xl bg-dev-surface border border-dev-border flex items-center justify-center flex-shrink-0 text-dev-orange">
              <i className={`${project.icon} text-4xl`}></i>
            </div>
            <div>
              <div className="font-mono text-xs font-semibold text-dev-muted mb-2">{project.tag}</div>
              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">{project.title}</h3>
              {project.client && (
                <p className="text-sm text-dev-muted mt-1">{project.client}</p>
              )}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xs font-mono text-dev-muted uppercase font-semibold mb-3">Overview</h4>
            <p className="text-base text-dev-text leading-relaxed">{project.overview}</p>
          </div>

          <div className="mb-8">
            <h4 className="text-xs font-mono text-dev-muted uppercase font-semibold mb-3">Key Features</h4>
            <ul className="space-y-3 text-base text-dev-muted">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <i className="ri-check-line text-dev-orange mt-1"></i>
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 border-t border-dev-border">
            <div>
              <h4 className="text-xs font-mono text-dev-muted uppercase font-semibold mb-3">Tech & Tools</h4>
              <div className="flex gap-2 flex-wrap font-mono text-xs">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1.5 bg-dev-surface border border-dev-border rounded-md text-dev-text">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 sm:mt-0 flex items-center justify-center gap-2 bg-dev-surface border border-dev-border text-dev-text px-6 py-2.5 rounded-lg font-semibold text-sm hover:text-white hover:border-dev-orange hover:bg-dev-orange/10 transition-all w-max shadow-sm"
              >
                View Live Project <i className="ri-external-link-line"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

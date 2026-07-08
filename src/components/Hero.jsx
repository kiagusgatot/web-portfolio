import ProfileCard from './ProfileCard.jsx'
import cvFile from '../assets/cv.pdf'

export default function Hero({ profile }) {
  const [before, after] = profile.tagline.split(profile.taglineHighlight)

  return (
    <header
      id="home"
      className="min-h-[85vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-12 flex flex-col justify-center relative reveal z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex flex-col justify-center">

          <div className="flex items-center gap-2 mb-6 text-dev-orange font-mono text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-dev-orange animate-pulse"></span>
            <span>{profile.eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-gradient">
            {profile.displayName}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            {profile.roleLabel} <span className="text-dev-orange">{profile.role}</span>
          </h2>

          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-dev-surface border border-dev-border text-xs font-mono text-dev-muted w-max">
            <i className="ri-focus-3-line text-dev-orange"></i>
            {profile.specialization}
          </div>

          <p className="text-lg md:text-xl text-dev-muted mb-10 max-w-lg leading-relaxed bg-dev-bg/50 backdrop-blur-sm p-4 rounded-xl border border-dev-border/50">
            {before}
            <span className="text-white font-medium">{profile.taglineHighlight}</span>
            {after}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#work"
              className="bg-dev-orange text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-semibold text-base md:text-lg hover:bg-dev-orangeHover transition-colors flex items-center justify-center gap-2 shadow-lg shadow-dev-orange/20 w-full sm:w-auto"
            >
              Explore Work <i className="ri-arrow-right-up-line"></i>
            </a>
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dev-surface/80 backdrop-blur-sm border border-dev-border text-dev-text px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-semibold text-base md:text-lg hover:border-dev-muted hover:bg-[#2A2A2A] transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <i className="ri-file-download-line"></i> Resum{'\u00e9'}
            </a>
          </div>
        </div>

        <ProfileCard profile={profile} />
      </div>
    </header>
  )
}

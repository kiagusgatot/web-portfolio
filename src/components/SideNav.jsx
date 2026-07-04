const NAV_LINKS = [
  { href: '#home', icon: 'ri-home-4-line', label: 'Home' },
  { href: '#experience', icon: 'ri-briefcase-line', label: 'Experience' },
  { href: '#tech-stack', icon: 'ri-stack-line', label: 'Tech Stack' },
  { href: '#work', icon: 'ri-layout-masonry-line', label: 'Works' },
]

export default function SideNav() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-[90]">
      <div className="bg-[#1A1A1A]/80 backdrop-blur-md border border-dev-border shadow-2xl flex flex-row md:flex-col items-center gap-1.5 p-1.5 rounded-full pointer-events-auto">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            title={link.label}
            className="w-12 h-12 rounded-full flex items-center justify-center text-dev-muted hover:text-white hover:bg-white/10 transition-all"
          >
            <i className={`${link.icon} text-xl`}></i>
          </a>
        ))}

        <div className="hidden md:block w-8 h-px bg-dev-border my-1"></div>
        <div className="md:hidden w-px h-8 bg-dev-border mx-1"></div>

        <a
          href="#contact"
          title="Let's Talk"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-dev-text text-dev-bg hover:bg-dev-orange hover:text-white transition-colors shadow-lg"
        >
          <i className="ri-mail-send-line text-xl"></i>
        </a>
      </div>
    </nav>
  )
}

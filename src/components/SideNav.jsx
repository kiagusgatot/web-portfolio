const NAV_LINKS = [
  { href: '#home', icon: 'ri-home-4-line', label: 'Home' },
  { href: '#work', icon: 'ri-layout-masonry-line', label: 'Select Works' },
  { href: '#experience', icon: 'ri-briefcase-line', label: 'Experience' },
  { href: '#tech-stack', icon: 'ri-stack-line', label: 'Tech Stack & Tools' },
]

export default function SideNav() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:top-8 md:left-1/2 md:-translate-x-1/2 z-[90] w-max max-w-[95vw]">
      <div className="bg-[#1A1A1A]/80 backdrop-blur-md border border-dev-border shadow-2xl flex flex-row items-center gap-1 sm:gap-1.5 p-1.5 rounded-full pointer-events-auto overflow-x-auto hide-scrollbar">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            title={link.label}
            aria-label={link.label}
            className="flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-2.5 rounded-full text-dev-muted hover:text-white hover:bg-white/10 transition-all shrink-0"
          >
            <i className={`${link.icon} text-lg sm:text-xl`}></i>
            <span className="text-xs sm:text-sm font-medium hidden lg:block whitespace-nowrap">{link.label}</span>
          </a>
        ))}

        <div className="w-px h-6 sm:h-8 bg-dev-border mx-1 sm:mx-2 shrink-0"></div>

        <a
          href="#contact"
          title="Let's Talk"
          aria-label="Let's Talk"
          className="flex items-center gap-2 px-3 py-2.5 sm:px-5 sm:py-2.5 rounded-full bg-dev-text text-dev-bg hover:bg-dev-orange hover:text-white transition-colors shadow-lg shrink-0"
        >
          <i className="ri-mail-send-line text-lg sm:text-xl"></i>
          <span className="text-xs sm:text-sm font-medium hidden lg:block whitespace-nowrap">Let's Talk</span>
        </a>
      </div>
    </nav>
  )
}

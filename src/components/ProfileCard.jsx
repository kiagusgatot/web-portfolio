import profileImg from '../assets/profile.jpg'

export default function ProfileCard({ profile }) {
  const initials = profile.fullName
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')

  return (
    <div className="bento-card p-6 md:p-8 flex flex-col justify-center gap-6 relative overflow-hidden backdrop-blur-sm bg-[#1A1A1A]/90">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <i className="ri-terminal-box-fill text-9xl"></i>
      </div>

      <div className="flex items-center gap-5 mb-2 relative z-10">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-dev-border shrink-0 bg-[#222222] group flex items-center justify-center relative">
          <img src={profileImg} alt={profile.displayName} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Hello!</h3>
          <p className="text-sm text-dev-muted font-mono mt-1 flex items-center gap-2 bg-dev-surface border border-dev-border px-3 py-1.5 rounded-md w-max">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Available for Work
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-dev-border"></div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 relative z-10">
        {profile.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center gap-1 bg-dev-surface border border-dev-border rounded-xl py-3 px-1"
          >
            <span className="text-lg sm:text-xl font-bold text-white leading-none">{stat.value}</span>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wide text-dev-muted leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>




    </div>
  )
}

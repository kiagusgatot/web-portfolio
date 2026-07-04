export default function ToolCard({ tool }) {
  const { name, icon: Icon, letter, color } = tool

  return (
    <div className="bento-card group flex flex-col items-center justify-center gap-3 p-5 sm:p-6 text-center cursor-default">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-dev-surface border border-dev-border flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {Icon ? (
          <Icon
            className="text-xl sm:text-2xl grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            style={{ color }}
            aria-hidden="true"
          />
        ) : (
          <span
            className="font-mono font-bold text-xs sm:text-sm text-dev-muted transition-colors duration-300 group-hover:text-[var(--tool-color)]"
            style={{ '--tool-color': color }}
          >
            {letter}
          </span>
        )}
      </div>
      <span className="text-xs sm:text-sm font-medium text-dev-muted group-hover:text-white transition-colors duration-300 leading-tight">
        {name}
      </span>
    </div>
  )
}

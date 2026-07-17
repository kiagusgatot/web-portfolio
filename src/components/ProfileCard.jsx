import { useState, useEffect, useRef } from 'react'
import profileImg from '../assets/profile.jpg'

export default function ProfileCard({ profile }) {
  const [tiltStyle, setTiltStyle] = useState({})
  const cardRef = useRef(null)

  const typingMessages = [
    "Available for Work",
    "Open for Projects",
    "Building Modern Apps",
    "Crafting Great UX"
  ]
  const [msgIndex, setMsgIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout;
    const currentFullText = typingMessages[msgIndex]

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
      }, 30) // fast backspace
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length + 1))
      }, 50) // typing speed
    }

    if (!isDeleting && displayText === currentFullText) {
      timeout = setTimeout(() => setIsDeleting(true), 1800) // pause at end
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setMsgIndex((prev) => (prev + 1) % typingMessages.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, msgIndex])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Calculate rotation (-10 to 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transformStyle: 'preserve-3d',
      transition: 'transform 0.1s ease-out'
    })
  }

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transformStyle: 'preserve-3d',
      transition: 'transform 0.5s ease-out'
    })
  }

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...tiltStyle, willChange: 'transform' }}
      className="p-6 md:p-8 flex flex-col justify-center gap-6 relative"
    >
      {/* Background layer decoupled from the 3D wrapper to prevent backdrop-filter from flattening the 3D context */}
      <div className="absolute inset-0 bento-card backdrop-blur-sm bg-[#1A1A1A]/90 rounded-2xl pointer-events-none -z-10" style={{ transform: 'translateZ(-10px)' }}></div>

      {/* Background Icon with independent overflow-hidden to respect rounded corners */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none -z-10" style={{ transform: 'translateZ(0px)' }}>
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <i className="ri-terminal-box-fill text-9xl"></i>
        </div>
      </div>

      <div className="flex items-center gap-5 mb-2 relative z-10" style={{ transform: 'translateZ(50px)' }}>
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-dev-border shrink-0 bg-[#222222] group flex items-center justify-center relative">
          <img src={profileImg} alt={profile.displayName} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Hello!</h3>
          <div className="flex items-center bg-[#1A1A1A] border border-dev-border pl-3 pr-4 py-1.5 rounded-lg w-max min-w-[180px] h-[34px] relative cursor-default">
            {/* Status dot */}
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0 mr-3 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            
            {/* Typewriter Text */}
            <div className="text-[11px] sm:text-xs font-mono text-dev-muted whitespace-nowrap overflow-hidden">
              {displayText}<span className="animate-pulse text-dev-orange ml-[1px] -mr-2">|</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-dev-border" style={{ transform: 'translateZ(20px)' }}></div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 relative z-10" style={{ transform: 'translateZ(40px)' }}>
        {profile.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center gap-1 bg-dev-surface border border-dev-border rounded-xl py-3 px-1"
          >
            <span className="text-xl sm:text-2xl font-extrabold text-[#FF6A00] leading-none drop-shadow-[0_0_8px_rgba(255,106,0,0.5)]">{stat.value}</span>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wide text-dev-muted leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>



      <div className="w-full h-px bg-dev-border" style={{ transform: 'translateZ(20px)' }}></div>

      <div className="space-y-3 relative z-10 w-full" style={{ transform: 'translateZ(30px)' }}>
        <p className="font-mono text-xs text-dev-muted uppercase font-semibold">Trusted By</p>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
          {profile.trustedBy.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-3 sm:py-2.5 bg-[#1F1F1F] border border-dev-border rounded-lg group"
              title={client.name}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0" 
              />
              <span className="text-[10px] sm:text-xs font-semibold text-white/90 truncate">{client.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

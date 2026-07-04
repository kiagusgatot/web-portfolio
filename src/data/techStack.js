import {
  SiFigma,
  SiGooglegemini,
  SiClaude,
  SiMermaid,
  SiGooglesheets,
  SiGoogledocs,
  SiGoogleslides,
  SiLaravel,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'

/**
 * Each entry either has an `icon` (an official brand icon component,
 * bundled via react-icons so nothing depends on an external CDN at
 * runtime) or a `letter` fallback for tools that don't have a
 * redistributable simple-icons brand mark (individual Adobe apps,
 * ChatGPT, Google Stitch, dbdiagram.io). `color` is the tool's real
 * brand color, used to tint the icon or the letter badge.
 */
export const techStack = [
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Adobe Illustrator', letter: 'Ai', color: '#FF9A00' },
  { name: 'Adobe Photoshop', letter: 'Ps', color: '#31A8FF' },
  { name: 'Adobe After Effects', letter: 'Ae', color: '#9999FF' },
  { name: 'Adobe Premiere Pro', letter: 'Pr', color: '#9999FF' },
  { name: 'Google Stitch', letter: 'GS', color: '#4285F4' },
  { name: 'Gemini', icon: SiGooglegemini, color: '#8E75B2' },
  { name: 'ChatGPT', letter: 'GPT', color: '#10A37F' },
  { name: 'Claude', icon: SiClaude, color: '#D97757' },
  { name: 'Mermaid.ai', icon: SiMermaid, color: '#FF3670' },
  { name: 'dbdiagram.io', letter: 'DB', color: '#6366F1' },
  { name: 'Google Sheets', icon: SiGooglesheets, color: '#0F9D58' },
  { name: 'Google Docs', icon: SiGoogledocs, color: '#4285F4' },
  { name: 'Google Slides', icon: SiGoogleslides, color: '#FBBC04' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
]

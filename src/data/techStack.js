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
import { TbBrandOpenai } from 'react-icons/tb'

// Each entry either has an `icon` (official brand icon component from
// react-icons/si) or a `letter` fallback for tools without a redistributable
// simple-icons mark (individual Adobe apps, ChatGPT, Google Stitch, dbdiagram.io).
// `color` is the tool's real brand color.
export const techStack = [
  { name: 'Figma', icon: SiFigma, logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', color: '#F24E1E' },
  { name: 'Adobe Illustrator', letter: 'Ai', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg', color: '#FF9A00' },
  { name: 'Adobe Photoshop', letter: 'Ps', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg', color: '#31A8FF' },
  { name: 'Adobe After Effects', letter: 'Ae', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg', color: '#9999FF' },
  { name: 'Adobe Premiere Pro', letter: 'Pr', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg', color: '#9999FF' },
  { name: 'Google Stitch', letter: 'GS', logoUrl: 'https://app-companion-430619.appspot.com/static/stitch-word.svg', color: '#4285F4' },
  { name: 'Gemini', icon: SiGooglegemini, logoUrl: 'https://www.gstatic.com/images/branding/product/2x/gemini_48dp.png', color: '#8E75B2' },
  { name: 'Codex', letter: 'CDX', icon: TbBrandOpenai, color: '#FFFFFF' },
  { name: 'Claude', icon: SiClaude, logoUrl: 'https://cdn.simpleicons.org/claude/D97757', color: '#D97757' },
  { name: 'Mermaid', icon: SiMermaid, logoUrl: 'https://cdn.simpleicons.org/mermaid/FF3670', color: '#FF3670' },
  { name: 'dbdiagram.io', letter: 'DB', logoUrl: 'https://cdn.holistics.io/logo-dbdiagram-notext.ico', color: '#6366F1' },
  { name: 'Google Sheets', icon: SiGooglesheets, logoUrl: 'https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png', color: '#0F9D58' },
  { name: 'Google Docs', icon: SiGoogledocs, logoUrl: 'https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png', color: '#4285F4' },
  { name: 'Google Slides', icon: SiGoogleslides, logoUrl: 'https://www.gstatic.com/images/branding/product/2x/slides_2020q4_48dp.png', color: '#FBBC04' },
  { name: 'Laravel', icon: SiLaravel, logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', color: '#FF2D20' },
  { name: 'React', icon: SiReact, logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#38BDF8' },
]

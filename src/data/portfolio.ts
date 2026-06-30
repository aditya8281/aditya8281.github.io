import data from './portfolio.json'

// ─── Types ───────────────────────────────────────────────
export type NavLink = { id: string; label: string }
export type Skill = { name: string; category: string; level: string }
export type Project = {
  title: string
  description: string
  tools: string[]
  repo?: string
  longDescription?: string
  metric?: string
  tag?: string
}
export type Experience = {
  role: string
  company: string
  period: string
  description: string
  highlights?: string[]
  link?: string
}
export type Leadership = {
  role: string
  organization: string
  period: string
  highlights: string[]
}
export type ContactMethod = {
  label: string
  value: string
  href: string
}

// ─── Re-exports (single source of truth: portfolio.json) ──
export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const hero = data.hero
export const aboutText: string[] = data.about.text
export const aboutHighlights: string[] = data.about.highlights
export const exploringTopics = data.about.exploringTopics
export const experience: Experience[] = data.experience as Experience[]
export const projects: Project[] = data.projects as Project[]
export const leadership: Leadership[] = data.leadership as Leadership[]
export const contactMethods: ContactMethod[] = data.contact as ContactMethod[]
export const achievements: string[] = data.achievements
export const research = data.research

// Flattened skills for SkillsSection (typed arrays per category)
export const skillCategories = {
  languages: data.skills.languages,
  backend: data.skills.backend,
  systems: data.skills.systems,
  databases: data.skills.databases,
  aiMl: data.skills.aiMl,
  devTools: data.skills.devTools,
  roboticsEmbedded: data.skills.roboticsEmbedded,
  frontendDevOps: data.skills.frontendDevOps,
}

// Legacy flat skills array (for components that still use it)
export const skills: Skill[] = [
  ...data.skills.languages.map((n) => ({ name: n, category: 'Languages', level: 'Advanced' })),
  ...data.skills.backend.map((n) => ({ name: n, category: 'Backend & APIs', level: 'Proficient' })),
  ...data.skills.aiMl.map((n) => ({ name: n, category: 'AI / ML', level: 'Proficient' })),
  ...data.skills.devTools.map((n) => ({ name: n, category: 'Tools', level: 'Proficient' })),
]

export interface Skill {
  id: string
  name: string
  description: string
  icon: string
  color: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'teal'
}

export interface ProjectTag {
  label: string
  variant: 'default' | 'green' | 'purple' | 'orange'
}

export interface Project {
  id: string
  title: string
  description: string
  icon: string
  image?: string
  tags: ProjectTag[]
  links: { label: string; url: string }[]
  details?: string
  features?: string[]
  tech?: string[]
}

export interface Stat {
  number: string
  label: string
}

export interface ContactLink {
  icon: string
  label: string
  href: string
}

export interface WidgetCard {
  label: string
  color: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'teal' | 'amber' | 'indigo'
}

export interface NavLink {
  label: string
  href: string
}

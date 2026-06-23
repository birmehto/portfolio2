import type { ContactLink, NavLink, Project, Skill, Stat, WidgetCard } from '../types'

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const WIDGET_CARDS: WidgetCard[] = [
  { label: 'Container', color: 'blue' },
  { label: 'Row', color: 'green' },
  { label: 'Column', color: 'purple' },
  { label: 'Text', color: 'orange' },
  { label: 'Icon', color: 'pink' },
  { label: 'Stack', color: 'teal' },
  { label: 'ListView', color: 'amber' },
  { label: 'GestureDetector', color: 'indigo' },
]

export const STATS: Stat[] = [
  { number: '2+', label: 'years with Flutter' },
  { number: '20+', label: 'apps shipped' },
  { number: '12', label: 'open-source packages' },
  { number: '8', label: 'clients worked with' },
]

export const SKILLS: Skill[] = [
  { id: 'flutter', name: 'Flutter', description: 'Cross-platform UI toolkit', icon: 'FL', color: 'blue' },
  { id: 'dart', name: 'Dart', description: 'Type-safe language', icon: 'DT', color: 'purple' },
  { id: 'riverpod', name: 'Riverpod', description: 'Reactive state management', icon: 'RP', color: 'green' },
  { id: 'bloc', name: 'Bloc', description: 'Predictable state container', icon: 'BC', color: 'orange' },
  { id: 'firebase', name: 'Firebase', description: 'Auth, Firestore, Functions', icon: 'FB', color: 'blue' },
  { id: 'supabase', name: 'Supabase', description: 'Open-source backend', icon: 'SB', color: 'green' },
  { id: 'rest', name: 'REST APIs', description: 'HTTP & GraphQL', icon: 'AP', color: 'pink' },
  { id: 'git', name: 'Git & CI/CD', description: 'GitHub Actions, Fastlane', icon: 'GC', color: 'teal' },
  { id: 'docker', name: 'Docker', description: 'Containerized environments', icon: 'DK', color: 'orange' },
  { id: 'ux', name: 'UX Design', description: 'User-centered design', icon: 'UX', color: 'purple' },
]

export const PROJECTS: Project[] = [
  {
    id: 'hni360',
    title: 'HNI360',
    description: 'A business productivity platform for ticket management, team collaboration, and streamlined workflow tracking across organizations.',
    icon: '\uD83C\uDF10',
    tags: [
      { label: 'Flutter', variant: 'orange' },
      { label: 'REST API', variant: 'default' },
      { label: 'Bloc', variant: 'purple' },
    ],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.ipopsolutions.hni360' },
      { label: 'App Store', url: 'https://apps.apple.com/in/app/hni360/id6761290498' },
    ],
  },
  {
    id: 'lotus-digital-media',
    title: 'Lotus Digital Media',
    description: 'A digital signage platform for restaurants to manage and display dynamic ads, promotions, and menu content on TV screens in real time.',
    icon: '\uD83D\uDCFA',
    tags: [
      { label: 'Flutter', variant: 'default' },
      { label: 'Firebase', variant: 'green' },
      { label: 'Riverpod', variant: 'purple' },
    ],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.lotus.digitalmedia' },
    ],
  },
  {
    id: 'oswal-solar-pump',
    title: 'Oswal Solar Pump',
    description: 'A comprehensive mobile solution for solar water pump management, monitoring, and service tracking across agricultural installations.',
    icon: '\u2600\uFE0F',
    tags: [
      { label: 'Flutter', variant: 'default' },
      { label: 'IoT', variant: 'orange' },
      { label: 'Bloc', variant: 'purple' },
    ],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.solar.oswal' },
    ],
  },
  {
    id: 'tracktide',
    title: 'Track Tide',
    description: 'A workforce management app for tracking work hours, leave requests, attendance, and GPS-verified check-ins with automated reporting.',
    icon: '\uD83D\uDCCB',
    tags: [
      { label: 'Flutter', variant: 'purple' },
      { label: 'Firebase', variant: 'green' },
      { label: 'Riverpod', variant: 'default' },
    ],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.ipop.tracktide' },
      { label: 'App Store', url: 'https://apps.apple.com/in/app/track-tide/id6761369755' },
    ],
  },
]

export const CONTACT_LINKS: ContactLink[] = [
  { icon: '\u2709', label: 'birmehto@gmail.com', href: 'mailto:birmehto@gmail.com' },
  { icon: '\u2328', label: 'github.com/birmehto', href: 'https://github.com/birmehto' },
  { icon: '\uD83D\uDD17', label: 'linkedin.com/in/birmehto', href: 'https://linkedin.com/birmehto' },
  { icon: '\uD835\uDDD8', label: '@birmehto', href: 'https://twitter.com/birmehto' },
]

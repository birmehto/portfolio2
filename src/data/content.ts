import type { Skill, Project, Stat, ContactLink, WidgetCard, NavLink } from '../types'

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
  { number: '5+', label: 'years of Flutter' },
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
      { label: 'Play Store \u2192', url: 'https://play.google.com/store/apps/details?id=com.lotus.digitalmedia' },
      { label: 'Website \u2192', url: 'https://lotusdm.com' },
    ],
    details: 'Lotus Digital Media revolutionizes restaurant advertising by enabling dynamic content display directly on TV screens. Built with Flutter, the app lets restaurant owners manage, update, and schedule promotions, videos, and animations in real time through an easy-to-use web dashboard. From daily specials to seasonal offers, the platform makes digital signage effortless and effective.',
    features: [
      'Real-time content management via web dashboard',
      'Dynamic video, animation, and promotion display',
      'Custom scheduling for time-specific promotions',
      'Remote management across multiple screens',
      'Analytics and engagement tracking',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Riverpod', 'REST API'],
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
      { label: 'Website \u2192', url: 'https://oswalpumps.com' },
      { label: 'Dribbble \u2192', url: 'https://dribbble.com/iPOPSolutions' },
    ],
    details: 'Oswal Solar Pump provides farmers and field technicians with real-time monitoring of solar water pumping systems. The app enables remote diagnostics, performance tracking, and maintenance scheduling for thousands of off-grid solar pump installations under the PM-KUSUM scheme. It helps reduce downtime and optimize irrigation across large agricultural networks.',
    features: [
      'Real-time pump monitoring and performance analytics',
      'Remote diagnostics and fault detection',
      'Installation tracking and maintenance scheduling',
      'GPS-based field technician coordination',
      'Offline mode for rural areas with low connectivity',
    ],
    tech: ['Flutter', 'Dart', 'IoT Integration', 'Bloc', 'GPS Services', 'REST API'],
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
      { label: 'Play Store \u2192', url: 'https://play.google.com/store/apps/details?id=com.ipop.tracktide' },
      { label: 'Dribbble \u2192', url: 'https://dribbble.com/shots/25502147-Track-Tide-Work-Hours-Leave-Management-Mobile-App' },
    ],
    details: 'Track Tide is the ultimate workforce management solution for employee time tracking and attendance. It enables businesses to monitor clock-ins with GPS location verification, manage leave requests, track overtime, and generate comprehensive annual work summaries. Designed for both remote teams and field staff, Track Tide streamlines payroll processing and boosts operational efficiency.',
    features: [
      'GPS-verified clock-in and clock-out tracking',
      'Leave management with balance tracking',
      'Overtime calculation and reporting',
      'Annual work summary with hours and attendance',
      'Real-time workforce dashboard for managers',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'GPS Services', 'Google Maps'],
  },
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
      { label: 'Play Store \u2192', url: 'https://play.google.com/store/apps/details?id=com.ipopsolutions.hni360' },
      { label: 'Support \u2192', url: 'mailto:info@hni360.com' },
    ],
    details: 'HNI360 is a business productivity app designed to simplify ticket management and streamline daily operations. It provides teams with a clean, efficient interface for managing support requests, tracking progress, and staying organized. With secure authentication, a centralized dashboard, and detailed ticket tracking, HNI360 helps businesses manage workflows more effectively and improve visibility across all tasks.',
    features: [
      'Secure user authentication and role-based access',
      'Centralized dashboard for key metrics and updates',
      'Ticket creation, assignment, and priority tracking',
      'Real-time status updates and notifications',
      'Performance analytics and reporting',
    ],
    tech: ['Flutter', 'Dart', 'REST API', 'Bloc', 'Push Notifications', 'Secure Storage'],
  },
]

export const CONTACT_LINKS: ContactLink[] = [
  { icon: '\u2709', label: 'bir@mehto.dev', href: 'mailto:bir@mehto.dev' },
  { icon: '\u2328', label: 'github.com/birmehto', href: 'https://github.com' },
  { icon: '\uD83D\uDD17', label: 'linkedin.com/in/birmehto', href: 'https://linkedin.com' },
  { icon: '\uD835\uDDD8', label: '@birmehto', href: 'https://twitter.com' },
]

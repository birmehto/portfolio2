import type { Skill, Project, Experience, Stat, ContactLink, WidgetCard, NavLink } from '../types'

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
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
    id: 'flowpay',
    title: 'FlowPay',
    description: 'A fintech app for peer-to-peer payments with real-time transaction tracking, biometric auth, and an animated expense breakdown UI.',
    icon: '\uD83D\uDCB3',
    tags: [
      { label: 'Flutter', variant: 'default' },
      { label: 'Firebase', variant: 'green' },
      { label: 'Riverpod', variant: 'purple' },
    ],
    links: [
      { label: 'Live \u2192', url: '#' },
      { label: 'Source \u2192', url: '#' },
    ],
  },
  {
    id: 'greenscape',
    title: 'GreenScape',
    description: 'A plant care companion with AI-powered diagnosis, custom watering schedules, and a community feed. Used by 10K+ gardeners.',
    icon: '\uD83C\uDF3F',
    tags: [
      { label: 'Flutter', variant: 'purple' },
      { label: 'Supabase', variant: 'orange' },
      { label: 'Bloc', variant: 'default' },
    ],
    links: [
      { label: 'Live \u2192', url: '#' },
      { label: 'Source \u2192', url: '#' },
    ],
  },
  {
    id: 'coachpro',
    title: 'CoachPro',
    description: 'A fitness coaching platform connecting trainers with clients, featuring live workout tracking, video calls, and progress analytics.',
    icon: '\uD83C\uDFCB\uFE0F',
    tags: [
      { label: 'Flutter', variant: 'default' },
      { label: 'Firebase', variant: 'green' },
      { label: 'GetX', variant: 'purple' },
    ],
    links: [
      { label: 'Live \u2192', url: '#' },
      { label: 'Source \u2192', url: '#' },
    ],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 'senior-techcorp',
    date: '2023 \u2014 Present',
    role: 'Senior Flutter Developer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Leading a team of 4 building a cross-platform B2B SaaS app. Migrated the codebase from Provider to Riverpod, cutting widget rebuilds by 40%. Designed a reusable component library used across 3 products.',
  },
  {
    id: 'dev-appworks',
    date: '2021 \u2014 2023',
    role: 'Flutter Developer',
    company: 'AppWorks',
    location: 'San Francisco',
    description: 'Built features for a consumer social app with 500K+ MAU. Implemented custom animated transitions and real-time chat with Firebase. Reduced crash rate by 60% through systematic error handling.',
  },
  {
    id: 'junior-codebase',
    date: '2020 \u2014 2021',
    role: 'Junior Developer',
    company: 'CodeBase',
    location: 'New York',
    description: 'Started my Flutter journey building internal tools and client prototypes. Published the company\u2019s first Flutter package on pub.dev. Contributed to migrating a legacy native app to Flutter.',
  },
]

export const CONTACT_LINKS: ContactLink[] = [
  { icon: '\u2709', label: 'bir@mehto.dev', href: 'mailto:bir@mehto.dev' },
  { icon: '\u2328', label: 'github.com/birmehto', href: 'https://github.com' },
  { icon: '\uD83D\uDD17', label: 'linkedin.com/in/birmehto', href: 'https://linkedin.com' },
  { icon: '\uD835\uDDD8', label: '@birmehto', href: 'https://twitter.com' },
]

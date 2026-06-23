import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/content'
import { TiltCard } from '../components/ui/TiltCard'

const TAG_CLASSES: Record<string, string> = {
  default: 'project-tag',
  green: 'project-tag green',
  purple: 'project-tag purple',
  orange: 'project-tag orange',
}

const BANNER_GRADIENTS: Record<string, string> = {
  'lotus-digital-media': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'oswal-solar-pump': 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)',
  tracktide: 'linear-gradient(135deg, #240046 0%, #3c096c 50%, #5a189a 100%)',
  hni360: 'linear-gradient(135deg, #370617 0%, #6a040f 50%, #9d0208 100%)',
  'aps-solar-pump': 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)',
  dynamech: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'susieq-customer': 'linear-gradient(135deg, #4a0e4e 0%, #7b2d8e 50%, #a855f7 100%)',
  'susieq-branch': 'linear-gradient(135deg, #78350f 0%, #92400e 50%, #d97706 100%)',
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.setProperty('--card-delay', `${index * 0.12}s`)
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div ref={ref} className="project-wrapper reveal">
      <TiltCard className="project-card" maxTilt={6}>
        <div
          className="project-preview"
          style={project.image ? {} : { background: BANNER_GRADIENTS[project.id] }}
        >
          {project.image ? (
            <img src={project.image} alt={project.title} className="project-banner" />
          ) : (
            <>
              <div className="preview-bg" />
              <span className="preview-icon">{project.icon}</span>
            </>
          )}
        </div>
        <div className="project-body">
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag.label} className={TAG_CLASSES[tag.variant]}>
                {tag.label}
              </span>
            ))}
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14z"/><path d="M12 7l-5 5h4v5h2v-5h4l-5-5z"/></svg>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </TiltCard>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <main className="page-projects">
      <div className="projects-hero">
        <div className="container">
          <Link to="/" className="projects-back">&larr; Home</Link>
          <h1 className="projects-page-title">Featured <span className="highlight">Work</span></h1>
          <p className="projects-page-sub">
            Apps I&rsquo;ve designed and built from the ground up &mdash; each with its own unique challenges and tech stack.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </main>
  )
}

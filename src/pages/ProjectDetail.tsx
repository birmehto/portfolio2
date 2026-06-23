import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PROJECTS } from '../data/content'
import { TiltCard } from '../components/ui/TiltCard'

const BANNER_GRADIENTS: Record<string, string> = {
  'lotus-digital-media': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'oswal-solar-pump': 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)',
  tracktide: 'linear-gradient(135deg, #240046 0%, #3c096c 50%, #5a189a 100%)',
  hni360: 'linear-gradient(135deg, #370617 0%, #6a040f 50%, #9d0208 100%)',
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = PROJECTS.find((p) => p.id === id)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (!project) {
    return (
      <main className="page-projects">
        <div className="container" style={{ textAlign: 'center', paddingTop: '120px' }}>
          <h1>Project not found</h1>
          <Link to="/projects" className="projects-back" style={{ marginTop: '16px', display: 'inline-flex' }}>
            &larr; Back to projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="page-project-detail">
      <div className="container">
        <Link to="/projects" className="projects-back">&larr; All Projects</Link>

        <div
          className="detail-banner"
          style={project.image ? { backgroundImage: `url(${project.image})` } : { background: BANNER_GRADIENTS[project.id] }}
        >
          {!project.image && <span className="detail-banner-icon">{project.icon}</span>}
        </div>

        <div className="detail-hero" ref={headerRef}>
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-tags">
            {project.tags.map((tag) => (
              <span key={tag.label} className="project-tag">{tag.label}</span>
            ))}
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-main">
            <section className="detail-section reveal">
              <h2 className="detail-section-title">Overview</h2>
              <p className="detail-text">{project.details || project.description}</p>
            </section>

            {project.features && (
              <section className="detail-section reveal">
                <h2 className="detail-section-title">Key Features</h2>
                <ul className="detail-features">
                  {project.features.map((f, i) => (
                    <li key={i} className="detail-feature-item">{f}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="detail-sidebar">
            <div className="detail-sidebar-sticky">
              {project.tech && (
                <section className="detail-section reveal">
                  <h2 className="detail-section-title">Tech Stack</h2>
                  <div className="detail-tech-list">
                    {project.tech.map((t) => (
                      <span key={t} className="detail-tech-tag">{t}</span>
                    ))}
                  </div>
                </section>
              )}

              <section className="detail-section reveal">
                <h2 className="detail-section-title">Links</h2>
                <div className="detail-links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.url} className="detail-link-btn">
                      {link.label}
                    </a>
                  ))}
                </div>
              </section>

              <TiltCard className="detail-mini-card" maxTilt={5}>
                <div className="detail-mini-content">
                  <span className="detail-mini-icon">{project.icon}</span>
                  <div>
                    <div className="detail-mini-label">{project.title}</div>
                    <div className="detail-mini-sub">{project.tags.map(t => t.label).join(' \u00B7 ')}</div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

import { Section } from '../ui/Section'
import { PROJECTS } from '../../data/content'

const TAG_CLASSES: Record<string, string> = {
  default: 'project-tag',
  green: 'project-tag green',
  purple: 'project-tag purple',
  orange: 'project-tag orange',
}

export function Projects() {
  return (
    <Section
      id="projects"
      label="03 / Work"
      title="Featured projects"
      description="Apps I&rsquo;ve designed and built from the ground up &mdash; each with its own unique challenges."
    >
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div key={project.id} className="project-card reveal">
            <div className="project-preview">
              <div className="preview-bg"></div>
              <span className="preview-icon">{project.icon}</span>
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
                  <a key={link.label} href={link.url}>{link.label}</a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

import { Section } from '../ui/Section'
import { SKILLS } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const COLOR_CLASSES: Record<string, string> = {
  blue: 'blue',
  purple: 'purple',
  green: 'green',
  orange: 'orange',
  pink: 'pink',
  teal: 'teal',
}

const CATEGORIES = [
  { label: 'Languages', ids: ['flutter', 'dart'] },
  { label: 'State & Backend', ids: ['riverpod', 'bloc', 'firebase', 'supabase'] },
  { label: 'DevOps & Tools', ids: ['rest', 'git', 'docker'] },
  { label: 'Design', ids: ['ux'] },
]

export function Skills() {
  const gridRef = useScrollReveal<HTMLDivElement>(true)

  return (
    <Section
      id="skills"
      label="02 / Skills"
      title="Technologies I work with"
      description="From framework fundamentals to production tooling &mdash; here&rsquo;s what I bring to the table."
    >
      <div ref={gridRef}>
        {CATEGORIES.map((cat) => (
          <div key={cat.label} className="skill-category reveal">
            <h3 className="skill-category-label">{cat.label}</h3>
            <div className="skills-grid">
              {cat.ids.map((id) => {
                const skill = SKILLS.find((s) => s.id === id)!
                return (
                  <div key={skill.id} className={`skill-card ${COLOR_CLASSES[skill.color]}`}>
                    <div className={`skill-icon ${COLOR_CLASSES[skill.color]}`}>{skill.icon}</div>
                    <div className="skill-card-body">
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-desc">{skill.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

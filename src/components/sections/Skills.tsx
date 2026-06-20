import { Section } from '../ui/Section'
import { SKILLS } from '../../data/content'

const COLOR_CLASSES: Record<string, string> = {
  blue: 'blue',
  purple: 'purple',
  green: 'green',
  orange: 'orange',
  pink: 'pink',
  teal: 'teal',
}

export function Skills() {
  return (
    <Section
      id="skills"
      label="02 / Skills"
      title="Technologies I work with"
      description="From framework fundamentals to production tooling &mdash; here&rsquo;s what I bring to the table."
    >
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div key={skill.id} className="skill-card reveal">
            <div className={`skill-icon ${COLOR_CLASSES[skill.color]}`}>{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-desc">{skill.description}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

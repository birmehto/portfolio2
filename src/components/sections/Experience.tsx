import { Section } from '../ui/Section'
import { EXPERIENCES } from '../../data/content'

export function Experience() {
  return (
    <Section
      id="experience"
      label="04 / Experience"
      title="Where I&rsquo;ve worked"
      description="A timeline of my professional journey in the Flutter ecosystem."
    >
      <div className="timeline">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-role">{exp.role}</div>
            <div className="timeline-company">{exp.company} &middot; {exp.location}</div>
            <div className="timeline-desc">{exp.description}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

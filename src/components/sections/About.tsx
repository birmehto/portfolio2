import { Section } from '../ui/Section'
import { StatCard } from '../ui/StatCard'
import { STATS } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export function About() {
  const gridRef = useScrollReveal<HTMLDivElement>(true)

  return (
    <Section
      id="about"
      label="01 / About"
      title="Building apps that people love to use."
    >
      <div className="about-grid" ref={gridRef}>
        <div className="about-text">
          <p className="reveal">
            I&apos;m a developer with over 5 years of experience shipping production apps
            across platforms. I specialize in crafting fluid interfaces,
            managing complex state, and architecting maintainable codebases that scale.
          </p>
          <p className="reveal">
            My toolkit spans modern frameworks and languages across the stack,
            with a strong focus on UX that makes apps feel native on every platform.
            When I&apos;m not coding, I write about development patterns
            and contribute to open-source projects.
          </p>
        </div>
        <div className="about-stats">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`reveal reveal-delay-${i + 1}`}>
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

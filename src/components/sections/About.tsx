import { Section } from '../ui/Section'
import { StatCard } from '../ui/StatCard'
import { STATS } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export function About() {
  const gridRef = useScrollReveal<HTMLDivElement>(true)

  return (
    <Section
      id="about"
      label="#about"
      title="Building apps that people love to use."
    >
      <div className="about-grid" ref={gridRef}>
        <div className="about-text">
          <p className="reveal">
            I build Flutter apps that people actually use &mdash; workforce management
            platforms, IoT monitoring tools, digital signage systems, and business
            productivity suites. Every project ships with clean architecture,
            thorough state management, and a UI that feels native on every screen.
          </p>
          <p className="reveal">
            My stack runs on Flutter, Riverpod, Firebase, and whatever else the
            problem demands. I focus on making complex flows feel simple and
            keeping codebases maintainable as they grow. When I&apos;m not shipping
            features, I&apos;m contributing to open-source packages and writing
            about Flutter patterns.
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

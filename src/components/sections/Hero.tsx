import { WIDGET_CARDS } from '../../data/content'

const COLOR_CLASSES: Record<string, string> = {
  blue: 'blue',
  purple: 'purple',
  green: 'green',
  orange: 'orange',
  pink: 'pink',
  teal: 'teal',
  amber: 'amber',
  indigo: 'indigo',
}

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="widget-tree" aria-hidden="true">
        {WIDGET_CARDS.map((card) => (
          <div key={card.label} className="widget-card">
            <span className={`dot ${COLOR_CLASSES[card.color]}`}></span>
            {card.label}
          </div>
        ))}
      </div>

      <div className="container hero-content">
        <div className="hero-greeting">hello, I&apos;m</div>
        <h1 className="hero-title">
          Bir <span className="highlight">Mehto</span>
        </h1>
        <p className="hero-role">Developer</p>
        <p className="hero-sub">
          I build cross-platform experiences with clean architecture and pixel-perfect UIs.
          Currently crafting delightful interfaces and robust backend systems.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
          <a href="#" className="btn btn-outline-accent">Resume</a>
        </div>
      </div>

      <div className="hero-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

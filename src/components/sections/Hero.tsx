export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-accent" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="hero-greeting-dot" />
            hello, I&apos;m
          </div>
          <h1 className="hero-title">
            Bir <span className="highlight">Mehto</span>
          </h1>
          <div className="hero-role-row">
            <span className="hero-role">Flutter Developer</span>
            <span className="hero-availability" aria-label="Available for work">
              <span className="hero-availability-dot" />
              Available
            </span>
          </div>
          <p className="hero-sub">
            I ship production-quality cross-platform apps with clean architecture
            and pixel-perfect UIs. Currently building with Flutter, Riverpod, and Firebase.
          </p>
          <div className="hero-actions">
            <a href="/projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
            <a href="#" className="btn btn-outline-accent">Resume</a>
          </div>
        </div>
      </div>

      <div className="hero-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

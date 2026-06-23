export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-accent" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
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
            2+ years shipping Flutter apps to production &mdash; from IoT dashboards
            to digital signage platforms used by hundreds of businesses daily.
          </p>
          <div className="hero-actions">
            <a href="/projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
            <a href="#" className="btn btn-outline-accent">Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { NAV_LINKS } from '../../data/content'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function close() {
    setOpen(false)
  }

  return (
    <nav
      className={`nav${scrolled ? ' scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={`nav-overlay${open ? ' open' : ''}`} onClick={close} aria-hidden="true" />

      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={close}>
          b<span>_</span>mehto
        </a>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

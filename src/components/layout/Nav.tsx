import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useNavScroll } from '../../hooks/useNavScroll'
import { NAV_LINKS } from '../../data/content'

export function Nav() {
  const [open, setOpen] = useState(false)
  const scrolled = useNavScroll()
  const activeSection = useActiveSection()
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (hash && pathname === '/') {
      const id = hash.slice(1)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [hash, pathname])

  function close() {
    setOpen(false)
  }

  function handleClick(href: string) {
    close()
    if (href.startsWith('#')) {
      if (pathname === '/') {
        const id = href.slice(1)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/' + href)
      }
    }
  }

  function isActive(link: { href: string }) {
    if (link.href.startsWith('/')) {
      return pathname === link.href
    }
    if (link.href.startsWith('#')) {
      return activeSection === link.href.slice(1)
    }
    return false
  }

  return (
    <nav
      className={`nav${scrolled ? ' scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={`nav-overlay${open ? ' open' : ''}`} onClick={close} aria-hidden="true" />

      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={close}>
          b<span>_</span>mehto
        </Link>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {NAV_LINKS.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.href}
                to={link.href}
                className={isActive(link) ? 'active' : ''}
                onClick={close}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={isActive(link) ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
              >
                {link.label}
              </a>
            )
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

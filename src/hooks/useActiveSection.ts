import { useEffect, useState } from 'react'

const SECTION_IDS = ['about', 'skills', 'projects', 'experience', 'contact']

export function useActiveSection(): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    function onScroll() {
      let current = ''
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop - 120
        const bottom = top + el.offsetHeight
        if (window.scrollY >= top && window.scrollY < bottom) {
          current = id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}

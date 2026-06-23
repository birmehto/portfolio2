import { useRef, useEffect, useCallback } from 'react'

export function useTilt<T extends HTMLElement>(maxTilt = 8) {
  const ref = useRef<T>(null)
  const frame = useRef(0)

  const handleMouse = useCallback((e: MouseEvent) => {
    const el = ref.current
    if (!el) return

    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)

      const rotateX = -dy * maxTilt
      const rotateY = dx * maxTilt

      el.style.setProperty('--rx', `${rotateX}deg`)
      el.style.setProperty('--ry', `${rotateY}deg`)
      el.style.setProperty('--dx', `${dx * 30}px`)
      el.style.setProperty('--dy', `${dy * 30}px`)
    })
  }, [maxTilt])

  const handleLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(frame.current)
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--dx', '0px')
    el.style.setProperty('--dy', '0px')
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.addEventListener('mousemove', handleMouse, { passive: true })
    el.addEventListener('mouseleave', handleLeave, { passive: true })

    return () => {
      el.removeEventListener('mousemove', handleMouse)
      el.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(frame.current)
    }
  }, [handleMouse, handleLeave])

  return ref
}

import type { ReactNode } from 'react'
import { useTilt } from '../../hooks/useTilt'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
}

export function TiltCard({ children, className = '', maxTilt }: TiltCardProps) {
  const ref = useTilt<HTMLDivElement>(maxTilt)

  return (
    <div ref={ref} className={`tilt-card${className ? ` ${className}` : ''}`}>
      <div className="tilt-card-shine" />
      <div className="tilt-card-glow" />
      {children}
    </div>
  )
}

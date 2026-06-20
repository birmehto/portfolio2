import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  label: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, label, title, description, children, className = '' }: SectionProps) {
  return (
    <section className={`section${className ? ` ${className}` : ''}`} id={id}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">{label}</span>
          {title && <h2 className="section-title reveal">{title}</h2>}
          {description && <p className="section-desc reveal">{description}</p>}
        </div>
        <div className="section-children">
          {children}
        </div>
      </div>
    </section>
  )
}

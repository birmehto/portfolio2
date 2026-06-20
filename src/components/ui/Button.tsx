import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'outline-accent'
  href?: string
  children: ReactNode
}

export function Button({ variant = 'primary', href, children, className, ...rest }: ButtonProps) {
  const cls = `btn btn-${variant}${className ? ` ${className}` : ''}`

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}

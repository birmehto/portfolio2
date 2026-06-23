import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useForm } from '@formspree/react'
import { Section } from '../ui/Section'
import { CONTACT_LINKS } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'

function SocialIcon({ href }: { href: string }): ReactNode {
  if (href.startsWith('mailto')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13L2 4" />
      </svg>
    )
  }
  if (href.includes('github')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  }
  if (href.includes('linkedin')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const FORMSPREE_ID = 'mkolgkpb'

export function Contact() {
  const [state, formspreeSubmit] = useForm(FORMSPREE_ID)
  const [feedback, setFeedback] = useState<'idle' | 'sent' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const submitted = useRef(false)

  useEffect(() => {
    if (!submitted.current) return
    if (state.succeeded) {
      setFeedback('sent')
      formRef.current?.reset()
      formRef.current?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea').forEach((f) => f.classList.remove('filled'))
      setTimeout(() => { setFeedback('idle'); submitted.current = false }, 3000)
    } else if (state.errors) {
      setFeedback('error')
      setTimeout(() => { setFeedback('idle'); submitted.current = false }, 3000)
    }
  }, [state.succeeded, state.errors])

  function handleInput(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const el = e.currentTarget
    el.classList.toggle('filled', el.value.trim().length > 0)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.elements.namedItem('name') as HTMLInputElement
    const email = form.elements.namedItem('email') as HTMLInputElement
    const message = form.elements.namedItem('message') as HTMLTextAreaElement
    let valid = true

    ;[name, email, message].forEach((f) => f.classList.remove('error'))

    if (!name.value.trim()) { name.classList.add('error'); valid = false }
    if (!email.value.trim() || !email.validity.valid) { email.classList.add('error'); valid = false }
    if (!message.value.trim()) { message.classList.add('error'); valid = false }

    if (!valid) return

    submitted.current = true
    await formspreeSubmit(e)
  }

  const gridRef = useScrollReveal<HTMLDivElement>(true)

  const btnText = state.submitting ? 'Sending...' : feedback === 'sent' ? '\u2713 Sent!' : feedback === 'error' ? '\u2717 Failed' : 'Send Message \u2192'
  const btnStyle: React.CSSProperties = {
    alignSelf: 'flex-start',
    ...(feedback === 'sent' ? { background: '#34D399', color: '#080C18' } : {}),
    ...(feedback === 'error' ? { background: '#EF4444', color: '#fff' } : {}),
  }

  return (
    <Section
      id="contact"
      label="#contact"
      title="Let&rsquo;s build something"
      description="Have a project in mind or just want to say hi? Drop me a message."
    >
      <div className="contact-grid" ref={gridRef}>
        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate ref={formRef}>
          <div className="form-group">
            <label htmlFor="formName">Name</label>
            <input type="text" id="formName" name="name" placeholder="Your name" required autoComplete="name" onInput={handleInput} />
          </div>
          <div className="form-group">
            <label htmlFor="formEmail">Email</label>
            <input type="email" id="formEmail" name="email" placeholder="you@example.com" required autoComplete="email" onInput={handleInput} />
          </div>
          <div className="form-group">
            <label htmlFor="formMessage">Message</label>
            <textarea id="formMessage" name="message" placeholder="Tell me about your project..." required onInput={handleInput} />
          </div>
          <button type="submit" className="btn btn-primary" style={btnStyle} disabled={state.submitting}>
            {btnText}
          </button>
        </form>
        <div className="contact-info reveal">
          <p>
            I&apos;m always open to new opportunities, collaborations, or just a good
            conversation about Flutter and design. Response time is usually within 24 hours.
          </p>
          <div className="contact-links">
            {CONTACT_LINKS.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="link-icon"><SocialIcon href={link.href} /></span> {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

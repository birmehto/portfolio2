import { Section } from '../ui/Section'
import { CONTACT_LINKS } from '../../data/content'

export function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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

    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    const orig = btn.textContent!
    btn.textContent = 'Sending...'
    btn.disabled = true

    setTimeout(() => {
      btn.textContent = '\u2713 Sent!'
      btn.style.background = '#34D399'
      btn.style.color = '#080C18'
      form.reset()
      setTimeout(() => {
        btn.textContent = orig
        btn.style.background = ''
        btn.style.color = ''
        btn.disabled = false
      }, 2000)
    }, 1200)
  }

  return (
    <Section
      id="contact"
      label="05 / Contact"
      title="Let&rsquo;s build something"
      description="Have a project in mind or just want to say hi? Drop me a message."
    >
      <div className="contact-grid">
        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="formName">Name</label>
            <input type="text" id="formName" name="name" placeholder="Your name" required autoComplete="name" />
          </div>
          <div className="form-group">
            <label htmlFor="formEmail">Email</label>
            <input type="email" id="formEmail" name="email" placeholder="you@example.com" required autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="formMessage">Message</label>
            <textarea id="formMessage" name="message" placeholder="Tell me about your project..." required></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            Send Message &rarr;
          </button>
        </form>
        <div className="contact-info reveal">
          <p>
            I&apos;m always open to new opportunities, collaborations, or just a good
            conversation about Flutter and design. Response time is usually within 24 hours.
          </p>
          <div className="contact-links">
            {CONTACT_LINKS.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener" className="contact-link">
                <span className="link-icon">{link.icon}</span> {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <section className="hero hero-inner contact-hero">
        <div className="container narrow">
          <span className="eyebrow">Start a focused conversation</span>
          <h1 className="gradient">
            Tell us the problem.
            <br />
            We’ll shape the next step.
          </h1>
          <p>
            Share the department, application, workflow or campaign challenge. We usually respond
            within one to two business days.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <h2>What happens next</h2>
            <ol className="number-list">
              <li>We review your objective and constraints.</li>
              <li>We identify the right discovery, PoC or campaign path.</li>
              <li>We propose a focused working session and requested inputs.</li>
            </ol>
            <div className="contact-direct">
              <b>Direct contact</b>
              <a href="mailto:contact@irahsolution.com">contact@irahsolution.com</a>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

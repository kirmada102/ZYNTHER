import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Connect | orenva',
  description:
    'Get in touch with the orenva team — for partnerships, press, advising, investment, or to join the preview waitlist.',
  openGraph: {
    title: 'Connect with orenva',
    description: 'Reach the team behind the unified healthcare platform.',
    type: 'website',
  },
}

export default function ConnectPage() {
  return (
    <>
      <div className="site-bg" aria-hidden="true"></div>
      <div className="site-grid" aria-hidden="true"></div>

      <SiteHeader active="connect" />

      <main id="main">
        <section className="section-shell content-section page-hero">
          <div className="page-hero-copy" data-reveal>
            <p className="eyebrow-pill">Connect</p>
            <h1>Let&rsquo;s talk.</h1>
            <p>
              Whether you want to partner, advise, invest, or simply ask a question — the orenva
              team reads every message. Reach us directly through any channel below.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="mailto:orenva.health@gmail.com">
                Email the team
              </a>
              <a className="button-secondary" href="/#cta">
                Join the waitlist
              </a>
            </div>
          </div>
        </section>

        <section className="section-shell content-section">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Ways to reach us</p>
            <h2>Pick whichever is easiest.</h2>
          </div>

          <div className="card-grid three-up">
            <article className="glass-card connect-card" data-reveal>
              <p className="section-kicker">Email</p>
              <h2>Write to us</h2>
              <p>
                The fastest way to reach the team. We aim to reply to every genuine message within
                a few working days.
              </p>
              <div className="stacked-links">
                <a className="platform-button" href="mailto:orenva.health@gmail.com">
                  <span className="platform-icon">@</span>
                  <span>
                    <small>Email</small>
                    orenva.health@gmail.com
                  </span>
                </a>
              </div>
            </article>

            <article
              className="glass-card connect-card"
              data-reveal
              style={{ '--reveal-delay': '90ms' } as React.CSSProperties}
            >
              <p className="section-kicker">Phone</p>
              <h2>Call us</h2>
              <p>Reach the team in Europe or India directly — for partnerships and time-sensitive enquiries.</p>
              <div className="stacked-links">
                <a className="platform-button" href="tel:+491745199723">
                  <span className="platform-icon">EU</span>
                  <span>
                    <small>Europe</small>
                    +49 1745 199723
                  </span>
                </a>
                <a className="platform-button" href="tel:+918830224353">
                  <span className="platform-icon">IN</span>
                  <span>
                    <small>India</small>
                    +91 88302 24353
                  </span>
                </a>
              </div>
            </article>

            <article
              className="glass-card connect-card"
              data-reveal
              style={{ '--reveal-delay': '180ms' } as React.CSSProperties}
            >
              <p className="section-kicker">App &amp; social</p>
              <h2>Follow along</h2>
              <p>Get the app at launch and follow orenva for previews and announcements.</p>
              <div className="stacked-links">
                <a
                  className="platform-button"
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="platform-icon">A</span>
                  <span>
                    <small>Download on the</small>
                    App Store
                  </span>
                </a>
                <a
                  className="platform-button"
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="platform-icon">P</span>
                  <span>
                    <small>Get it on</small>
                    Google Play
                  </span>
                </a>
              </div>
              <div className="social-row" style={{ marginTop: '1rem' }}>
                <a className="social-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell content-section">
          <div className="card-grid three-up">
            <article className="glass-card story-card" data-reveal>
              <p className="section-kicker">Partnerships</p>
              <h3>Clinics &amp; providers</h3>
              <p>
                If you run a clinic, pharmacy, or care service and want to explore integrating with
                orenva, email us with &ldquo;Partnership&rdquo; in the subject line.
              </p>
            </article>
            <article
              className="glass-card story-card"
              data-reveal
              style={{ '--reveal-delay': '90ms' } as React.CSSProperties}
            >
              <p className="section-kicker">Investors</p>
              <h3>Backing the build</h3>
              <p>
                We speak with investors who share a long view on healthcare infrastructure. Reach
                out and we will share the current materials.
              </p>
            </article>
            <article
              className="glass-card story-card"
              data-reveal
              style={{ '--reveal-delay': '180ms' } as React.CSSProperties}
            >
              <p className="section-kicker">Press</p>
              <h3>Media &amp; enquiries</h3>
              <p>
                For press and media requests, email the team directly — we are happy to talk about
                what orenva is building and why.
              </p>
            </article>
          </div>
        </section>

        <section className="section-shell content-section">
          <article className="glass-card large-copy-card" data-reveal>
            <p className="section-kicker">Be first</p>
            <h2>The best way to stay close is the waitlist.</h2>
            <p>
              Join the preview waitlist for first access — and a real say in what orenva builds
              first.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="/#cta">
                Join the waitlist
              </a>
              <a className="button-secondary" href="/about">
                Learn about orenva
              </a>
            </div>
          </article>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

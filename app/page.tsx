import HeroScene from '@/components/HeroScene'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import HomeInteractions from '@/components/HomeInteractions'
import { AppleIcon, GooglePlayIcon } from '@/components/icons'
import { MODULES } from '@/lib/modules'

export default function Home() {
  return (
    <>
      <div className="site-bg" aria-hidden="true"></div>
      <div className="site-grid" aria-hidden="true"></div>

      <HeroScene />

      <SiteHeader active="home" />

      <main id="main">
        <section className="hero section-shell" id="hero">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow-pill">Activating the future of healthcare</p>
            <h1>
              One intelligent ecosystem for
              <span>consultation, care, and wellness.</span>
            </h1>
            <p className="hero-text">
              orenva unifies AI doctor consultation, pharmacy ordering, diet and fitness coaching, therapy support,
              insurance intelligence, and supplements into one premium health-tech platform.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="/#cta">
                Join the waitlist
              </a>
              <a className="button-secondary" href="/ecosystem">
                Explore the ecosystem
              </a>
            </div>

            <div className="hero-metrics">
              <article className="glass-card metric-card">
                <p className="metric-label">AI consultation</p>
                <h2>Fewer unnecessary visits</h2>
                <p>Smart triage guides users before they enter fragmented care loops.</p>
              </article>
              <article className="glass-card metric-card">
                <p className="metric-label">Unified journey</p>
                <h2>One health context</h2>
                <p>Pharmacy, therapy, insurance, and wellness move through one system.</p>
              </article>
              <article className="glass-card metric-card">
                <p className="metric-label">Future ready</p>
                <h2>Built for desktop and phone</h2>
                <p>The interaction system scales gracefully for mobile users.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell content-section" id="ecosystem">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Ecosystem view</p>
            <h2>Six intelligent modules orbit the orenva core.</h2>
            <p>
              Click any module card below to explore how everything fits into one connected care experience.
            </p>
          </div>

          <div className="ecosystem-layout">
            <div className="module-grid" data-reveal>
              {MODULES.map((module) => (
                <button
                  key={module.id}
                  className="glass-card module-card"
                  type="button"
                  data-module={module.id}
                  aria-pressed="false"
                >
                  <span className="module-line"></span>
                  <p className="module-tag">{module.label}</p>
                  <h3>{module.title}</h3>
                  <p>{module.tagline}</p>
                </button>
              ))}
            </div>

            <aside className="glass-card ecosystem-status" data-reveal>
              <p className="section-kicker">Explore the system</p>
              <h3>Pick a module</h3>
              <p>
                Select any module to see how it fits into one connected health context — and where it
                hands off to the rest of orenva.
              </p>

              <div className="focus-card">
                <p className="section-kicker">In focus</p>
                <h4 id="currentFocusTitle">orenva Core</h4>
                <p id="currentFocusText">
                  A unified, AI-first layer orchestrating consultation, pharmacy, therapy, insurance, and
                  wellness as one experience.
                </p>
              </div>
            </aside>
          </div>

          <div data-reveal style={{ marginTop: '1.7rem' }}>
            <a className="button-secondary" href="/ecosystem">
              Explore the full ecosystem
            </a>
          </div>
        </section>

        <section className="section-shell content-section" id="about">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Why orenva</p>
            <h2>Healthcare is scattered. We are building the thread.</h2>
            <p>
              You consult in one place, fill prescriptions in another, track fitness in a third, and
              manage insurance somewhere else entirely. Every handoff loses context — and you are left
              carrying the gap. orenva exists to close it.
            </p>
          </div>

          <div data-reveal>
            <a className="button-secondary" href="/about">
              Read our story
            </a>
          </div>
        </section>

        <section className="section-shell content-section" id="cta">
          <div className="glass-card cta-panel" data-reveal>
            <div className="cta-copy">
              <p className="eyebrow-pill">Join the future of healthcare</p>
              <h2>Enter the orenva waitlist and get ready for launch.</h2>
              <p>Be among the first to experience the future of unified healthcare.</p>

              <form className="waitlist-form" data-waitlist-form>
                <label className="sr-only" htmlFor="waitlistEmail">
                  Email address
                </label>
                <input
                  id="waitlistEmail"
                  type="email"
                  name="email"
                  placeholder="Enter your email for the preview waitlist"
                  required
                />
                <button className="button-primary" type="submit">
                  Join waitlist
                </button>
              </form>
              <p className="form-feedback" data-waitlist-feedback></p>
            </div>

            <div className="cta-side">
              <article className="glass-card sub-card">
                <p className="section-kicker">Download & follow</p>
                <div className="stacked-links">
                  <a className="platform-button" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                    <span className="platform-icon"><AppleIcon /></span>
                    <span>
                      <small>Download on the</small>
                      App Store
                    </span>
                  </a>
                  <a className="platform-button" href="https://play.google.com/store" target="_blank" rel="noreferrer">
                    <span className="platform-icon"><GooglePlayIcon /></span>
                    <span>
                      <small>Get it on</small>
                      Google Play
                    </span>
                  </a>
                </div>
                <div className="social-row">
                  <a className="social-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </div>
              </article>

              <article className="glass-card sub-card">
                <p className="section-kicker">Platform promise</p>
                <p>
                  Everything healthcare in one intelligent platform, from AI doctor consultation to pharmacy, therapy,
                  insurance, and wellness products.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <HomeInteractions />
    </>
  )
}

import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import HomeInteractions from '@/components/HomeInteractions'
import { MODULES } from '@/lib/modules'

const outcomes = [
  {
    title: 'One health context',
    body: 'Every module reads from the same record. You explain yourself once — and never again.',
  },
  {
    title: 'No cold starts',
    body: 'A consultation flows into a prescription, a prescription into a claim. Nothing restarts.',
  },
  {
    title: 'Care that compounds',
    body: 'Each interaction sharpens the next. The platform learns the shape of your health over time.',
  },
]

export default function Home() {
  return (
    <>
      <div className="site-bg" aria-hidden="true" />
      <div className="site-grid" aria-hidden="true" />

      <SiteHeader active="home" />

      <main id="main">
        {/* ─── Hero ─── */}
        <section className="hero section-shell" id="hero">
          <div className="hero-copy">
            <p className="eyebrow-pill">The unified healthcare platform</p>
            <h1>
              All of your health,{' '}
              <span>finally connected.</span>
            </h1>
            <p className="hero-text">
              orenva brings AI consultation, pharmacy, therapy, fitness, insurance, and wellness
              into one intelligent platform — one that actually remembers you.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#cta">
                Join the waitlist
              </a>
              <a className="button-secondary" href="/ecosystem">
                See the platform
              </a>
            </div>
          </div>

          <div className="hero-core" aria-hidden="true">
            <span className="hero-core__ring hero-core__ring--outer" />
            <span className="hero-core__ring hero-core__ring--inner" />
            <div className="hero-core__orbits">
              {MODULES.map((m, i) => (
                <span
                  key={m.id}
                  className="hero-core__orbit"
                  style={{ transform: `rotate(${i * 60}deg)` }}
                >
                  <span className="hero-core__node" />
                </span>
              ))}
            </div>
            <div className="hero-core__orb">
              <span className="hero-core__orb-label">
                orenva
                <br />
                core
              </span>
            </div>
          </div>
        </section>

        {/* ─── Problem ─── */}
        <section className="section-shell problem">
          <p className="section-kicker">The problem</p>
          <h2 className="statement">
            Your health lives in <em>a dozen apps</em> that have never met.
          </h2>
          <p className="problem-sub">
            A consultation in one. A prescription in another. Fitness in a third, insurance in a
            fourth. Every service begins from zero — and you are the only thread holding them
            together.
          </p>
        </section>

        {/* ─── Ecosystem ─── */}
        <section className="section-shell content-section" id="ecosystem">
          <div className="section-heading">
            <p className="section-kicker">The ecosystem</p>
            <h2>Six modules. One platform.</h2>
            <p>
              Each is a complete service on its own. Together they become something no single app
              can be.
            </p>
          </div>
          <div className="eco-grid">
            {MODULES.map((m, i) => (
              <a key={m.id} href={`/ecosystem/${m.id}`} className="eco-card">
                <span className="eco-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{m.title}</h3>
                <p>{m.tagline}</p>
                <span className="eco-card__more">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ─── The thread ─── */}
        <section className="section-shell content-section thread">
          <div className="section-heading">
            <p className="section-kicker">Why it matters</p>
            <h2>The point is not the modules. It is the thread between them.</h2>
          </div>
          <div className="outcome-row">
            {outcomes.map((o) => (
              <div key={o.title} className="outcome">
                <span className="outcome__rule" aria-hidden="true" />
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Waitlist ─── */}
        <section className="section-shell content-section" id="cta">
          <div className="cta-block">
            <p className="section-kicker">Be early</p>
            <h2>Join the orenva waitlist.</h2>
            <p className="cta-block__sub">
              We are opening the platform to a first group of members before launch. Add your email
              and you will be among them.
            </p>
            <form className="waitlist-form stacked" data-waitlist-form>
              <label className="sr-only" htmlFor="waitlistEmail">
                Email address
              </label>
              <input
                id="waitlistEmail"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
              <button className="button-primary" type="submit">
                Join the waitlist
              </button>
            </form>
            <p className="form-feedback" data-waitlist-feedback />
          </div>
        </section>
      </main>

      <SiteFooter />
      <HomeInteractions />
    </>
  )
}

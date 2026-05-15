import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'About orenva | Healthcare, made whole',
  description:
    'orenva unifies AI consultation, pharmacy, therapy, fitness, insurance, and wellness into one intelligent healthcare platform. Learn why we are building it.',
  openGraph: {
    title: 'About orenva | Healthcare, made whole',
    description:
      'One intelligent platform where consultation, pharmacy, therapy, fitness, insurance, and wellness finally share the same context.',
    type: 'website',
  },
}

const principles = [
  {
    kicker: 'Mission',
    title: 'One unified care layer',
    body: 'Bring consultation, pharmacy, therapy, prevention, insurance, and wellness commerce into one intelligent environment that understands the whole person — not six separate fragments of them.',
  },
  {
    kicker: 'Vision',
    title: 'Healthcare without fragmentation',
    body: 'A future where moving between care services feels like one continuous conversation, rather than a series of cold starts where you re-explain yourself every time.',
  },
  {
    kicker: 'Principle',
    title: 'Advanced, precise, empathetic',
    body: 'Every interaction is engineered to feel premium and reassuring. Intelligence should lower anxiety, never add to it. The technology stays quiet so the care stays clear.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Start with a conversation',
    body: 'AI consultation listens first and triages intelligently — guiding you toward the right next step before you enter a fragmented care loop.',
  },
  {
    step: '02',
    title: 'Move without friction',
    body: 'Pharmacy, therapy, insurance, and wellness all read from one health context. No re-entry, no repeated history, no lost detail between services.',
  },
  {
    step: '03',
    title: 'Stay ahead of it',
    body: 'Diet, fitness, and mental-health support work continuously in the background — so prevention becomes the default rather than the afterthought.',
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="site-bg" aria-hidden="true"></div>
      <div className="site-grid" aria-hidden="true"></div>

      <SiteHeader active="about" />

      <main id="main">
        <section className="section-shell content-section page-hero">
          <div className="page-hero-copy" data-reveal>
            <p className="eyebrow-pill">About orenva</p>
            <h1>Healthcare, made whole.</h1>
            <p>
              orenva began with a simple frustration: getting well should not mean managing six
              disconnected services. We are building one intelligent platform where consultation,
              pharmacy, therapy, fitness, insurance, and wellness finally share the same context.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="/#cta">
                Join the waitlist
              </a>
              <a className="button-secondary" href="/for-you">
                See what it means for you
              </a>
            </div>
          </div>
        </section>

        <section className="section-shell content-section">
          <article className="glass-card large-copy-card" data-reveal>
            <p className="section-kicker">The problem</p>
            <h2>Care today is scattered across a dozen apps that never speak to each other.</h2>
            <p>
              You consult a doctor in one place, fill a prescription in another, track fitness in a
              third, and manage insurance somewhere else entirely. Every handoff loses context — and
              you are the one left carrying the gap. orenva exists to close it: one health context,
              shared by every part of the journey.
            </p>
          </article>
        </section>

        <section className="section-shell content-section">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">What drives us</p>
            <h2>Trustworthy infrastructure, with a futuristic interface.</h2>
            <p>
              The experience feels like a product reveal, but the tone stays calm, medically
              credible, and deeply human-centered.
            </p>
          </div>

          <div className="card-grid three-up">
            {principles.map((item, i) => (
              <article
                key={item.kicker}
                className="glass-card reveal-card"
                data-reveal
                style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
              >
                <p className="section-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">How orenva works</p>
            <h2>One continuous journey, in three movements.</h2>
          </div>

          <div className="story-grid">
            {steps.map((item, i) => (
              <article
                key={item.step}
                className="glass-card story-card"
                data-reveal
                style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
              >
                <p className="section-kicker">{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section">
          <article className="glass-card large-copy-card" data-reveal>
            <p className="section-kicker">Where we are</p>
            <h2>Built for launch, shaped by the people who join early.</h2>
            <p>
              orenva is approaching its preview. The waitlist is where it takes shape — early
              members help us decide what to build first and how it should feel.{' '}
              <a href="/connect" style={{ color: 'var(--iris)', fontWeight: 700 }}>
                Reach the team directly
              </a>{' '}
              if you would like to partner, advise, or invest.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="/#cta">
                Join the waitlist
              </a>
              <a className="button-secondary" href="/connect">
                Connect with us
              </a>
            </div>
          </article>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

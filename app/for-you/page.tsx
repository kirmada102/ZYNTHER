import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'For You | orenva',
  description:
    'Whether you are managing day-to-day wellbeing, a long-term condition, or a family’s health, orenva brings consultation, pharmacy, therapy, fitness, and insurance into one place.',
  openGraph: {
    title: 'orenva — built around your health',
    description: 'One health context for everyday wellbeing, chronic conditions, and the people you care for.',
    type: 'website',
  },
}

const audiences = [
  {
    kicker: 'For everyday wellbeing',
    title: 'One place for the small things',
    body: 'A question about a symptom, a repeat prescription, a fitness check-in — handled in one calm space instead of four different apps and three waiting rooms.',
  },
  {
    kicker: 'For managing a condition',
    title: 'Continuity that holds',
    body: 'Living with a long-term condition means constant coordination. orenva keeps consultation, medication, and monitoring in one thread, so nothing has to be re-explained.',
  },
  {
    kicker: 'For families & caregivers',
    title: 'Care for the people you love',
    body: 'Managing health for a parent, a partner, or a child becomes far simpler when every service shares the same context — and you are not the one holding it together.',
  },
]

const benefits = [
  {
    kicker: 'One health context',
    title: 'Never start cold',
    body: 'Your history follows you across consultation, pharmacy, therapy, and insurance. You explain yourself once — the platform remembers the rest.',
  },
  {
    kicker: 'Fewer dead ends',
    title: 'Always a clear next step',
    body: 'Smart triage means you are guided toward the right kind of care first, instead of guessing which service to open.',
  },
  {
    kicker: 'A calmer experience',
    title: 'Designed to reassure',
    body: 'Health moments are stressful. Every screen is tuned to feel premium and steady — clear information, no alarm, no clutter.',
  },
]

export default function ForYouPage() {
  return (
    <>
      <div className="site-bg" aria-hidden="true"></div>
      <div className="site-grid" aria-hidden="true"></div>

      <SiteHeader active="for-you" />

      <main id="main">
        <section className="section-shell content-section page-hero">
          <div className="page-hero-copy" data-reveal>
            <p className="eyebrow-pill">For you</p>
            <h1>Built around your health, not the system&rsquo;s.</h1>
            <p>
              Healthcare is usually organised around institutions. orenva is organised around you —
              one continuous thread that follows your health wherever it goes.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="/#cta">
                Join the waitlist
              </a>
              <a className="button-secondary" href="/#ecosystem">
                Explore the ecosystem
              </a>
            </div>
          </div>
        </section>

        <section className="section-shell content-section">
          <article className="glass-card large-copy-card" data-reveal>
            <p className="section-kicker">The idea</p>
            <h2>Your health is one story. It should not be told in fragments.</h2>
            <p>
              Consultation, pharmacy, diet and fitness, therapy, insurance, and supplements are all
              chapters of the same story. orenva keeps them in one place so the thread never
              breaks — and so the next step is always clear.
            </p>
          </article>
        </section>

        <section className="section-shell content-section">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Who it is for</p>
            <h2>Wherever you are with your health.</h2>
          </div>

          <div className="card-grid three-up">
            {audiences.map((item, i) => (
              <article
                key={item.kicker}
                className="glass-card story-card"
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
            <p className="section-kicker">What you get</p>
            <h2>The difference one platform makes.</h2>
          </div>

          <div className="card-grid three-up">
            {benefits.map((item, i) => (
              <article
                key={item.kicker}
                className="glass-card benefit-card"
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
          <article className="glass-card large-copy-card" data-reveal>
            <p className="section-kicker">Be early</p>
            <h2>Join the waitlist and help shape what launches first.</h2>
            <p>
              orenva is approaching its preview. Early members get first access — and a real say in
              which parts of the experience we build first.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="/#cta">
                Join the waitlist
              </a>
              <a className="button-secondary" href="/connect">
                Talk to the team
              </a>
            </div>
          </article>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

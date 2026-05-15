import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Team | orenva',
  description:
    'The people building orenva — a small, senior team uniting clinical insight, AI engineering, and product craft to make healthcare whole.',
  openGraph: {
    title: 'The team behind orenva',
    description: 'A small, senior team building one intelligent healthcare platform.',
    type: 'website',
  },
}

// ─── Founders ──────────────────────────────────────────────────────────────
// Placeholder cards — each is role-led so the page is presentable now.
// Replace `name` with the real founder name (and add a photo) when ready.
// The card already renders cleanly with name left blank.
const founders = [
  {
    kicker: 'Co-founder',
    name: '',
    role: 'Product & Clinical',
    body: 'Owns the care experience end to end — translating real clinical pathways into an interface that feels calm, credible, and genuinely human.',
  },
  {
    kicker: 'Co-founder',
    name: '',
    role: 'AI & Platform',
    body: 'Builds the intelligence layer — the triage models, the shared health context, and the infrastructure that lets six modules behave as one system.',
  },
]

const values = [
  {
    kicker: 'How we work',
    title: 'Clinical truth first',
    body: 'Every feature is checked against how care actually works. We would rather ship slower than ship something that misleads a patient.',
  },
  {
    kicker: 'How we work',
    title: 'Calm by design',
    body: 'Health moments are stressful enough. The product earns trust by being quiet, precise, and reassuring — never loud or alarmist.',
  },
  {
    kicker: 'How we work',
    title: 'Small and senior',
    body: 'A deliberately small team of experienced builders, spanning Europe and India, each owning real surface area rather than a narrow slice.',
  },
]

export default function TeamPage() {
  return (
    <>
      <div className="site-bg" aria-hidden="true"></div>
      <div className="site-grid" aria-hidden="true"></div>

      <SiteHeader active="team" />

      <main id="main">
        <section className="section-shell content-section page-hero">
          <div className="page-hero-copy" data-reveal>
            <p className="eyebrow-pill">The team</p>
            <h1>The people behind orenva.</h1>
            <p>
              orenva is built by a small, senior team that brings together clinical insight, AI
              engineering, and product craft — united by one belief: healthcare should feel whole,
              not fragmented.
            </p>
          </div>
        </section>

        <section className="section-shell content-section">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Founders</p>
            <h2>Two disciplines, one platform.</h2>
            <p>Clinical understanding and AI engineering, building side by side from day one.</p>
          </div>

          <div className="card-grid three-up">
            {founders.map((person, i) => (
              <article
                key={person.role}
                className="glass-card founder-card"
                data-reveal
                style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
              >
                <p className="section-kicker">{person.kicker}</p>
                <h2>{person.name || person.role}</h2>
                {person.name ? <p className="founder-role">{person.role}</p> : null}
                <p>{person.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell content-section">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">What we value</p>
            <h2>The principles behind every decision.</h2>
          </div>

          <div className="story-grid">
            {values.map((item, i) => (
              <article
                key={item.title}
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
          <article className="glass-card large-copy-card" data-reveal>
            <p className="section-kicker">Join us</p>
            <h2>We are looking for people who care about getting healthcare right.</h2>
            <p>
              If you are a clinician, an AI engineer, or a product builder who believes care should
              be one continuous experience, we would like to hear from you — early team members
              shape the platform itself.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="/connect">
                Get in touch
              </a>
              <a className="button-secondary" href="/about">
                Read our story
              </a>
            </div>
          </article>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

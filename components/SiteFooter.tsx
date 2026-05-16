import Image from 'next/image'

const YEAR = new Date().getFullYear()

// Shared site footer.
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <a className="footer-lockup" href="/" aria-label="orenva home">
            <span className="brand-mark footer-mark">
              <Image className="brand-logo" src="/orenva-logo.png" alt="" fill sizes="44px" />
            </span>
            <span className="footer-wordmark">orenva</span>
          </a>
          <p className="footer-tagline">One place. Every solution.</p>
          <p className="footer-desc">
            The unified healthcare platform — AI consultation, pharmacy, therapy, fitness,
            insurance, and wellness, held in one intelligent system.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <div className="footer-col">
            <p className="footer-heading">Platform</p>
            <a href="/ecosystem">Ecosystem</a>
            <a href="/ecosystem/ai-doctor">AI Doctor</a>
            <a href="/ecosystem/pharmacy">Pharmacy</a>
            <a href="/ecosystem/diet-fitness">Diet &amp; Fitness</a>
            <a href="/ecosystem/therapy">Therapy &amp; Mental Health</a>
            <a href="/ecosystem/insurance">Insurance</a>
            <a href="/ecosystem/store">Supplements &amp; Store</a>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Company</p>
            <a href="/about">About</a>
            <a href="/team">Team</a>
            <a href="/for-you">For You</a>
            <a href="/connect">Connect</a>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Get in touch</p>
            <a href="mailto:orenva.health@gmail.com">orenva.health@gmail.com</a>
            <a href="tel:+491745199723">+49 1745 199723</a>
            <a href="tel:+918830224353">+91 88302 24353</a>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© {YEAR} orenva. All rights reserved.</p>
        <a className="footer-bottom__cta" href="/#cta">
          Join the waitlist →
        </a>
      </div>
    </footer>
  )
}

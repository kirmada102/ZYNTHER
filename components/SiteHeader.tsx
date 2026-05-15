import Image from 'next/image'

// Shared site header. Interactivity (menu toggle, scroll hide, theme
// toggle) is wired globally by components/ClientScripts.tsx via the
// data-* attributes below — this component only renders the markup.

const NAV_LINKS = [
  { href: '/#hero', label: 'Home', key: 'home' },
  { href: '/#ecosystem', label: 'Ecosystem', key: 'ecosystem' },
  { href: '/about', label: 'About', key: 'about' },
  { href: '/team', label: 'Team', key: 'team' },
  { href: '/for-you', label: 'For You', key: 'for-you' },
  { href: '/connect', label: 'Connect', key: 'connect' },
]

export default function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="orenva home">
        <span className="brand-mark">
          <Image className="brand-logo" src="/orenva-logo.png" alt="orenva logo" fill sizes="48px" priority />
        </span>
        <span className="brand-copy">
          <strong>orenva</strong>
          <span>One place. Every solution</span>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        data-menu-toggle
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
      </button>

      <nav className="site-nav" data-menu>
        {NAV_LINKS.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className={active === link.key ? 'is-active' : undefined}
            aria-current={active === link.key ? 'page' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="theme-toggle"
        type="button"
        data-theme-toggle
        aria-label="Toggle dark mode"
        aria-pressed="false"
      >
        <span className="theme-toggle-orb"></span>
        <span className="theme-toggle-text">Dark mode</span>
      </button>

      <div className="header-links desktop-only">
        <a className="mini-link" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
          App Store
        </a>
        <a className="mini-link" href="https://play.google.com/store" target="_blank" rel="noreferrer">
          Play Store
        </a>
      </div>
    </header>
  )
}

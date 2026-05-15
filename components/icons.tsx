// Small monochrome icons for platform / contact badges. They inherit
// `currentColor`, so they sit correctly inside the `.platform-icon`
// gradient badge on both themes.

export function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M17.564 12.78c.024 2.62 2.298 3.49 2.323 3.5-.02.062-.364 1.244-1.2 2.466-.723 1.055-1.473 2.106-2.654 2.128-1.16.021-1.534-.688-2.86-.688-1.327 0-1.742.666-2.84.71-1.14.043-2.01-1.142-2.738-2.193-1.49-2.15-2.628-6.075-1.1-8.725.76-1.317 2.116-2.15 3.59-2.172 1.12-.02 2.176.752 2.86.752.684 0 1.968-.93 3.318-.794.565.024 2.15.228 3.168 1.718-.082.05-1.892 1.104-1.872 3.296M15.39 5.13c.604-.732 1.01-1.75.9-2.764-.87.035-1.922.58-2.547 1.31-.56.648-1.05 1.684-.918 2.678.97.075 1.96-.493 2.565-1.224" />
    </svg>
  )
}

export function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M4 2.6v18.8c0 .37.4.6.72.42l16.2-9.4a.5.5 0 0 0 0-.86L4.72 2.18A.48.48 0 0 0 4 2.6z" />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.12.35.03.75-.24 1.02z" />
    </svg>
  )
}

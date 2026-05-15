import type { Metadata } from "next"
import { Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from "@/components/ThemeProvider"
import { ClientScripts } from "@/components/ClientScripts"
import "./globals.css"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  metadataBase: new URL("https://orenvahealth.com"),
  title: "orenva | Unified Healthcare AI Platform",
  description:
    "orenva is a premium healthcare AI platform unifying consultation, pharmacy, therapy, fitness, insurance, and wellness commerce in one intelligent ecosystem.",
  keywords:
    "orenva, healthcare AI, AI doctor, digital health, pharmacy, therapy, insurance, wellness",
  openGraph: {
    title: "orenva | One place. Every solution",
    description: "Step inside the future of healthcare with orenva's immersive AI-powered ecosystem.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mark JS as available (gates [data-reveal] hiding) and apply the
            theme before first paint — saved choice, else OS preference. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('orenva-theme');if(t==='dark'||(!t&&window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.setAttribute('data-theme','dark')}}catch(e){}})()",
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} page-home`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <ThemeProvider>
          {children}
          <ClientScripts />
        </ThemeProvider>
      </body>
    </html>
  )
}

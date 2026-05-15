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
        {/* Apply the saved theme before first paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('orenva-theme')==='dark'){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})()",
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} page-home`}>
        <ThemeProvider>
          {children}
          <ClientScripts />
        </ThemeProvider>
      </body>
    </html>
  )
}

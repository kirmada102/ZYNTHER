'use client'

import { useEffect, useState } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Sync state with the theme the inline <head> script already applied.
    const saved = localStorage.getItem('orenva-theme') as 'light' | 'dark' | null
    const initial = saved || 'light'
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement
    if (newTheme === 'dark') {
      root.setAttribute('data-theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
    }
    localStorage.setItem('orenva-theme', newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  // Always render children — gating on a mounted flag would leave the
  // server-rendered HTML empty (no content for crawlers or first paint).
  return (
    <>
      {children}
      <ThemeToggleScript theme={theme} onToggle={toggleTheme} />
    </>
  )
}

function ThemeToggleScript({
  theme,
  onToggle,
}: {
  theme: 'light' | 'dark'
  onToggle: () => void
}) {
  useEffect(() => {
    const handleThemeToggle = () => {
      onToggle()
    }

    const toggles = document.querySelectorAll('[data-theme-toggle]')
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', handleThemeToggle)
    })

    return () => {
      toggles.forEach((toggle) => {
        toggle.removeEventListener('click', handleThemeToggle)
      })
    }
  }, [onToggle])

  return null
}

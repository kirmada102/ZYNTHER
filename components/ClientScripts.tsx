'use client'

import { useEffect } from 'react'

export function ClientScripts() {
  useEffect(() => {
    const body = document.body
    const menuToggle = document.querySelector('[data-menu-toggle]')
    const menuLinks = document.querySelectorAll('.site-nav a')
    const siteHeader = document.querySelector('.site-header')

    // Menu toggle
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        const isOpen = body.classList.toggle('menu-open')
        menuToggle.setAttribute('aria-expanded', String(isOpen))
      })
    }

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        body.classList.remove('menu-open')
        menuToggle?.setAttribute('aria-expanded', 'false')
      })
    })

    // Header visibility on scroll
    if (siteHeader) {
      let ticking = false

      function updateHeaderState() {
        const scrollY = window.scrollY || 0
        const shouldShow =
          scrollY <= 24 ||
          body.classList.contains('menu-open') ||
          body.classList.contains('panel-open')

        body.classList.toggle('header-hidden', !shouldShow && scrollY > 80)
        ticking = false
      }

      function requestUpdate() {
        if (ticking) return
        ticking = true
        window.requestAnimationFrame(updateHeaderState)
      }

      window.addEventListener('scroll', requestUpdate, { passive: true })
      window.addEventListener('resize', requestUpdate)
      updateHeaderState()

      return () => {
        window.removeEventListener('scroll', requestUpdate)
        window.removeEventListener('resize', requestUpdate)
      }
    }
  }, [])

  return null
}

'use client'

import { useEffect } from 'react'

export function ClientScripts() {
  useEffect(() => {
    const body = document.body
    const menuToggle = document.querySelector('[data-menu-toggle]')
    const menuLinks = document.querySelectorAll('.site-nav a')
    const siteHeader = document.querySelector('.site-header')

    const cleanups: Array<() => void> = []

    // ─── Menu toggle ───
    if (menuToggle) {
      const onMenuClick = () => {
        const isOpen = body.classList.toggle('menu-open')
        menuToggle.setAttribute('aria-expanded', String(isOpen))
      }
      menuToggle.addEventListener('click', onMenuClick)
      cleanups.push(() => menuToggle.removeEventListener('click', onMenuClick))
    }

    const closeMenu = () => {
      body.classList.remove('menu-open')
      menuToggle?.setAttribute('aria-expanded', 'false')
    }
    menuLinks.forEach((link) => {
      link.addEventListener('click', closeMenu)
      cleanups.push(() => link.removeEventListener('click', closeMenu))
    })

    // Dismiss the open mobile menu with Escape or a tap outside the header.
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && body.classList.contains('menu-open')) {
        closeMenu()
        ;(menuToggle as HTMLElement | null)?.focus()
      }
    }
    const onDocPointer = (event: Event) => {
      if (!body.classList.contains('menu-open')) return
      if (siteHeader && !siteHeader.contains(event.target as Node)) closeMenu()
    }
    document.addEventListener('keydown', onKeydown)
    document.addEventListener('click', onDocPointer)
    cleanups.push(() => {
      document.removeEventListener('keydown', onKeydown)
      document.removeEventListener('click', onDocPointer)
    })

    // ─── Header visibility on scroll ───
    if (siteHeader) {
      let ticking = false

      const updateHeaderState = () => {
        const scrollY = window.scrollY || 0
        const shouldShow =
          scrollY <= 24 ||
          body.classList.contains('menu-open') ||
          body.classList.contains('panel-open')

        body.classList.toggle('header-hidden', !shouldShow && scrollY > 80)
        ticking = false
      }

      const requestUpdate = () => {
        if (ticking) return
        ticking = true
        window.requestAnimationFrame(updateHeaderState)
      }

      window.addEventListener('scroll', requestUpdate, { passive: true })
      window.addEventListener('resize', requestUpdate)
      updateHeaderState()

      cleanups.push(() => {
        window.removeEventListener('scroll', requestUpdate)
        window.removeEventListener('resize', requestUpdate)
      })
    }

    // ─── Reveal-on-scroll ───
    // [data-reveal] elements start at opacity:0 in CSS and only become
    // visible once the .is-visible class is added. Observe each element
    // and reveal it as it enters the viewport. Without this, every
    // [data-reveal] block on every page renders blank.
    const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (revealEls.length > 0) {
      if (!('IntersectionObserver' in window)) {
        // No observer support — show everything immediately.
        revealEls.forEach((el) => el.classList.add('is-visible'))
      } else {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
        )
        revealEls.forEach((el) => observer.observe(el))
        // Failsafe: anything already in view on load reveals on next frame
        // even if the observer callback is delayed.
        requestAnimationFrame(() => {
          revealEls.forEach((el) => {
            const rect = el.getBoundingClientRect()
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              el.classList.add('is-visible')
              observer.unobserve(el)
            }
          })
        })
        cleanups.push(() => observer.disconnect())
      }
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return null
}

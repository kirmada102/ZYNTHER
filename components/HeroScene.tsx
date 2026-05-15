'use client'

import { useEffect, useRef } from 'react'

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Skip the WebGL scene entirely for reduced-motion users — the CSS
    // aura layers already give ambient depth, and this avoids pulling
    // ~600KB of Three.js for no benefit.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    let script: HTMLScriptElement | null = null
    let teardown: (() => void) | undefined
    let rafId = 0

    const initScene = () => {
      script = document.createElement('script')
      script.src = 'https://unpkg.com/three@0.164.1/build/three.min.js'
      script.async = true

      script.onload = () => {
        const THREE = (window as any).THREE
        if (!THREE || !canvasRef.current) return

        const canvas = canvasRef.current
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
          42,
          canvas.clientWidth / canvas.clientHeight,
          0.1,
          40
        )
        const renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        })

        renderer.outputColorSpace = THREE.SRGBColorSpace
        renderer.toneMapping = THREE.ACESFilmicToneMapping
        renderer.toneMappingExposure = 1.08
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
        renderer.setSize(canvas.clientWidth, canvas.clientHeight)

        // Lighting
        const ambientLight = new THREE.AmbientLight('#ffffff', 1.3)
        const keyLight = new THREE.DirectionalLight('#fff8ff', 1.9)
        const fillLight = new THREE.DirectionalLight('#d2bcff', 0.46)
        keyLight.position.set(-5, 4, 5)
        fillLight.position.set(5, -4, 3)
        scene.add(ambientLight, keyLight, fillLight)

        // Core orb
        const orbGroup = new THREE.Group()
        const orbMaterial = new THREE.MeshPhysicalMaterial({
          color: '#eadcff',
          emissive: '#af84ff',
          emissiveIntensity: 0.22,
          metalness: 0.1,
          roughness: 0.08,
          transmission: 0.88,
          thickness: 0.95,
          clearcoat: 1,
          clearcoatRoughness: 0.08,
          ior: 1.1,
          transparent: true,
          opacity: 0.96,
        })

        const coreMesh = new THREE.Mesh(
          new THREE.IcosahedronGeometry(1.34, 4),
          orbMaterial
        )
        orbGroup.add(coreMesh)

        const coreGlow = new THREE.Mesh(
          new THREE.SphereGeometry(0.78, 42, 42),
          new THREE.MeshBasicMaterial({
            color: '#ffffff',
            transparent: true,
            opacity: 0.26,
          })
        )
        orbGroup.add(coreGlow)

        // Rings
        const ringOne = new THREE.Mesh(
          new THREE.TorusGeometry(1.46, 0.024, 18, 120),
          new THREE.MeshBasicMaterial({
            color: '#efe4ff',
            transparent: true,
            opacity: 0.44,
          })
        )
        const ringTwo = new THREE.Mesh(
          new THREE.TorusGeometry(1.18, 0.018, 14, 96),
          new THREE.MeshBasicMaterial({
            color: '#a578ff',
            transparent: true,
            opacity: 0.28,
          })
        )
        ringTwo.rotation.x = Math.PI / 2.35
        orbGroup.add(ringOne, ringTwo)

        const orbLight = new THREE.PointLight('#bd8cff', 11, 18)
        orbGroup.add(orbLight)
        scene.add(orbGroup)

        // Animation loop
        const clock = new THREE.Clock()
        const animate = () => {
          const delta = Math.min(clock.getDelta(), 0.05)
          const elapsed = clock.elapsedTime

          orbGroup.rotation.y += delta * 0.26
          orbGroup.position.y = Math.sin(elapsed * 0.85) * 0.14

          ringOne.rotation.x += delta * 0.24
          ringOne.rotation.y += delta * 0.38
          ringTwo.rotation.x -= delta * 0.18
          ringTwo.rotation.z += delta * 0.26

          renderer.render(scene, camera)
          rafId = requestAnimationFrame(animate)
        }
        animate()

        const handleResize = () => {
          const width = canvas.clientWidth
          const height = canvas.clientHeight
          camera.aspect = width / height
          camera.updateProjectionMatrix()
          renderer.setSize(width, height, false)
        }
        window.addEventListener('resize', handleResize)

        // Intensify the orb when the scene is clicked or the "Activate
        // orenva" button fires (dispatched by HomeInteractions).
        const handleActivate = () => {
          orbMaterial.emissiveIntensity = 0.42
          orbLight.intensity = 16
        }
        canvas.addEventListener('click', handleActivate)
        window.addEventListener('orenva:activate', handleActivate)

        teardown = () => {
          cancelAnimationFrame(rafId)
          window.removeEventListener('resize', handleResize)
          canvas.removeEventListener('click', handleActivate)
          window.removeEventListener('orenva:activate', handleActivate)
          renderer.dispose()
        }
      }

      document.head.appendChild(script)
    }

    // Defer Three.js until the browser is idle so it never competes with
    // first paint or hydration.
    const supportsIdle = typeof window.requestIdleCallback === 'function'
    const idleId: number = supportsIdle
      ? window.requestIdleCallback(initScene, { timeout: 2500 })
      : window.setTimeout(initScene, 200)

    return () => {
      if (supportsIdle) window.cancelIdleCallback(idleId)
      else clearTimeout(idleId)
      if (script && document.head.contains(script)) document.head.removeChild(script)
      teardown?.()
    }
  }, [])

  return (
    <div className="scene-shell" aria-hidden="true">
      <canvas ref={canvasRef} id="sceneCanvas" />
      <div className="scene-aura scene-aura-one" />
      <div className="scene-aura scene-aura-two" />
      <div className="scene-pulse" id="scenePulse" />
    </div>
  )
}

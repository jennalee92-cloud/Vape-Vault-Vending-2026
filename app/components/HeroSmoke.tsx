'use client'

import { useEffect, useRef } from 'react'

type VaporParticle = {
  x: number
  y: number
  previousX: number
  previousY: number
  age: number
  life: number
  speed: number
  width: number
  depth: number
  alpha: number
  phase: number
  curl: number
  branch: boolean
}

type VaporRing = {
  x: number
  y: number
  radius: number
  speed: number
  age: number
  life: number
  depth: number
  alpha: number
  phase: number
  wobble: number
  broken: boolean
}

const TAU = Math.PI * 2

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

export default function HeroSmoke() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d', { alpha: true })
    if (!context) return

    let frameId = 0
    let width = 0
    let height = 0
    let scale = 1
    let lastTime = performance.now()
    let elapsed = 0
    let reducedMotion = false
    let isMobile = false
    let particles: VaporParticle[] = []
    let rings: VaporRing[] = []
    let nextRingAt = 1.4

    const createParticle = (index: number, seededPosition = -1): VaporParticle => {
      const sourceProgress = seededPosition >= 0 ? seededPosition : randomBetween(0, 1)
      const x = seededPosition >= 0 ? -0.04 + sourceProgress * 1.12 : randomBetween(-0.08, 0.98)
      const y = 0.49 + Math.sin(sourceProgress * 8 + index) * 0.035 + randomBetween(-0.07, 0.07)
      return {
        x,
        y,
        previousX: x,
        previousY: y,
        age: seededPosition >= 0 ? randomBetween(0, 8) : 0,
        life: randomBetween(13, 25),
        speed: randomBetween(0.0019, 0.0043) * (index % 9 === 0 ? 1.25 : 1),
        width: randomBetween(1.2, 3.8),
        depth: randomBetween(0.2, 1),
        alpha: randomBetween(0.24, 0.62),
        phase: randomBetween(0, TAU),
        curl: randomBetween(0.7, 1.5),
        branch: index % 6 === 0,
      }
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      isMobile = width < 700 || window.matchMedia('(pointer: coarse)').matches
      scale = Math.min(window.devicePixelRatio || 1, isMobile ? 1.15 : 1.75)
      canvas.width = Math.floor(width * scale)
      canvas.height = Math.floor(height * scale)
      context.setTransform(scale, 0, 0, scale, 0, 0)
      reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      const particleCount = isMobile ? 150 : 330
      particles = Array.from({ length: particleCount }, (_, index) => createParticle(index, index / particleCount))
      rings = []
      if (!reducedMotion) {
        spawnRing(true)
        spawnRing(false)
        spawnRing(false)
        rings.forEach((ring, index) => {
          ring.age = index === 0 ? 5.8 : index === 1 ? 3.7 : 1.4
          ring.x = index === 0 ? 0.58 : index === 1 ? 0.34 : -0.025
        })
      }
    }

    const resetParticle = (particle: VaporParticle, delayed = false) => {
      const next = createParticle(Math.floor(Math.random() * 1000))
      Object.assign(particle, next, { age: delayed ? randomBetween(-3, 0) : 0 })
    }

    const spawnRing = (large = Math.random() > 0.35) => {
      rings.push({
        x: -0.025,
        y: randomBetween(0.4, 0.63),
        radius: large ? randomBetween(isMobile ? 20 : 42, isMobile ? 34 : 72) : randomBetween(isMobile ? 11 : 18, isMobile ? 19 : 34),
        speed: randomBetween(0.00065, 0.00145) * (large ? 0.85 : 1.15),
        age: randomBetween(-0.7, 0),
        life: randomBetween(12, 20),
        depth: randomBetween(0.35, 1),
        alpha: randomBetween(0.34, 0.72),
        phase: randomBetween(0, TAU),
        wobble: randomBetween(0.7, 1.6),
        broken: Math.random() < 0.23,
      })
    }

    const drawRing = (ring: VaporRing, time: number) => {
      const progress = ring.age / ring.life
      if (progress < 0 || progress > 1) return
      const fadeIn = Math.min(progress * 7, 1)
      const fadeOut = Math.min((1 - progress) * 3.2, 1)
      const fade = fadeIn * fadeOut * ring.alpha * (0.5 + ring.depth * 0.5)
      const centerX = ring.x * width
      const centerY = ring.y * height + Math.sin(time * 0.00055 + ring.phase) * height * 0.035
      const radius = ring.radius * (1 + progress * 1.65) * (0.84 + ring.depth * 0.16)
      const points = isMobile ? 44 : 76
      const tilt = Math.sin(time * 0.00028 + ring.phase) * 0.16

      context.save()
      context.globalCompositeOperation = 'screen'
      context.lineCap = 'round'
      // Several offset filaments create a vapor tube instead of a clean vector outline.
      const filamentCount = isMobile ? 3 : 6
      for (let filament = 0; filament < filamentCount; filament += 1) {
        const filamentPhase = ring.phase + filament * 1.91
        context.beginPath()
        for (let point = 0; point <= points; point += 1) {
          const angle = (point / points) * TAU + ring.phase
          const noise = Math.sin(angle * 3 + time * 0.0011 + filamentPhase) * 0.085
            + Math.sin(angle * 7 - time * 0.0007 + filamentPhase) * 0.052
            + Math.sin(angle * 13 + filamentPhase) * 0.026
          const filamentOffset = Math.sin(angle * 4 + time * 0.0013 + filamentPhase) * (1.5 + ring.depth * 3)
          const wobble = Math.sin(time * 0.0014 + angle * 2.4 + ring.phase) * ring.wobble * (2 + progress * 5)
          const ringRadius = radius * (1 + noise) + filamentOffset
          const x = centerX + Math.cos(angle) * ringRadius
          const y = centerY + Math.sin(angle) * ringRadius * (0.66 + tilt) + wobble
          const gap = ring.broken && Math.sin(angle * 1.7 + ring.phase) > 0.56
          if (gap) continue
          if (point === 0) context.moveTo(x, y)
          else context.lineTo(x, y)
        }
        const filamentAlpha = fade * (0.24 + filament * 0.024) * (0.8 + 0.2 * Math.sin(filamentPhase))
        context.strokeStyle = `rgba(${filament % 2 ? 198 : 231}, ${filament % 2 ? 214 : 238}, ${filament % 2 ? 201 : 226}, ${filamentAlpha})`
        context.lineWidth = (0.8 + ring.depth * 1.7) * (1 - progress * 0.22) + (filament === 0 ? 1.1 : 0)
        context.stroke()
      }
      // A dim volumetric body sits beneath the filaments, leaving the center open.
      context.globalAlpha = fade * 0.18
      context.lineWidth = 7 + ring.depth * 7
      context.strokeStyle = 'rgba(215, 226, 213, 0.22)'
      context.beginPath()
      context.ellipse(centerX, centerY, radius, radius * (0.66 + tilt), 0, 0, TAU)
      context.stroke()
      context.restore()
    }

    const draw = (time: number) => {
      const delta = Math.min((time - lastTime) / 16.67, 2)
      lastTime = time
      elapsed += delta * (reducedMotion ? 0.08 : 1)
      context.clearRect(0, 0, width, height)

      const motion = reducedMotion ? 0.08 : 1
      const seconds = elapsed / 60
      context.globalCompositeOperation = 'screen'
      context.lineCap = 'round'
      const ribbonCount = isMobile ? 14 : 25
      for (let ribbon = 0; ribbon < ribbonCount; ribbon += 1) {
        const depth = 0.25 + ((ribbon * 0.37) % 0.75)
        const phase = ribbon * 1.73
        context.strokeStyle = `rgba(211, 227, 211, ${0.08 + depth * 0.12})`
        context.lineWidth = (0.85 + depth * 2.7) * (isMobile ? 0.85 : 1)
        context.beginPath()
        for (let step = 0; step <= 30; step += 1) {
          const progress = step / 30
          const x = (-0.025 + progress * 1.15) * width
          const spread = 0.004 + progress * 0.052
          const wave = Math.sin(seconds * (0.42 + depth * 0.2) + phase + progress * 9) * spread
            + Math.sin(seconds * 0.19 + phase * 1.6 + progress * 17) * spread * 0.45
          const branch = ribbon % 5 === 0 ? Math.sin(seconds * 0.7 + phase + progress * 12) * progress * 0.018 : 0
          const sourceLift = Math.pow(progress, 1.4) * (ribbon % 4 === 0 ? -0.035 : 0)
          const y = (0.49 + wave + branch + sourceLift) * height
          if (step === 0) context.moveTo(x, y)
          else context.lineTo(x, y)
        }
        context.stroke()
      }

      for (const particle of particles) {
        particle.previousX = particle.x
        particle.previousY = particle.y
        particle.age += delta * motion / 60
        particle.x += particle.speed * delta * motion
        const distance = Math.max(0, particle.x + 0.03)
        const envelope = Math.min(distance * 2.4, 1) * (1 - Math.max(0, distance - 0.78) * 2.3)
        const currentCurl = Math.sin(seconds * 0.42 + particle.phase + particle.x * 9) * 0.0009 * particle.curl
          + Math.sin(seconds * 0.19 + particle.phase * 1.7 + particle.x * 15) * 0.00055
        particle.y += currentCurl * delta * motion
        particle.y += (particle.branch ? Math.sin(seconds * 0.7 + particle.phase) : 0) * 0.0003 * delta * motion
        if (particle.age > particle.life || particle.x > 1.12 || envelope < -0.02) {
          resetParticle(particle)
        }

        const x = particle.x * width
        const y = particle.y * height
        const density = Math.max(0.02, envelope) * (0.58 + particle.depth * 0.42)
        const alpha = particle.alpha * density * (reducedMotion ? 0.75 : 1)
        const tailX = x - particle.speed * delta * width * (7 + particle.depth * 6)
        const tailY = particle.previousY * height
        context.globalAlpha = alpha
        context.globalCompositeOperation = 'screen'
        context.strokeStyle = `rgba(210, 225, 207, ${alpha})`
        context.lineWidth = particle.width * (0.85 + particle.depth * 2.1) * (0.85 + envelope * 0.7)
        context.lineCap = 'round'
        context.beginPath()
        context.moveTo(tailX, tailY)
        context.quadraticCurveTo((tailX + x) / 2, y + Math.sin(seconds + particle.phase) * 2, x, y)
        context.stroke()
      }

      nextRingAt -= delta / 60 * motion
      if (!reducedMotion && nextRingAt <= 0) {
        const burst = Math.random()
        spawnRing(burst > 0.18)
        if (burst > 0.7) spawnRing(false)
        if (burst > 0.86) spawnRing(false)
        nextRingAt = randomBetween(2.4, 6.8)
      }

      context.globalAlpha = 1
      for (const ring of rings) {
        ring.age += delta / 60 * motion
        ring.x += ring.speed * delta * motion
        drawRing(ring, time)
      }
      rings = rings.filter((ring) => ring.age < ring.life && ring.x < 1.2)

      if (reducedMotion && rings.length === 0) {
        spawnRing(true)
        rings[0].age = 3.5
        rings[0].x = 0.58
        rings[0].alpha = 0.12
      }

      context.globalCompositeOperation = 'source-over'
      context.globalAlpha = 1
      frameId = requestAnimationFrame(draw)
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    window.addEventListener('resize', resize)
    frameId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frameId)
      observer.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-smoke-canvas" aria-hidden="true" />
}

"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const TRAIL = 36

function cordPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return ""
  // Offset: o fio sai da traseira (baixo) da máquina
  const start = { x: pts[0].x, y: pts[0].y + 52 }
  let d = `M ${start.x} ${start.y}`
  for (let i = 1; i < pts.length - 1; i++) {
    const ox = pts[i].x
    const oy = pts[i].y + Math.max(0, 52 - i * 1.8) // fio vai subindo gradualmente
    const nx = (ox + pts[i + 1].x) / 2
    const ny = (oy + pts[i + 1].y + Math.max(0, 52 - (i + 1) * 1.8)) / 2
    d += ` Q ${ox} ${oy} ${nx} ${ny}`
  }
  const last = pts[pts.length - 1]
  d += ` L ${last.x} ${last.y}`
  return d
}

/* ── Wahl Classic — vista de cima ─── */
function WahlClipper({ scale = 1 }: { scale?: number }) {
  const g = "oklch(0.78 0.14 82)"        // dourado sólido
  const gf = "oklch(0.78 0.14 82 / 0.18)" // dourado fundo
  const gm = "oklch(0.78 0.14 82 / 0.40)" // dourado médio

  return (
    <svg
      width={42 * scale}
      height={62 * scale}
      viewBox="0 0 42 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 0 8px oklch(0.78 0.14 82 / 0.7))" }}
      aria-hidden="true"
    >
      {/* ── Dentes da lâmina (topo) ── */}
      {[6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36].map((tx) => (
        <line key={tx} x1={tx} y1="0" x2={tx} y2="6"
          stroke={g} strokeWidth="1.3" strokeLinecap="round" />
      ))}

      {/* ── Guarda da lâmina ── */}
      <rect x="4" y="5" width="34" height="9" rx="2.5"
        fill={gm} stroke={g} strokeWidth="1.4" />

      {/* ── Corpo principal (trapézio — estreito no topo, largo na base) ── */}
      <path
        d="M 6 14 C 4 22 2 34 3 50 L 39 50 C 40 34 38 22 36 14 Z"
        fill={gf} stroke={g} strokeWidth="1.5"
      />

      {/* ── Interruptor lateral esquerdo ── */}
      <rect x="0" y="24" width="5" height="14" rx="2.5"
        fill={gm} stroke={g} strokeWidth="1.2" />
      {/* Bolinha do switch */}
      <circle cx="2.5" cy="29" r="2" fill={g} />

      {/* ── Parafusos ── */}
      <circle cx="21" cy="26" r="2.2" stroke={g} strokeWidth="1" fill={gf} />
      <line x1="19.5" y1="26" x2="22.5" y2="26" stroke={g} strokeWidth="0.8" />
      <line x1="21" y1="24.5" x2="21" y2="27.5" stroke={g} strokeWidth="0.8" />

      <circle cx="21" cy="43" r="2.2" stroke={g} strokeWidth="1" fill={gf} />
      <line x1="19.5" y1="43" x2="22.5" y2="43" stroke={g} strokeWidth="0.8" />
      <line x1="21" y1="41.5" x2="21" y2="44.5" stroke={g} strokeWidth="0.8" />

      {/* ── Saída do fio (traseira / parte de baixo) ── */}
      <rect x="14" y="49" width="14" height="7" rx="3.5"
        fill={gm} stroke={g} strokeWidth="1.3" />
      <rect x="17" y="55" width="8" height="5" rx="2"
        fill={gm} stroke={g} strokeWidth="1.2" />
      {/* Ponto de entrada do fio */}
      <circle cx="21" cy="60" r="2.5" fill={g} />
    </svg>
  )
}

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [scale, setScale] = useState(1)

  const mouseX = useMotionValue(-300)
  const mouseY = useMotionValue(-300)
  const x = useSpring(mouseX, { stiffness: 350, damping: 25, mass: 0.6 })
  const y = useSpring(mouseY, { stiffness: 350, damping: 25, mass: 0.6 })

  const trailRef = useRef<{ x: number; y: number }[]>([])
  const pathRef = useRef<SVGPathElement | null>(null)

  useEffect(() => {
    // ── MOUSE (desktop) ──────────────────
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)
      updateTrail(e.clientX, e.clientY)
    }
    const onDown = () => setScale(0.85)
    const onUp = () => setScale(1)

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setScale(t.closest("a") || t.closest("button") ? 1.15 : 1)
    }

    // ── TOUCH (mobile) ───────────────────
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      mouseX.set(t.clientX)
      mouseY.set(t.clientY)
      setVisible(true)
      setScale(0.9)
      updateTrail(t.clientX, t.clientY)
    }
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      mouseX.set(t.clientX)
      mouseY.set(t.clientY)
      updateTrail(t.clientX, t.clientY)
    }
    const onTouchEnd = () => {
      setScale(1)
      // Limpa o fio ao soltar
      setTimeout(() => {
        trailRef.current = []
        if (pathRef.current) pathRef.current.setAttribute("d", "")
      }, 400)
    }

    function updateTrail(cx: number, cy: number) {
      trailRef.current = [{ x: cx, y: cy }, ...trailRef.current].slice(0, TRAIL)
      if (pathRef.current && trailRef.current.length > 1) {
        pathRef.current.setAttribute("d", cordPath(trailRef.current))
      }
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("mouseover", onOver)
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", onTouchEnd)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("mouseover", onOver)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onTouchEnd)
    }
  }, [mouseX, mouseY, visible])

  if (!visible) return null

  return (
    <>
      {/* Fio da máquina — SVG full viewport */}
      <svg
        className="fixed inset-0 pointer-events-none z-[9997]"
        style={{ width: "100vw", height: "100vh", top: 0, left: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fio" gradientUnits="userSpaceOnUse"
            x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.14 82)" stopOpacity="0.7" />
            <stop offset="50%" stopColor="oklch(0.78 0.14 82)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="oklch(0.78 0.14 82)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d=""
          stroke="oklch(0.78 0.14 82 / 0.55)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Máquina — blade (topo) alinhada ao ponto do cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x, y, translateX: "-50%", translateY: "0%" }}
      >
        <motion.div animate={{ scale }} transition={{ duration: 0.15 }}>
          <WahlClipper />
        </motion.div>
      </motion.div>
    </>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const TRAIL_POINTS = 32

/* Gera curva bezier suave pelos pontos do histórico */
function buildCordPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return ""
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i].x + pts[i + 1].x) / 2
    const my = (pts[i].y + pts[i + 1].y) / 2
    d += ` Q ${pts[i].x} ${pts[i + 1].y} ${mx} ${my}`
  }
  const last = pts[pts.length - 1]
  d += ` L ${last.x} ${last.y}`
  return d
}

/* Ícone SVG de máquina de corte */
function ClipperIcon({ hovering, clicking }: { hovering: boolean; clicking: boolean }) {
  const gold = "oklch(0.78 0.14 82)"
  const goldFaint = "oklch(0.78 0.14 82 / 0.15)"
  const goldMid = "oklch(0.78 0.14 82 / 0.35)"

  return (
    <svg
      width="38"
      height="44"
      viewBox="0 0 38 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]"
      style={{
        transform: hovering ? "scale(1.2)" : clicking ? "scale(0.88)" : "scale(1)",
        transition: "transform 0.15s ease",
      }}
      aria-hidden="true"
    >
      {/* Corpo principal */}
      <rect x="6" y="2" width="26" height="28" rx="7" fill={goldFaint} stroke={gold} strokeWidth="1.5" />

      {/* Grade/tela do corpo */}
      <rect x="10" y="6" width="18" height="8" rx="2" fill={goldMid} stroke={gold} strokeWidth="1" />

      {/* Botão on/off */}
      <rect x="14" y="18" width="10" height="5" rx="2.5" fill={goldMid} stroke={gold} strokeWidth="1" />
      {/* Luz do botão */}
      <circle cx="17" cy="20.5" r="1.2" fill={gold} />

      {/* Cabeçote da lâmina */}
      <rect x="4" y="28" width="30" height="8" rx="3" fill={goldMid} stroke={gold} strokeWidth="1.5" />

      {/* Dentes da lâmina */}
      {[8, 11.5, 15, 18.5, 22, 25.5, 29].map((tx) => (
        <line
          key={tx}
          x1={tx}
          y1="36"
          x2={tx}
          y2="43"
          stroke={gold}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ))}

      {/* Saída do fio no topo */}
      <circle cx="19" cy="2" r="2" fill={gold} />
    </svg>
  )
}

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  const mouseX = useMotionValue(-300)
  const mouseY = useMotionValue(-300)
  const x = useSpring(mouseX, { stiffness: 380, damping: 26, mass: 0.5 })
  const y = useSpring(mouseY, { stiffness: 380, damping: 26, mass: 0.5 })

  /* Trail para o fio — atualizado por ref sem re-render */
  const trailRef = useRef<{ x: number; y: number }[]>([])
  const pathRef = useRef<SVGPathElement | null>(null)

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches
    if (!isFine) return

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)

      trailRef.current = [
        { x: e.clientX, y: e.clientY },
        ...trailRef.current,
      ].slice(0, TRAIL_POINTS)

      /* Atualiza o SVG path direto no DOM — zero re-render */
      if (pathRef.current && trailRef.current.length > 1) {
        pathRef.current.setAttribute("d", buildCordPath(trailRef.current))
      }
    }

    const down = () => setClicking(true)
    const up = () => setClicking(false)
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHovering(!!(t.closest("a") || t.closest("button") || t.closest("[data-cursor-hover]")))
    }

    window.addEventListener("mousemove", move)
    window.addEventListener("mousedown", down)
    window.addEventListener("mouseup", up)
    window.addEventListener("mouseover", over)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", down)
      window.removeEventListener("mouseup", up)
      window.removeEventListener("mouseover", over)
    }
  }, [mouseX, mouseY, visible])

  if (!visible) return null

  return (
    <>
      {/* Fio — SVG full-viewport, path atualizado via ref */}
      <svg
        className="fixed inset-0 pointer-events-none z-[9997] hidden md:block"
        style={{ width: "100vw", height: "100vh", top: 0, left: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cord-fade" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.78 0.14 82)" stopOpacity="0.65" />
            <stop offset="60%" stopColor="oklch(0.78 0.14 82)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="oklch(0.78 0.14 82)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d=""
          stroke="url(#cord-fade)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Máquina de corte */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <ClipperIcon hovering={hovering} clicking={clicking} />
      </motion.div>
    </>
  )
}

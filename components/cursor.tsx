"use client"

import { useEffect, useRef } from "react"

// ── Física da corda (Verlet integration) ─────────────
const N        = 26     // nós da corda
const SEG      = 18     // comprimento em repouso entre nós (px)
const GRAVITY  = 0.55   // gravidade por frame
const DAMPING  = 0.975  // amortecimento (quanto frena)
const ITERS    = 22     // iterações de constraint por frame

interface Node { x:number; y:number; px:number; py:number; pinned?:boolean }

function makeNodes(ax:number, ay:number, tx:number, ty:number): Node[] {
  return Array.from({ length: N + 1 }, (_, i) => {
    const t = i / N
    return { x: ax + (tx-ax)*t, y: ay + (ty-ay)*t + Math.sin(t*Math.PI)*60,
             px: ax + (tx-ax)*t, py: ay + (ty-ay)*t + Math.sin(t*Math.PI)*60 }
  })
}

function step(nodes: Node[], ax:number, ay:number, tx:number, ty:number) {
  // Verlet
  for (let i = 1; i < nodes.length - 1; i++) {
    const n = nodes[i]
    const vx = (n.x - n.px) * DAMPING
    const vy = (n.y - n.py) * DAMPING
    n.px = n.x; n.py = n.y
    n.x += vx; n.y += vy + GRAVITY
  }
  // Constraints
  for (let iter = 0; iter < ITERS; iter++) {
    for (let i = 0; i < nodes.length - 1; i++) solve(nodes[i], nodes[i+1])
    for (let i = nodes.length - 1; i > 0; i--) solve(nodes[i], nodes[i-1])
    // Fixar âncora e ponta
    nodes[0].x = ax; nodes[0].y = ay
    nodes[nodes.length-1].x = tx; nodes[nodes.length-1].y = ty
  }
}

function solve(a: Node, b: Node) {
  const dx = b.x - a.x, dy = b.y - a.y
  const d  = Math.hypot(dx, dy) || .001
  const f  = (d - SEG) / d * .5
  if (!a.pinned) { a.x += dx*f; a.y += dy*f }
  if (!b.pinned) { b.x -= dx*f; b.y -= dy*f }
}

function toPath(nodes: Node[]): string {
  if (nodes.length < 2) return ""
  let d = `M ${nodes[0].x.toFixed(1)} ${nodes[0].y.toFixed(1)}`
  for (let i = 1; i < nodes.length - 1; i++) {
    const mx = ((nodes[i].x + nodes[i+1].x)/2).toFixed(1)
    const my = ((nodes[i].y + nodes[i+1].y)/2).toFixed(1)
    d += ` Q ${nodes[i].x.toFixed(1)} ${nodes[i].y.toFixed(1)} ${mx} ${my}`
  }
  const L = nodes[nodes.length-1]
  return d + ` L ${L.x.toFixed(1)} ${L.y.toFixed(1)}`
}

// ── Máquina Wahl (SVG realista, vista de cima) ────────
function Wahl() {
  return (
    <svg width="52" height="82" viewBox="0 0 52 82" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.7)) drop-shadow(0 0 6px oklch(0.78 0.14 82 / 0.5))" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wbody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#3d3018"/>
          <stop offset="35%"  stopColor="#1e180a"/>
          <stop offset="100%" stopColor="#0d0b05"/>
        </linearGradient>
        <linearGradient id="wblade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#d0cec8"/>
          <stop offset="100%" stopColor="#888680"/>
        </linearGradient>
        <linearGradient id="wswitch" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#2a2010"/>
          <stop offset="100%" stopColor="#0a0804"/>
        </linearGradient>
      </defs>

      {/* Dentes da lâmina */}
      {[5,8,11,14,17,20,23,26,29,32,35,38,41,44,47].map(tx=>(
        <line key={tx} x1={tx} y1="0" x2={tx} y2="8"
          stroke="#aaa9a3" strokeWidth="1.2" strokeLinecap="round"/>
      ))}

      {/* Guarda da lâmina (aço) */}
      <rect x="2" y="6" width="48" height="13" rx="3"
        fill="url(#wblade)" stroke="#777570" strokeWidth="1"/>
      <line x1="2" y1="13" x2="50" y2="13"
        stroke="#c0bebA" strokeWidth="0.6" opacity="0.6"/>

      {/* Corpo principal — forma Wahl (trapézio arredondado) */}
      <path d="M 6 18 C 3 18 1 20 1 24 L 1 62 C 1 70 7 78 14 80 L 26 82 L 38 80 C 45 78 51 70 51 62 L 51 24 C 51 20 49 18 46 18 Z"
        fill="url(#wbody)" stroke="oklch(0.78 0.14 82)" strokeWidth="1.5"/>

      {/* Reflexo luz lateral esquerda */}
      <path d="M 8 22 C 5 26 4 32 4 38 L 4 56"
        stroke="rgba(255,220,120,0.10)" strokeWidth="4"
        strokeLinecap="round" fill="none"/>

      {/* Interruptor lateral esquerdo */}
      <rect x="-3" y="32" width="8" height="20" rx="4"
        fill="url(#wswitch)" stroke="oklch(0.78 0.14 82)" strokeWidth="1.2"/>
      {/* Posição do switch (ON) */}
      <rect x="-1" y="35" width="4" height="7" rx="2"
        fill="oklch(0.78 0.14 82)"/>

      {/* Área de logo */}
      <rect x="13" y="28" width="26" height="16" rx="3"
        fill="rgba(212,175,55,0.06)"
        stroke="oklch(0.78 0.14 82 / 0.25)" strokeWidth="0.8"/>
      {/* WAHL texto simplificado como linhas */}
      <line x1="17" y1="33" x2="17" y2="40" stroke="oklch(0.78 0.14 82 / 0.5)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="17" y1="40" x2="20" y2="36" stroke="oklch(0.78 0.14 82 / 0.5)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="20" y1="36" x2="23" y2="40" stroke="oklch(0.78 0.14 82 / 0.5)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="23" y1="40" x2="23" y2="33" stroke="oklch(0.78 0.14 82 / 0.5)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="26" y1="33" x2="26" y2="40" stroke="oklch(0.78 0.14 82 / 0.5)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="26" y1="33" x2="29" y2="33" stroke="oklch(0.78 0.14 82 / 0.5)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="26" y1="37" x2="28" y2="37" stroke="oklch(0.78 0.14 82 / 0.5)" strokeWidth="1.2" strokeLinecap="round"/>

      {/* Parafuso 1 */}
      <circle cx="26" cy="55" r="3" fill="#0a0804" stroke="oklch(0.78 0.14 82)" strokeWidth="1"/>
      <line x1="23.8" y1="55" x2="28.2" y2="55" stroke="oklch(0.78 0.14 82)" strokeWidth="0.8"/>
      <line x1="26" y1="52.8" x2="26" y2="57.2" stroke="oklch(0.78 0.14 82)" strokeWidth="0.8"/>

      {/* Saída do fio — canto inferior */}
      <ellipse cx="26" cy="80" rx="9" ry="5"
        fill="#0a0804" stroke="oklch(0.78 0.14 82)" strokeWidth="1.3"/>
      {/* Encaixe do fio */}
      <circle cx="26" cy="81" r="4"
        fill="oklch(0.78 0.14 82 / 0.3)" stroke="oklch(0.78 0.14 82)" strokeWidth="1"/>
      <circle cx="26" cy="81" r="1.5" fill="oklch(0.78 0.14 82)"/>
    </svg>
  )
}

// ── Tomada (âncora fixa canto inferior direito) ──────
function Socket({ x, y }: { x:number; y:number }) {
  const g = "oklch(0.78 0.14 82)"
  return (
    <g transform={`translate(${x-18},${y-18})`} style={{ pointerEvents:"none" }}>
      {/* Caixa da tomada */}
      <rect x="0" y="0" width="36" height="28" rx="6"
        fill="#0d0b05" stroke={g} strokeWidth="1.4"/>
      {/* Pinos */}
      <rect x="8"  y="8" width="5" height="12" rx="2.5"
        fill="none" stroke={g} strokeWidth="1.2"/>
      <rect x="23" y="8" width="5" height="12" rx="2.5"
        fill="none" stroke={g} strokeWidth="1.2"/>
      {/* LED indicador */}
      <circle cx="18" cy="20" r="2" fill={g} opacity="0.6"/>
    </g>
  )
}

// ── Componente principal ──────────────────────────────
export function CustomCursor() {
  const svgRef  = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const clipRef = useRef<HTMLDivElement>(null)
  const nodes   = useRef<Node[]>([])
  const cursor  = useRef({ x: 0, y: 0 })
  const anchor  = useRef({ x: 0, y: 0 })
  const raf     = useRef<number>(0)

  // A ponta da corda fica no fundo da máquina (82px abaixo do cursor)
  const CLIP_H = 82

  useEffect(() => {
    const W = window.innerWidth
    const H = window.innerHeight

    // Âncora invisível no canto inferior direito (só para física)
    anchor.current = { x: W - 20, y: H - 20 }

    // Máquina começa no centro/topo da tela
    cursor.current = { x: W * 0.5, y: H * 0.3 }

    // Inicializa nós entre âncora e fundo da máquina
    nodes.current = makeNodes(
      anchor.current.x, anchor.current.y,
      cursor.current.x, cursor.current.y + CLIP_H
    )

    // ── Loop de física ─────────────────────────────
    function loop() {
      const { x, y } = cursor.current
      const { x: ax, y: ay } = anchor.current

      // Ponto de ancoragem da corda = fundo da máquina
      const cordEndX = x
      const cordEndY = y + CLIP_H

      step(nodes.current, ax, ay, cordEndX, cordEndY)

      const d = toPath(nodes.current)
      if (pathRef.current) pathRef.current.setAttribute("d", d)
      const main  = svgRef.current?.querySelector("#cord-main")
      const shine = svgRef.current?.querySelector("#cord-shine")
      if (main)  main.setAttribute("d", d)
      if (shine) shine.setAttribute("d", d)

      // Posiciona a máquina com a lâmina no ponto do cursor
      if (clipRef.current)
        clipRef.current.style.transform =
          `translate(${(x - 26).toFixed(1)}px, ${y.toFixed(1)}px)`

      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    // ── Mouse ──────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY }
    }

    // ── Touch — apenas toque inicial, NÃO segue scroll ──
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) cursor.current = { x: t.clientX, y: t.clientY }
    }

    // ── Resize ─────────────────────────────────────
    const onResize = () => {
      anchor.current = { x: window.innerWidth - 20, y: window.innerHeight - 20 }
    }

    window.addEventListener("mousemove",  onMove)
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("resize",     onResize)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener("mousemove",  onMove)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("resize",     onResize)
    }
  }, [])

  return (
    <>
      {/* SVG overlay — só a corda, sem tomada */}
      <svg
        ref={svgRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
        style={{ width: "100vw", height: "100vh" }}
        aria-hidden="true"
      >
        {/* Corda — borda escura (espessura/profundidade) */}
        <path ref={pathRef} d=""
          stroke="#050402" strokeWidth="5.5"
          fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Corda — corpo principal (borracha escura) */}
        <path d="" id="cord-main"
          stroke="#1c150a" strokeWidth="3.5"
          fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Corda — reflexo dourado sutil */}
        <path d="" id="cord-shine"
          stroke="oklch(0.78 0.14 82 / 0.15)" strokeWidth="1.5"
          fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {/* Máquina — blade no ponto do cursor */}
      <div
        ref={clipRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <Wahl />
      </div>
    </>
  )
}

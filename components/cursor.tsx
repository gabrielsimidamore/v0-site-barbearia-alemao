"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  // Dot springs — fast
  const dotX = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.5 })
  const dotY = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.5 })

  // Ring springs — slower, trailing effect
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.8 })
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.8 })

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches
    if (!isFine) return

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
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
  }, [mouseX, mouseY])

  if (!visible) return null

  return (
    <>
      {/* Scissors dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: clicking ? 0.6 : hovering ? 2.2 : 1, opacity: clicking ? 0.5 : 1 }}
          transition={{ duration: 0.15 }}
        >
          <svg
            width="28" height="28" viewBox="0 0 24 24"
            fill="none" strokeWidth="1.5"
            className="text-primary drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
            style={{ transform: "rotate(45deg)" }}
          >
            <circle cx="6" cy="6" r="3" stroke="currentColor" />
            <circle cx="6" cy="18" r="3" stroke="currentColor" />
            <line x1="8.5" y1="7.5" x2="20" y2="19" stroke="currentColor" strokeLinecap="round" />
            <line x1="8.5" y1="16.5" x2="20" y2="5" stroke="currentColor" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: hovering ? 2 : 1, opacity: hovering ? 0.15 : 0.08 }}
          transition={{ duration: 0.3 }}
          className="size-10 rounded-full border border-primary"
        />
      </motion.div>
    </>
  )
}

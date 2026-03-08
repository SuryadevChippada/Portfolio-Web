import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SECTIONS = ['experience', 'skills', 'education']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' as const }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(42,39,37,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #3d3936' : '1px solid transparent',
      }}
    >
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xs text-primary tracking-wide hover:text-accent transition-colors duration-200">
          Suryadev Chippada
        </a>
        <nav className="flex items-center gap-6">
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="text-xs text-muted hover:text-primary transition-colors duration-200 capitalize"
            >
              {s}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import CVModal from './CVModal'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/SuryadevChippada', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suryadev-chippada', external: true },
  { label: 'Email', href: 'mailto:chippadasurya8@gmail.com', external: false },
]

function ClipReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const shouldReduce = useReducedMotion()
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={shouldReduce ? false : { y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

function AnimatedLink({
  href, external, onClick, children,
}: {
  href?: string; external?: boolean; onClick?: () => void; children: React.ReactNode
}) {
  const base = 'relative text-xs text-muted hover:text-accent transition-colors duration-200 tracking-wide group'
  const underline = (
    <span className="absolute -bottom-px left-0 h-px w-0 group-hover:w-full bg-accent transition-all duration-300 ease-out" />
  )
  if (onClick) {
    return (
      <button onClick={onClick} className={base}>
        {children}{underline}
      </button>
    )
  }
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} className={base}>
      {children}{underline}
    </a>
  )
}

export default function Hero() {
  const shouldReduce = useReducedMotion()
  const [cvOpen, setCvOpen] = useState(false)

  const fade = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: 'easeOut' as const, delay },
        }

  return (
    <>
      <section id="hero" className="relative max-w-2xl mx-auto px-6 pt-32 pb-24 overflow-hidden">
        <div className="glow-orb-blue" style={{ position: 'absolute', left: -200, top: -100 }} />
        <div className="glow-orb-purple" style={{ position: 'absolute', right: -100, bottom: 0 }} />

        <motion.p {...fade(0)} className="text-xs text-muted uppercase tracking-widest mb-8">
          About
        </motion.p>

        <h1 className="text-4xl sm:text-5xl font-medium text-primary leading-tight mb-6">
          <ClipReveal delay={0.1}>Suryadev</ClipReveal>
          <ClipReveal delay={0.22}>
            <span className="text-accent">Chippada</span>
          </ClipReveal>
        </h1>

        <motion.p
          {...fade(0.4)}
          className="text-sm text-muted leading-relaxed mb-8 max-w-md"
        >
          CS student at TU Darmstadt building real-time computer vision systems and AI-powered tools.
          Co-founder of FLARE — wildfire detection on edge hardware for autonomous UAV monitoring.
        </motion.p>

        <motion.div
          {...fade(0.55)}
          className="flex flex-wrap gap-x-6 gap-y-1 mb-10 text-xs"
          style={{ color: '#8a7f7a' }}
        >
          <span>Darmstadt, Germany</span>
          <span>chippadasurya8@gmail.com</span>
        </motion.div>

        <motion.div {...fade(0.7)} className="flex flex-wrap gap-5">
          {LINKS.map(({ label, href, external }) => (
            <AnimatedLink key={label} href={href} external={external}>
              {label} ↗
            </AnimatedLink>
          ))}
          <AnimatedLink onClick={() => setCvOpen(true)}>CV ↗</AnimatedLink>
        </motion.div>
      </section>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  )
}

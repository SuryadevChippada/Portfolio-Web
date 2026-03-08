import { motion, useReducedMotion } from 'framer-motion'

const CERTS = [
  'Machine Learning & Deep Learning — Udemy (2025)',
  'Web Development — Udemy (2025)',
  'Python for Game Programming: Pygame — Udemy (2025)',
  'Claude Code in Action — Anthropic (2026)',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function Education() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="education" className="max-w-2xl mx-auto px-6 py-24 border-t border-border">
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="flex items-baseline gap-3 mb-10"
      >
        <span className="text-accent text-xs opacity-60">03</span>
        <h2 className="text-xs text-muted uppercase tracking-widest">Education</h2>
      </motion.div>

      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="mb-16"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
          <span className="text-sm font-medium text-primary">BSc Computer Science</span>
          <span className="text-xs text-muted">Oct 2023 – Present</span>
        </div>
        <p className="text-xs text-accent">Technische Universität Darmstadt, Germany</p>
      </motion.div>

      <motion.h2
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="text-xs text-muted uppercase tracking-widest mb-6"
      >
        Certifications
      </motion.h2>

      <motion.ul
        variants={shouldReduce ? {} : container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {CERTS.map((cert) => (
          <motion.li
            key={cert}
            variants={shouldReduce ? {} : item}
            className="text-sm text-muted pl-3 border-l border-border"
          >
            {cert}
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        initial={shouldReduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xs text-muted mt-24 pb-8"
      >
        chippadasurya8@gmail.com · Darmstadt, Germany
      </motion.p>
    </section>
  )
}

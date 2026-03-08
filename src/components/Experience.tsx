import { motion, useReducedMotion } from 'framer-motion'

const EXPERIENCE = [
  {
    role: 'Co-Founder & Computer Vision Developer',
    org: 'FLARE @TUDarmstadt',
    period: 'Nov 2024 – Feb 2026',
    bullets: [
      'Built real-time computer vision pipeline using YOLO-based object detection for smoke and fire recognition',
      'Trained and fine-tuned models on curated aerial imagery datasets for field deployment evaluation',
      'Implemented edge inference prototype on Raspberry Pi 5 (AI HAT+) for autonomous wildfire monitoring',
      'Collaborated in system testing and iterative performance improvements',
    ],
  },
  {
    role: 'XtraChallenge 2025',
    org: 'FLARE @TUDarmstadt',
    period: 'Jul 2025',
    bullets: [
      'National UAV design and flight competition at Universitat Politècnica de València',
      'Collaborated with interdisciplinary team during system preparation and testing phases',
      'Gained hands-on exposure to UAV integration workflows, field testing, and real-time system constraints',
    ],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function Experience() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="experience" className="max-w-2xl mx-auto px-6 py-24 border-t border-border">
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="flex items-baseline gap-3 mb-10"
      >
        <span className="text-accent text-xs opacity-60">01</span>
        <h2 className="text-xs text-muted uppercase tracking-widest">Experience</h2>
      </motion.div>

      <div className="space-y-12">
        {EXPERIENCE.map((exp) => (
          <motion.div
            key={exp.role}
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' as const }}
            whileHover={shouldReduce ? {} : { y: -2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <span className="text-sm font-medium text-primary">{exp.role}</span>
              <span className="text-xs text-muted">{exp.period}</span>
            </div>
            <p className="text-xs text-accent mb-4">{exp.org}</p>

            <motion.ul
              variants={shouldReduce ? {} : container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {exp.bullets.map((b) => (
                <motion.li
                  key={b}
                  variants={shouldReduce ? {} : item}
                  className="text-sm text-muted leading-relaxed pl-3 border-l border-border"
                >
                  {b}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

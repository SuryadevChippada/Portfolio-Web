import { motion, useReducedMotion } from 'framer-motion'

const SKILLS = [
  { category: 'Programming', color: '#7daea3', items: ['Python', 'Java', 'Lua', 'Shell'] },
  { category: 'CV / ML', color: '#b49fca', items: ['OpenCV', 'TensorFlow', 'YOLO', 'NumPy', 'PyTorch'] },
  { category: 'Automation', color: '#D96239', items: ['n8n'] },
  { category: 'Web', color: '#89b482', items: ['React', 'Angular', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Tools', color: '#c8a96e', items: ['Git', 'GitHub', 'Neo4j', 'Neovim'] },
  { category: 'Systems', color: '#c8a96e', items: ['Raspberry Pi'] },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

export default function Skills() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="skills" className="max-w-2xl mx-auto px-6 py-24 border-t border-border">
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="flex items-baseline gap-3 mb-10"
      >
        <span className="text-accent text-xs opacity-60">02</span>
        <h2 className="text-xs text-muted uppercase tracking-widest">Skills</h2>
      </motion.div>

      <div className="space-y-5">
        {SKILLS.map(({ category, color, items }, i) => (
          <motion.div
            key={category}
            initial={shouldReduce ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' as const }}
            className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6"
          >
            <span className="text-xs w-24 shrink-0 pt-0.5" style={{ color }}>
              {category}
            </span>
            <motion.div
              variants={shouldReduce ? {} : container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {items.map((skill) => (
                <motion.span
                  key={skill}
                  variants={shouldReduce ? {} : {
                    hidden: { opacity: 0, y: 8, scale: 0.92 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' as const } },
                  }}
                  whileHover={shouldReduce ? {} : { scale: 1.06, y: -2 }}
                  transition={{ duration: 0.15 }}
                  className="text-xs px-2.5 py-1 rounded-sm cursor-default transition-all duration-200"
                  style={{
                    color,
                    border: `1px solid ${color}30`,
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${color}12`
                    ;(e.currentTarget as HTMLElement).style.borderColor = `${color}80`
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                    ;(e.currentTarget as HTMLElement).style.borderColor = `${color}30`
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

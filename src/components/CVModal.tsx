import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface CVModalProps {
  open: boolean
  onClose: () => void
}

export default function CVModal({ open, onClose }: CVModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: 'easeOut' as const }}
            className="fixed inset-4 sm:inset-8 md:inset-16 z-50 flex flex-col rounded-sm overflow-hidden"
            style={{ background: '#1d2021', border: '1px solid #32302f' }}
          >
            {/* Toolbar */}
            <div
              className="flex items-center justify-between px-4 py-3 shrink-0"
              style={{ borderBottom: '1px solid #32302f' }}
            >
              <span className="text-xs text-muted tracking-wide">
                SuryadevChippada_CV.pdf
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/cv.pdf"
                  download="SuryadevChippada_CV.pdf"
                  className="text-xs text-muted hover:text-accent transition-colors duration-150 border border-border px-3 py-1 rounded-sm"
                >
                  download ↓
                </a>
                <button
                  onClick={onClose}
                  className="text-muted hover:text-primary transition-colors duration-150 text-lg leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="flex-1 min-h-0">
              <iframe
                src="/cv.pdf#toolbar=0&navpanes=0&scrollbar=0"
                title="Suryadev Chippada CV"
                className="w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

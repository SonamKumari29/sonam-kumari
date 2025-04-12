import { motion } from 'framer-motion'

export default function CursorFollower({ mousePosition, theme }: { mousePosition: { x: number; y: number }, theme: 'retro' | 'sunset' }) {
  const cursorColor = theme === 'retro' ? 'bg-green-400' : 'bg-orange-400'
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 ${isTouchDevice ? 'w-6 h-6' : 'w-4 h-4'} rounded-full ${cursorColor} pointer-events-none z-50`}
        animate={{ x: mousePosition.x - (isTouchDevice ? 12 : 8), y: mousePosition.y - (isTouchDevice ? 12 : 8) }}
        transition={{ type: 'spring', damping: isTouchDevice ? 20 : 10, stiffness: isTouchDevice ? 200 : 100, mass: 0.1 }}
      />
      <motion.div
        className={`fixed top-0 left-0 ${isTouchDevice ? 'w-12 h-12' : 'w-8 h-8'} rounded-full border-2 ${theme === 'retro' ? 'border-green-400' : 'border-orange-400'} pointer-events-none z-40`}
        animate={{ x: mousePosition.x - (isTouchDevice ? 24 : 16), y: mousePosition.y - (isTouchDevice ? 24 : 16) }}
        transition={{ type: 'spring', damping: isTouchDevice ? 25 : 15, stiffness: isTouchDevice ? 150 : 80, mass: 0.2 }}
      />
    </>
  )
} 
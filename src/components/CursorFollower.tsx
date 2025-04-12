"use client"

import { motion } from 'framer-motion'

interface CursorFollowerProps {
  mousePosition: { x: number; y: number }
  theme: 'retro' | 'sunset'
}

export default function CursorFollower({ mousePosition, theme }: CursorFollowerProps) {
  const cursorColor = theme === 'retro' ? 'bg-green-400' : 'bg-orange-400'
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 ${isTouchDevice ? 'w-3 h-3' : 'w-2 h-2'} rounded-full ${cursorColor} pointer-events-none z-50`}
        animate={{ 
          x: mousePosition.x - (isTouchDevice ? 6 : 4), 
          y: mousePosition.y - (isTouchDevice ? 6 : 4) 
        }}
        transition={{ 
          type: 'spring', 
          damping: isTouchDevice ? 20 : 10, 
          stiffness: isTouchDevice ? 200 : 100, 
          mass: 0.1 
        }}
      />
      <motion.div
        className={`fixed top-0 left-0 ${isTouchDevice ? 'w-6 h-6' : 'w-4 h-4'} rounded-full border ${theme === 'retro' ? 'border-green-400' : 'border-orange-400'} pointer-events-none z-40`}
        animate={{ 
          x: mousePosition.x - (isTouchDevice ? 12 : 8), 
          y: mousePosition.y - (isTouchDevice ? 12 : 8) 
        }}
        transition={{ 
          type: 'spring', 
          damping: isTouchDevice ? 25 : 15, 
          stiffness: isTouchDevice ? 150 : 80, 
          mass: 0.2 
        }}
      />
    </>
  )
}

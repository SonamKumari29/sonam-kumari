"use client"

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CLI from './CLI'
import IntroSection from './sections/IntroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import ExperienceSection from './sections/ExperienceSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'
import Navigation, { Section } from './Navigation'
import CursorFollower from './CursorFollower'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>('intro')
  const [theme, setTheme] = useState<'retro' | 'sunset'>('retro')
  const [cliMode, setCliMode] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      setMousePosition({ x: touch.clientX, y: touch.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === 'retro'
          ? 'bg-gray-900 font-mono'
          : 'bg-gradient-to-br from-gray-900 via-purple-900 to-orange-900 font-sans'
      } text-gray-100`}
    >
      <CursorFollower mousePosition={mousePosition} theme={theme} />
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        setTheme={setTheme}
        cliMode={cliMode}
        setCliMode={setCliMode}
      />
      <main className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl">
          {cliMode ? (
            <CLI theme={theme} setActiveSection={setActiveSection} setTheme={setTheme} setCliMode={setCliMode} />
          ) : (
            <AnimatePresence mode="wait">
              <motion.section
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="min-h-[calc(100vh-12rem)] flex items-center justify-center"
              >
                <div className="w-full">
                  {activeSection === 'intro' && <IntroSection theme={theme} setActiveSection={setActiveSection} />}
                  {activeSection === 'projects' && <ProjectsSection theme={theme} />}
                  {activeSection === 'skills' && <SkillsSection theme={theme} />}
                  {activeSection === 'experience' && <ExperienceSection theme={theme} />}
                  {activeSection === 'education' && <EducationSection theme={theme} />}
                  {activeSection === 'contact' && <ContactSection theme={theme} />}
                </div>
              </motion.section>
            </AnimatePresence>
          )}
        </div>
      </main>
      <footer
        className={`text-center py-6 text-gray-500 text-sm ${
          theme === 'retro' ? 'font-mono' : 'font-sans'
        }`}
      >
        © {new Date().getFullYear()} Sonam Kumari. All rights reserved.
      </footer>
    </div>
  )
}
"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code, Coffee, Sparkles, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { type Section } from "@/lib/types"
import { type Dispatch, type SetStateAction } from "react"
import { TypeAnimation } from 'react-type-animation'

interface IntroProps {
  setActiveSection: Dispatch<SetStateAction<Section>>
  theme?: "retro" | "sunset"
}

export default function IntroSection({ setActiveSection, theme = "sunset" }: IntroProps) {
  return (
    <section className="min-h-screen relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6"
          >
            {/* Name and Title */}
            <div className="space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
              >
                {theme === "retro" ? (
                  <div className="text-green-400">
                    <TypeAnimation
                      sequence={[
                        'Hey!',
                        1000,
                        'Hey! I\'m Sonam Kumari',
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={0}
                    />
                  </div>
                ) : (
                  <TypeAnimation
                    sequence={[
                      'Hey! I\'m Sonam Kumari',
                    ]}
                    wrapper="span"
                    speed={1}
                    repeat={0}
                    className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent pb-3"
                  />
                )}
              </motion.h1>
              
              {/*Tag */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`inline-flex items-center px-3 py-1.5 rounded-full ${
                  theme === "retro"
                    ? "bg-green-400/10 border border-green-400/20"
                    : "bg-orange-400/10 border border-orange-400/20"
                }`}
              >
                <Code className={`w-4 h-4 mr-2 ${theme === "retro" ? "text-green-400" : "text-orange-400"}`} />
                <span className={`text-sm font-medium ${theme === "retro" ? "text-green-400" : "text-orange-400"}`}>
                  AI & Full-Stack Developer
                </span>
              </motion.div>
            </div>

            {/* Description Points */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-3"
            >
              <div className={`flex items-start space-x-3 p-3 rounded-xl backdrop-blur-sm ${
                theme === "retro"
                  ? "bg-green-400/5 border border-green-400/10"
                  : "bg-gradient-to-r from-orange-400/5 to-pink-500/5 border border-orange-400/10"
              }`}>
                <div className={`p-2 rounded-lg ${
                  theme === "retro"
                    ? "bg-green-400/10"
                    : "bg-orange-400/10"
                }`}>
                  <Sparkles className={`w-4 h-4 ${theme === "retro" ? "text-green-400" : "text-orange-400"}`} />
                </div>
                <p className={`text-sm sm:text-base ${
                  theme === "retro"
                    ? "text-green-100"
                    : "text-orange-100"
                }`}>
                  I&apos;m passionate about creating smart, user-friendly web experiences using AI, React.js, and Next.js.
                </p>
              </div>

              <div className={`flex items-start space-x-3 p-3 rounded-xl backdrop-blur-sm ${
                theme === "retro"
                  ? "bg-green-400/5 border border-green-400/10"
                  : "bg-gradient-to-r from-pink-500/5 to-purple-500/5 border border-pink-500/10"
              }`}>
                <div className={`p-2 rounded-lg ${
                  theme === "retro"
                    ? "bg-green-400/10"
                    : "bg-pink-500/10"
                }`}>
                  <Code className={`w-4 h-4 ${theme === "retro" ? "text-green-400" : "text-pink-500"}`} />
                </div>
                <p className={`text-sm sm:text-base ${
                  theme === "retro"
                    ? "text-green-100"
                    : "text-pink-100"
                }`}>
                  I love working on chatbots, NLP design, and integrating APIs to build dynamic, interactive apps.
                </p>
              </div>

              <div className={`flex items-start space-x-3 p-3 rounded-xl backdrop-blur-sm ${
                theme === "retro"
                  ? "bg-green-400/5 border border-green-400/10"
                  : "bg-gradient-to-r from-purple-500/5 to-orange-400/5 border border-purple-500/10"
              }`}>
                <div className={`p-2 rounded-lg ${
                  theme === "retro"
                    ? "bg-green-400/10"
                    : "bg-purple-500/10"
                }`}>
                  <Coffee className={`w-4 h-4 ${theme === "retro" ? "text-green-400" : "text-purple-500"}`} />
                </div>
                <p className={`text-sm sm:text-base ${
                  theme === "retro"
                    ? "text-green-100"
                    : "text-purple-100"
                }`}>
                  Always exploring new technologies, learning backend development, and collaborating on meaningful projects.
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <Link 
                href="https://x.com/that_textrovert" 
                target="_blank"
                className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === "retro"
                    ? "bg-green-400/10 hover:bg-green-400/20 border border-green-400/20 hover:border-green-400/40 text-green-400 shadow-lg shadow-green-400/10 hover:shadow-green-400/20"
                    : "bg-gradient-to-r from-orange-400/10 to-pink-500/10 hover:from-orange-400/20 hover:to-pink-500/20 border border-orange-400/20 hover:border-orange-400/40 text-orange-400 shadow-lg shadow-orange-400/10 hover:shadow-orange-400/20"
                }`}
              >
                <FaXTwitter size={16} />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/sonam-kumari-084641257/" 
                target="_blank"
                className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === "retro"
                    ? "bg-green-400/10 hover:bg-green-400/20 border border-green-400/20 hover:border-green-400/40 text-green-400 shadow-lg shadow-green-400/10 hover:shadow-green-400/20"
                    : "bg-gradient-to-r from-pink-500/10 to-purple-500/10 hover:from-pink-500/20 hover:to-purple-500/20 border border-pink-500/20 hover:border-pink-500/40 text-pink-500 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20"
                }`}
              >
                <FaLinkedin size={16} />
              </Link>
              <Link 
                href="https://github.com/SonamKumari29" 
                target="_blank"
                className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === "retro"
                    ? "bg-green-400/10 hover:bg-green-400/20 border border-green-400/20 hover:border-green-400/40 text-green-400 shadow-lg shadow-green-400/10 hover:shadow-green-400/20"
                    : "bg-gradient-to-r from-purple-500/10 to-orange-400/10 hover:from-purple-500/20 hover:to-orange-400/20 border border-purple-500/20 hover:border-purple-500/40 text-purple-500 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
                }`}
              >
                <FaGithub size={16} />
              </Link>
            </motion.div>

            {/* Mobile Hire Me Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="block lg:hidden flex justify-center"
            >
              <Button 
                className={`w-full max-w-[200px] py-2 rounded-full transition-all duration-500 group relative overflow-hidden ${
                  theme === "retro"
                    ? "bg-transparent text-green-400 border-2 border-green-400 hover:text-black font-mono text-sm"
                    : "bg-transparent text-orange-400 border-2 border-orange-400 hover:text-white font-sans"
                }`}
                onClick={() => setActiveSection("contact")}
              >
                <span className={`absolute inset-0 w-full h-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                  theme === "retro"
                    ? "bg-gradient-to-r from-green-400 via-green-500 to-green-400"
                    : "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"
                }`} />
                <span className="relative flex items-center justify-center">
                  <Briefcase className="mr-2 h-3 w-3" />
                  Hire Me
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image and Desktop Hire Me Button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative hidden lg:flex flex-col items-center gap-4"
          >
            <div className={`w-[240px] h-[240px] rounded-3xl overflow-hidden ${
              theme === 'retro' 
                ? 'border-4 border-green-400 shadow-lg shadow-green-400/20' 
                : 'border-2 border-orange-400'
            }`}>
              <Image
                src="/profile.jpg"
                alt="Sonam Kumari"
                width={240}
                height={240}
                className="object-cover"
                priority
              />
            </div>
            
            {/* Desktop Hire Me Button */}
            <Button 
              className={`w-full max-w-[200px] py-2 rounded-full transition-all duration-500 group relative overflow-hidden ${
                theme === "retro"
                  ? "bg-transparent text-green-400 border-2 border-green-400 hover:text-black font-mono text-sm"
                  : "bg-transparent text-orange-400 border-2 border-orange-400 hover:text-white font-sans"
              }`}
              onClick={() => setActiveSection("contact")}
            >
              <span className={`absolute inset-0 w-full h-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                theme === "retro"
                  ? "bg-gradient-to-r from-green-400 via-green-500 to-green-400"
                  : "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"
              }`} />
              <span className="relative flex items-center justify-center">
                <Briefcase className="mr-2 h-3 w-3" />
                Hire Me
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code, Coffee, Sparkles, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { type Section } from "@/lib/types"
import { type Dispatch, type SetStateAction } from "react"

interface IntroProps {
  setActiveSection: Dispatch<SetStateAction<Section>>
  theme?: "retro" | "sunset"
}

export default function IntroSection({ setActiveSection, theme = "sunset" }: IntroProps) {
  return (
    <section className="min-h-screen relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-8"
          >
            {/* Name and Title */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold"
              >
                <span className={theme === "retro" ? "text-green-400" : "text-orange-400"}>Hey! </span>
                <span className={theme === "retro" 
                  ? "text-green-400"
                  : "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
                }>
                  I&apos;m Sonam Kumari
                </span>
              </motion.h1>
              
              {/* Frontend Developer Tag */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`inline-flex items-center px-4 py-2 rounded-full ${
                  theme === "retro"
                    ? "bg-green-400/10 border border-green-400/20"
                    : "bg-orange-400/10 border border-orange-400/20"
                }`}
              >
                <Code className={`w-4 h-4 mr-2 ${theme === "retro" ? "text-green-400" : "text-orange-400"}`} />
                <span className={`text-sm font-medium ${theme === "retro" ? "text-green-400" : "text-orange-400"}`}>
                  Frontend Developer
                </span>
              </motion.div>
            </div>

            {/* Description Points */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-6"
            >
              <div className={`flex items-start space-x-3 p-4 rounded-xl ${
                theme === "retro"
                  ? "bg-green-400/5 border border-green-400/10"
                  : "bg-gradient-to-r from-orange-400/5 to-pink-500/5 border border-orange-400/10"
              }`}>
                <div className={`p-2 rounded-lg ${
                  theme === "retro"
                    ? "bg-green-400/10"
                    : "bg-orange-400/10"
                }`}>
                  <Sparkles className={`w-5 h-5 ${theme === "retro" ? "text-green-400" : "text-orange-400"}`} />
                </div>
                <p className={`text-lg ${
                  theme === "retro"
                    ? "text-green-100"
                    : "text-orange-100"
                }`}>
                  I&apos;m a passionate developer who loves turning ideas into intuitive and impactful digital experiences.
                </p>
              </div>

              <div className={`flex items-start space-x-3 p-4 rounded-xl ${
                theme === "retro"
                  ? "bg-green-400/5 border border-green-400/10"
                  : "bg-gradient-to-r from-pink-500/5 to-purple-500/5 border border-pink-500/10"
              }`}>
                <div className={`p-2 rounded-lg ${
                  theme === "retro"
                    ? "bg-green-400/10"
                    : "bg-pink-500/10"
                }`}>
                  <Code className={`w-5 h-5 ${theme === "retro" ? "text-green-400" : "text-pink-500"}`} />
                </div>
                <p className={`text-lg ${
                  theme === "retro"
                    ? "text-green-100"
                    : "text-pink-100"
                }`}>
                  With a keen eye for design and a problem-solving mindset, I craft seamless, user-friendly interfaces.
                </p>
              </div>

              <div className={`flex items-start space-x-3 p-4 rounded-xl ${
                theme === "retro"
                  ? "bg-green-400/5 border border-green-400/10"
                  : "bg-gradient-to-r from-purple-500/5 to-orange-400/5 border border-purple-500/10"
              }`}>
                <div className={`p-2 rounded-lg ${
                  theme === "retro"
                    ? "bg-green-400/10"
                    : "bg-purple-500/10"
                }`}>
                  <Coffee className={`w-5 h-5 ${theme === "retro" ? "text-green-400" : "text-purple-500"}`} />
                </div>
                <p className={`text-lg ${
                  theme === "retro"
                    ? "text-green-100"
                    : "text-purple-100"
                }`}>
                  Beyond coding, I enjoy exploring new technologies and collaborating on meaningful projects.
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <Link 
                href="https://x.com/that_textrovert" 
                target="_blank"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === "retro"
                    ? "bg-green-400/10 hover:bg-green-400/20 border border-green-400/20 hover:border-green-400/40 text-green-400 shadow-lg shadow-green-400/10 hover:shadow-green-400/20"
                    : "bg-gradient-to-r from-orange-400/10 to-pink-500/10 hover:from-orange-400/20 hover:to-pink-500/20 border border-orange-400/20 hover:border-orange-400/40 text-orange-400 shadow-lg shadow-orange-400/10 hover:shadow-orange-400/20"
                }`}
              >
                <FaXTwitter size={20} />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/sonam-kumari-084641257/" 
                target="_blank"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === "retro"
                    ? "bg-green-400/10 hover:bg-green-400/20 border border-green-400/20 hover:border-green-400/40 text-green-400 shadow-lg shadow-green-400/10 hover:shadow-green-400/20"
                    : "bg-gradient-to-r from-pink-500/10 to-purple-500/10 hover:from-pink-500/20 hover:to-purple-500/20 border border-pink-500/20 hover:border-pink-500/40 text-pink-500 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20"
                }`}
              >
                <FaLinkedin size={20} />
              </Link>
              <Link 
                href="https://github.com/SonamKumari29" 
                target="_blank"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  theme === "retro"
                    ? "bg-green-400/10 hover:bg-green-400/20 border border-green-400/20 hover:border-green-400/40 text-green-400 shadow-lg shadow-green-400/10 hover:shadow-green-400/20"
                    : "bg-gradient-to-r from-purple-500/10 to-orange-400/10 hover:from-purple-500/20 hover:to-orange-400/20 border border-purple-500/20 hover:border-purple-500/40 text-purple-500 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
                }`}
              >
                <FaGithub size={20} />
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
                className={`w-full max-w-[250px] py-3 rounded-full transition-all duration-500 group relative overflow-hidden ${
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
                  <Briefcase className="mr-2 h-4 w-4" />
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
            className="relative hidden lg:flex flex-col items-center gap-6"
          >
            <div className={`w-[300px] h-[300px] rounded-3xl overflow-hidden ${
              theme === 'retro' 
                ? 'border-4 border-green-400 shadow-lg shadow-green-400/20' 
                : 'border-2 border-orange-400'
            }`}>
              <Image
                src="/profile.jpg"
                alt="Sonam Kumari"
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
            
            {/* Desktop Hire Me Button */}
            <Button 
              className={`w-full max-w-[250px] py-3 lg:py-4 rounded-full transition-all duration-500 group relative overflow-hidden ${
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
                <Briefcase className="mr-2 h-4 w-4" />
                Hire Me
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

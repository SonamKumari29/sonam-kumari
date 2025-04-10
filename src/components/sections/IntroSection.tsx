"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code, Coffee, Sparkles, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

interface IntroProps {
  setActiveSection: (section: string) => void
  theme?: "retro" | "sunset"
}

export default function IntroSection({ setActiveSection, theme = "sunset" }: IntroProps) {
  return (
    <section className="min-h-screen relative flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex-1 space-y-8">
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className={theme === "retro" ? "text-green-400" : "text-orange-400"}>Hey! </span>
                <span className={theme === "retro" 
                  ? "text-green-400"
                  : "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
                }>
                  I&apos;m Sonam Kumari
                </span>
              </h1>
              
              {/* Frontend Developer Tag */}
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${
                theme === "retro"
                  ? "bg-green-400/10 border border-green-400/20"
                  : "bg-orange-400/10 border border-orange-400/20"
              }`}>
                <Code className={`w-4 h-4 mr-2 ${theme === "retro" ? "text-green-400" : "text-orange-400"}`} />
                <span className={`text-sm font-medium ${theme === "retro" ? "text-green-400" : "text-orange-400"}`}>
                  Frontend Developer
                </span>
              </div>
            </div>

            {/* Description Points */}
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <Sparkles className={`w-6 h-6 mt-1 flex-shrink-0 ${theme === "retro" ? "text-green-400" : "text-orange-400"}`} />
                <p className="text-lg">
                  I&apos;m a passionate developer who loves turning ideas into intuitive and impactful digital experiences.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Code className={`w-6 h-6 mt-1 flex-shrink-0 ${theme === "retro" ? "text-green-400" : "text-orange-400"}`} />
                <p className="text-lg">
                  With a keen eye for design and a problem-solving mindset, I craft seamless, user-friendly interfaces.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Coffee className={`w-6 h-6 mt-1 flex-shrink-0 ${theme === "retro" ? "text-green-400" : "text-orange-400"}`} />
                <p className="text-lg">
                  Beyond coding, I enjoy exploring new technologies and collaborating on meaningful projects.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
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
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative hidden lg:flex flex-col items-center gap-6">
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
            
            {/* Hire Me Button */}
            <Button 
              className={`w-full max-w-[250px] py-3 lg:py-4 rounded-full transition-all duration-300 hover:scale-105 ${
                theme === "retro"
                  ? "bg-transparent text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black font-mono text-sm"
                  : "bg-transparent text-orange-400 border-2 border-orange-400 hover:bg-orange-400 hover:text-black"
              }`}
              onClick={() => setActiveSection("contact")}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

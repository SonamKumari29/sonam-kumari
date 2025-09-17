"use client"

import { skills } from "@/lib/data"
import { techLogos } from "@/lib/tech-logos"
import { IconType } from "react-icons"
import { Code, Database, Cpu, Server } from "lucide-react"

const categoryIcons = {
  "Languages": Code,
  "Libraries & Frameworks": Database,
  "Databases": Server,
  "Tools & Technologies": Cpu,
}

export default function SkillsSection({ theme }: { theme: "retro" | "sunset" }) {
  const baseTextColor = theme === "retro" ? "text-green-400" : "text-orange-400"
  const hoverBgColor = theme === "retro" ? "hover:bg-gray-700" : "hover:bg-gray-800"
  const borderColor = theme === "retro" ? "border-green-500" : "border-orange-500"
  const gradientColor = theme === "retro" 
    ? "from-green-400/20 to-green-400/5" 
    : "from-orange-400/20 to-orange-400/5"

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 
          className={`text-3xl font-bold mb-12 text-center ${
            theme === "retro" 
              ? "text-green-400 font-mono" 
              : "text-orange-400 font-sans"
          }`}
        >
          Skills
        </h2>

        <div className="space-y-12">
          {Object.entries(categoryIcons).map(([category, Icon]) => {
            const categorySkills = skills.filter(skill => skill.category === category)
            
            return (
              <div
                key={category}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${gradientColor}`}>
                    <Icon className={`w-6 h-6 ${baseTextColor}`} />
                  </div>
                  <h3 className={`text-xl font-semibold ${baseTextColor}`}>
                    {category}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categorySkills.map((skill) => {
                    const TechIcon: IconType = techLogos[skill.name] || (() => null)
                    return (
                      <div
                        key={skill.name}
                        className={`flex items-center justify-center p-3 rounded-lg bg-gray-800 ${hoverBgColor} transition-all duration-300 border ${borderColor} min-h-[80px] hover:scale-105`}
                      >
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="flex items-center justify-center w-8 h-8">
                            <TechIcon size="32" className={baseTextColor} />
                          </div>
                          <span className={`text-sm font-medium ${baseTextColor} text-center leading-tight`}>
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

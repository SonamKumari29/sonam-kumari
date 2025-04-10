"use client"

import { experiences } from "@/lib/data"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"

export default function ExperienceSection({ theme }: { theme: "retro" | "sunset" }) {
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
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`group relative rounded-xl p-6 bg-gray-800 border ${borderColor} transition-all duration-300 ${hoverBgColor}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${gradientColor} w-fit`}>
                  <Briefcase className={`w-6 h-6 ${baseTextColor}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className={`text-xl font-semibold ${baseTextColor}`}>
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mt-2">{exp.company}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <ChevronRight className={`w-4 h-4 mt-1 flex-shrink-0 ${baseTextColor}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

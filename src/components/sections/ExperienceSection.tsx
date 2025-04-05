import { motion } from 'framer-motion'
import { BriefcaseIcon, CalendarIcon } from 'lucide-react'
import { experiences } from '@/lib/data'

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
}
export default function ExperienceSection({ theme }: { theme: 'retro' | 'sunset' }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-20"> {/* Add proper spacing */}
      <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'retro' ? 'text-green-400 font-mono' : 'text-orange-400 font-serif'}`}>
        Work Experience
      </h2>
      <div className="space-y-10"> 
        {experiences.map((exp: Experience, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative ${theme === 'retro' ? 'bg-gray-800 border-green-400' : 'bg-gray-700 border-orange-400'} p-6 rounded-lg shadow-lg border`}
          >
            <div className="flex items-center mb-4">
              <BriefcaseIcon className={`w-6 h-6 mr-2 ${theme === 'retro' ? 'text-green-400' : 'text-orange-400'}`} />
              <h3 className={`text-xl font-semibold ${theme === 'retro' ? 'font-mono' : 'font-sans'}`}>{exp.title}</h3>
            </div>
            <p className="text-gray-400 mb-2">{exp.company}</p>
            <div className="flex items-center text-gray-500 mb-4">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span>{exp.period}</span>
            </div>
            <ul className="text-gray-300 list-disc pl-5">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

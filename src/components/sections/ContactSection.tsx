"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, MailIcon, SendHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { FaXTwitter } from "react-icons/fa6"

const socialLinks = [
  { icon: FaXTwitter, href: "https://x.com/that_textrovert", label: "X" },
  { icon: GithubIcon, href: "https://github.com/SonamKumari29", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/sonam-kumari-084641257/", label: "LinkedIn" },
  { icon: MailIcon, href: "mailto:kumarisonam2909@gmail.com", label: "Email" },
]

interface FormValues {
  name: string
  email: string
  message: string
}

export default function ContactSection({ theme }: { theme: "retro" | "sunset" }) {
  const [isLoading, setIsLoading] = useState(false)
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      })

      if (response.ok) {
        toast.success("Message sent successfully!")
        setFormValues({ name: "", email: "", message: "" })
      } else {
        const errorData = await response.json()
        toast.error(`Error: ${errorData.error}`)
      }
    } catch (error) {
      toast.error("Error: Failed to send message.")
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const isRetro = theme === "retro"

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div
          className={`grid md:grid-cols-2 gap-5 p-4 md:p-6 rounded-2xl ${
            isRetro ? "bg-gray-900 border border-green-500/20" : "bg-gray-900 border border-orange-500/20"
          }`}
        >
          {/* Left side - Contact Info */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-2xl sm:text-3xl font-bold ${
                isRetro ? "text-green-400 font-mono" : "text-orange-400 font-serif"
              }`}
            >
              Let&apos;s Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-sm sm:text-base"
            >
              Feel free to get in touch for collaborations,<br /> queries, or opportunities.

            </motion.p>

            <div className="space-y-3">
              <p className={`text-base font-medium ${isRetro ? "text-green-400" : "text-orange-400"}`}>
                Find me on
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-2 rounded-lg border ${
                      isRetro
                        ? "bg-gray-800 border-green-500/20 hover:border-green-500/40"
                        : "bg-gray-800 border-orange-500/20 hover:border-orange-500/40"
                    }`}
                  >
                    <social.icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${isRetro ? "text-green-400" : "text-orange-400"}`}
                      aria-label={social.label}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="md:pl-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {(Object.keys(formValues) as Array<keyof FormValues>).map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-1"
                >
                  <label
                    className={`block text-sm font-medium ${
                      isRetro ? "text-green-400" : "text-orange-400"
                    }`}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      value={formValues[field]}
                      onChange={handleChange}
                      rows={4}
                      placeholder={`Your ${field}`}
                      className={`w-full p-2 rounded-lg border bg-gray-800 placeholder-gray-500 text-sm ${
                        isRetro
                          ? "border-green-500/20 focus:border-green-500/40 font-mono"
                          : "border-orange-500/20 focus:border-orange-500/40 font-sans"
                      }`}
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formValues[field]}
                      onChange={handleChange}
                      placeholder={`Your ${field}`}
                      className={`w-full p-2 rounded-lg border bg-gray-800 placeholder-gray-500 text-sm ${
                        isRetro
                          ? "border-green-500/20 focus:border-green-500/40 font-mono"
                          : "border-orange-500/20 focus:border-orange-500/40 font-sans"
                      }`}
                    />
                  )}
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full p-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isRetro
                      ? "bg-green-500 hover:bg-green-600 text-gray-900 font-mono"
                      : "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-sans"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isLoading ? "Sending..." : "Send Message"}
                    <SendHorizontal className="w-4 h-4" />
                  </span>
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { blogs } from "@/lib/data"
import Image from "next/image"
import type { Blog } from "../../../types"
import { usePagination } from "@/hooks/usePagination"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogsSection({
  theme,
}: {
  theme: "retro" | "sunset"
}) {
  const { currentItems, nextPage, prevPage, currentPage, maxPage } = usePagination(blogs, 3)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`text-2xl sm:text-3xl font-bold mb-12 text-center ${
          theme === "retro" ? "font-mono text-green-400" : "font-sans text-orange-400"
        }`}
      >
        Featured Blogs
      </motion.h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="space-y-4 sm:space-y-6"
        >
          {currentItems.map((blog: Blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <Card
                className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  theme === "retro"
                    ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-green-500"
                    : "bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-orange-500"
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  <CardHeader className="relative w-full md:w-1/3 h-48 md:h-auto p-0 overflow-hidden">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      priority
                    />
                  </CardHeader>

                  <CardContent className="flex-1 p-4 md:p-6">
                    <CardTitle
                      className={`text-xl sm:text-2xl font-bold mb-3 ${
                        theme === "retro" ? "text-green-400 font-mono" : "text-orange-400 font-sans"
                      }`}
                    >
                      {blog.title}
                    </CardTitle>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{blog.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {blog.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className={`rounded-full px-2 py-1 text-xs ${
                            theme === "retro" ? "bg-green-700/20 text-green-400" : "bg-orange-700/20 text-orange-400"
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className={`rounded-full transition-all duration-300 ${
                          theme === "retro"
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                      >
                        <a href={blog.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Read Blog
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="flex justify-center items-center mt-8 sm:mt-12 space-x-4 sm:space-x-6"
      >
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          size="icon"
          className={`rounded-full transition-all duration-300 ${
            theme === "retro"
              ? "bg-green-500 text-white hover:bg-green-600 disabled:bg-green-800"
              : "bg-orange-500 text-white hover:bg-orange-600 disabled:bg-orange-800"
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <span
          className={`text-lg font-bold ${
            theme === "retro" ? "text-green-400 font-mono" : "text-orange-400 font-sans"
          }`}
        >
          {currentPage} / {maxPage}
        </span>
        <Button
          onClick={nextPage}
          disabled={currentPage === maxPage}
          size="icon"
          className={`rounded-full transition-all duration-300 ${
            theme === "retro"
              ? "bg-green-500 text-white hover:bg-green-600 disabled:bg-green-800"
              : "bg-orange-500 text-white hover:bg-orange-600 disabled:bg-orange-800"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </section>
  )
}

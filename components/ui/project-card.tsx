"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  date: string
  techStack: string[]
  demoUrl?: string
  codeUrl?: string
  imageSrc?: string
}

export default function ProjectCard({
  id,
  title,
  description,
  date,
  techStack,
  demoUrl,
  codeUrl,
  imageSrc,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/projects/${id}`)
  }

  return (
    <div
      className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden group transition-all duration-300 h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-200 group-hover:text-purple-400 transition-colors">
              {title}
            </h3>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <p className="text-gray-400 mb-4">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {techStack.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div
          className={cn(
            "flex gap-3 transition-all duration-300 transform",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          {demoUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.open(demoUrl, "_blank", "noopener,noreferrer")
              }}
              className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </button>
          )}
          {codeUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.open(codeUrl, "_blank", "noopener,noreferrer")
              }}
              className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Github size={16} />
              <span>View Code</span>
            </button>
          )}
        </div>
      </div>
      <div
        className={cn(
          "h-1 bg-gradient-to-r from-purple-500 to-purple-300 transition-all duration-500 transform origin-left",
          isHovered ? "scale-x-100" : "scale-x-0",
        )}
      ></div>
    </div>
  )
}

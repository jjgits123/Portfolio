"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Users, Code, Server, Headphones, HardDrive, MapPin, Calendar, Building2 } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

export default function WorkExperience() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const workExperience = {
    company: "Cathay Drug Inc., & Co.",
    location: "Makati, Philippines",
    role: "Full-Stack Developer & Linux Operations Intern",
    duration: "Feb 2025 – Jun 2025",
    logo: "/images/company-services/cathay-drug-logo.jpeg",
    responsibilities: [
      {
        icon: <Users className="h-5 w-5 text-purple-400" />,
        text: "Collaborated in an Agile development team to build and maintain scalable internal web apps, participating in sprint planning, daily stand-ups, and iterative testing cycles (UAT).",
      },
      {
        icon: <Code className="h-5 w-5 text-purple-400" />,
        text: "Designed and developed full-stack features using React (frontend), Ruby on Rails (API backend), and MySQL, following SDLC practices and version-controlled workflows with Git.",
      },
      {
        icon: <Server className="h-5 w-5 text-purple-400" />,
        text: "Set up and managed development and production environments, web servers on Ubuntu Linux, handling deployment pipelines, service configuration, and bug resolution across environments; gained hands-on experience with Docker by building and running containers, writing Dockerfiles, and using Docker Compose for multi-container setups.",
      },
      {
        icon: <Headphones className="h-5 w-5 text-purple-400" />,
        text: "Provided real-time technical support to company employees via remote sessions and Viber calls, resolving hardware/software issues and performing device diagnostics on mobile devices.",
      },
      {
        icon: <HardDrive className="h-5 w-5 text-purple-400" />,
        text: "Configured a Dell PowerEdge R340 server with RAID setup, installed VMware ESXi, created and managed VMs, and conducted network diagnostics and Ubuntu server configuration for testing internal services.",
      },
    ],
  }

  return (
    <section id="work-experience" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Work Experience" subtitle="Professional journey and achievements" />

      <div
        className={cn(
          "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 opacity-0 transform translate-y-8 transition-all duration-1000",
          mounted && "opacity-100 translate-y-0",
        )}
      >
        {/* Company Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-white rounded-xl p-3 border border-gray-800/50">
              <Image
                src={workExperience.logo || "/placeholder.svg"}
                alt={workExperience.company}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-gray-200 mb-2">{workExperience.role}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-purple-400" />
                <span>{workExperience.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>{workExperience.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-purple-400" />
                <span>{workExperience.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-purple-400 mb-4">Key Responsibilities & Achievements</h4>
          <div className="space-y-4">
            {workExperience.responsibilities.map((responsibility, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-purple-500/30 hover:shadow-[0_0_10px_rgba(168,85,247,0.15)] transition-all duration-300 opacity-0 transform translate-x-8",
                  mounted && "opacity-100 translate-x-0",
                )}
                style={{
                  transitionDelay: mounted ? `${(index + 1) * 150}ms` : "0ms",
                }}
              >
                <div className="flex-shrink-0 mt-1">{responsibility.icon}</div>
                <p className="text-gray-300 leading-relaxed">{responsibility.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Highlight */}
        <div className="mt-8 pt-6 border-t border-gray-800/50">
          <h4 className="text-lg font-semibold text-purple-400 mb-4">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Ruby on Rails",
              "MySQL",
              "Ubuntu Linux",
              "Docker",
              "VMware ESXi",
              "Git",
              "Agile",
              "SDLC",
              "RAID",
              "Network Diagnostics",
            ].map((tech, index) => (
              <span
                key={index}
                className={cn(
                  "bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700/50 hover:border-purple-500/30 hover:shadow-[0_0_5px_rgba(168,85,247,0.15)] transition-all duration-300 opacity-0 transform scale-95",
                  mounted && "opacity-100 scale-100",
                )}
                style={{
                  transitionDelay: mounted ? `${800 + index * 50}ms` : "0ms",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

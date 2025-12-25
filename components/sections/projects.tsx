"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import ProjectCard from "@/components/ui/project-card"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      id: "company-services",
      title: "Company Services: Full Stack Sales Crediting Web App",
      description:
        "A full-stack enterprise platform developed in a collaborative environment for a leading pharmaceutical company. The app includes modules for Sales Crediting, Product Complaints, and Admin Tools, with features such as dynamic forms, PDF export, role-based access, and dashboard analytics. Employed RESTful APIs, Agile development practices, and production-ready deployment workflows.",
      date: "March 2025",
      techStack: ["React", "Ruby on Rails API", "MySQL", "NGINX", "Puma", "Ubuntu"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/company-services/complaint-details.png",
    },
    {
      id: "enigmatika",
      title: "Capstone Project: Enigmatika – 3D Mystery Adventure Game for Reading Comprehension",
      description:
        "A 3D mystery adventure mobile game designed to practice reading comprehension through interactive puzzles, NPC interactions, and dynamic storytelling. Developed in Unity3D.",
      date: "May 2025",
      techStack: ["Unity3D", "Blender", "Mixamo", "Adobe Photoshop"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/enigmatika/main-menu.png",
    },
    {
      id: "repmind",
      title: "RepMind: AI-Powered Web App Workout Planner",
      description:
        " A minimalist workout web app that integrates an AI coach powered by Gemini AI to guide, adapt, and personalize your fitness journey. While it offers standard manual logging, its true strength lies in its AI-driven coaching, planning, and insights — designed especially for beginners and intermediate lifters seeking clarity, guidance, and progression without the clutter.",
      date: "Jun 2025",
      techStack: ["React", "Bootstrap", "Figma", "JavaScript"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/conversational-ai.png",
    },
    {
      id: "movie-sentiment-classifier",
      title: "Movie Review Sentiment Classifier",
      description:
        "A Python-based machine learning tool to classify movie reviews into sentiments (positive or negative). The tool leverages text preprocessing, feature engineering, and supervised learning with scikit-learn classifiers. Applied Software Quality Assurance (SQA) techniques, including unit tests and system validation.",
      date: "December 2024",
      techStack: ["Python", "scikit-learn", "pandas", "numpy", "nltk", "matplotlib"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/python-logo.jpeg",
    },
    {
      id: "barangay-blueteam",
      title: "Strengthening Application Security: Blue Team Mitigation Strategies for Barangay Management System",
      description:
        "A comprehensive blue team cybersecurity project focused on evaluating and improving the security posture of a Barangay Management System. Conducted vulnerability assessments, simulated attacks, and implemented defensive mitigation strategies including CSRF protection and brute force prevention mechanisms.",
      date: "November 2023",
      techStack: ["PHP", "MySQL", "JavaScript", "CSRF Tokens", "Session Management"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/barangay-blueteam/login-comparison.png",
    },
    {
      id: "healhub-pentest",
      title: "Exploiting Insecure Input Handling: Shell Upload & Stored XSS Attacks on HealHub",
      description:
        "A comprehensive penetration testing project demonstrating practical exploitation of web application vulnerabilities through Shell Upload and Stored Cross-Site Scripting (XSS) attacks. Exposed critical security flaws in input validation and file upload mechanisms, highlighting the importance of secure coding practices.",
      date: "September 2025",
      techStack: ["PHP", "JavaScript", "Netcat", "Kali Linux", "Reverse Shells", "XSS"],
      demoUrl: "#",
      codeUrl: "#",
      imageSrc: "/images/healhub-pentest/reverse-shell-access.png",
    },
  ]

  return (
    <section id="projects" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Some of my recent work" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 200}ms` : "0ms",
            }}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              date={project.date}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              imageSrc={project.imageSrc}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

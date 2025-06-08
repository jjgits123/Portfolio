"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import AchievementCard from "@/components/ui/achievement-card"
import { cn } from "@/lib/utils"

export default function Achievements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const achievements = [
    {
      icon: "🏆",
      title: "Dean’s Lister",
      description: "Recognized every semester from 1st Year to 3rd Year for outstanding academic performance at the Technological Institute of the Philippines.",
    },
    {
      icon: "🥇",
      title: "Graduated with Honors",
      description: "Senior High School, Technological Institute of the Philippines, Quezon City, 2021.",
    },
  ]

  return (
    <section id="achievements" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Achievements" subtitle="Recognition and accomplishments" />

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 150}ms` : "0ms",
            }}
          >
            <AchievementCard icon={achievement.icon} title={achievement.title} description={achievement.description} />
          </div>
        ))}
      </div>
    </section>
  )
}

"use client"

import { Trophy, Award, Medal, Zap, Star, Target } from "lucide-react"

export function TestimonialsSection() {
  const achievements = [
    {
      icon: Medal,
      title: "Gold & Silver Medalist",
      description: "Bachelor of Software Engineering",
      color: "bg-[#FFC224]",
    },
    {
      icon: Trophy,
      title: "1st Place",
      description: "Geekle AI Hackathon - Text-to-Diagram Generator",
      color: "bg-[#6366F1]",
    },
    {
      icon: Target,
      title: "Meta Hacker Cup",
      description: "Ranked 6772 out of 30,000 participants",
      color: "bg-[#2F81F7]",
    },
    {
      icon: Zap,
      title: "Llama 3 Hackathon",
      description: "AI chat assistant integration project",
      color: "bg-[#FF6B7A]",
    },
    {
      icon: Award,
      title: "Visionary Award",
      description: "LLM Hackathon for Materials Science & Chemistry",
      color: "bg-[#10B981]",
    },
    {
      icon: Star,
      title: "Pak-Angels Hackathon",
      description: "Generative AI Hackathon participant",
      color: "bg-[#F59E0B]",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            Awards &{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">achievements</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto pb-8">
            Recognition from hackathons, competitions, and academic excellence in software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-3xl p-6 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div
                  className={`${achievement.color} w-14 h-14 rounded-full flex items-center justify-center mb-4 border-2 border-black`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0B0B0B]">{achievement.title}</h3>
                <p className="text-[#393939] text-base leading-relaxed">{achievement.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Apr 2025 - Feb 2026",
      company: "Mentalyc",
      title: "Frontend Engineer",
      description:
        "Owned end-to-end frontend development for a platform serving 30,000+ users. Built a scalable design system, automated developer workflows, and shipped responsive interfaces with React and TypeScript. Wrote BDD test cases with Cucumber to ensure feature reliability.",
      icon: "/images/agency.png",
    },
    {
      period: "Feb 2023 - Mar 2025",
      company: "Analog Mutation",
      title: "Frontend Developer",
      description:
        "Developed user-centric frontend features and optimized performance for Web3 applications serving 600+ users. Integrated blockchain functionality using Cosmos SDK and Solana. Collaborated with backend teams on Node.js and Express integrations.",
      icon: "/images/company.png",
    },
  ]

  const education = {
    degree: "Bachelor of Software Engineering",
    institution: "University of Sindh, Jamshoro",
    cgpa: "3.71 / 4.00",
    highlights: "Gold & Silver Medalist",
    coursework: "Data Structures, Algorithms, Database Systems, Software Architecture, Web Development, AI/ML Fundamentals",
  }

  return (
    <section id="experience" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Work <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">experience</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Building production-scale applications with modern frontend technologies. Focused on creating scalable, performant, and user-centric interfaces.
            </p>
            <a href="https://www.linkedin.com/in/adeel-atta/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-5.5 md:px-15.5 text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-60">
                <FileText className="w-5 h-5" />
                View LinkedIn
              </Button>
            </a>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div>
                    <div className="text-base md:text-[22px] leading-tight md:leading-8.5 font-bold text-[#0B0B0B]">
                      {exp.period}
                    </div>
                    <div className="text-sm md:text-base text-[#6366F1] font-semibold">{exp.company}</div>
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={`${exp.company} company logo - ${exp.title}`}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-10 font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-7.5">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Education Card */}
            <div className="bg-[#FFC224] border-4 border-black rounded-3xl">
              <div className="pt-6 md:pt-8 px-6 md:px-8">
                <div className="text-base md:text-[22px] leading-tight md:leading-8.5 font-bold text-[#0B0B0B]">
                  Education
                </div>
              </div>

              <div className="border-t-[3px] border-black my-4 md:my-6"></div>

              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <h3 className="text-xl md:text-[28px] leading-tight md:leading-10 font-bold text-[#0B0B0B] mb-1">
                  {education.degree}
                </h3>
                <p className="text-[#393939] font-semibold mb-2">{education.institution}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    CGPA: {education.cgpa}
                  </span>
                  <span className="bg-[#FF6B7A] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {education.highlights}
                  </span>
                </div>
                <p className="text-[#393939] text-sm md:text-base leading-relaxed">
                  <span className="font-semibold">Coursework:</span> {education.coursework}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

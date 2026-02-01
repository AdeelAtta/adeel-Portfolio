import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-4 border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/Gemini_Generated_Image_aboutme.png" alt="Adeel Atta - Frontend Engineer profile" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Building products that <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">scale</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Software Engineer and Frontend Developer with deep expertise in React, Next.js, and TypeScript. I've shipped production applications serving over 30,000 users, built browser extensions, and contributed to AI-powered and Web3 products. Gold and Silver Medalist in Software Engineering with a passion for clean, scalable, user-centric systems.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">30,000+ Users Served</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Built and delivered end-to-end frontend features for production platforms at scale, including AI-powered mental health applications.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">Award-Winning Developer</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Gold & Silver Medalist in Software Engineering. 1st Place at Geekle AI Hackathon. Active participant in global hackathons and competitions.
                </p>
              </div>
            </div>
          </div>

          <a href="https://www.linkedin.com/in/adeel-atta/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-5.5 md:px-15.5 text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-60">
              <FileText className="w-5 h-5" />
              View LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

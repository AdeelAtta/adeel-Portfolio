import { Mail, FolderOpen, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-12.5 md:text-[72px] font-bold md:leading-21.25">
            I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Adeel Atta</span>, a Frontend Engineer building{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">AI-Powered</span> Apps
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-7 md:leading-7.5 max-w-xl">
            I build scalable, user-centric web applications with React, Next.js, and TypeScript. From production platforms serving 30,000+ users to innovative AI tools and browser extensions.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <a href="mailto:adeelatta2000@gmail.com">
              <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-5.5 md:px-15.5 text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-60">
                <Mail className="w-5 h-5" />
                Get in touch
              </Button>
            </a>
            <a href="#portfolio">
              <Button
                variant="outline"
                className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-5.5 md:px-15.5 text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-60"
              >
                <FolderOpen className="w-5 h-5" />
                View projects
              </Button>
            </a>
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/AdeelAtta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#0B0B0B] rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/adeel-atta/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#2F81F7] rounded-full flex items-center justify-center hover:bg-[#2F81F7]/80 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/design-mode/Gemini_Generated_Image_wrhwklwrhwklwrhw.png"
              alt="Adeel Atta - Frontend Engineer, React and Next.js specialist"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

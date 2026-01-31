import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/newsletter-icon.png"
                  alt="Contact"
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>

              <div className="w-full flex-1 bg-white border-4 border-black rounded-3xl py-6 px-6 md:py-8 md:px-10 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-2">{"Let's work together"}</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Have a project in mind? I'd love to hear about it.
                  </p>
                </div>

                <a href="mailto:adeelatta2000@gmail.com">
                  <Button className="bg-black text-white hover:bg-black/90 rounded-xl px-8 py-6 text-base md:text-lg font-semibold whitespace-nowrap h-auto">
                    <Mail className="w-5 h-5 mr-2" />
                    Get in touch
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold text-lg">A</span>
                </div>
                <span className="text-lg md:text-xl font-bold">Adeel Atta</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Frontend Engineer building scalable, AI-powered web applications. Expert in React, Next.js, and TypeScript.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/AdeelAtta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/adeel-atta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:adeelatta2000@gmail.com"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:adeelatta2000@gmail.com" className="hover:text-white transition-colors">
                    adeelatta2000@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a
                    href="https://github.com/AdeelAtta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    github.com/AdeelAtta
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a
                    href="https://www.linkedin.com/in/adeel-atta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    linkedin.com/in/adeel-atta
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>Adeel Atta - Frontend Engineer</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const primarySkills = [
    {
      title: "React & Next.js",
      description: "Building performant, SEO-friendly applications with server-side rendering, static generation, and the latest React patterns.",
      image: "/images/web-design.svg",
    },
    {
      title: "TypeScript",
      description: "Type-safe code that scales. Strong typing for better developer experience and fewer runtime errors in production.",
      image: "/images/ui-ux-design.svg",
    },
    {
      title: "Scalable Design Systems",
      description: "Building reusable component libraries and design systems that ensure consistency, speed up development, and scale across large applications.",
      image: "/images/product-design.svg",
    },
    {
      title: "TailwindCSS",
      description: "Rapid UI development with utility-first CSS. Creating responsive, pixel-perfect designs that match any specification.",
      image: "/images/user-research.svg",
    },
    {
      title: "API Integration",
      description: "REST APIs, authentication systems (Auth0, multi-role auth), and seamless third-party service integrations.",
      image: "/images/motion-graphics.svg",
    },
  ]

  return (
    <section id="skills" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              Technical <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">expertise</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Core technologies and tools I use to build scalable, production-ready applications that users love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primarySkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px]">
                  <Image
                    src={skill.image || "/placeholder.svg"}
                    alt={skill.title}
                    width={382}
                    height={328}
                    className="w-full h-auto rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-8 pb-8 flex-1 flex flex-col">
                  <h3 className="text-[28px] leading-[40px] font-bold mb-3 text-[#0B0B0B]">{skill.title}</h3>
                  <p className="text-[18px] leading-[30px] font-medium text-[#393939]">{skill.description}</p>
                </div>
              </div>
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform min-h-[480px] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-[#0B0B0B] mb-4">Also experienced with</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "Cosmos SDK", "Solana", "AI/ML"].map((tech) => (
                    <span key={tech} className="bg-black text-white px-3 py-1.5 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">{"Let's collaborate"}</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8">
                Have a project in mind? I'd love to hear about it and explore how we can work together.
              </p>
              <a href="mailto:adeelatta2000@gmail.com" className="w-full max-w-[340px]">
                <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full h-[64px]">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

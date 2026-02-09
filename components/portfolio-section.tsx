import { ArrowRight, Github } from "lucide-react"
import Image from "next/image"
import Script from "next/script"

export function PortfolioSection() {
  const featuredProjects = [
    {
      title: "Mentalyc Web App",
      description:
        "Design system development, feature implementation, and performance optimization for a large-scale AI mental health platform serving 30,000+ active users.",
      tag: "AI / Healthcare",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#F5E6E0]",
      illustration: "/images/mentalyc-webapp.webp",
      link: "https://mentalyc.com",
      containImage: true,
    },
    {
      title: "Mentalyc Chrome Extension",
      description:
        "Browser extension enabling automated clinical note transfer to EHR systems via secure API integration, streamlining therapist workflows.",
      tag: "Browser Extension",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#FDF5F3]",
      illustration: "/images/mentalyc-extension.png",
      link: "https://chrome.google.com/webstore/detail/mentalyc/jhlkppjeaacmnbpdmlflkknfjfjkpfgj",
      containImage: true,
    },
  ]

  const otherProjects = [
    {
      title: "EthicalNode Wallet",
      description:
        "Chrome extension for a decentralized wallet where I worked as the Frontend Developer, enabling secure blockchain transactions directly in the browser.",
      tag: "Web3",
    },
    {
      title: "EthicalNode Platform",
      description: "Staking platform with 900+ users and $1M+ on-chain investment. Frontend debugging and maintenance.",
      tag: "Web3",
    },
    {
      title: "Personify AI",
      description: "Chrome extension providing AI-powered real-time messaging suggestions on WhatsApp Web and LinkedIn.",
      tag: "AI",
    },
    {
      title: "Urban Planner AI",
      description: "Streamlit app using NASA POWER climate data and GPT-4 for AI-driven urban planning insights.",
      tag: "AI",
    },
    {
      title: "Decentrai Platform",
      description: "Web platform integrating GPT-4, Llama, Claude, and DALL-E with scalable backend APIs.",
      tag: "AI",
    },
  ]

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <Script
          id="projects-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              [
                {
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  name: "Mentalyc Web App",
                  applicationCategory: "WebApplication",
                  operatingSystem: "Any",
                  url: "https://mentalyc.com",
                  description:
                    "AI-powered mental health web application where I contributed to the design system, feature implementation, and performance optimization for 30,000+ active users.",
                  author: {
                    "@type": "Person",
                    name: "Adeel Atta",
                    url: "https://adeelatta.dev",
                  },
                },
                {
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  name: "Mentalyc Chrome Extension",
                  applicationCategory: "BrowserApplication",
                  operatingSystem: "Chrome",
                  url: "https://chrome.google.com/webstore/detail/mentalyc/jhlkppjeaacmnbpdmlflkknfjfjkpfgj",
                  description:
                    "Chrome extension that automates clinical note transfer to EHR systems via secure API integration, streamlining therapist workflows.",
                  author: {
                    "@type": "Person",
                    name: "Adeel Atta",
                    url: "https://adeelatta.dev",
                  },
                },
                {
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  name: "Ethical Wallet Chrome Extension",
                  applicationCategory: "BrowserApplication",
                  operatingSystem: "Chrome",
                  url: "https://chromewebstore.google.com/detail/ethical-wallet/nfaepmamdapehcbedhejbjcpnlcldodi",
                  description:
                    "Chrome extension wallet for Ethical Wallet where I worked as the Frontend Developer, enabling secure blockchain transactions directly in the browser.",
                  author: {
                    "@type": "Person",
                    name: "Adeel Atta",
                    url: "https://adeelatta.dev",
                  },
                },
              ]
            ),
          }}
        />
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">projects</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Production applications and tools I've built across AI, Web3, and developer productivity.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-4xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-10 text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-7.5 font-medium">
                  {project.description}
                </p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                  >
                    {project.link.includes("chrome.google.com") ? "View on Chrome Web Store" : "View Production App"}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="flex items-center gap-2 font-semibold text-[#0B0B0B] text-sm md:text-base">
                    Production Application
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-62.5 md:min-h-125 flex items-center justify-center p-4`}>
                <Image
                  src={project.illustration || "/placeholder.svg"}
                  alt={`${project.title} - ${project.tag} project screenshot`}
                  fill
                  className={`transition-transform duration-500 ease-out group-hover:scale-105 ${
                    project.containImage ? "object-contain p-4" : "object-cover"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-3xl p-6 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <span className="inline-block bg-[#6366F1] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {project.tag}
                </span>
                <h4 className="text-xl font-bold mb-2 text-[#0B0B0B]">{project.title}</h4>
                <p className="text-[#393939] text-base leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/AdeelAtta"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

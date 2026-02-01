"use client"

import { Mail, User, Code, Briefcase, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const navLinks = [
    { href: "#about", label: "About", icon: User, color: "bg-blue-500 hover:bg-blue-600" },
    { href: "#skills", label: "Skills", icon: Code, color: "bg-pink-500 hover:bg-pink-600" },
    { href: "#portfolio", label: "Projects", icon: Briefcase, color: "bg-blue-500 hover:bg-blue-600" },
    { href: "#experience", label: "Experience", icon: FileText, color: "bg-pink-500 hover:bg-pink-600" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block container mx-auto px-4 pt-8 pb-4">
        <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-lg">A</span>
          </div>

          <div className="flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[18px] font-bold leading-5 hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="mailto:adeelatta2000@gmail.com">
            <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-12 shrink-0">
              <Mail className="w-10 h-10" strokeWidth={2.5} />
            </Button>
          </a>
        </nav>
      </div>

      {/* Mobile Sticky Sidebar */}
      <div className="md:hidden fixed right-4 top-5 z-40 flex flex-col items-end gap-3">
        {/* First 2 links - Horizontal */}
        <div className="flex gap-3">
          {navLinks.slice(0, 2).map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={link.href}
                className="group relative"
              >
                <div className={`${link.color} text-white p-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                {/* Tooltip on hover */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded whitespace-nowrap text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {link.label}
                </div>
              </a>
            )
          })}
        </div>

        {/* Remaining links - Vertical */}
        <div className="flex flex-col gap-3 w-fit ">
          {navLinks.slice(2).map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={link.href}
                className="group relative"
              >
                <div className={`${link.color} text-white p-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                {/* Tooltip on hover */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded whitespace-nowrap text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {link.label}
                </div>
              </a>
            )
          })}
        </div>

        {/* Contact Button */}
        <a href="mailto:adeelatta2000@gmail.com" className="group relative">
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full p-3 w-12 h-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
            <Mail className="w-6 h-6" strokeWidth={2.5} />
          </Button>
          {/* Tooltip on hover */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded whitespace-nowrap text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Contact
          </div>
        </a>
      </div>
    </>
  )
}

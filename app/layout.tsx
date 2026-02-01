import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

import "./globals.css"

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Adeel Atta - Frontend Engineer | React, Next.js, AI",
  description: "Frontend Engineer building scalable, AI-powered web applications. Expert in React, Next.js, and TypeScript with production experience serving 30,000+ users.",
  keywords: "frontend engineer, react developer, next.js, typescript, web development, ai, full stack",
  generator: "v0.app",
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://adeelatta.dev"),
  // canonical: "https://adeelatta.dev",
  authors: [{ name: "Adeel Atta", url: "https://adeelatta.dev" }],
  creator: "Adeel Atta",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adeelatta.dev",
    title: "Adeel Atta - Frontend Engineer",
    description: "Frontend Engineer building scalable, AI-powered web applications. Expert in React, Next.js, and TypeScript with production experience serving 30,000+ users.",
    siteName: "Adeel Atta Portfolio",
    images: [
      {
        url: "https://adeelatta.dev/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adeel Atta - Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeel Atta - Frontend Engineer",
    description: "Frontend Engineer building scalable, AI-powered web applications. Expert in React, Next.js, and TypeScript.",
    images: ["https://adeelatta.dev/images/og-image.png"],
    creator: "@adeelatta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adeel Atta",
    url: "https://adeelatta.dev",
    image: "https://adeelatta.dev/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
    description: "Frontend Engineer building scalable, AI-powered web applications. Expert in React, Next.js, and TypeScript with production experience serving 30,000+ users.",
    jobTitle: "Frontend Engineer",
    email: "adeelatta2000@gmail.com",
    sameAs: [
      "https://github.com/AdeelAtta",
      "https://www.linkedin.com/in/adeel-atta/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Web Development",
      "Frontend Engineering",
      "Design Systems",
      "API Integration",
    ],
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Adeel Atta",
    url: "https://adeelatta.dev",
    logo: "https://adeelatta.dev/images/logo.png",
    description: "Frontend Engineer and Web Developer",
    sameAs: [
      "https://github.com/AdeelAtta",
      "https://www.linkedin.com/in/adeel-atta/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business Development",
      email: "adeelatta2000@gmail.com",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://adeelatta.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://adeelatta.dev/#portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://adeelatta.dev/#about",
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          strategy="afterInteractive"
        />
      </head>
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}


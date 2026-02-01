export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adeel Atta",
    url: "https://adeelatta.dev",
    image: "https://adeelatta.dev/images/design-mode/Gemini_Generated_Image_wrhwklwrhwklwrhw.png",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

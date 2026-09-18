import React from "react";

export function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://anshadarsh.dev";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Ansh Adarsh",
    givenName: "Ansh",
    familyName: "Adarsh",
    url: baseUrl,
    jobTitle: "Software Development Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Euroasiann",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Lloyd Institute of Engineering & Technology",
    },
    knowsAbout: [
      "Software Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Python",
      "Java",
      "REST APIs",
      "Web Architecture",
    ],
    sameAs: [
      "https://github.com/AnshCoderRepo",
      "https://linkedin.com/in/ansh-adarsh2021",
      "https://leetcode.com/u/AnshCoderRepo/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Ansh Adarsh — Software Development Engineer Portfolio",
    description:
      "Engineering portfolio of Ansh Adarsh, showcasing production web applications, full-stack microservices, and interactive developer terminals.",
    author: {
      "@id": `${baseUrl}/#person`,
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

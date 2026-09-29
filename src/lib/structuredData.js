import { contact, site } from "@/content/pl";

const PERSON_ID = `${site.url}/#person`;

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: site.name,
        url: site.url,
        image: `${site.url}/author.jpg`,
        jobTitle: site.jobTitle,
        email: `mailto:${contact.email}`,
        sameAs: [contact.linkedin, contact.github, contact.gitlab],
        knowsAbout: site.keywords,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: site.serviceName,
        url: site.url,
        description: site.description,
        provider: { "@id": PERSON_ID },
        founder: { "@id": PERSON_ID },
        areaServed: { "@type": "Country", name: site.areaServed },
        email: contact.email,
        image: `${site.url}/opengraph-image`,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.shortTitle,
        inLanguage: "pl-PL",
        publisher: { "@id": PERSON_ID },
      },
    ],
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function projectSchema(project, url) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: project.name,
        url,
        description: project.summary,
        author: { "@id": PERSON_ID },
        keywords: project.stack.join(", "),
        inLanguage: "pl-PL",
        ...(project.image ? { image: `${site.url}${project.image}` } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.shortTitle, item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projekty",
            item: `${site.url}/#projekty`,
          },
          { "@type": "ListItem", position: 3, name: project.name, item: url },
        ],
      },
    ],
  };
}

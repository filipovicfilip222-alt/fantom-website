export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Fantom - Agencija za Izradu Sajtova",
    "description": "Profesionalna izrada sajta, pravljenje web sajtova, web dizajn, SEO optimizacija. Najbolja agencija za izradu sajtova u Srbiji.",
    "url": "https://fantom.systems",
    "logo": "https://fantom.systems/logo.png",
    "image": "https://fantom.systems/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RS",
      "addressLocality": "Srbija"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "RS"
    },
    "priceRange": "$$",
    "telephone": "+381-xx-xxx-xxxx",
    "email": "info@fantom.systems",
    "areaServed": {
      "@type": "Country",
      "name": "Srbija"
    },
    "serviceType": [
      "Izrada sajta",
      "Pravljenje sajtova",
      "Web dizajn",
      "SEO optimizacija",
      "Izrada web aplikacija",
      "E-commerce sajtovi",
      "Održavanje sajtova"
    ],
    "slogan": "Profesionalna izrada sajta koja donosi rezultate"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Izrada Web Sajta",
    "provider": {
      "@type": "Organization",
      "name": "Fantom",
      "url": "https://fantom.systems"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Srbija"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usluge Izrade Sajtova",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Izrada Web Sajtova",
            "description": "Profesionalno pravljenje modernih, brzih i responsive sajtova"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Sajtovi",
            "description": "Kreiranje online prodavnica i e-commerce rešenja"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimizacija",
            "description": "Optimizacija sajtova za pretraživače - prvi na Google-u"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Dizajn",
            "description": "Moderni, atraktivni dizajn web stranica"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Aplikacije",
            "description": "Razvoj custom web aplikacija i sistema"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Održavanje Sajtova",
            "description": "Redovno ažuriranje, tehnička podrška i održavanje web sajtova"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Početna",
        "item": "https://fantom.systems"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Usluge",
        "item": "https://fantom.systems/#capabilities"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Kontakt",
        "item": "https://fantom.systems/#contact"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fantom - Izrada Sajta",
    "url": "https://fantom.systems",
    "description": "Profesionalna izrada sajta i web dizajn. Pravljenje sajtova, SEO optimizacija, web aplikacije.",
    "inLanguage": "sr",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://fantom.systems/#search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Koliko košta izrada sajta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cena izrade sajta zavisi od složenosti projekta. Jednostavni prezentacioni sajt kreće od 300-500€, dok e-commerce sajtovi i web aplikacije mogu biti od 1000€ pa naviše. Kontaktirajte nas za besplatan predračun prilagođen vašim potrebama."
        }
      },
      {
        "@type": "Question",
        "name": "Koliko traje izrada web sajta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pravljenje standardnog prezentacionog sajta traje 7-14 dana. Za složenije projekte kao što su e-commerce sajtovi ili web aplikacije, vreme izrade može biti 3-6 nedelja. Uvek se držimo dogovorenih rokova."
        }
      },
      {
        "@type": "Question",
        "name": "Da li pravite sajtove prilagođene mobilnim telefonima?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apsolutno! Svi naši sajtovi su 100% responsive - savršeno izgledaju na svim uređajima: mobilnim telefonima, tabletima i desktop računarima. Ovo je obavezno za dobro SEO rangiranje na Google-u."
        }
      },
      {
        "@type": "Question",
        "name": "Da li je uključena SEO optimizacija?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da! Tehnička SEO optimizacija je uključena u svaki projekat. To uključuje brze performanse, meta tagove, strukturirane podatke, sitemap, robots.txt i mobile optimizaciju. Za naprednu SEO kampanju nudimo dodatne usluge."
        }
      },
      {
        "@type": "Question",
        "name": "Zašto izabrati Fantom za izradu sajta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fantom nudi profesionalnu izradu sajtova sa fokusom na rezultate: moderni dizajn koji privlači, brze performanse koje Google voli, SEO optimizacija za bolje rangiranje, pristupačne cene i brza realizacija. Vaš uspeh je naš cilj!"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}


import { useEffect } from "react";

export function SchemaMarkup() {
  useEffect(() => {
    const existingSchemas = document.querySelectorAll('script[data-schema]');
    existingSchemas.forEach(el => el.remove());
    const existingMeta = document.querySelectorAll('meta[data-dynamic]');
    existingMeta.forEach(el => el.remove());
    const existingCanonical = document.querySelector('link[data-dynamic]');
    existingCanonical?.remove();

    const dateModified = "2026-04-03";

    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BH Labs",
      "url": "https://www.bh-labs.com",
      "logo": "https://www.bh-labs.com/logo-dark.png",
      "description": "Miami-based biohacking and wellness company installing turnkey Recovery Pods in luxury residential buildings and HOA communities.",
      "telephone": "+1-954-870-5814",
      "email": "info@thebiohacklab.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Place",
        "name": "South Florida"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-954-870-5814",
        "contactType": "sales",
        "email": "info@thebiohacklab.com"
      },
      "sameAs": ["https://www.bh-labs.com"]
    };

    const product = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "BH Labs Recovery Pod for Luxury Residential",
      "description": "Turnkey wellness amenity for luxury residential buildings and HOA communities. Creates a new wellness fee revenue stream, supports perceived property value, and requires no dedicated staff.",
      "brand": { "@type": "Brand", "name": "BH Labs" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "45000",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "description": "Complete turnkey Recovery Pod installation with 1-year warranty and staff training"
      },
      "dateModified": dateModified
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "dateModified": dateModified,
      "mainEntity": [
        { q: "How much wellness fee revenue can a Recovery Pod generate?", a: "Revenue depends on unit count, fee structure, and adoption. Illustrative example: 150 units at $30/month with 70% participation generates approximately $3,000/month net." },
        { q: "What is the estimated payback period?", a: "Payback is illustrative and depends on fee structure and participation. Conservative modeled scenarios show 12-18 months." },
        { q: "How much space is actually required?", a: "Most installations require 400-800 square feet. Custom layout designed for your available amenity space." },
        { q: "Can residents use it without supervision?", a: "Yes. 30+ self-guided, research-backed protocols designed for safe, independent use." },
        { q: "How is access managed in a shared building?", a: "Managed through existing building access — key fobs, concierge, or scheduling software." },
        { q: "Does the property need dedicated wellness staff?", a: "No. Designed for self-guided use with existing building staff managing basic access." },
        { q: "How long does installation take?", a: "2-4 weeks from layout approval to operational launch with minimal resident disruption." }
      ].map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };

    const pageUrl = "https://www.bh-labs.com/residential";

    const webPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Luxury Residential Wellness Amenity Solution | BH Labs Recovery Pods",
      "url": pageUrl,
      "dateModified": dateModified,
      "publisher": {
        "@type": "Organization",
        "name": "BH Labs"
      }
    };

    [organization, product, faqSchema, webPage].forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = pageUrl;
    canonical.setAttribute("data-dynamic", "true");
    document.head.appendChild(canonical);

    const setMeta = (attr: string, key: string, content: string) => {
      const meta = document.createElement("meta");
      meta.setAttribute(attr, key);
      meta.setAttribute("content", content);
      meta.setAttribute("data-dynamic", "true");
      document.head.appendChild(meta);
    };

    document.title = "Luxury Residential Wellness Amenity Solution | BH Labs Recovery Pods";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Create a new wellness fee revenue stream for your luxury residential building. BH Labs installs turnkey Recovery Pods — a premium amenity that supports perceived property value with no dedicated staff required.");
    setMeta("property", "og:title", "Luxury Residential Wellness Amenity | BH Labs Recovery Pods");
    setMeta("property", "og:description", "Create a new wellness fee revenue stream. Turnkey Recovery Pod installation for luxury residential buildings and HOA communities.");
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:image", "https://www.bh-labs.com/opengraph.jpg");
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("name", "twitter:image", "https://www.bh-labs.com/opengraph.jpg");

    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
      document.querySelectorAll('meta[data-dynamic]').forEach(el => el.remove());
      document.querySelector('link[data-dynamic]')?.remove();
    };
  }, []);

  return null;
}

import { useEffect } from "react";

interface SchemaMarkupProps {
  page: "hotels";
}

export function SchemaMarkup({ page }: SchemaMarkupProps) {
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
      "description": "Miami-based biohacking and wellness company installing turnkey Recovery Pods in hotels and resorts.",
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
      "sameAs": [
        "https://www.bh-labs.com"
      ]
    };

    const product = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "BH Labs Recovery Pod for Hotels",
      "description": "Turnkey wellness pod for hotels featuring HBOT, red light therapy, infrared sauna, lymphatic drainage, and PEMF devices. Designed to generate $25K+/month in new wellness revenue with zero additional headcount.",
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
        { q: "What type of hotel is the best fit for a Recovery Pod?", a: "Recovery Pods work well in luxury hotels, boutique hotels, resorts, and wellness-oriented properties. The best fit is typically a property with 100+ rooms, an existing spa or wellness area, and guests who value premium amenities." },
        { q: "How much staff involvement is required day to day?", a: "Minimal. BH Labs trains and certifies your existing spa or hospitality staff to operate every modality. There's no need to hire dedicated wellness technicians." },
        { q: "What kind of space layout works best?", a: "Most installations require 400-800 square feet. Our in-house architect designs a custom pod layout for your available space." },
        { q: "How long does installation take?", a: "A typical installation takes 2-4 weeks from layout approval to operational launch. BH Labs manages the full process to minimize disruption." },
        { q: "Do you help with pricing strategy and guest packaging?", a: "Yes. BH Labs provides guidance on ADR surcharge strategy, a-la-carte session pricing, and guest wellness packaging." },
        { q: "What happens after installation?", a: "BH Labs provides a comprehensive 1-year warranty, ongoing technical support, and maintenance." },
        { q: "Is this best as a spa add-on or standalone offering?", a: "Both models work. BH Labs helps you evaluate the right approach based on your space, guest profile, and revenue goals." }
      ].map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };

    const pageUrl = "https://www.bh-labs.com/";

    const webPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Hotel Wellness Revenue Solution | BH Labs Recovery Pods",
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

    document.title = "Hotel Wellness Revenue Solution | BH Labs Recovery Pods — $25K+/Month";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Turn underused hotel space into $25K+/month in wellness revenue. BH Labs installs turnkey Recovery Pods — HBOT, red light therapy, infrared sauna, PEMF — with zero additional headcount. Under 2 month payback.");
    setMeta("property", "og:title", "Hotel Wellness Revenue Solution | BH Labs Recovery Pods");
    setMeta("property", "og:description", "Turn underused hotel space into $25K+/month in new wellness revenue. Turnkey Recovery Pod installation with zero additional headcount.");
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
  }, [page]);

  return null;
}

import { drinks, menuCategories } from "@/lib/menu";
import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Distillery",
    name: site.name,
    description:
      "Sussex County's first distillery in over 70 years. Everything is mashed, fermented, distilled and bottled on site.",
    url: "https://www.milkstreetdistillery.com/",
    telephone: "+1-973-948-0178",
    email: site.email,
    image: "https://www.milkstreetdistillery.com/media/place/column-still.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Milk Street, Building 1",
      addressLocality: "Branchville",
      addressRegion: "NJ",
      postalCode: "07826",
      addressCountry: "US",
    },
    sameAs: [site.instagram, site.facebook],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "16:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "13:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "13:00", closes: "18:00" },
    ],
    hasMenu: {
      "@type": "Menu",
      name: "Spring / Summer 2026 tasting room",
      description: "Spring / Summer 2026. Prices do not include tax.",
      hasMenuSection: menuCategories.map((category) => ({
        "@type": "MenuSection",
        name: category,
        hasMenuItem: drinks
          .filter((drink) => drink.category === category)
          .map((drink) => ({
            "@type": "MenuItem",
            name: drink.name,
            description: drink.description,
            offers: {
              "@type": "Offer",
              price: drink.price.replace(/[^0-9.]/g, ""),
              priceCurrency: "USD",
            },
          })),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

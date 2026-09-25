import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { homepageFaqs } from "@/lib/faq-data";
import { homeProductGraph } from "@/lib/product-schema";
import { canonicalUrl } from "@/lib/seo";

const homeUrl = canonicalUrl("/");

const faqEntities = homepageFaqs.map((faq) => ({
  "@type": "Question",
  name: faq.question,
  acceptedAnswer: {
    "@type": "Answer",
    text: faq.answer,
  },
}));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...homeProductGraph(),
    {
      "@type": "FAQPage",
      "@id": `${homeUrl}#faq`,
      url: homeUrl,
      mainEntity: faqEntities,
    },
  ],
};

export function JsonLd() {
  return <JsonLdScript data={jsonLd} />;
}

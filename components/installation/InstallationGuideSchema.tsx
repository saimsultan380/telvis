import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { installationFaqs } from "@/lib/installation-page-data";
import { buildBreadcrumbList, canonicalUrl, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

const title = "IPTV Installation Guide: Firestick, Smart TV & Android Setup";
const description =
  "Learn how to install IPTV on Firestick, Samsung, LG Smart TV, Android, iPhone, iPad and Roku with easy setup steps, IPTV player options and login tips.";

export function InstallationGuideSchema() {
  const faqEntities = installationFaqs.map((faq) => ({
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
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Installation Guide", path: routes.installation },
      ]),
      webPageSchema({
        path: routes.installation,
        name: title,
        description,
      }),
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl(routes.installation)}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { contactFaqs } from "@/lib/contact-page-data";
import { buildBreadcrumbList, canonicalUrl, webPageSchema } from "@/lib/seo";
import { routes, supportConfig } from "@/lib/site";

const title = "Contact Telvis IPTV UK | 24/7 Support & Free UK IPTV Trial";
const description =
  "Contact Telvis IPTV UK for 24/7 support, a free 24-hour IPTV trial, subscription enquiries, Firestick setup, Smart TV installation and account assistance.";

export function ContactSchema() {
  const faqEntities = contactFaqs.map((faq) => ({
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
        { name: "Contact Telvis", path: routes.contact },
      ]),
      webPageSchema({
        type: "ContactPage",
        path: routes.contact,
        name: title,
        description,
      }),
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl(routes.contact)}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export function ContactFinalCta() {
  return (
    <section
      className="telvis-section telvis-final-cta telvis-contact-final"
      aria-labelledby="contact-final-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="contact-final-heading"
              eyebrow="Still have questions"
              title={
                <>
                  Still Have Questions? Contact{" "}
                  <TitleAccent>Telvis Today</TitleAccent>
                </>
              }
              lead="Whether you need help with your IPTV UK subscription, want to request a free trial, have an installation question or need assistance with an existing account, the Telvis team is ready to help. Send us a message through WhatsApp or email and include a few details about your enquiry. We will guide you towards the relevant information or troubleshooting steps."
              align="center"
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <a
                href={supportConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="telvis-cta-primary"
              >
                Contact Telvis on WhatsApp
              </a>
              <Link href={routes.trial} className="telvis-cta-secondary">
                Explore the Free IPTV Trial
              </Link>
            </div>
          </CardRevealPart>

          <CardRevealPart as="p" className="telvis-section-note is-center">
            Get help with installation, login, account and technical questions.
            Test Telvis for 24 hours on your preferred supported device before
            choosing a plan.
          </CardRevealPart>

          <CardRevealPart as="p" className="telvis-section-note is-center">
            WhatsApp:{" "}
            <a
              href={supportConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {supportConfig.whatsapp}
            </a>
            {" · "}
            Email:{" "}
            <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

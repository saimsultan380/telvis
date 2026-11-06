import type { Metadata } from "next";
import Link from "next/link";
import {
  ResellerAudienceSection,
  ResellerChecklistSection,
  ResellerComparePackagesSection,
  ResellerCompareSection,
  ResellerCreditsSection,
  ResellerFaqSection,
  ResellerFeaturesSection,
  ResellerFinalCta,
  ResellerGrowthSection,
  ResellerHowItWorksSection,
  ResellerPackagesSection,
  ResellerPanelOverview,
  ResellerWhySection,
} from "@/components/reseller/ResellerPageSections";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import {
  CardReveal,
  CardRevealPart,
} from "@/components/ui/CardReveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { OrbitVisual } from "@/components/home/OrbitVisual";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import { resellerFaqs, resellerHeroHighlights } from "@/lib/reseller-page-data";
import {
  buildBreadcrumbList,
  canonicalUrl,
  pageMetadata,
  webPageSchema,
} from "@/lib/seo";
import { routes, supportConfig } from "@/lib/site";

const title = "IPTV Reseller UK | Become an IPTV Reseller with Telvis";
const description =
  "Become an IPTV reseller in the UK with Telvis. Explore reseller panel features, customer management, credit systems, subscription renewals and package options.";

export const metadata: Metadata = pageMetadata({
  path: routes.reseller,
  title,
  description,
  keywords: [
    "IPTV reseller UK",
    "IPTV reseller panel",
    "become IPTV reseller",
    "IPTV reseller credits",
    "Telvis reseller",
  ],
});

function ResellerSchema() {
  const faqEntities = resellerFaqs.map((faq) => ({
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
        { name: "IPTV Reseller UK", path: routes.reseller },
      ]),
      webPageSchema({
        path: routes.reseller,
        name: title,
        description,
      }),
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl(routes.reseller)}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export default function ResellerPage() {
  return (
    <>
      <ResellerSchema />
      <main>
        <PageHero
          eyebrow="IPTV Reseller UK"
          headingId="reseller-heading"
          titleLines={[
            <>
              IPTV Reseller UK | Become an{" "}
              <span className="telvis-h1-accent">IPTV Reseller</span>
            </>,
            <>with Telvis</>,
          ]}
          visual={
            <ScrollReveal
              delay={0.18}
              variant="media"
              className="telvis-visual-wrap"
            >
              <OrbitVisual />
            </ScrollReveal>
          }
        >
          <HeroReveal delay={0.22}>
            <div className="telvis-copy">
              <p className="telvis-hero-subhead">
                Start and Grow Your IPTV Reseller Business with Telvis
              </p>
              <p>
                Looking to become an IPTV reseller in the UK? Telvis provides a
                reseller programme designed to help you manage customer
                subscriptions, organise account activations and handle your
                reseller operations through a centralised IPTV reseller panel.
              </p>
              <p>
                With Telvis, you can explore reseller packages suited to
                different business requirements and get in touch with our team to
                understand the access process.
              </p>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.3} variant="cta">
            <div className="telvis-actions">
              <a
                href={`${supportConfig.whatsappUrl}?text=${encodeURIComponent(
                  "Hi Telvis, I would like to get IPTV reseller access.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="telvis-cta-primary"
              >
                Get IPTV Reseller Access
              </a>
              <Link href={routes.contact} className="telvis-cta-secondary">
                Contact the Telvis Team
              </Link>
            </div>
          </HeroReveal>
        </PageHero>

        <section
          className="telvis-section"
          aria-labelledby="reseller-highlights-heading"
        >
          <div className="telvis-section-inner">
            <SectionHeader
              id="reseller-highlights-heading"
              eyebrow="Reseller tools"
              title={
                <>
                  Organised Tools for Your IPTV Reseller{" "}
                  <TitleAccent>Business</TitleAccent>
                </>
              }
              lead="Whether you are starting your first online business, already selling digital services or looking to expand an existing customer base, our reseller options give you a structured way to manage your business. Use the available reseller tools to organise customer accounts, monitor credits, manage subscription renewals and keep track of your daily activities. Ready to become an IPTV reseller? Contact Telvis to discuss reseller access and available packages."
            />
            <div className="telvis-feature-grid is-two">
              {resellerHeroHighlights.map((item, index) => (
                <CardReveal
                  key={item.title}
                  as="article"
                  delay={staggerDelay(index)}
                  className="telvis-glass telvis-feature-tile"
                >
                  <CardRevealPart as="h3" className="telvis-info-title">
                    {item.title}
                  </CardRevealPart>
                  <CardRevealPart as="p" className="telvis-info-body">
                    {item.body}
                  </CardRevealPart>
                </CardReveal>
              ))}
            </div>
          </div>
        </section>

        <ResellerPanelOverview />
        <ResellerPackagesSection />
        <ResellerComparePackagesSection />
        <ResellerFeaturesSection />
        <ResellerHowItWorksSection />
        <ResellerCreditsSection />
        <ResellerWhySection />
        <ResellerAudienceSection />
        <ResellerCompareSection />
        <ResellerGrowthSection />
        <ResellerChecklistSection />
        <ResellerFaqSection />
        <ResellerFinalCta />
      </main>
    </>
  );
}

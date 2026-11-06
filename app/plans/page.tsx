import type { Metadata } from "next";
import Link from "next/link";
import { PlansSection } from "@/components/home/PlansSection";
import {
  PlansActivationSection,
  PlansDevicesSection,
  PlansFaqSection,
  PlansFinalCta,
  PlansHouseholdSection,
  PlansIncludedSection,
  PlansTrialSection,
  PlansValueSection,
  PlansWhySection,
} from "@/components/plans/PlansPageSections";
import { OrbitVisual } from "@/components/home/OrbitVisual";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TitleAccent } from "@/components/ui/SectionHeader";
import { plansPageFaqs } from "@/lib/plans-page-data";
import { homeProductGraph } from "@/lib/product-schema";
import {
  buildBreadcrumbList,
  canonicalUrl,
  pageMetadata,
  webPageSchema,
} from "@/lib/seo";
import { routes } from "@/lib/site";

const title = "Telvis IPTV UK Subscription: Buy IPTV UK & IPTV Activation";
const description =
  "Buy IPTV UK with Telvis. Compare cheap IPTV UK plans from £9.99, get a free 24-hour IPTV trial & enjoy setup guidance & 24/7 support. Get IPTV Subscription UK";

export const metadata: Metadata = pageMetadata({
  path: routes.plans,
  title,
  description,
  keywords: [
    "buy IPTV UK",
    "IPTV UK subscription",
    "cheap IPTV UK",
    "IPTV activation",
    "12 month IPTV subscription",
    "IPTV free trial",
    "family IPTV package",
    "IPTV deals UK",
  ],
});

function PlansSchema() {
  const faqEntities = plansPageFaqs.map((faq) => ({
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
        { name: "Plans", path: routes.plans },
      ]),
      webPageSchema({
        path: routes.plans,
        name: title,
        description,
      }),
      ...homeProductGraph(),
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl(routes.plans)}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export default function PlansPage() {
  return (
    <>
      <PlansSchema />
      <main>
        <PageHero
          eyebrow="Buy IPTV UK"
          headingId="plans-page-heading"
          titleLines={[
            <>
              Telvis IPTV UK Subscription | Buy{" "}
              <span className="telvis-h1-accent">IPTV UK</span>
            </>,
            <>
              | Get <span className="telvis-h1-accent">IPTV Activation</span>
            </>,
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
              <p>
                Looking for an IPTV UK subscription with clear pricing and
                flexible plans? Choose Telvis IPTV UK to explore live TV, movies
                and series on supported devices. Start with a free 24-hour IPTV
                trial, check the service on your own device, and select a plan
                from just £9.99.
              </p>
              <p>
                Whether you need a monthly IPTV subscription or a 12-month IPTV
                subscription, you can compare all four options before ordering.
              </p>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.3} variant="cta">
            <div className="telvis-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                Start Your Free IPTV Trial
              </Link>
              <Link href="#plans" className="telvis-cta-secondary">
                View IPTV Subscription Plans
              </Link>
            </div>
          </HeroReveal>
        </PageHero>

        <PlansSection
          eyebrow="Subscription plans"
          title={
            <>
              Choose Your <TitleAccent>IPTV UK</TitleAccent> Subscription Plan
            </>
          }
          lead="Select a UK IPTV subscription according to your viewing needs and budget. Every plan includes the same listed catalogue, access options, and support. The main difference is the subscription duration and total price. Choose a monthly IPTV subscription if you prefer a shorter commitment. If you have tested the service and want a lower average monthly cost, consider the annual IPTV subscription."
          afterLead="Get monthly IPTV subscriptions, 12-month or annual IPTV subscriptions, and also 3-month & 6-month IPTV plans at discounted prices."
          note="Every plan includes the same listed catalogue, access options and support. Confirm connection allowance and terms before ordering."
          showCompareLink={false}
          primaryCtaHref={routes.trial}
          primaryCtaLabel="Start a 24-Hour Free IPTV Trial"
          secondaryCtaHref="#plans"
          secondaryCtaLabel="Compare IPTV Plans"
        />

        <PlansValueSection />
        <PlansTrialSection />
        <PlansIncludedSection />
        <PlansWhySection />
        <PlansActivationSection />
        <PlansDevicesSection />
        <PlansHouseholdSection />
        <PlansFaqSection />
        <PlansFinalCta />
      </main>
    </>
  );
}

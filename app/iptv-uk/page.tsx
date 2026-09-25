import type { Metadata } from "next";
import Link from "next/link";
import { BlogSpotlightSection } from "@/components/blog/BlogSpotlightSection";
import { CatalogueSection } from "@/components/home/CatalogueSection";
import { DevicesSection } from "@/components/home/DevicesSection";
import { PayTvCompareSection } from "@/components/home/PayTvCompareSection";
import { PlansSection } from "@/components/home/PlansSection";
import { StatsBand } from "@/components/home/StatsBand";
import { StepsSection } from "@/components/home/StepsSection";
import { FaqList } from "@/components/faq/FaqList";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { iptvUkFaqs } from "@/lib/faq-data";
import { buildBreadcrumbList, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes, siteConfig, supportConfig } from "@/lib/site";

const path = routes.iptvUk;
const title = "Telvis IPTV UK | Plans, Free Trial and Device Setup";
const description =
  "Telvis IPTV UK for live and on-demand viewing on Firestick, Smart TV and mobile. 20,000+ listed channels, 24-hour trial, plans from £9.99 and UK support.";

export const metadata: Metadata = pageMetadata({
  path,
  title,
  description,
  keywords: [
    "Telvis IPTV UK",
    "IPTV UK subscription",
    "IPTV UK free trial",
    "IPTV Firestick UK",
    "best IPTV UK",
  ],
});

function IptvUkSchema() {
  const faqEntities = iptvUkFaqs.map((faq) => ({
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
        { name: "Telvis IPTV UK", path },
      ]),
      webPageSchema({
        path,
        name: title,
        description,
      }),
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url.replace(/\/$/, "")}${path}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export default function IptvUkPage() {
  return (
    <>
      <IptvUkSchema />
      <main>
        <PageHero
          eyebrow="Telvis IPTV UK"
          headingId="iptv-uk-heading"
          titleLines={[
            <>
              <span className="telvis-h1-accent">Telvis IPTV UK</span> for Live
            </>,
            <>TV, Sport Categories and On-Demand</>,
          ]}
        >
          <HeroReveal delay={0.22}>
            <div className="telvis-copy">
              <p>
                Telvis is a UK-focused IPTV subscription you can test on your own
                Firestick, Smart TV or phone before you pay. Browse listed live and
                on-demand categories, then choose a one, three, six or twelve-month
                plan if the trial works on your connection.
              </p>
              <p>
                Plan prices, device guides and refund terms are published on this site
                so you can decide with fewer surprises before you pay.
              </p>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.3} variant="cta">
            <div className="telvis-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                Start Free 24-Hour Trial
              </Link>
              <a
                href={supportConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="telvis-cta-secondary"
              >
                WhatsApp Support
              </a>
            </div>
          </HeroReveal>
        </PageHero>

        <StatsBand />

        <section className="telvis-section" aria-labelledby="iptv-uk-why-heading">
          <div className="telvis-section-inner telvis-iptv-uk-intro">
            <SectionHeader
              id="iptv-uk-why-heading"
              eyebrow="Why Telvis"
              title={
                <>
                  Built to Compete on{" "}
                  <TitleAccent>Clarity</TitleAccent>, Not Hype
                </>
              }
              lead="Many UK IPTV sites promise huge channel counts and instant 4K. Telvis keeps the offer honest: test first, read the guides, confirm categories during the trial, then pay for the plan length that suits you."
            />
            <ul className="telvis-check-list telvis-iptv-uk-points">
              <li>Lower entry price from £9.99 versus many UK competitors starting near £15–£20</li>
              <li>Dedicated pages for Firestick, Smart TV, Android, Apple and more</li>
              <li>WhatsApp and email support, plus a published seven-day refund policy</li>
              <li>VPN included on active plans for customers who want it</li>
            </ul>
            <div className="telvis-inline-actions is-row">
              <Link href={routes.about} className="telvis-cta-outline">
                About Telvis
              </Link>
              <Link href={routes.reviews} className="telvis-cta-outline">
                Read Customer Reviews
              </Link>
            </div>
          </div>
        </section>

        <PlansSection
          showCompareLink={false}
          title={
            <>
              Telvis <TitleAccent>IPTV UK</TitleAccent> Plan Prices
            </>
          }
        />

        <CatalogueSection />
        <DevicesSection />
        <StepsSection />
        <PayTvCompareSection />

        <BlogSpotlightSection
          id="iptv-uk-blog-heading"
          eyebrow="Buyer guides"
          lead="Deep dives on trials, Firestick setup and UK pay TV costs — each article links back to Telvis trials and plans."
        />

        <section
          id="faq"
          className="telvis-section telvis-section-faq"
          aria-labelledby="iptv-uk-faq-heading"
        >
          <div className="telvis-section-inner telvis-faq-layout">
            <div className="telvis-faq-intro">
              <SectionHeader
                id="iptv-uk-faq-heading"
                eyebrow="FAQ"
                title={
                  <>
                    Telvis IPTV UK —{" "}
                    <TitleAccent>Frequently Asked Questions</TitleAccent>
                  </>
                }
                lead="Answers to the questions UK buyers ask before they request a trial or choose a plan."
              />
            </div>
            <FaqList items={iptvUkFaqs} />
          </div>
        </section>

        <section className="telvis-section telvis-final-cta" aria-labelledby="iptv-uk-final-heading">
          <div className="telvis-section-inner">
            <div className="telvis-glass telvis-final-panel">
              <h2 id="iptv-uk-final-heading" className="telvis-guide-panel-title is-center">
                Ready to Test Telvis IPTV UK?
              </h2>
              <p className="telvis-section-lead is-center">
                Start with the 24-hour trial on your own device. If it works for you,
                pick a plan and keep the same login.
              </p>
              <div className="telvis-actions telvis-final-actions">
                <Link href={routes.trial} className="telvis-cta-primary">
                  Start Your 24-Hour Trial
                </Link>
                <Link href={routes.contact} className="telvis-cta-outline">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

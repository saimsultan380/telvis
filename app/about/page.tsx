import type { Metadata } from "next";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { PolicyStack } from "@/components/legal/PolicyStack";
import { buildBreadcrumbList, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes, supportConfig } from "@/lib/site";

const title = "About Telvis | IPTV Subscriptions and UK Support";
const description =
  "Telvis is a UK-focused IPTV subscription service with a 24-hour trial, plans from £9.99, device setup guides and 24/7 email and WhatsApp support.";

export const metadata: Metadata = pageMetadata({
  path: routes.about,
  title,
  description,
  keywords: ["About Telvis", "Telvis IPTV", "Telvis support"],
});

const aboutSections = [
  {
    title: "What Telvis provides",
    body: [
      "Telvis supplies a subscription login for live and on-demand listings on supported internet-connected devices. After a trial or paid order, you receive the account details and setup guidance needed for the dedicated app or a compatible player.",
      "Listed catalogue totals can change. Picture quality, Catch-Up, EPG and individual sources vary by device, player and home connection. The 24-hour trial is the way to check the service on the screen you actually use.",
    ],
  },
  {
    title: "How customers start",
    body: [
      "Most customers request a free 24-hour trial, follow the Installation Guide for their device, then choose a one, three, six or twelve-month plan if the trial works for them.",
    ],
    list: [
      "Request a trial by WhatsApp, email or the contact form",
      "Install the recommended app for your device",
      "Test live, movie and series categories on your home internet",
      "Choose a plan only after the trial answers your questions",
    ],
  },
  {
    title: "Support",
    body: [
      `Support is available 24 hours a day at ${supportConfig.email} and ${supportConfig.whatsapp}. We help with trials, plans, installation, login problems, EPG refreshes and eligible refund requests.`,
      "Response times can vary when many customers write at once. Include your device, app and a short description in the first message.",
    ],
  },
  {
    title: "Lawful use",
    body: [
      "Telvis is intended for personal, lawful use only. Customers must follow applicable law and use only content they are legally entitled to access. IPTV is a delivery method. Whether a service is lawful depends on the rights held for the content it distributes.",
    ],
  },
] as const;

function AboutSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "About Telvis", path: routes.about },
      ]),
      webPageSchema({
        type: "AboutPage",
        path: routes.about,
        name: title,
        description,
      }),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export default function AboutPage() {
  return (
    <>
      <AboutSchema />
      <main>
        <PageHero
          eyebrow="About Telvis"
          headingId="about-heading"
          titleLines={[
            <>
              A Clear <span className="telvis-h1-accent">Telvis</span> Account
            </>,
            <>Before You Pay</>,
          ]}
        >
          <HeroReveal delay={0.22}>
            <div className="telvis-copy">
              <p>
                Telvis is built for UK viewers who want to test a subscription on
                their own Firestick, Smart TV or phone before choosing a paid plan.
              </p>
              <p>
                This page explains who we are, what you receive, how support works
                and where to read the refund, privacy and terms pages.
              </p>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.3} variant="cta">
            <div className="telvis-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                Start Your 24-Hour Trial
              </Link>
              <Link href={routes.plans} className="telvis-cta-secondary">
                View Plans from £9.99
              </Link>
            </div>
          </HeroReveal>
        </PageHero>

        <section className="telvis-section" aria-labelledby="about-facts-heading">
          <div className="telvis-section-inner">
            <SectionHeader
              id="about-facts-heading"
              eyebrow="At a glance"
              title={
                <>
                  Useful <TitleAccent>Facts</TitleAccent> Before You Order
                </>
              }
            />
            <div className="telvis-guide-device-grid">
              <CardReveal className="telvis-glass telvis-panel">
                <CardRevealPart as="h2" className="telvis-panel-title">
                  Website
                </CardRevealPart>
                <CardRevealPart as="p" className="telvis-info-body">
                  <Link href={routes.home}>telvis.uk</Link>
                </CardRevealPart>
              </CardReveal>
              <CardReveal className="telvis-glass telvis-panel" delay={0.05}>
                <CardRevealPart as="h2" className="telvis-panel-title">
                  Support
                </CardRevealPart>
                <CardRevealPart as="p" className="telvis-info-body">
                  {supportConfig.email}
                  <br />
                  {supportConfig.whatsapp}
                </CardRevealPart>
              </CardReveal>
              <CardReveal className="telvis-glass telvis-panel" delay={0.08}>
                <CardRevealPart as="h2" className="telvis-panel-title">
                  Trial and plans
                </CardRevealPart>
                <CardRevealPart as="p" className="telvis-info-body">
                  24-hour trial, then paid plans from £9.99 with a seven-day
                  refund on eligible orders.
                </CardRevealPart>
              </CardReveal>
            </div>
          </div>
        </section>

        <PolicyStack
          headingId="about-details-heading"
          eyebrow="Company details"
          title={
            <>
              How <TitleAccent>Telvis</TitleAccent> Works
            </>
          }
          lead="Read these points before you request a trial or pay for a plan. The refund, privacy and terms pages sit in the footer of every page."
          sections={[...aboutSections]}
        />
      </main>
    </>
  );
}

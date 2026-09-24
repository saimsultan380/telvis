import type { Metadata } from "next";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { PolicyStack, PolicyTitle } from "@/components/legal/PolicyStack";
import { buildBreadcrumbList, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

const title = "Telvis Terms of Use";
const description =
  "Terms for using Telvis, including the 24-hour trial, paid plans, device setup, lawful use, and the seven-day refund guarantee.";

export const metadata: Metadata = pageMetadata({
  path: routes.terms,
  title,
  description,
  keywords: ["Telvis terms", "Telvis terms of use"],
});

const sections = [
  {
    title: "The service",
    body: [
      "Telvis provides digital access details for a live and on-demand catalogue on compatible devices. After a trial or paid order you receive the username, password and server information needed for the dedicated app or a compatible player.",
      "Catalogue totals, EPG, Catch-Up and picture quality can change. No listing is guaranteed on every device or home connection.",
    ],
  },
  {
    title: "Free trial",
    body: [
      "The 24-hour trial is provided at no charge so you can test compatibility on your own device and internet connection. The trial is not a paid purchase and is not refunded. A trial may be refused or limited if it is requested repeatedly or used in a way that disrupts the service.",
    ],
  },
  {
    title: "Paid plans",
    body: [
      "Paid plans are sold as one, three, six or twelve-month subscriptions. The price shown at checkout is the price you pay for that term. Confirm the number of screens that can play at once before you pay.",
      "Some third-party players charge their own activation or licence fee. That fee is separate from the Telvis subscription unless checkout clearly says it is included.",
    ],
  },
  {
    title: "Lawful use",
    body: [
      "You must use Telvis only for personal, lawful purposes and only with content you are legally entitled to access. You must not share, resell or publish your login, portal address or playlist. Telvis may suspend an account that is shared beyond the purchased screen allowance or used in a way that breaks these terms or applicable law.",
    ],
  },
  {
    title: "Refunds and consumer rights",
    body: [
      "Eligible paid plans include a seven-day refund guarantee. The Refund Policy explains how to request a refund and what information support needs. That policy does not affect your statutory rights under UK consumer law.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update these terms when the service, prices or legal requirements change. The current version will be published on this page. Continued use of the service after an update means you accept the revised terms.",
    ],
  },
] as const;

function TermsSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Terms of Use", path: routes.terms },
      ]),
      webPageSchema({
        path: routes.terms,
        name: title,
        description,
      }),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export default function TermsPage() {
  return (
    <>
      <TermsSchema />
      <main>
        <PageHero
          eyebrow="Legal"
          headingId="terms-heading"
          titleLines={[
            <>
              Telvis <span className="telvis-h1-accent">Terms of Use</span>
            </>,
          ]}
        >
          <HeroReveal delay={0.22}>
            <div className="telvis-copy">
              <p>
                These terms apply when you request a Telvis trial, buy a plan or
                use telvis.uk. Read them with the Refund Policy and Privacy
                Policy before you order.
              </p>
            </div>
          </HeroReveal>
        </PageHero>

        <PolicyStack
          headingId="terms-details-heading"
          eyebrow="Using Telvis"
          title={
            <>
              Rules for the <PolicyTitle>Trial and Paid Plans</PolicyTitle>
            </>
          }
          lead="Use the trial first where possible. Paid plans, screen limits and refunds are confirmed before or at checkout."
          sections={[...sections]}
        />
      </main>
    </>
  );
}

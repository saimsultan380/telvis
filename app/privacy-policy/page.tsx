import type { Metadata } from "next";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { PolicyStack, PolicyTitle } from "@/components/legal/PolicyStack";
import { buildBreadcrumbList, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes, supportConfig } from "@/lib/site";

const title = "Telvis Privacy Policy";
const description =
  "How Telvis collects and uses contact details from trial requests, support messages and the website. Includes WhatsApp, email and your UK data rights.";

export const metadata: Metadata = pageMetadata({
  path: routes.privacy,
  title,
  description,
  keywords: ["Telvis privacy policy", "Telvis data protection"],
});

const sections = [
  {
    title: "Who this policy covers",
    body: [
      "This policy explains how Telvis uses personal information you send when you request a trial, ask for support, or use telvis.uk. It is written for customers and visitors in the United Kingdom.",
      `Questions about this policy can be sent to ${supportConfig.email}.`,
    ],
  },
  {
    title: "Information you give us",
    body: [
      "The contact form and WhatsApp or email messages may include your name, email address, WhatsApp number, device and app, order reference, and the message you write. We use that information to reply, issue a trial or account help, and review eligible refund requests.",
      "The website form opens your email app and sends the message to Telvis support. We do not run a public customer login on this website.",
    ],
  },
  {
    title: "WhatsApp and other services",
    body: [
      "If you contact us on WhatsApp, Meta processes that conversation under its own terms. Email providers process messages sent to or from support@telvis.uk. The website is hosted on Vercel, which may process technical server logs such as IP address, browser type and requested URL so the site can stay online.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "The site needs basic technical cookies or similar storage so pages can load. We do not use the contact form to subscribe you to a marketing list. If a future analytics or advertising tool is added, this page will be updated first.",
    ],
  },
  {
    title: "How long we keep information",
    body: [
      "Support and order messages are kept for as long as needed to provide the service, handle a refund, or meet a legal record-keeping duty. You can ask us to update or delete information that is no longer required.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Under UK data protection law you can ask for a copy of the personal information we hold, ask us to correct it, or ask us to delete it where we have no lawful reason to keep it. You can also complain to the Information Commissioner’s Office if you are unhappy with how your information has been handled.",
    ],
  },
] as const;

function PrivacySchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: routes.privacy },
      ]),
      webPageSchema({
        path: routes.privacy,
        name: title,
        description,
      }),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacySchema />
      <main>
        <PageHero
          eyebrow="Legal"
          headingId="privacy-heading"
          titleLines={[
            <>
              Telvis <span className="telvis-h1-accent">Privacy Policy</span>
            </>,
          ]}
        >
          <HeroReveal delay={0.22}>
            <div className="telvis-copy">
              <p>
                This page explains what information Telvis receives when you use
                the website or contact support, and how that information is used.
              </p>
            </div>
          </HeroReveal>
        </PageHero>

        <PolicyStack
          headingId="privacy-details-heading"
          eyebrow="Data protection"
          title={
            <>
              How We Use <PolicyTitle>Your Information</PolicyTitle>
            </>
          }
          lead="We only ask for the details needed to send a trial, answer a support question or review an order."
          sections={[...sections]}
        />
      </main>
    </>
  );
}

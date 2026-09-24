import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildBreadcrumbList, webPageSchema } from "@/lib/seo";
import { routes, supportConfig } from "@/lib/site";

export function InstallationGuideSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Installation Guide", path: routes.installation },
      ]),
      webPageSchema({
        path: routes.installation,
        name: "IPTV Installation Guide UK | Firestick, Smart TV, Phone | Telvis",
        description:
          "Choose your device and open a dedicated Telvis setup page for Firestick, Smart TV, Android, Apple, Windows or Kodi. Each guide has its own steps.",
      }),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export function InstallationGuideSupport() {
  return (
    <section
      className="telvis-section telvis-guide-support"
      aria-labelledby="installation-support-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-guide-support-card">
          <CardRevealPart as="h2" id="installation-support-heading" className="telvis-guide-panel-title">
            Still Need Help?
          </CardRevealPart>
          <CardRevealPart as="p">
            Support is available 24 hours a day for installation and account
            troubleshooting.
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-guide-support-links">
              <a href={supportConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp support
              </a>
              <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>
            </div>
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-actions telvis-guide-support-cta">
              <Link href={routes.contact} className="telvis-cta-primary">
                Contact Installation Support
              </Link>
            </div>
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-section-note">
            <Link href={routes.plans}>Compare Telvis plans</Link>
            {" • "}
            <Link href={routes.reviews}>Read customer reviews</Link>
            {" • "}
            <Link href={routes.contact}>Contact support</Link>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { supportConfig } from "@/lib/site";

export function ContactOptions() {
  return (
    <section
      className="telvis-section telvis-contact-options"
      aria-labelledby="contact-options-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="contact-options-heading"
          eyebrow="Get in touch"
          title={
            <>
              Contact Telvis Through WhatsApp or{" "}
              <TitleAccent>Email</TitleAccent>
            </>
          }
          lead="Choose the contact method that suits your question. WhatsApp is useful for quick messages and setup screenshots, while email is suitable for billing enquiries and issues that need a more detailed explanation."
        />

        <div className="telvis-contact-grid">
          <CardReveal as="article" className="telvis-glass telvis-contact-card">
            <CardRevealPart as="h3" className="telvis-info-title">
              WhatsApp Support
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-contact-detail">
              <a
                href={supportConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {supportConfig.whatsapp}
              </a>
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Send a message about your free trial, IPTV installation, login
              details or streaming problem. You can also share relevant
              screenshots to help explain an issue.
            </CardRevealPart>
            <CardRevealPart>
              <a
                href={supportConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="telvis-cta-primary telvis-contact-cta"
              >
                Message Telvis on WhatsApp
              </a>
            </CardRevealPart>
          </CardReveal>

          <CardReveal
            delay={0.08}
            as="article"
            className="telvis-glass telvis-contact-card"
          >
            <CardRevealPart as="h3" className="telvis-info-title">
              Email Support
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-contact-detail">
              <a href={`mailto:${supportConfig.email}`}>
                {supportConfig.email}
              </a>
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Contact us about subscriptions, payments, refund requests, account
              questions or technical problems that need a longer explanation.
            </CardRevealPart>
            <CardRevealPart>
              <a
                href={`mailto:${supportConfig.email}`}
                className="telvis-cta-outline telvis-contact-cta"
              >
                Email Telvis Support
              </a>
            </CardRevealPart>
          </CardReveal>
        </div>

        <p className="telvis-section-note">
          Support availability: Telvis support is available 24 hours a day
          through WhatsApp and email. Response times may vary during busy
          periods or when an issue requires further investigation.
        </p>
      </div>
    </section>
  );
}

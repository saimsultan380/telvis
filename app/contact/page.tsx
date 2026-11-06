import type { Metadata } from "next";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import {
  ContactFeedbackSection,
  ContactHelpTopicsSection,
  ContactIncludeInfoSection,
  ContactInstallHelpSection,
  ContactTrialChecksSection,
  ContactTrialSection,
  ContactTroubleshootingSection,
} from "@/components/contact/ContactPageSections";
import { ContactOptions } from "@/components/contact/ContactOptions";
import {
  ContactFinalCta,
  ContactSchema,
} from "@/components/contact/ContactSchema";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const title = "Contact Telvis IPTV UK | 24/7 Support & Free UK IPTV Trial";
const description =
  "Contact Telvis IPTV UK for 24/7 support, a free 24-hour IPTV trial, subscription enquiries, Firestick setup, Smart TV installation and account assistance.";

export const metadata: Metadata = pageMetadata({
  path: routes.contact,
  title,
  description,
  keywords: [
    "contact Telvis",
    "Telvis support",
    "IPTV UK support",
    "IPTV free trial UK",
    "Firestick IPTV help",
  ],
});

export default function ContactPage() {
  return (
    <>
      <ContactSchema />
      <main>
        <ContactHero />
        <ContactHelpTopicsSection />
        <ContactOptions />
        <ContactTrialSection />
        <ContactTrialChecksSection />
        <ContactInstallHelpSection />
        <ContactTroubleshootingSection />
        <ContactIncludeInfoSection />
        <ContactForm />
        <ContactFaq />
        <ContactFeedbackSection />
        <ContactFinalCta />
      </main>
    </>
  );
}

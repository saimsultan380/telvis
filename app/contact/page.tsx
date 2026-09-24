import type { Metadata } from "next";
import { ContactFaq } from "@/components/contact/ContactFaq";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactTopicSections } from "@/components/contact/ContactTopicSections";
import { ContactOptions } from "@/components/contact/ContactOptions";
import {
  ContactFinalCta,
  ContactSchema,
} from "@/components/contact/ContactSchema";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: routes.contact,
  title: "Contact Telvis Support | Trial, Setup and Account Help",
  description:
    "Contact Telvis by email or WhatsApp for a free trial, plan advice, installation help or account support. Help is available 24 hours a day.",
  keywords: [
    "contact Telvis",
    "Telvis support",
    "IPTV installation help",
  ],
});

export default function ContactPage() {
  return (
    <>
      <ContactSchema />
      <main>
        <ContactHero />
        <ContactOptions />
        <ContactTopicSections />
        <ContactForm />
        <ContactFaq />
        <ContactFinalCta />
      </main>
    </>
  );
}

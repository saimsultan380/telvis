import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactOptions } from "@/components/contact/ContactOptions";
import { TrialChecklist, TrialHero } from "@/components/trial/TrialHero";
import { TrialSchema } from "@/components/trial/TrialSchema";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: routes.trial,
  title: "24-Hour IPTV Free Trial UK | Telvis",
  description:
    "Request a free 24-hour Telvis trial on your Firestick, Smart TV or phone. No card needed. Test picture, channels and setup before you pay.",
  keywords: [
    "IPTV UK free trial",
    "24 hour IPTV trial",
    "Telvis free trial",
  ],
});

export default function FreeTrialPage() {
  return (
    <>
      <TrialSchema />
      <main>
        <TrialHero />
        <TrialChecklist />
        <ContactOptions />
        <ContactForm />
      </main>
    </>
  );
}

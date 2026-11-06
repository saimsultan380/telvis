import type { Metadata } from "next";
import { InstallationGuideBefore } from "@/components/installation/InstallationGuideBefore";
import { InstallationGuideHero } from "@/components/installation/InstallationGuideHero";
import {
  InstallationFaqSection,
  InstallationFinalCta,
  InstallationPlatformsSection,
  InstallationPlayersSection,
  InstallationProblemsSection,
  InstallationTipsSection,
  InstallationVpnSection,
} from "@/components/installation/InstallationPageSections";
import { InstallationGuideSchema } from "@/components/installation/InstallationGuideSchema";
import { InstallationGuideTabs } from "@/components/installation/InstallationGuideTabs";
import {
  InstallationGuideEpg,
  InstallationGuideXtream,
} from "@/components/installation/InstallationGuideXtream";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

const title = "IPTV Installation Guide: Firestick, Smart TV & Android Setup";
const description =
  "Learn how to install IPTV on Firestick, Samsung, LG Smart TV, Android, iPhone, iPad and Roku with easy setup steps, IPTV player options and login tips.";

export const metadata: Metadata = pageMetadata({
  path: routes.installation,
  title,
  description,
  keywords: [
    "IPTV installation guide",
    "install IPTV on Firestick",
    "IPTV Smart TV setup",
    "IPTV Android setup",
    "IPTV Smarters Pro",
    "TiviMate IPTV",
    "IPTV EPG guide",
  ],
  ogType: "article",
});

export default function InstallationGuidePage() {
  return (
    <>
      <InstallationGuideSchema />
      <main>
        <InstallationGuideHero />
        <InstallationPlatformsSection />
        <InstallationGuideBefore />
        <InstallationPlayersSection />
        <InstallationGuideXtream />

        <section
          id="device-setup"
          className="telvis-section telvis-guide-section telvis-guide-devices-section"
          aria-labelledby="guide-devices-heading"
        >
          <div className="telvis-section-inner">
            <SectionHeader
              id="guide-devices-heading"
              eyebrow="Device guides"
              title={
                <>
                  Explore <TitleAccent>Device Guides</TitleAccent> and Setup Steps
                </>
              }
              lead="Open the guide that matches your device. Follow one method at a time with your Telvis login or playlist details nearby."
            />
            <InstallationGuideTabs />
          </div>
        </section>

        <InstallationGuideEpg />
        <InstallationVpnSection />
        <InstallationProblemsSection />
        <InstallationTipsSection />
        <InstallationFaqSection />
        <InstallationFinalCta />
      </main>
    </>
  );
}

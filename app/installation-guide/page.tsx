import type { Metadata } from "next";
import { BlogRelatedReading } from "@/components/blog/BlogRelatedReading";
import { InstallationGuideBefore } from "@/components/installation/InstallationGuideBefore";
import { blogSlugs } from "@/lib/blog-posts";
import { InstallationGuideHero } from "@/components/installation/InstallationGuideHero";
import {
  InstallationGuideSchema,
  InstallationGuideSupport,
} from "@/components/installation/InstallationGuideSchema";
import { InstallationGuideTabs } from "@/components/installation/InstallationGuideTabs";
import { InstallationGuideTroubleshooting } from "@/components/installation/InstallationGuideTroubleshooting";
import {
  InstallationGuideEpg,
  InstallationGuideXtream,
} from "@/components/installation/InstallationGuideXtream";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: routes.installation,
  title: "IPTV Installation Guide UK | Firestick, Smart TV, Phone | Telvis",
  description:
    "Set up Telvis on Firestick, Smart TV, Android, Apple, Windows and more. Device steps, Xtream Codes tips and troubleshooting on one Installation Guide page.",
  keywords: [
    "IPTV installation guide UK",
    "Telvis setup",
    "IPTV device setup",
  ],
  ogType: "article",
});

export default function InstallationGuidePage() {
  return (
    <>
      <InstallationGuideSchema />
      <main>
        <InstallationGuideHero />
        <InstallationGuideBefore />

        <section
          id="device-setup"
          className="telvis-section telvis-guide-section telvis-guide-devices-section"
          aria-labelledby="guide-devices-heading"
        >
          <div className="telvis-section-inner">
            <SectionHeader
              id="guide-devices-heading"
              eyebrow="Device setup"
              title={
                <>
                  Choose the <TitleAccent>Device</TitleAccent> That Matches Your
                  Screen
                </>
              }
              lead="Expand your device below for setup steps. Follow one method at a time with your welcome message nearby, then use the Xtream Codes and troubleshooting sections on this page if needed."
            />
            <InstallationGuideTabs />
          </div>
        </section>

        <InstallationGuideXtream />
        <InstallationGuideEpg />
        <InstallationGuideTroubleshooting />
        <BlogRelatedReading
          id="guide-related-reading"
          heading="Setup articles"
          lead="Longer blog guides that complement the device steps on this page."
          slugs={[blogSlugs.firestick, blogSlugs.trial]}
        />
        <InstallationGuideSupport />
      </main>
    </>
  );
}

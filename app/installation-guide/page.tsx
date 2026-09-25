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
    "Choose your device and open a dedicated Telvis setup page for Firestick, Smart TV, Android, Apple, Windows or Kodi. Each guide has its own steps.",
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
          className="telvis-section telvis-guide-section"
          aria-labelledby="guide-devices-heading"
        >
          <div className="telvis-section-inner">
            <SectionHeader
              id="guide-devices-heading"
              eyebrow="Device setup"
              title={
                <>
                  Open the <TitleAccent>Device Guide</TitleAccent> That Matches
                  Your Screen
                </>
              }
              lead="Each device now has its own page. Open Firestick, Smart TV, Android, Apple, Windows or another guide, then follow one method at a time with your welcome message nearby."
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
          lead="Step-by-step blog posts that complement the device guides below."
          slugs={[blogSlugs.firestick, blogSlugs.trial]}
        />
        <InstallationGuideSupport />
      </main>
    </>
  );
}

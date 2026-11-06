import { GuideStandaloneSection, guideStandaloneIcons } from "@/components/installation/GuideStandaloneSection";
import { TitleAccent } from "@/components/ui/SectionHeader";
import {
  refreshEpgSection,
  xtreamCodesSection,
} from "@/lib/installation-guide-data";

export function InstallationGuideXtream() {
  return (
    <GuideStandaloneSection
      id="guide-players-detail-heading"
      eyebrow="Player guidance"
      title={
        <>
          Best IPTV App and IPTV Player <TitleAccent>Guidance</TitleAccent>
        </>
      }
      blocks={xtreamCodesSection.blocks}
      variant="fields"
      icon={guideStandaloneIcons.xtream}
    />
  );
}

export function InstallationGuideEpg() {
  return (
    <GuideStandaloneSection
      id="guide-epg-heading"
      eyebrow="Programme guide"
      title={
        <>
          IPTV EPG Guide: How to Load{" "}
          <TitleAccent>Programme Information</TitleAccent>
        </>
      }
      blocks={refreshEpgSection.blocks}
      variant="ordered"
      icon={guideStandaloneIcons.epg}
    />
  );
}

import { GuideStandaloneSection, guideStandaloneIcons } from "@/components/installation/GuideStandaloneSection";
import { TitleAccent } from "@/components/ui/SectionHeader";
import { beforeYouBeginSection } from "@/lib/installation-guide-data";

export function InstallationGuideBefore() {
  return (
    <GuideStandaloneSection
      id="guide-before-heading"
      eyebrow="Getting ready"
      title={
        <>
          What You Need Before <TitleAccent>IPTV Installation</TitleAccent>
        </>
      }
      blocks={beforeYouBeginSection.blocks}
      variant="checklist"
      icon={guideStandaloneIcons.before}
    />
  );
}

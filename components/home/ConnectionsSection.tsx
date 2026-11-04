import { CheckCircle2 } from "lucide-react";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const checks = [
  "Android TV: Telvis App, TiviMate, IPTV Smarters Pro",
  "Android Mobile: Telvis App, IPTV Smarters Pro",
  "Firestick: Telvis App and compatible Fire TV players",
  "Samsung and LG Smart TVs: Compatible official-store IPTV players",
  "iPhone and iPad: Compatible iOS IPTV players",
  "Windows and Mac: VLC and compatible IPTV players",
] as const;

export function ConnectionsSection() {
  return (
    <section
      id="connections"
      className="telvis-section telvis-section-connections"
      aria-labelledby="connections-heading"
    >
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="connections-heading"
              eyebrow="Players and apps"
              title={
                <>
                  IPTV Players and Applications Supported by{" "}
                  <TitleAccent>Different Devices</TitleAccent>
                </>
              }
              lead="An IPTV subscription and an IPTV player are not necessarily the same thing. The subscription provides the account access and available content, while the IPTV player is the application you use to browse and play the streams. Depending on your device, you may be able to use the dedicated Telvis application or another compatible IPTV player."
            />
          </div>

          <CardReveal delay={0.1} className="telvis-glass telvis-panel">
            <CardRevealPart variant="content" as="h3" className="telvis-panel-title">
              Compatible player options by device
            </CardRevealPart>
            <CardRevealList className="telvis-check-list">
              {checks.map((item) => (
                <CardRevealListItem key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </CardRevealListItem>
              ))}
            </CardRevealList>
            <CardRevealPart variant="content" as="p" className="telvis-info-body">
              Application availability and features depend on the device,
              operating system and player version. Some third-party players
              require a separate purchase or activation fee. For the easiest
              setup, follow the instructions for your particular device rather
              than installing several applications at once.
            </CardRevealPart>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}

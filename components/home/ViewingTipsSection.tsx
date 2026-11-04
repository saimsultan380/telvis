import {
  HardDrive,
  RefreshCw,
  Router,
  Signal,
  Wifi,
  WifiOff,
} from "lucide-react";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const tips = [
  {
    text: "Use a stable internet connection, especially for higher-resolution content",
    icon: Wifi,
  },
  {
    text: "Consider an Ethernet connection to reduce wireless interference",
    icon: Router,
  },
  {
    text: "Keep your device and applications updated",
    icon: RefreshCw,
  },
  {
    text: "Close unnecessary applications on older streaming devices",
    icon: HardDrive,
  },
  {
    text: "Restart your router and device if playback becomes unreliable",
    icon: RefreshCw,
  },
  {
    text: "Check different streams if only one channel is buffering",
    icon: Signal,
  },
  {
    text: "Keep enough free storage for smoother device performance",
    icon: HardDrive,
  },
  {
    text: "Pause large downloads and game updates while watching",
    icon: WifiOff,
  },
] as const;

export function ViewingTipsSection() {
  return (
    <section
      id="viewing-tips"
      className="telvis-section telvis-section-tips"
      aria-labelledby="viewing-tips-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="viewing-tips-heading"
          eyebrow="Reliable viewing"
          title={
            <>
              Get a Better IPTV Streaming Experience with the{" "}
              <TitleAccent>Right Setup</TitleAccent>
            </>
          }
          lead="Even with a suitable IPTV service, buffering, freezing and loading problems can affect playback. The cause is not always the IPTV application. Your Wi-Fi signal, router, device performance, broadband connection and individual stream can all make a difference."
        />

        <CardReveal className="telvis-glass telvis-tips-shell">
          <CardRevealPart variant="content" as="h3" className="telvis-panel-title">
            Simple ways to improve your setup
          </CardRevealPart>
          <div className="telvis-tips-grid">
            {tips.map((tip, index) => (
              <CardReveal
                key={tip.text}
                as="div"
                delay={index * 0.04}
                className="telvis-tip-item"
              >
                <CardRevealPart variant="icon">
                  <GlassIcon icon={tip.icon} />
                </CardRevealPart>
                <CardRevealPart variant="content" as="p">
                  {tip.text}
                </CardRevealPart>
              </CardReveal>
            ))}
          </div>
          <CardRevealPart
            variant="content"
            as="p"
            className="telvis-info-body telvis-tips-note"
          >
            If the problem continues, contact support with your device model,
            application name and the error you are experiencing.
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

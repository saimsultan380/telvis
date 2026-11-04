import {
  Apple,
  Monitor,
  Smartphone,
  TabletSmartphone,
  Tv,
  TvMinimal,
} from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const devices = [
  {
    title: "Amazon Firestick and Fire TV",
    body: "Firestick is a popular option for people who want to access IPTV through their television. Install the dedicated Telvis application using the instructions in our Installation Guide, then enter your supplied login details and allow the available categories to load.",
    icon: TvMinimal,
  },
  {
    title: "Android TV and Google TV",
    body: "Android TV and Google TV devices support compatible IPTV applications. Use the dedicated application where supported or configure a compatible player with your Xtream Codes details. Android boxes can follow a similar path when the device specifications allow.",
    icon: Tv,
  },
  {
    title: "Samsung and LG Smart TVs",
    body: "Many Samsung and LG Smart TVs support IPTV player applications through their respective app stores. Install a compatible application, open its login section and enter the account details provided with your subscription.",
    icon: Monitor,
  },
  {
    title: "iPhone and iPad",
    body: "Access IPTV through a compatible iOS player available from the Apple App Store. Install the application, enter your username, password and server address, and follow the player's instructions.",
    icon: Apple,
  },
  {
    title: "Android Phones and Tablets",
    body: "Android devices provide another convenient way to access IPTV. Use the dedicated application or a compatible IPTV player, depending on your device and setup.",
    icon: Smartphone,
  },
  {
    title: "Windows and Mac Computers",
    body: "Configure a compatible IPTV player on Windows and macOS. This option is useful if you prefer watching on a laptop or desktop computer rather than a television.",
    icon: TabletSmartphone,
  },
] as const;

export function DevicesSection() {
  return (
    <section
      id="devices"
      className="telvis-section telvis-section-devices"
      aria-labelledby="devices-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="devices-heading"
          eyebrow="Supported devices"
          title={
            <>
              Watch <TitleAccent>IPTV UK</TitleAccent> on Your Favourite Devices
            </>
          }
          lead="You do not need to rely on just one television to access IPTV. Depending on the application and device, you can use a compatible setup on your television, streaming stick, smartphone, tablet or computer. Telvis provides installation guidance for popular devices to make the process easier."
        />

        <div className="telvis-device-grid">
          {devices.map((device, index) => (
            <CardReveal
              key={device.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-device-card"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={device.icon} className="is-large" />
              </CardRevealPart>
              <CardRevealPart variant="content">
                <h3 className="telvis-info-title">{device.title}</h3>
                <p className="telvis-info-body">{device.body}</p>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1} variant="cta">
          <div className="telvis-inline-actions">
            <Link href={routes.installation} className="telvis-cta-primary">
              View the Complete IPTV Installation Guide
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

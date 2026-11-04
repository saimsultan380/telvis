import {
  BadgePoundSterling,
  FlaskConical,
  Headphones,
  ScrollText,
  Waypoints,
} from "lucide-react";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const reasons = [
  {
    title: "Flexible Plans from £9.99",
    body: "Choose a one, three, six or twelve-month subscription according to your viewing requirements and budget. Longer plans lower the approximate monthly cost.",
    icon: BadgePoundSterling,
  },
  {
    title: "Free 24-Hour IPTV Trial",
    body: "Explore the service on your own device and home internet connection before choosing a paid plan.",
    icon: FlaskConical,
  },
  {
    title: "Dedicated App and Compatible Players",
    body: "Use the dedicated application where supported, or configure a compatible IPTV player with your Xtream Codes details.",
    icon: Waypoints,
  },
  {
    title: "24/7 Customer Support",
    body: "Get help with trials, subscriptions, installation, login errors and EPG issues through WhatsApp and email.",
    icon: Headphones,
  },
  {
    title: "Published Refund Policy",
    body: "Eligible paid subscriptions have a seven-day refund guarantee. Read the Refund Policy conditions before ordering.",
    icon: ScrollText,
  },
] as const;

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="telvis-section telvis-section-why"
      aria-labelledby="why-choose-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="why-choose-heading"
          eyebrow="Your IPTV UK subscription"
          title={
            <>
              Your IPTV UK Subscription for Live TV, Sports,{" "}
              <TitleAccent>Movies and More</TitleAccent>
            </>
          }
          lead="Watching television through an internet connection gives you another way to access live and on-demand entertainment. Telvis brings these options together through one subscription so you can explore different content categories, use supported IPTV applications, and choose a subscription duration that matches your viewing requirements."
          align="center"
        />

        <div className="telvis-why-grid">
          {reasons.map((reason, index) => (
            <CardReveal
              key={reason.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-why-card"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={reason.icon} className="is-large" />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {reason.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {reason.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Clapperboard,
  Headphones,
  ListVideo,
  MonitorSmartphone,
  Sparkles,
  Tv,
} from "lucide-react";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";

const features = [
  {
    title: "Extensive Live TV Selection",
    body: "Explore more than 20,000 listed live channels across entertainment, news, sports, documentaries, lifestyle and international categories. Individual channel availability can change.",
    icon: Tv,
  },
  {
    title: "Movies and Series on Demand",
    body: "Browse a library of more than 80,000 listed movies and series. Explore different genres, search for available titles, and find entertainment according to your preferences.",
    icon: Clapperboard,
  },
  {
    title: "HD and Selected 4K Streaming",
    body: "Enjoy available HD, Full HD and selected 4K streams where supported. Actual picture quality depends on the individual source, your device, application and internet connection.",
    icon: Sparkles,
  },
  {
    title: "Electronic Programme Guide (EPG)",
    body: "Use the Electronic Programme Guide to check available programme information. See what is currently playing and what comes next on channels where EPG data is provided.",
    icon: ListVideo,
  },
  {
    title: "Selected Catch-Up TV",
    body: "Missed a programme? Catch-Up is available on selected listings, allowing you to access supported programmes after their original broadcast.",
    icon: MonitorSmartphone,
  },
  {
    title: "Customer Support Whenever You Need It",
    body: "Get help with subscription enquiries, installation, login information and technical problems. Telvis offers customer assistance through WhatsApp and email, with support available 24 hours a day.",
    icon: Headphones,
  },
] as const;

export function IncludedSection() {
  return (
    <section
      id="included"
      className="telvis-section telvis-section-included"
      aria-labelledby="included-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="included-heading"
          eyebrow="Why Choose Telvis"
          title={
            <>
              Why Choose <TitleAccent>Telvis IPTV UK</TitleAccent>?
            </>
          }
          lead="A good IPTV experience involves more than the number of channels available. Your device, application, streaming quality, programme information and customer support all matter. Telvis IPTV UK provides several features to make your IPTV UK subscription easier to access and manage."
          align="center"
        />

        <div className="telvis-feature-grid">
          {features.map((feature, index) => (
            <CardReveal
              key={feature.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={feature.icon} />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {feature.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {feature.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

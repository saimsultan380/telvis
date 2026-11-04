import {
  Clapperboard,
  Globe2,
  MonitorPlay,
  Newspaper,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const categories = [
  {
    title: "British TV and Entertainment",
    body: "Explore available British television categories, including entertainment, news, documentaries, lifestyle and general programming. If you mainly want British IPTV for everyday viewing, use the free trial to check the specific channels and programmes you prefer.",
    icon: MonitorPlay,
    wide: true,
  },
  {
    title: "Live Sports and Sporting Events",
    body: "Sports fans can explore available categories covering football, cricket, rugby, Formula 1 and motorsports, boxing, UFC and other combat sports, tennis, golf and basketball. Event and channel availability can vary, so check the relevant listings during your trial.",
    icon: Trophy,
    wide: false,
  },
  {
    title: "Movies and Films",
    body: "Explore available movies across action and adventure, comedy, drama, crime and thriller, science fiction, horror, documentaries and family entertainment. Browse the available movie catalogue and search for titles according to your interests.",
    icon: Clapperboard,
    wide: false,
  },
  {
    title: "TV Series and Box Sets",
    body: "Find available television series, seasons and episodes in the on-demand section. Browse different categories and continue watching supported series through compatible IPTV players.",
    icon: Clapperboard,
    wide: false,
  },
  {
    title: "International Television",
    body: "Alongside UK-focused entertainment, explore available international and regional categories. This is useful for households interested in television from different countries and languages.",
    icon: Globe2,
    wide: false,
  },
  {
    title: "News and Documentaries",
    body: "Browse available news, current affairs, educational programmes and documentary categories. Programme information and availability depend on the individual listings.",
    icon: Newspaper,
    wide: false,
  },
] as const;

export function CatalogueSection() {
  return (
    <section
      id="catalogue"
      className="telvis-section telvis-section-catalogue"
      aria-labelledby="catalogue-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="catalogue-heading"
          eyebrow="Browse the catalogue"
          title={
            <>
              Explore the Content Available with{" "}
              <TitleAccent>Telvis IPTV</TitleAccent>
            </>
          }
          lead="Finding something to watch should be straightforward. Telvis organises its listed content into different categories so you can explore live television and on-demand entertainment. Whether you are interested in British entertainment, live sports, international television or on-demand movies, the available catalogue gives you different categories to explore."
        />

        <div className="telvis-bento">
          {categories.map((item, index) => (
            <CardReveal
              key={item.title}
              as="article"
              delay={staggerDelay(index)}
              className={`telvis-glass telvis-bento-card${item.wide ? " is-wide" : ""}`}
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={item.icon} />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {item.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {item.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1} variant="cta">
          <div className="telvis-inline-actions is-row">
            <Link href={routes.iptvUk} className="telvis-cta-primary">
              Explore Telvis IPTV
            </Link>
            <Link href={routes.trial} className="telvis-cta-outline">
              Get Your Free Trial
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

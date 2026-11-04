import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { blogPostHref, blogSlugs } from "@/lib/blog-posts";
import { routes } from "@/lib/site";

const checklist = [
  "The available content meets your expectations",
  "Playback works on your home internet connection",
  "Your preferred device installs and signs in correctly",
  "Live TV, movies and series categories load as expected",
  "Picture and sound quality are suitable for you",
  "EPG and selected Catch-Up work where available",
  "Performance is acceptable during your normal viewing hours",
] as const;

export function TrialSection() {
  return (
    <section
      id="trial"
      className="telvis-section telvis-section-trial"
      aria-labelledby="trial-heading"
    >
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="trial-heading"
              eyebrow="Free Trial"
              title={
                <>
                  Try <TitleAccent>IPTV UK</TitleAccent> Free for{" "}
                  <TitleAccent>24 Hours</TitleAccent> Before You Subscribe
                </>
              }
              lead="Choosing an IPTV provider without testing it first can leave you uncertain about device compatibility, available content and playback quality. That is why Telvis offers a free 24-hour IPTV trial. Use it on your own device and internet connection to check whether the available content and features meet your expectations."
            />
          </div>

          <CardReveal delay={0.1} className="telvis-glass telvis-panel">
            <CardRevealPart variant="content" as="h3" className="telvis-panel-title">
              During the IPTV UK trial, check:
            </CardRevealPart>
            <CardRevealList className="telvis-check-list">
              {checklist.map((item) => (
                <CardRevealListItem key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </CardRevealListItem>
              ))}
            </CardRevealList>
            <CardRevealPart variant="content" as="p" className="telvis-info-body">
              If something does not work, contact support during the trial. We
              can check your login, app, device and connection before you choose
              a paid plan.{" "}
              <Link href={blogPostHref(blogSlugs.trial)} className="telvis-text-link">
                Read the full 24-hour trial checklist
              </Link>
              .
            </CardRevealPart>
            <CardRevealPart variant="content">
              <Link href={routes.trial} className="telvis-cta-primary">
                Get Your Free Trial
              </Link>
            </CardRevealPart>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}

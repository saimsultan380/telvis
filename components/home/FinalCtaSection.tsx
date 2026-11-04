import { ArrowRight, MessageCircle, Play } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

export function FinalCtaSection() {
  return (
    <section
      id="get-started"
      className="telvis-section telvis-final-cta"
      aria-labelledby="final-cta-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="final-cta-heading"
              eyebrow="Get Started"
              title={
                <>
                  Ready to Explore <TitleAccent>Telvis IPTV UK</TitleAccent>?
                </>
              }
              lead="Find a subscription that matches your viewing requirements and check the service before choosing a longer plan. With a free 24-hour trial, flexible subscription durations, device-specific installation guidance and customer support, Telvis gives you a straightforward way to explore its IPTV offering."
              align="center"
              animate={false}
            />
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                <Play size={16} fill="currentColor" aria-hidden="true" />
                <span>Get Your Free 24-Hour Trial</span>
              </Link>
              <Link href={routes.plans} className="telvis-cta-secondary">
                View IPTV Subscription Plans
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </CardRevealPart>

          <CardRevealPart>
            <div className="telvis-inline-actions telvis-final-support-link">
              <Link href={routes.contact} className="telvis-cta-outline">
                <MessageCircle size={16} aria-hidden="true" />
                Contact Telvis Support
              </Link>
            </div>
          </CardRevealPart>

          <CardRevealPart as="p" className="telvis-section-note is-center">
            Browse the available content, test your preferred device and choose a
            plan only after checking the features that matter to you. Listed
            catalogue totals, programme information and individual sources may
            change. Device compatibility, EPG, Catch-Up, picture quality and
            performance vary. Third-party player fees are not included unless
            expressly stated. Refunds are subject to the published Refund Policy.
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

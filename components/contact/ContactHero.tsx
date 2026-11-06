"use client";

import Link from "next/link";
import { OrbitVisual } from "@/components/home/OrbitVisual";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes, supportConfig } from "@/lib/site";

export function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact Support"
      headingId="contact-heading"
      titleLines={[
        <>
          Contact <span className="telvis-h1-accent">Telvis IPTV UK</span> for
        </>,
        <>Support, Setup Help & Free Trial</>,
      ]}
      visual={
        <ScrollReveal delay={0.18} variant="media" className="telvis-visual-wrap">
          <OrbitVisual />
        </ScrollReveal>
      }
    >
      <HeroReveal delay={0.22}>
        <div className="telvis-copy">
          <p className="telvis-hero-subhead">
            Need Help with Telvis IPTV? Get in Touch with Our Support Team
          </p>
          <p>
            Have a question about your IPTV UK subscription, free trial,
            installation or account? The Telvis support team is here to help you
            find the information you need.
          </p>
          <p>
            Whether you are trying IPTV for the first time, checking whether your
            device is compatible or experiencing a problem with an existing
            subscription, you can contact us through WhatsApp or email. Tell us
            what you need help with, and our team will guide you towards the
            appropriate solution.
          </p>
        </div>
      </HeroReveal>

      <HeroReveal delay={0.3} variant="cta">
        <div className="telvis-actions">
          <a
            href={supportConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="telvis-cta-primary"
          >
            Contact Telvis Support
          </a>
          <Link href={routes.trial} className="telvis-cta-secondary">
            Request a Free IPTV Trial
          </Link>
        </div>
      </HeroReveal>
    </PageHero>
  );
}

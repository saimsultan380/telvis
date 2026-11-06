"use client";

import Link from "next/link";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { OrbitVisual } from "@/components/home/OrbitVisual";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes } from "@/lib/site";

export function InstallationGuideHero() {
  return (
    <PageHero
      eyebrow="Installation Guide"
      headingId="installation-guide-heading"
      titleLines={[
        <>
          Telvis IPTV Installation Guide: Set Up IPTV on{" "}
          <span className="telvis-h1-accent">Firestick</span>,
        </>,
        <>
          Smart TV, Android,{" "}
          <span className="telvis-h1-accent">iPhone & More</span>
        </>,
      ]}
      visual={
        <ScrollReveal delay={0.18} variant="media" className="telvis-visual-wrap">
          <OrbitVisual />
        </ScrollReveal>
      }
    >
      <HeroReveal delay={0.22}>
        <div className="telvis-copy">
          <p>
            Setting up IPTV doesn&apos;t have to be complicated. With the right
            IPTV player and a few simple steps, you can watch Telvis IPTV on your
            preferred device. Whether you&apos;re using an Amazon Firestick,
            Samsung or LG Smart TV, Android TV, iPhone, iPad, Roku, Windows PC or
            Mac, this guide will help you understand the installation process.
          </p>
          <p>
            Follow our step-by-step IPTV installation instructions to choose a
            compatible player, enter your IPTV login details, load your playlist,
            and configure your TV guide (EPG). Get your device ready and enjoy a
            smoother IPTV viewing experience with Telvis.
          </p>
        </div>
      </HeroReveal>

      <HeroReveal delay={0.3} variant="cta">
        <div className="telvis-actions">
          <Link href="#device-setup" className="telvis-cta-primary">
            Explore Device Guides
          </Link>
          <Link href={routes.plans} className="telvis-cta-secondary">
            Get Your IPTV Subscription
          </Link>
        </div>
      </HeroReveal>
    </PageHero>
  );
}

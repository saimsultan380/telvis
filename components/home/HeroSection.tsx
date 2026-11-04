"use client";

import Link from "next/link";
import { OrbitVisual } from "@/components/home/OrbitVisual";
import { HeroTitleReveal } from "@/components/ui/HeroTitleReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { routes } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="telvis-hero" aria-labelledby="telvis-hero-heading">
      <div className="telvis-container">
        <div className="telvis-content">
          <div className="telvis-copy-col">
            <ScrollReveal delay={0.05} variant="text">
              <div className="telvis-eyebrow">
                <span className="telvis-eyebrow-dot" />
                IPTV UK SUBSCRIPTION
              </div>
            </ScrollReveal>

            <HeroTitleReveal
              id="telvis-hero-heading"
              className="telvis-h1"
              lines={[
                <>
                  IPTV UK Subscription | Explore{" "}
                  <span className="telvis-h1-accent">Telvis IPTV</span>
                </>,
                <>
                  with a Free{" "}
                  <span className="telvis-h1-accent">24-Hour Trial</span>
                </>,
              ]}
            />

            <ScrollReveal delay={0.22} variant="text">
              <div className="telvis-copy">
                <p>
                  Get a reliable IPTV UK subscription with live TV, sports, movies
                  and series in HD quality at discounted prices. Telvis makes it
                  easier to explore IPTV in the UK with flexible subscription plans,
                  a free 24-hour trial, and support for popular streaming devices.
                </p>
                <p>
                  Browse 20,000+ listed live channels and 80,000+ listed movies and
                  series on compatible devices. Whether you use an Amazon Firestick,
                  Android TV, Smart TV, iPhone, iPad or computer, follow our
                  installation instructions and choose a suitable way to access your
                  subscription.
                </p>
                <p>
                  Start with a free 24-hour IPTV UK trial. Check the available
                  content, test playback on your home internet connection, and see
                  how the service works on your preferred device before choosing a
                  paid plan.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} variant="cta">
              <div className="telvis-actions">
                <Link href={routes.trial} className="telvis-cta-primary">
                  <span className="telvis-play-icon" />
                  <span>Start Your Free 24-Hour Trial</span>
                </Link>

                <Link href={routes.plans} className="telvis-cta-secondary">
                  View IPTV Subscription Plans
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.38} variant="text">
              <p className="telvis-hero-trust-line">
                Free 24-Hour Trial
                <span className="telvis-hero-trust-sep" aria-hidden="true">
                  ·
                </span>
                VPN Included
                <span className="telvis-hero-trust-sep" aria-hidden="true">
                  ·
                </span>
                EPG and Selected Catch-Up
                <span className="telvis-hero-trust-sep" aria-hidden="true">
                  ·
                </span>
                24/7 Support
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.18} variant="media" className="telvis-visual-wrap">
            <OrbitVisual />
          </ScrollReveal>
        </div>
      </div>
      <span className="telvis-section-end-line" aria-hidden="true" />
    </section>
  );
}

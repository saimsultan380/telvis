import {
  KeyRound,
  MousePointerClick,
  PlayCircle,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const steps = [
  {
    number: "1",
    title: "Choose Your Free Trial or Subscription",
    body: "Start with the free 24-hour IPTV trial or review the available paid plans. Choose the option that matches your requirements.",
    icon: MousePointerClick,
  },
  {
    number: "2",
    title: "Confirm Your Device",
    body: "Let the support team know whether you use a Firestick, Smart TV, Android TV, smartphone, tablet or computer. This helps you receive the correct installation instructions.",
    icon: Smartphone,
  },
  {
    number: "3",
    title: "Receive Your IPTV Login Details",
    body: "Once your trial or subscription is arranged, you receive the required account information and setup guidance. Keep your username, password and server details available when configuring your IPTV player.",
    icon: KeyRound,
  },
  {
    number: "4",
    title: "Install and Start Watching",
    body: "Follow the Installation Guide for your device, enter the supplied details and wait for the available categories to load. You can then explore the supported live TV, movies and series sections.",
    icon: PlayCircle,
  },
] as const;

export function StepsSection() {
  return (
    <section
      id="steps"
      className="telvis-section telvis-section-steps"
      aria-labelledby="steps-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="steps-heading"
          eyebrow="Getting started"
          title={
            <>
              How to Start Your <TitleAccent>Telvis IPTV</TitleAccent> Subscription
            </>
          }
          lead="Getting started does not need to be complicated. Follow these four steps to explore Telvis IPTV and configure your preferred device."
          align="center"
        />

        <ol className="telvis-steps">
          {steps.map((step, index) => (
            <CardReveal
              key={step.number}
              as="li"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-step-card"
            >
              <CardRevealPart variant="icon">
                <div className="telvis-step-top">
                  <GlassIcon icon={step.icon} />
                  <span className="telvis-step-number" aria-hidden="true">
                    {step.number}
                  </span>
                </div>
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                STEP 0{step.number}: {step.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {step.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </ol>

        <ScrollReveal delay={0.1} variant="cta">
          <div className="telvis-inline-actions">
            <Link href={routes.trial} className="telvis-cta-primary">
              Start Your IPTV UK Trial
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

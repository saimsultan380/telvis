import {
  CalendarDays,
  Check,
  Clapperboard,
  Headphones,
  MonitorPlay,
  Shield,
  Sparkles,
  Tv,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerDelay } from "@/lib/motion";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const sharedFeatures = [
  { text: "Access to the listed live TV catalogue", icon: Tv },
  { text: "Movies and series on demand", icon: Clapperboard },
  { text: "Dedicated app on supported devices", icon: MonitorPlay },
  { text: "Xtream Codes support for compatible players", icon: MonitorPlay },
  { text: "EPG where available", icon: CalendarDays },
  { text: "Selected Catch-Up TV", icon: Sparkles },
  { text: "VPN functionality", icon: Shield },
  { text: "Customer support", icon: Headphones },
  { text: "Account activation and installation guidance", icon: Sparkles },
] as const;

const plans = [
  {
    id: "1-month",
    title: "1-Month Plan",
    price: "£9.99",
    perMonth: "£9.99 / mo",
    summary: "Approx. monthly cost £9.99. A simple starting option with the shortest paid commitment.",
    cta: "Choose 1 Month",
    href: "/checkout?plan=1-month",
    featured: false,
  },
  {
    id: "3-month",
    title: "3-Month Plan",
    price: "£24.99",
    perMonth: "~£8.33 / mo",
    summary: "Approx. monthly cost £8.33. A three-month option after you have tested the service.",
    cta: "Choose 3 Months",
    href: "/checkout?plan=3-month",
    featured: false,
  },
  {
    id: "6-month",
    title: "6-Month Plan",
    price: "£39.99",
    perMonth: "~£6.67 / mo",
    summary:
      "Approx. monthly cost £6.67. A practical choice after completing the trial.",
    cta: "Choose 6 Months",
    href: "/checkout?plan=6-month",
    featured: true,
  },
  {
    id: "12-month",
    title: "12-Month Plan",
    price: "£49.99",
    perMonth: "~£4.17 / mo",
    summary:
      "Approx. monthly cost £4.17. The lowest average monthly cost after testing the service and confirming your setup.",
    cta: "Choose 12 Months",
    href: "/checkout?plan=12-month",
    featured: false,
  },
] as const;

type PlansSectionProps = {
  title?: ReactNode;
  lead?: string;
  showCompareLink?: boolean;
};

export function PlansSection({
  title,
  lead,
  showCompareLink = true,
}: PlansSectionProps = {}) {
  return (
    <section
      id="plans"
      className="telvis-section telvis-section-plans"
      aria-labelledby="plans-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="plans-heading"
          eyebrow="Telvis plans"
          title={
            title ?? (
              <>
                Choose Your <TitleAccent>Telvis IPTV UK</TitleAccent> Subscription
                Plan
              </>
            )
          }
          lead={
            lead ??
            "Looking for an affordable IPTV UK subscription? Telvis offers four subscription durations. Choose a plan according to your viewing requirements and budget. Whether you want to try the service for a month or prefer a longer subscription, compare the available plans before ordering. All four plans offer the same core catalogue and access features."
          }
        />

        <div className="telvis-plan-grid">
          {plans.map((plan, index) => (
            <CardReveal
              key={plan.id}
              as="article"
              id={`plan-${plan.id}`}
              delay={staggerDelay(index)}
              className={`telvis-glass telvis-plan-card${plan.featured ? " is-featured" : ""}`}
            >
              <CardRevealPart variant="icon">
                <div className="telvis-plan-top">
                  <GlassIcon icon={CalendarDays} />
                  <p className="telvis-plan-duration">{plan.title}</p>
                </div>
              </CardRevealPart>
              <CardRevealPart variant="content">
                <h3 className="telvis-plan-title">
                  <span className="telvis-plan-price">{plan.price}</span>
                </h3>
                <p className="telvis-plan-meta">{plan.perMonth}</p>
                <p className="telvis-plan-summary">{plan.summary}</p>
              </CardRevealPart>
              <CardRevealList className="telvis-feature-list">
                {sharedFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <CardRevealListItem key={feature.text}>
                      <Icon size={16} strokeWidth={2} aria-hidden="true" />
                      <span>{feature.text}</span>
                    </CardRevealListItem>
                  );
                })}
              </CardRevealList>
              <CardRevealPart variant="content">
                <Link
                  href={plan.href}
                  className={
                    plan.featured
                      ? "telvis-cta-primary telvis-plan-cta"
                      : "telvis-cta-glass telvis-plan-cta"
                  }
                >
                  <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                  {plan.cta}
                </Link>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal variant="text">
          <p className="telvis-section-note">
          Check the applicable terms and connection allowance before ordering.
          Catalogue totals describe listed entries and can change. Availability,
          Catch-Up, EPG and picture quality vary by channel, programme, device,
          player and location.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} variant="cta">
          <div className="telvis-inline-actions is-row">
          <Link href={routes.trial} className="telvis-cta-primary">
            Start a 24-Hour Free IPTV Trial
          </Link>
          {showCompareLink ? (
            <Link href={routes.plans} className="telvis-cta-outline">
              Compare IPTV Plans
            </Link>
          ) : (
            <Link href={routes.contact} className="telvis-cta-outline">
              Ask About a Plan
            </Link>
          )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

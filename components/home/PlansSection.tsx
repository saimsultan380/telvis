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
    title: "1 Month",
    price: "£9.99",
    perMonth: "Average monthly cost £9.99",
    summary: "Monthly IPTV subscription for the shortest paid commitment.",
    cta: "Choose Your IPTV Plan",
    href: "/checkout?plan=1-month",
    featured: false,
  },
  {
    id: "3-month",
    title: "3 Months",
    price: "£24.99",
    perMonth: "Average monthly cost £8.33",
    summary: "3-month IPTV plan at a discounted average monthly price.",
    cta: "Choose Your IPTV Plan",
    href: "/checkout?plan=3-month",
    featured: false,
  },
  {
    id: "6-month",
    title: "6 Months",
    price: "£39.99",
    perMonth: "Average monthly cost £6.67",
    summary: "6-month IPTV plan at a discounted average monthly price.",
    cta: "Choose Your IPTV Plan",
    href: "/checkout?plan=6-month",
    featured: true,
  },
  {
    id: "12-month",
    title: "12 Months",
    price: "£49.99",
    perMonth: "Average monthly cost £4.17",
    summary: "Annual IPTV subscription with the lowest average monthly cost.",
    cta: "Choose Your IPTV Plan",
    href: "/checkout?plan=12-month",
    featured: false,
  },
] as const;

type PlansSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  lead?: string;
  afterLead?: string;
  note?: string;
  showCompareLink?: boolean;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
};

export function PlansSection({
  eyebrow = "Telvis plans",
  title,
  lead,
  afterLead,
  note,
  showCompareLink = true,
  primaryCtaHref = routes.trial,
  primaryCtaLabel = "Start a 24-Hour Free IPTV Trial",
  secondaryCtaHref,
  secondaryCtaLabel,
}: PlansSectionProps = {}) {
  const resolvedSecondaryHref =
    secondaryCtaHref ?? (showCompareLink ? routes.plans : routes.contact);
  const resolvedSecondaryLabel =
    secondaryCtaLabel ??
    (showCompareLink ? "Compare IPTV Plans" : "Ask About a Plan");

  return (
    <section
      id="plans"
      className="telvis-section telvis-section-plans"
      aria-labelledby="plans-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="plans-heading"
          eyebrow={eyebrow}
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

        {afterLead ? (
          <ScrollReveal variant="text">
            <div className="telvis-glass telvis-panel telvis-plans-after-lead">
              <h3 className="telvis-panel-title">Telvis UK IPTV Subscription Plans</h3>
              <p className="telvis-info-body">{afterLead}</p>
            </div>
          </ScrollReveal>
        ) : null}

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
                <p className="telvis-plan-meta">Total price {plan.price}</p>
                <p className="telvis-plan-summary">{plan.perMonth}</p>
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
            {note ??
              "Check the applicable terms and connection allowance before ordering. Catalogue totals describe listed entries and can change. Availability, Catch-Up, EPG and picture quality vary by channel, programme, device, player and location."}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} variant="cta">
          <div className="telvis-inline-actions is-row">
            <Link href={primaryCtaHref} className="telvis-cta-primary">
              {primaryCtaLabel}
            </Link>
            <Link href={resolvedSecondaryHref} className="telvis-cta-outline">
              {resolvedSecondaryLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

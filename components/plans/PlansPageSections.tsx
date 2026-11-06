import {
  BadgePoundSterling,
  CheckCircle2,
  Clapperboard,
  FlaskConical,
  Headphones,
  KeyRound,
  MonitorPlay,
  MousePointerClick,
  PlayCircle,
  ScrollText,
  Shield,
  Smartphone,
  Sparkles,
  Trophy,
  Tv,
  Waypoints,
} from "lucide-react";
import Link from "next/link";
import { FaqList } from "@/components/faq/FaqList";
import { GlassIcon } from "@/components/ui/GlassIcon";
import {
  CardReveal,
  CardRevealList,
  CardRevealListItem,
  CardRevealPart,
} from "@/components/ui/CardReveal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import {
  plansActivationSteps,
  plansCompatibleDevices,
  plansIncludedItems,
  plansPageFaqs,
  plansTrialChecks,
  plansWhyItems,
} from "@/lib/plans-page-data";
import { routes } from "@/lib/site";

const includedIcons = [Tv, Trophy, Clapperboard, Sparkles] as const;
const whyIcons = [
  BadgePoundSterling,
  FlaskConical,
  Waypoints,
  MonitorPlay,
  Headphones,
  ScrollText,
] as const;
const stepIcons = [MousePointerClick, Smartphone, KeyRound, PlayCircle] as const;

export function PlansValueSection() {
  return (
    <section className="telvis-section" aria-labelledby="plans-value-heading">
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="plans-value-heading"
              eyebrow="Value"
              title={
                <>
                  Looking for Cheap <TitleAccent>IPTV UK</TitleAccent> Plans?
                </>
              }
              lead="A good-value subscription should offer clear prices, useful features and the support you need to get started. Telvis offers cheap IPTV UK plans starting at £9.99, with longer options costing less per month on average."
            />
          </div>
          <CardReveal delay={0.08} className="telvis-glass telvis-panel">
            <CardRevealPart as="p" className="telvis-info-body">
              The 12-month IPTV subscription plan works out at approximately
              £4.17 per month. Compare the total price, check the features, and
              choose the duration that suits you.
            </CardRevealPart>
            <CardRevealPart as="p" className="telvis-info-body">
              Looking for IPTV deals UK viewers can compare easily? Review all
              four plans before you buy.
            </CardRevealPart>
            <CardRevealPart>
              <div className="telvis-inline-actions is-row">
                <Link href="#plans" className="telvis-cta-primary">
                  Compare IPTV Plans
                </Link>
                <Link href={routes.trial} className="telvis-cta-outline">
                  Start a 24-Hour Free IPTV Trial
                </Link>
              </div>
            </CardRevealPart>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}

export function PlansTrialSection() {
  return (
    <section
      className="telvis-section telvis-section-trial"
      aria-labelledby="plans-trial-heading"
    >
      <div className="telvis-section-inner">
        <div className="telvis-split">
          <div className="telvis-split-copy">
            <SectionHeader
              id="plans-trial-heading"
              eyebrow="Free trial"
              title={
                <>
                  Get a Free IPTV Trial Before You Buy IPTV in the{" "}
                  <TitleAccent>UK</TitleAccent>
                </>
              }
              lead="Not sure which IPTV subscription UK option to choose? Try Telvis with a free 24-hour IPTV trial before paying for a plan."
            />
          </div>
          <CardReveal delay={0.1} className="telvis-glass telvis-panel">
            <CardRevealPart as="h3" className="telvis-panel-title">
              Use the IPTV trial on your normal device and internet connection
              to check:
            </CardRevealPart>
            <CardRevealList className="telvis-check-list">
              {plansTrialChecks.map((item) => (
                <CardRevealListItem key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </CardRevealListItem>
              ))}
            </CardRevealList>
            <CardRevealPart as="p" className="telvis-info-body">
              The trial gives you time to check the service before choosing a
              paid subscription.
            </CardRevealPart>
            <CardRevealPart>
              <Link href={routes.trial} className="telvis-cta-primary">
                Request Your Free IPTV Trial
              </Link>
            </CardRevealPart>
          </CardReveal>
        </div>
      </div>
    </section>
  );
}

export function PlansIncludedSection() {
  return (
    <section className="telvis-section" aria-labelledby="plans-included-heading">
      <div className="telvis-section-inner">
        <SectionHeader
          id="plans-included-heading"
          eyebrow="Included"
          title={
            <>
              What Is Included With Your{" "}
              <TitleAccent>UK IPTV</TitleAccent> Subscription?
            </>
          }
          lead="Your Telvis IPTV UK subscription provides account access and setup guidance for supported devices. You can explore different content categories and use the available features through the dedicated app or a compatible IPTV player."
        />
        <div className="telvis-feature-grid">
          {plansIncludedItems.map((item, index) => {
            const Icon = includedIcons[index] ?? Sparkles;
            return (
              <CardReveal
                key={item.title}
                as="article"
                delay={staggerDelay(index)}
                className="telvis-glass telvis-feature-tile"
              >
                <CardRevealPart variant="icon">
                  <GlassIcon icon={Icon} />
                </CardRevealPart>
                <CardRevealPart as="h3" className="telvis-info-title">
                  {item.title}
                </CardRevealPart>
                <CardRevealPart as="p" className="telvis-info-body">
                  {item.body}
                </CardRevealPart>
              </CardReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PlansWhySection() {
  return (
    <section className="telvis-section" aria-labelledby="plans-why-heading">
      <div className="telvis-section-inner">
        <SectionHeader
          id="plans-why-heading"
          eyebrow="Why Telvis"
          title={
            <>
              Why Choose Telvis IPTV Providers{" "}
              <TitleAccent>UK</TitleAccent> Customers Can Compare?
            </>
          }
          lead="When comparing IPTV providers, UK viewers should look beyond the advertised channel count. Consider the actual price, device support, trial access, screen allowance and help available after purchase."
          align="center"
        />
        <div className="telvis-why-grid">
          {plansWhyItems.map((item, index) => {
            const Icon = whyIcons[index] ?? Shield;
            return (
              <CardReveal
                key={item.title}
                as="article"
                delay={staggerDelay(index)}
                className="telvis-glass telvis-why-card"
              >
                <CardRevealPart variant="icon">
                  <GlassIcon icon={Icon} className="is-large" />
                </CardRevealPart>
                <CardRevealPart as="h3" className="telvis-info-title">
                  {item.title}
                </CardRevealPart>
                <CardRevealPart as="p" className="telvis-info-body">
                  {item.body}
                </CardRevealPart>
              </CardReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PlansActivationSection() {
  return (
    <section className="telvis-section" aria-labelledby="plans-activation-heading">
      <div className="telvis-section-inner">
        <SectionHeader
          id="plans-activation-heading"
          eyebrow="IPTV activation"
          title={
            <>
              IPTV Activation: How to <TitleAccent>Get Started</TitleAccent>
            </>
          }
          lead="Getting started with your IPTV UK subscription involves four simple steps."
          align="center"
        />
        <ol className="telvis-steps">
          {plansActivationSteps.map((step, index) => {
            const Icon = stepIcons[index] ?? PlayCircle;
            return (
              <CardReveal
                key={step.number}
                as="li"
                delay={staggerDelay(index)}
                className="telvis-glass telvis-step-card"
              >
                <CardRevealPart variant="icon">
                  <div className="telvis-step-top">
                    <GlassIcon icon={Icon} />
                    <span className="telvis-step-number" aria-hidden="true">
                      {step.number}
                    </span>
                  </div>
                </CardRevealPart>
                <CardRevealPart as="h3" className="telvis-info-title">
                  {step.number}. {step.title}
                </CardRevealPart>
                <CardRevealPart as="p" className="telvis-info-body">
                  {step.body}
                </CardRevealPart>
              </CardReveal>
            );
          })}
        </ol>
        <ScrollReveal delay={0.1} variant="cta">
          <div className="telvis-inline-actions">
            <Link href={routes.contact} className="telvis-cta-primary">
              Get IPTV Activation Support
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function PlansDevicesSection() {
  return (
    <section className="telvis-section" aria-labelledby="plans-devices-heading">
      <div className="telvis-section-inner">
        <SectionHeader
          id="plans-devices-heading"
          eyebrow="Compatible devices"
          title={
            <>
              Compatible Devices for <TitleAccent>Telvis IPTV</TitleAccent>
            </>
          }
          lead="Use your subscription on supported devices with a compatible IPTV app."
        />
        <div className="telvis-device-grid">
          {plansCompatibleDevices.map((device, index) => (
            <CardReveal
              key={device.title}
              as="article"
              delay={staggerDelay(index, 0.04)}
              className="telvis-glass telvis-device-card"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {device.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {device.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            App availability and compatibility depend on your device model and
            operating system. Check the installation guide or contact support if
            you are unsure.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08} variant="cta">
          <div className="telvis-inline-actions">
            <Link href={routes.installation} className="telvis-cta-primary">
              View IPTV Installation Guide
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function PlansHouseholdSection() {
  return (
    <section className="telvis-section" aria-labelledby="plans-household-heading">
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-panel">
          <CardRevealPart>
            <SectionHeader
              id="plans-household-heading"
              eyebrow="Households"
              title={
                <>
                  Find the Right IPTV Package for Your{" "}
                  <TitleAccent>Household</TitleAccent>
                </>
              }
              lead="Choosing a family IPTV package depends on what different household members want to watch and how many screens need to play at the same time."
              animate={false}
            />
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            If you are looking for multiroom IPTV, ask the Telvis team to confirm
            the available simultaneous connection allowance before paying.
            Installing an account on several devices does not necessarily mean
            they can all stream at once.
          </CardRevealPart>
          <CardRevealPart>
            <Link href={routes.contact} className="telvis-cta-outline">
              Ask About Connection Allowance
            </Link>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

export function PlansFaqSection() {
  return (
    <section
      id="plans-faq"
      className="telvis-section telvis-section-faq"
      aria-labelledby="plans-faq-heading"
    >
      <div className="telvis-section-inner telvis-faq-layout">
        <div className="telvis-faq-intro">
          <SectionHeader
            id="plans-faq-heading"
            eyebrow="FAQ"
            title={
              <>
                Frequently Asked Questions About{" "}
                <TitleAccent>IPTV UK</TitleAccent> Subscription
              </>
            }
          />
        </div>
        <FaqList items={plansPageFaqs} />
      </div>
    </section>
  );
}

export function PlansFinalCta() {
  return (
    <section
      className="telvis-section telvis-final-cta"
      aria-labelledby="plans-final-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="plans-final-heading"
              eyebrow="Get started"
              title={
                <>
                  Ready to Buy <TitleAccent>IPTV UK</TitleAccent>?
                </>
              }
              lead="Compare the available IPTV offers, test Telvis with a free 24-hour trial and choose the IPTV UK subscription that fits your needs. Start with a one-month plan or choose a longer subscription for a lower average monthly cost. Contact the team if you need help with device compatibility, IPTV activation or choosing a plan."
              align="center"
              animate={false}
            />
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                Start Your Free Trial
              </Link>
              <Link href="#plans" className="telvis-cta-secondary">
                Buy IPTV UK Subscription
              </Link>
            </div>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

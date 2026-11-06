import Link from "next/link";
import { FaqList } from "@/components/faq/FaqList";
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
  resellerAudience,
  resellerChecklist,
  resellerCreditSteps,
  resellerCreditWhy,
  resellerFaqs,
  resellerFeatures,
  resellerGrowthTips,
  resellerHowItWorks,
  resellerPackages,
  resellerPanelManageItems,
  resellerVsSubscription,
  resellerWhyItems,
} from "@/lib/reseller-page-data";
import { routes, supportConfig } from "@/lib/site";

function resellerWhatsAppUrl(message: string) {
  return `${supportConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function ResellerPanelOverview() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="reseller-panel-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reseller-panel-heading"
          eyebrow="Reseller panel"
          title={
            <>
              Your IPTV Reseller Business, Managed Through{" "}
              <TitleAccent>One Panel</TitleAccent>
            </>
          }
          lead="Managing an IPTV reseller business involves more than creating subscriptions. You need to keep customer information organised, monitor account activity, understand subscription periods and handle renewals without losing track of individual customers. The Telvis IPTV reseller panel brings important reseller management activities together in one place. Instead of relying entirely on separate spreadsheets and manual records, you can use the available dashboard tools to organise your customer subscriptions and reseller operations."
        />

        <SectionHeader
          id="reseller-manage-heading"
          eyebrow="Panel capabilities"
          title={
            <>
              What Can You Manage Through an IPTV{" "}
              <TitleAccent>Reseller Panel</TitleAccent>?
            </>
          }
        />

        <div className="telvis-feature-grid">
          {resellerPanelManageItems.map((item, index) => (
            <CardReveal
              key={item.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {item.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {item.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>

        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            Important: Reseller access is intended for authorised distribution
            only. Resellers must operate within the content rights, permissions
            and applicable terms granted to them.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ResellerPackagesSection() {
  return (
    <section
      id="reseller-packages"
      className="telvis-section"
      aria-labelledby="reseller-packages-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reseller-packages-heading"
          eyebrow="Packages"
          title={
            <>
              Choose an IPTV Reseller Package That Matches Your{" "}
              <TitleAccent>Business Goals</TitleAccent>
            </>
          }
          lead="Not every reseller starts with the same requirements. Some want to test the market and build their first customer base, while others already manage customers and need a more flexible reseller arrangement. Telvis offers reseller package options for different business stages. Contact our team to confirm the available credit quantities, package prices, account limits and included features before purchasing."
          align="center"
        />

        <div className="telvis-feature-grid">
          {resellerPackages.map((pkg, index) => (
            <CardReveal
              key={pkg.id}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
              id={`package-${pkg.id}`}
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {pkg.name}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                <strong>{pkg.tagline}</strong>
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {pkg.description}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                Ideal for:
              </CardRevealPart>
              <CardRevealPart>
                <ul className="telvis-contact-check-list">
                  {pkg.idealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardRevealPart>
              <CardRevealPart>
                <a
                  href={resellerWhatsAppUrl(
                    `Hi Telvis, I would like information about the ${pkg.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="telvis-cta-outline"
                >
                  {pkg.cta}
                </a>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResellerComparePackagesSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="reseller-compare-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reseller-compare-heading"
          eyebrow="Compare"
          title={
            <>
              Compare the IPTV Reseller <TitleAccent>Packages</TitleAccent>
            </>
          }
        />

        <CardReveal className="telvis-glass telvis-table-wrap">
          <table className="telvis-table">
            <thead>
              <tr>
                <th scope="col">Package</th>
                <th scope="col">Best suited for</th>
                <th scope="col">Business stage</th>
              </tr>
            </thead>
            <CardRevealList as="tbody">
              {resellerPackages.map((pkg) => (
                <CardRevealListItem as="tr" key={pkg.id}>
                  <th scope="row">
                    {pkg.name.replace(" IPTV Reseller Package", "")}
                  </th>
                  <td>{pkg.suitedFor}</td>
                  <td>{pkg.stage}</td>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </table>
        </CardReveal>

        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            Package availability, credit quantities, pricing and account limits
            depend on the current Telvis reseller terms. Contact our team for the
            latest package information.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ResellerFeaturesSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="reseller-features-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reseller-features-heading"
          eyebrow="Panel features"
          title={
            <>
              IPTV Reseller Panel Features: Tools to Manage Your{" "}
              <TitleAccent>Customers</TitleAccent>
            </>
          }
          lead="An IPTV reseller panel should make customer management easier. It gives resellers a central place to handle the operational tasks involved in managing subscriptions. The features available through your Telvis reseller account depend on your approved access and package."
          align="center"
        />
        <div className="telvis-feature-grid">
          {resellerFeatures.map((feature, index) => (
            <CardReveal
              key={feature.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {feature.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {feature.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResellerHowItWorksSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="reseller-how-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reseller-how-heading"
          eyebrow="How it works"
          title={
            <>
              How Does the Telvis IPTV Reseller Panel{" "}
              <TitleAccent>Work</TitleAccent>?
            </>
          }
          lead="The reseller process starts with an enquiry and confirmation of the available programme requirements. Once your reseller access is approved, you can use the panel according to your package and account permissions. Here is a general overview of the process."
          align="center"
        />
        <div className="telvis-feature-grid">
          {resellerHowItWorks.map((item, index) => (
            <CardReveal
              key={item.step}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart as="p" className="telvis-contact-topic-eyebrow">
                Step {item.step}
              </CardRevealPart>
              <CardRevealPart as="h3" className="telvis-info-title">
                {item.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {item.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            The exact onboarding process and available panel functions will be
            confirmed when you enquire about the programme.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ResellerCreditsSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="reseller-credits-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reseller-credits-heading"
          eyebrow="Credits"
          title={
            <>
              How Does the IPTV Reseller Credit System{" "}
              <TitleAccent>Work</TitleAccent>?
            </>
          }
          lead="Many IPTV reseller programmes use a credit-based system to manage customer subscriptions. Rather than purchasing every customer account separately, an authorised reseller receives a credit balance that can be used for eligible subscription activities. The exact credit requirements depend on the reseller programme, subscription duration and account options."
        />

        <SectionHeader
          id="reseller-credits-steps-heading"
          eyebrow="Understanding credits"
          title={
            <>
              Understanding IPTV Reseller <TitleAccent>Credits</TitleAccent>
            </>
          }
        />

        <div className="telvis-feature-stack">
          <div className="telvis-feature-grid">
            {resellerCreditSteps.slice(0, 3).map((item, index) => (
              <CardReveal
                key={item.step}
                as="article"
                delay={staggerDelay(index)}
                className="telvis-glass telvis-feature-tile"
              >
                <CardRevealPart as="p" className="telvis-contact-topic-eyebrow">
                  Step {item.step}
                </CardRevealPart>
                <CardRevealPart as="h3" className="telvis-info-title">
                  {item.title}
                </CardRevealPart>
                <CardRevealPart as="p" className="telvis-info-body">
                  {item.body}
                </CardRevealPart>
              </CardReveal>
            ))}
          </div>

          <div className="telvis-feature-grid is-two">
            {resellerCreditSteps[3] ? (
              <CardReveal
                as="article"
                delay={staggerDelay(3)}
                className="telvis-glass telvis-feature-tile"
              >
                <CardRevealPart as="p" className="telvis-contact-topic-eyebrow">
                  Step {resellerCreditSteps[3].step}
                </CardRevealPart>
                <CardRevealPart as="h3" className="telvis-info-title">
                  {resellerCreditSteps[3].title}
                </CardRevealPart>
                <CardRevealPart as="p" className="telvis-info-body">
                  {resellerCreditSteps[3].body}
                </CardRevealPart>
              </CardReveal>
            ) : null}

            <CardReveal
              delay={staggerDelay(4)}
              as="article"
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                Why Credit Management Matters
              </CardRevealPart>
              <CardRevealPart>
                <ul className="telvis-contact-check-list">
                  {resellerCreditWhy.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                Before purchasing: Confirm the credit-to-subscription conversion,
                credit expiry rules, renewal costs, minimum purchase requirements
                and refund conditions with Telvis. These terms should be clear
                before you commit to a package.
              </CardRevealPart>
            </CardReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResellerWhySection() {
  return (
    <section className="telvis-section" aria-labelledby="reseller-why-heading">
      <div className="telvis-section-inner">
        <SectionHeader
          id="reseller-why-heading"
          eyebrow="Why Telvis"
          title={
            <>
              Why Become an IPTV Reseller with{" "}
              <TitleAccent>Telvis</TitleAccent>?
            </>
          }
          lead="Starting an IPTV reseller business requires a clear process for managing customers and subscriptions. A dedicated reseller panel can help organise these activities as your customer base develops."
          align="center"
        />
        <div className="telvis-feature-grid">
          {resellerWhyItems.map((item, index) => (
            <CardReveal
              key={item.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {index + 1}. {item.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {item.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResellerAudienceSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="reseller-audience-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reseller-audience-heading"
          eyebrow="Who it suits"
          title={
            <>
              Who Can Become an IPTV Reseller in the{" "}
              <TitleAccent>UK</TitleAccent>?
            </>
          }
          lead="An IPTV reseller programme may suit different types of entrepreneurs and businesses, provided they meet the programme requirements and have the necessary authorisation to distribute the service. You do not necessarily need to operate a large company to explore reseller opportunities. The right starting point depends on your experience, customer acquisition plans and ability to provide responsible customer support."
          align="center"
        />
        <div className="telvis-feature-grid">
          {resellerAudience.map((item, index) => (
            <CardReveal
              key={item.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart as="h3" className="telvis-info-title">
                {item.title}
              </CardRevealPart>
              <CardRevealPart as="p" className="telvis-info-body">
                {item.body}
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResellerCompareSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="reseller-vs-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reseller-vs-heading"
          eyebrow="Compare"
          title={
            <>
              IPTV Reseller Panel vs Regular IPTV{" "}
              <TitleAccent>Subscription</TitleAccent>
            </>
          }
          lead="An ordinary IPTV subscription and an IPTV reseller panel serve different purposes. A standard subscription is designed for personal viewing, whereas reseller access is intended for authorised business operations and customer account management."
        />

        <CardReveal className="telvis-glass telvis-table-wrap">
          <table className="telvis-table">
            <thead>
              <tr>
                <th scope="col">Regular IPTV Subscription</th>
                <th scope="col">IPTV Reseller Panel</th>
              </tr>
            </thead>
            <CardRevealList as="tbody">
              {resellerVsSubscription.map((row) => (
                <CardRevealListItem as="tr" key={row.subscription}>
                  <td>{row.subscription}</td>
                  <td>{row.reseller}</td>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </table>
        </CardReveal>

        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            A reseller panel does not automatically provide broadcasting or
            distribution rights. Resellers must confirm that the content and
            services they offer are authorised for commercial distribution.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ResellerGrowthSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="reseller-growth-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reseller-growth-heading"
          eyebrow="Grow your business"
          title={
            <>
              How to Build and Grow Your IPTV Reseller{" "}
              <TitleAccent>Business</TitleAccent>
            </>
          }
          lead="Becoming an IPTV reseller is only the beginning. Building a sustainable business requires customer trust, clear communication, responsible marketing and organised account management. Here are some practical ways to develop your reseller operations."
          align="center"
        />
        <div className="telvis-feature-grid">
          {resellerGrowthTips.map((tip, index) => {
            const isLastOdd =
              resellerGrowthTips.length % 3 === 1 &&
              index === resellerGrowthTips.length - 1;

            return (
              <CardReveal
                key={tip.title}
                as="article"
                delay={staggerDelay(index)}
                className={`telvis-glass telvis-feature-tile${isLastOdd ? " is-span-full" : ""}`}
              >
                <CardRevealPart as="h3" className="telvis-info-title">
                  {tip.title}
                </CardRevealPart>
                <CardRevealPart as="p" className="telvis-info-body">
                  {tip.body}
                </CardRevealPart>
              </CardReveal>
            );
          })}
        </div>
        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            A useful starting point: Focus on reliable customer service, accurate
            information and responsible distribution rather than making
            unrealistic promises about earnings or business growth.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ResellerChecklistSection() {
  return (
    <section
      className="telvis-section"
      aria-labelledby="reseller-checklist-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="reseller-checklist-heading"
          eyebrow="Before you join"
          title={
            <>
              What to Check Before Choosing an IPTV Reseller{" "}
              <TitleAccent>Programme</TitleAccent>
            </>
          }
          lead="Not all reseller programmes offer the same arrangements. Before becoming an IPTV reseller, review the important details and make sure you understand what your package includes."
        />

        <CardReveal className="telvis-glass telvis-table-wrap">
          <table className="telvis-table">
            <thead>
              <tr>
                <th scope="col">What to Check</th>
                <th scope="col">Why It Matters</th>
              </tr>
            </thead>
            <CardRevealList as="tbody">
              {resellerChecklist.map((row) => (
                <CardRevealListItem as="tr" key={row.item}>
                  <th scope="row">{row.item}</th>
                  <td>{row.why}</td>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </table>
        </CardReveal>

        <ScrollReveal variant="text">
          <p className="telvis-section-note">
            Taking time to review these details can help you make a more informed
            decision and avoid misunderstandings later.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ResellerFaqSection() {
  return (
    <section
      id="reseller-faq"
      className="telvis-section telvis-section-faq"
      aria-labelledby="reseller-faq-heading"
    >
      <div className="telvis-section-inner telvis-faq-layout">
        <div className="telvis-faq-intro">
          <SectionHeader
            id="reseller-faq-heading"
            eyebrow="FAQ"
            title={
              <>
                IPTV Reseller Panel <TitleAccent>FAQs</TitleAccent>
              </>
            }
          />
        </div>
        <FaqList items={resellerFaqs} />
      </div>
    </section>
  );
}

export function ResellerFinalCta() {
  return (
    <section
      className="telvis-section telvis-final-cta"
      aria-labelledby="reseller-final-heading"
    >
      <div className="telvis-section-inner">
        <CardReveal className="telvis-glass telvis-final-panel">
          <CardRevealPart>
            <SectionHeader
              id="reseller-final-heading"
              eyebrow="Get started"
              title={
                <>
                  Ready to Become an IPTV Reseller with{" "}
                  <TitleAccent>Telvis</TitleAccent>?
                </>
              }
              lead="Take the next step towards organising your authorised IPTV reseller business. Whether you are starting with your first customers or looking for a more structured way to manage an existing operation, Telvis can help you explore the available reseller options. Contact our team to discuss Starter, Professional and Enterprise packages, understand the credit system and confirm the requirements for reseller panel access. Get in touch today and find out which reseller option matches your business requirements."
              align="center"
              animate={false}
            />
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-actions telvis-final-actions">
              <a
                href={resellerWhatsAppUrl(
                  "Hi Telvis, I would like to enquire about IPTV reseller access.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="telvis-cta-primary"
              >
                Enquire About Reseller Access
              </a>
              <Link href={routes.contact} className="telvis-cta-secondary">
                Contact Telvis Support
              </Link>
            </div>
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-section-note is-center">
            Discuss the reseller programme, packages and onboarding process. Ask
            questions about credits, panel access and account management.
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-section-note is-center">
            WhatsApp:{" "}
            <a
              href={supportConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {supportConfig.whatsapp}
            </a>
            {" · "}
            Email:{" "}
            <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

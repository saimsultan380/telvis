import Link from "next/link";
import type { ReactNode } from "react";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes, supportConfig } from "@/lib/site";

export type PolicySection = {
  title: string;
  body: readonly string[];
  list?: readonly string[];
};

type PolicyStackProps = {
  headingId: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
  sections: PolicySection[];
};

export function PolicyStack({
  headingId,
  eyebrow,
  title,
  lead,
  sections,
}: PolicyStackProps) {
  return (
    <section className="telvis-section" aria-labelledby={headingId}>
      <div className="telvis-section-inner telvis-policy-stack">
        <SectionHeader
          id={headingId}
          eyebrow={eyebrow}
          title={title}
          lead={lead}
        />

        {sections.map((section) => (
          <CardReveal
            key={section.title}
            className="telvis-glass telvis-panel"
            delay={0.04}
          >
            <CardRevealPart as="h2" className="telvis-panel-title">
              {section.title}
            </CardRevealPart>
            {section.body.map((paragraph) => (
              <CardRevealPart
                key={paragraph}
                as="p"
                className="telvis-info-body"
              >
                {paragraph}
              </CardRevealPart>
            ))}
            {section.list ? (
              <CardRevealPart>
                <ul className="telvis-check-list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardRevealPart>
            ) : null}
          </CardReveal>
        ))}

        <CardReveal className="telvis-glass telvis-panel" delay={0.08}>
          <CardRevealPart as="h2" className="telvis-panel-title">
            Contact support
          </CardRevealPart>
          <CardRevealPart as="p" className="telvis-info-body">
            Email{" "}
            <a href={`mailto:${supportConfig.email}`}>{supportConfig.email}</a>
            {" or WhatsApp "}
            <a href={supportConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              {supportConfig.whatsapp}
            </a>
            . You can also use the contact page.
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-actions">
              <Link href={routes.contact} className="telvis-cta-primary">
                Open Contact Page
              </Link>
            </div>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

export function PolicyTitle({ children }: { children: ReactNode }) {
  return <TitleAccent>{children}</TitleAccent>;
}

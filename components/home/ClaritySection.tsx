import { BadgeCheck, Scale } from "lucide-react";
import Link from "next/link";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/site";

const rows = [
  {
    matter: "Content rights and legality",
    provides:
      "IPTV delivers television over the internet. Legality depends on the rights held for the content offered. Only access content you are legally entitled to watch.",
  },
  {
    matter: "Channels and categories",
    provides:
      "Confirm which channels and content categories are available during the free trial before you subscribe.",
  },
  {
    matter: "Device and application support",
    provides:
      "Check whether your device supports the required application or a compatible IPTV player.",
  },
  {
    matter: "Simultaneous connections",
    provides:
      "Confirm how many simultaneous connections your plan allows before using the account on multiple screens.",
  },
  {
    matter: "EPG and Catch-Up",
    provides:
      "EPG and Catch-Up availability depend on the individual listings and your player.",
  },
  {
    matter: "Third-party player fees",
    provides:
      "Some third-party players require a separate purchase or activation fee that is not part of the Telvis subscription unless checkout says otherwise.",
  },
  {
    matter: "Refund and subscription terms",
    provides:
      "Read the refund policy, subscription conditions and renewal arrangements before paying.",
  },
  {
    matter: "Support if something fails",
    provides:
      "Telvis provides WhatsApp and email support for installation, login and account questions.",
  },
] as const;

export function ClaritySection() {
  return (
    <section
      id="clarity"
      className="telvis-section telvis-section-clarity"
      aria-labelledby="clarity-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="clarity-heading"
          eyebrow="Before ordering"
          title={
            <>
              IPTV UK: Important Things to Know{" "}
              <TitleAccent>Before Ordering</TitleAccent>
            </>
          }
          lead="Before purchasing an IPTV subscription, make sure you understand what the service provides and what your chosen plan includes. Taking a few minutes to check these details can help you make a better decision."
        />

        <CardReveal className="telvis-glass telvis-table-wrap">
          <table className="telvis-table">
            <thead>
              <tr>
                <th scope="col">
                  <span className="telvis-table-head">
                    <Scale size={16} aria-hidden="true" />
                    What to check
                  </span>
                </th>
                <th scope="col">
                  <span className="telvis-table-head">
                    <BadgeCheck size={16} aria-hidden="true" />
                    Why it matters
                  </span>
                </th>
              </tr>
            </thead>
            <CardRevealList as="tbody">
              {rows.map((row) => (
                <CardRevealListItem as="tr" key={row.matter}>
                  <th scope="row">{row.matter}</th>
                  <td>{row.provides}</td>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </table>
        </CardReveal>

        <CardReveal
          delay={0.1}
          className="telvis-glass telvis-panel telvis-why-panel"
        >
          <CardRevealPart variant="icon">
            <div className="telvis-panel-head">
              <GlassIcon icon={BadgeCheck} />
              <h3 className="telvis-panel-title">Why This Matters</h3>
            </div>
          </CardRevealPart>
          <CardRevealPart variant="content" as="p" className="telvis-info-body">
            Always check the provider&apos;s content rights, terms and conditions,
            and applicable UK requirements before subscribing. Test the service
            first, choose the right plan and ask support if anything is unclear.
          </CardRevealPart>
          <CardRevealPart variant="content">
            <Link href={routes.plans} className="telvis-cta-primary">
              Compare Plans and Start with a Trial
            </Link>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

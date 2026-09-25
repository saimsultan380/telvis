import Link from "next/link";
import { CardReveal, CardRevealList, CardRevealListItem, CardRevealPart } from "@/components/ui/CardReveal";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { payTvComparison } from "@/lib/marketing";
import { routes } from "@/lib/site";

export function PayTvCompareSection() {
  return (
    <section
      id="compare-pay-tv"
      className="telvis-section telvis-section-compare"
      aria-labelledby="compare-pay-tv-heading"
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id="compare-pay-tv-heading"
          eyebrow="Compare options"
          title={
            <>
              Traditional Pay TV vs{" "}
              <TitleAccent>Telvis IPTV UK</TitleAccent>
            </>
          }
          lead="UK households often compare bundled cable or satellite packages against an internet-based subscription. Telvis keeps pricing, trial access and setup steps visible before you order."
        />

        <CardReveal className="telvis-glass telvis-table-wrap">
          <table className="telvis-table telvis-table-compare">
            <thead>
              <tr>
                <th scope="col">What buyers compare</th>
                <th scope="col">Traditional UK pay TV</th>
                <th scope="col">Telvis IPTV UK</th>
              </tr>
            </thead>
            <CardRevealList as="tbody">
              {payTvComparison.map((row) => (
                <CardRevealListItem as="tr" key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td>{row.traditional}</td>
                  <td>{row.telvis}</td>
                </CardRevealListItem>
              ))}
            </CardRevealList>
          </table>
        </CardReveal>

        <CardReveal delay={0.08} className="telvis-glass telvis-panel">
          <CardRevealPart as="p" className="telvis-info-body">
            Listed catalogue totals and programme availability can change. Use the
            free trial to confirm picture quality, categories and device compatibility
            on your home connection before choosing a paid plan.
          </CardRevealPart>
          <CardRevealPart>
            <div className="telvis-inline-actions is-row">
              <Link href={routes.trial} className="telvis-cta-primary">
                Start 24-Hour Trial
              </Link>
              <Link href={routes.plans} className="telvis-cta-outline">
                View Telvis Plans
              </Link>
            </div>
          </CardRevealPart>
        </CardReveal>
      </div>
    </section>
  );
}

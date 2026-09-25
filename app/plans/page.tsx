import type { Metadata } from "next";
import Link from "next/link";
import { BlogRelatedReading } from "@/components/blog/BlogRelatedReading";
import { PlansSection } from "@/components/home/PlansSection";
import { blogSlugs } from "@/lib/blog-posts";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { TitleAccent } from "@/components/ui/SectionHeader";
import { homeProductGraph } from "@/lib/product-schema";
import { buildBreadcrumbList, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

const title = "Telvis IPTV Plans from £9.99 | 1, 3, 6 and 12 Months";
const description =
  "Compare Telvis IPTV plans from £9.99. Every plan includes the same catalogue and support. Start with a free 24-hour trial before you pay.";

export const metadata: Metadata = pageMetadata({
  path: routes.plans,
  title,
  description,
  keywords: [
    "Telvis plans",
    "IPTV plans UK",
    "IPTV 12 month price",
  ],
});

function PlansSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Plans", path: routes.plans },
      ]),
      webPageSchema({
        path: routes.plans,
        name: title,
        description,
      }),
      ...homeProductGraph(),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export default function PlansPage() {
  return (
    <>
      <PlansSchema />
      <main>
        <PageHero
          eyebrow="Pricing"
          headingId="plans-page-heading"
          titleLines={[
            <>
              Telvis IPTV Plans from{" "}
              <span className="telvis-h1-accent">£9.99</span>
            </>,
          ]}
        >
          <HeroReveal delay={0.22}>
            <div className="telvis-copy">
              <p>
                Four subscription lengths, one catalogue. Use the 24-hour trial
                on your own device first, then choose the plan that matches how
                long you want to stay.
              </p>
              <p>
                The number of screens playing at once is confirmed before
                payment. Third-party player fees are separate unless checkout
                says they are included.
              </p>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.3} variant="cta">
            <div className="telvis-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                Start Your 24-Hour Trial
              </Link>
              <Link href={routes.refund} className="telvis-cta-secondary">
                Read the Refund Policy
              </Link>
            </div>
          </HeroReveal>
        </PageHero>

        <PlansSection
          showCompareLink={false}
          title={
            <>
              Compare <TitleAccent>Plan Length</TitleAccent> and Monthly Cost
            </>
          }
          lead="Every Telvis plan includes the same listed live and on-demand catalogue, dedicated-app or Xtream Codes access, and 24/7 support. Longer plans lower the average monthly price."
        />

        <BlogRelatedReading
          id="plans-related-reading"
          heading="Compare costs before you commit"
          lead="See how Telvis plan lengths stack up against traditional UK pay TV bundles."
          slugs={[blogSlugs.payTv, blogSlugs.trial]}
        />
      </main>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InstallationGuideBefore } from "@/components/installation/InstallationGuideBefore";
import { InstallationGuideSupport } from "@/components/installation/InstallationGuideSchema";
import { GuideContent } from "@/components/installation/GuideContent";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { installationDeviceTabs } from "@/lib/installation-guide-data";
import {
  deviceGuidePath,
  getDevicePageSeo,
  getInstallationDevice,
  guideHowToSteps,
} from "@/lib/installation-guide-seo";
import { buildBreadcrumbList, canonicalUrl, pageMetadata, webPageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

type DevicePageProps = {
  params: Promise<{ device: string }>;
};

export function generateStaticParams() {
  return installationDeviceTabs.map((section) => ({ device: section.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: DevicePageProps): Promise<Metadata> {
  const { device } = await params;
  const seo = getDevicePageSeo(device);

  if (!seo) {
    return {};
  }

  return pageMetadata({
    path: deviceGuidePath(device),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    ogType: "article",
  });
}

function DeviceGuideSchema({
  device,
  title,
  description,
}: {
  device: string;
  title: string;
  description: string;
}) {
  const section = getInstallationDevice(device);
  const path = deviceGuidePath(device);
  const pageUrl = canonicalUrl(path);
  const steps = section ? guideHowToSteps(section) : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Installation Guide", path: routes.installation },
        { name: section?.label ?? "Device", path },
      ]),
      webPageSchema({
        path,
        name: title,
        description,
      }),
      ...(steps.length > 0 && section
        ? [
            {
              "@type": "HowTo",
              "@id": `${pageUrl}#howto`,
              url: pageUrl,
              name: section.title,
              description,
              step: steps.map((step, index) => ({
                "@type": "HowToStep",
                position: index + 1,
                name: step.name,
                text: step.text,
              })),
            },
          ]
        : []),
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export default async function DeviceGuidePage({ params }: DevicePageProps) {
  const { device } = await params;
  const section = getInstallationDevice(device);
  const seo = getDevicePageSeo(device);

  if (!section || !seo) {
    notFound();
  }

  const related = installationDeviceTabs.filter((item) => item.id !== device);

  return (
    <>
      <DeviceGuideSchema
        device={device}
        title={seo.title}
        description={seo.description}
      />
      <main>
        <PageHero
          eyebrow={`${section.label} setup`}
          headingId={`${device}-guide-heading`}
          titleLines={[
            <>{seo.h1Lead}</>,
            <>
              <span className="telvis-h1-accent">{seo.h1Accent}</span>
            </>,
          ]}
        >
          <HeroReveal delay={0.22}>
            <div className="telvis-copy">
              <p>{seo.description}</p>
              <p>
                Keep your welcome message nearby and enter every detail exactly as
                supplied. If a step fails, stop and contact support rather than
                installing a second player on top of the first.
              </p>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.3} variant="cta">
            <div className="telvis-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                Start Your 24-Hour Trial
              </Link>
              <Link href={routes.installation} className="telvis-cta-secondary">
                All Device Guides
              </Link>
            </div>
          </HeroReveal>
        </PageHero>

        <nav className="telvis-section telvis-guide-crumb-section" aria-label="Breadcrumb">
          <div className="telvis-section-inner">
            <p className="telvis-guide-crumb">
              <Link href={routes.home}>Home</Link>
              <span aria-hidden="true"> / </span>
              <Link href={routes.installation}>Installation Guide</Link>
              <span aria-hidden="true"> / </span>
              <span>{section.label}</span>
            </p>
          </div>
        </nav>

        <InstallationGuideBefore />

        <section className="telvis-section telvis-guide-section" aria-labelledby={`${device}-steps-heading`}>
          <div className="telvis-section-inner">
            <CardReveal
              as="article"
              className="telvis-glass telvis-guide-panel is-active"
            >
              <CardRevealPart className="telvis-guide-panel-head">
                <span className="telvis-guide-panel-eyebrow">Main setup</span>
                <h2 id={`${device}-steps-heading`} className="telvis-guide-panel-title">
                  {section.title}
                </h2>
              </CardRevealPart>
              <CardRevealPart className="telvis-guide-panel-body">
                <GuideContent blocks={section.blocks} />
              </CardRevealPart>
            </CardReveal>
          </div>
        </section>

        <section className="telvis-section" aria-labelledby="related-guides-heading">
          <div className="telvis-section-inner">
            <h2 id="related-guides-heading" className="telvis-panel-title">
              Other device guides
            </h2>
            <div className="telvis-guide-related">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={deviceGuidePath(item.id)}
                  className="telvis-guide-related-link"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <InstallationGuideSupport />
      </main>
    </>
  );
}

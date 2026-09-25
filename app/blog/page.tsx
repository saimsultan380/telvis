import type { Metadata } from "next";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { blogPosts } from "@/lib/blog-posts";
import {
  buildBreadcrumbList,
  canonicalUrl,
  pageMetadata,
  webPageSchema,
} from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";
import { staggerDelay } from "@/lib/motion";

const title = "Telvis Blog | IPTV UK Guides, Trials and Setup Tips";
const description =
  "Telvis blog: IPTV UK free trial checklists, Firestick setup guides and pay TV cost comparisons. Practical advice that leads to a safer purchase.";

export const metadata: Metadata = pageMetadata({
  path: routes.blog,
  title,
  description,
  keywords: [
    "IPTV UK blog",
    "IPTV Firestick guide",
    "IPTV UK free trial",
    "Telvis IPTV",
  ],
});

function BlogIndexSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Blog", path: routes.blog },
      ]),
      webPageSchema({
        path: routes.blog,
        name: title,
        description,
      }),
      {
        "@type": "Blog",
        "@id": `${siteConfig.url.replace(/\/$/, "")}${routes.blog}#blog`,
        url: `${siteConfig.url.replace(/\/$/, "")}${routes.blog}/`,
        name: "Telvis Blog",
        description,
        publisher: { "@id": `${canonicalUrl("/")}#organization` },
        blogPost: blogPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: `${siteConfig.url.replace(/\/$/, "")}/blog/${post.slug}/`,
          datePublished: post.datePublished,
        })),
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );

  return (
    <>
      <BlogIndexSchema />
      <main>
        <PageHero
          eyebrow="Telvis Blog"
          headingId="blog-heading"
          titleLines={[
            <>
              IPTV UK <span className="telvis-h1-accent">Guides</span> That Help
            </>,
            <>You Buy With Confidence</>,
          ]}
        >
          <HeroReveal delay={0.22}>
            <div className="telvis-copy">
              <p>
                Practical articles on free trials, Firestick setup and UK pricing —
                written to answer real search queries and point you to Telvis trials,
                plans and device guides when you are ready.
              </p>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.3} variant="cta">
            <div className="telvis-actions">
              <Link href={routes.trial} className="telvis-cta-primary">
                Start 24-Hour Trial
              </Link>
              <Link href={routes.iptvUk} className="telvis-cta-secondary">
                Telvis IPTV UK
              </Link>
            </div>
          </HeroReveal>
        </PageHero>

        <section className="telvis-section" aria-labelledby="blog-list-heading">
          <div className="telvis-section-inner">
            <SectionHeader
              id="blog-list-heading"
              eyebrow="Latest articles"
              title={
                <>
                  Latest <TitleAccent>IPTV UK</TitleAccent> Articles
                </>
              }
              lead="Each post targets a specific buyer question and links to the right Telvis page when you want to take action."
            />
            <div className="telvis-blog-grid">
              {sorted.map((post, index) => (
                <BlogCard key={post.slug} post={post} delay={staggerDelay(index, 0.06)} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

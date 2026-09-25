import type { ReactNode } from "react";
import Link from "next/link";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { getBlogPostsBySlugs } from "@/lib/blog-posts";
import { staggerDelay } from "@/lib/motion";
import { routes } from "@/lib/site";

type BlogSpotlightSectionProps = {
  id?: string;
  slugs?: readonly string[];
  eyebrow?: string;
  title?: ReactNode;
  lead?: string;
};

const defaultSlugs = [
  "iptv-uk-free-trial-what-to-test-24-hours",
  "install-iptv-on-firestick-uk-guide",
  "iptv-uk-vs-pay-tv-costs-uk-households",
] as const;

export function BlogSpotlightSection({
  id = "blog-spotlight-heading",
  slugs = defaultSlugs,
  eyebrow = "Guides",
  title = (
    <>
      Latest <TitleAccent>IPTV UK</TitleAccent> Articles
    </>
  ),
  lead = "Long-form guides that answer common UK search queries and link straight to trials, plans and setup pages when you are ready.",
}: BlogSpotlightSectionProps) {
  const posts = getBlogPostsBySlugs(slugs);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="telvis-section telvis-section-blog-spotlight" aria-labelledby={id}>
      <div className="telvis-section-inner">
        <SectionHeader id={id} eyebrow={eyebrow} title={title} lead={lead} />
        <div className="telvis-blog-grid">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} delay={staggerDelay(index, 0.06)} />
          ))}
        </div>
        <p className="telvis-blog-spotlight-more">
          <Link href={routes.blog} className="telvis-guide-device-link">
            View all Telvis blog articles
          </Link>
        </p>
      </div>
    </section>
  );
}
